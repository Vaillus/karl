#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Mar 20 16:14:05 2018

@author: hugo
"""
from Naked.toolshed.shell import muterun_js
import json


<<<<<<< HEAD
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
=======
#function that takes climate, temperature and clothes as argument, and returns appropriate clothes
def clothesWeather(clothes, temp, clim):
    newClothes = list()
    for cloth in clothes:
        #add the fundamental clothes
        #if cloth['category'] = "tshirt":
        #   newClothes.append(cloth)

        if temp > 23:
            if cloth['temperature'] < 5:
                newClothes.append(cloth)
        elif temp < 10:
            if cloth['category'] != "short":
                newClothes.append(cloth)
        else:
            newClothes.append(cloth)

    return newClothes

