#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Apr  9 14:42:10 2018

@author: benoit
"""

import sys
import json
import outfit
import testConnection
from bson import ObjectId



class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)


def make_decision(decision):

    cursor = testConnection.get_clothes_database()
    myoutfit = outfit.get_outfit(cursor)

    data = {}
    clothes = {}

    for idc, clothe in enumerate(myoutfit):
        data['idc'+str(idc)] = clothe['_id']

    data['decision'] = decision

    print(data.keys())

    return data


def query_yes_no(question, default="yes"):

    """
    Ask a yes/no question via raw_input() and return their answer.
    "question" is a string that is presented to the user.
    "default" is the presumed answer if the user just hits <Enter>.
    It must be "yes" (the default), "no" or None (meaning
    an answer is required of the user).
    The "answer" return value is True for "yes" or False for "no".
    :param question:
    :param default:
    :return: True for "yes" or False for "no"
    """
    valid = {"yes": True, "y": True, "ye": True,
             "no": False, "n": False}
    if default is None:
        prompt = " [y/n] "
    elif default == "yes":
        prompt = " [Y/n] "
    elif default == "no":
        prompt = " [y/N] "
    else:
        raise ValueError("invalid default answer: '%s'" % default)

    while True:
        sys.stdout.write(question + prompt)
        choice = input().lower()
        if default is not None and choice == '':
            return valid[default]
        elif choice in valid:
            return valid[choice]
        else:
            sys.stdout.write("Please respond with 'yes' or 'no' "
                             "(or 'y' or 'n').\n")


def generate_bayes(db):
    clothes = outfit.get_outfit(db)
    for cloth in clothes:
        print(cloth['name'])
    choice = query_yes_no("Aimez-vous cet outfit?")

    print(make_decision(choice))
    testConnection.insert_document_in_collection(make_decision(choice),"decision")
    return True

generate_bayes(testConnection.get_clothes_database())
