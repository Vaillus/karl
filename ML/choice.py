#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Apr  9 14:42:10 2018

@author: hugo
"""
import json
import outfit
import testConnection
from bson import ObjectId


class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)


def makeDecision(myoutfit, decision):
    decision = True

    cursor = testConnection.getDataBase()

    myoutfit = outfit.getOutfit(cursor)
    data = {}
    idc = 0
    for clothe in myoutfit:
        data['idc'+str(idc)] = clothe['_id']
        idc = idc + 1

    data['decision'] = decision
    print(data)
    json_data = JSONEncoder().encode(data)
    print(json_data)


#makeDecision()