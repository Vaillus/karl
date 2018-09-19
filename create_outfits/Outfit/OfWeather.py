#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Mar 20 16:14:05 2018

@author: hugo
"""

def clothesWeather(clothes, temp, clim):
    """
    function that takes climate, temperature and clothes as argument, and returns appropriate clothes
    :param clothes: clothes collection
    :param temp: actual temperature
    :param clim: actual climate
    :return: clothes that matches the climate and the temperature
    """
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

