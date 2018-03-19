#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Mar 19 12:40:27 2018

@author: hugo
"""
from random import randint

#
def getOutfit(db):
    outfit = list();
    clothesCat = ['socks','shoes','underwear','pants','tshirt','jacket']
    
    for cat in clothesCat:
        outfit.append(getRandClothebyCat(db,cat))
    return outfit

def getClothesbyCat(db, cat):
    clothes = list();
    for i in range(1, len(db)):
        if (db[i]['category'] == cat):
            clothes.append(db[i])
    return clothes

def getRandClothebyCat(db, cat):
    clothes = getClothesbyCat(db, cat);
    clothe = clothes[randint(0, len(clothes)-1)]
    return clothe
    