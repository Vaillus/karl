#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Mar 20 16:14:05 2018

@author: hugo
"""
from Naked.toolshed.shell import muterun_js
import json


#function that takes climate, temperature and clothes as argument, and returns appropriate clothes 
def clothesWeather(weather):
    selectedClothes = list()
    if weather['temp'] < 5:
        print(selectedClothes)
        #appel bdd (where temp > 2 and category !=  short)
    if weather['temp'] > 23:
        print(selectedClothes)
        #appel bdd (where temp < 8 and category !=  hoodie)
                        
    return selectedClothes

def outfitWeather(clothes, temp, clim):
    clothes = clothesWeather(clothes, temp, clim)
            
def getClothesCold():
    clothes = muterun_js('getClothes_cold.js')
    selectedClothes = json.loads(clothes.stdout)
    return selectedClothes