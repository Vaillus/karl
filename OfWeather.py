#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Mar 20 16:14:05 2018

@author: hugo
"""

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

def outfitWeather(clothes, temp, clim):
    clothes = clothesWeather(clothes, temp, clim)
    
    if temp < 10:
        
    