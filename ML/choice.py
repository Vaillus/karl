#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Apr  9 14:42:10 2018

@author: hugo
"""
import json
import pymongo
import outfit
from bson import ObjectId

class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)
    
def makeDecision():
    decision = True
    client = pymongo.MongoClient('mongodb://BenoitLeguay:karlos2018@ds139459.mlab.com:39459/karl')
    db = client.karl
    collection = db.clothes
    cursor = list(collection.find({}))
    myoutfit = outfit.getOutfit(cursor)
    
    data = {}
    clothes = {}
    idc = 0
    for clothe in myoutfit:
        clothes['idc'+str(idc)] = clothe['_id']
        idc = idc + 1
        
    data['decision'] = decision
    data['clothes'] = clothes
    print(data)
    
    
makeDecision()