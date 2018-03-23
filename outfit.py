#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Mar 19 12:40:27 2018

@author: hugo
"""
from random import randint
import OfWeather
import numpy as np

#takes a dataset of clothes and send a subset of chosen clothes according to their categories
def getOutfit(db, outfit = list(), categories = [], bpNeeded = [], undesired = list(),):
    bpCnt = 0;
    if len(outfit):
        if len(categories):
            if(len(bpNeeded)):
                #if outfit, categories and bodyparts needed are specified
                for category in categories:
                    clothes = np.array(getClothesbyCat(db,category))
                    bpCnts = np.array()
                    for cloth in clothes:
                        bpCnt = 0;
                        for bp in cloth['bodyparts']:
                            if bp in bpNeeded:
                                bpCnt = bpCnt + 1;
                    # add the current count to the list of counts
                    np.append(bpCnts, bpCnt)
                    # find the outfits with the largest amount of body parts matches
                    outfit.append(getRandClothe(clothes[np.argwhere(bpCnts == max(bpCnts))]))
                outfit.append(cloth[best])
    if not categories and not outfit:
        categories = ['pants','tshirt','jacket']
        
    db = OfWeather.clothesWeather(db,9,"cloudy")
    for cat in clothesCat:
        outfit.append(getRandClothebyCat(db,cat))
    return outfit

#takes a clothes dataset and a clothe category, sends back all the clothes of this category
def getClothesbyCat(db, cat):
    clothes = list();
    for i in range(1, len(db)):
        if (db[i]['category'] == cat):
            clothes.append(db[i])
    return clothes

#takes a clothes dataset and a clothe category, and returns a single clothe of this category
def getRandClothebyCat(db, cat):
    clothes = getClothesbyCat(db, cat)
    clothe = clothes[randint(0, len(clothes)-1)]
    return clothe
    