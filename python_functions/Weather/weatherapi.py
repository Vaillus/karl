#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Mar 19 19:40:00 2018

@author: benoit
"""
from Naked.toolshed.shell import muterun_js
import json
import pandas as pd
'''
Take an WOEID code and return temperature and climate
'''
def getweather(woeid):
    str(woeid)
    df = pd.read_excel('Weather/Climate.xlsx', sheetname=0)
    cloudy = df.loc[:, ['ctype', 'cintensity']].dropna(how = 'all')
    rainy = df.loc[:, ['rtype', 'rintensity']].dropna(how = 'all')
    sunny = df.loc[:, ['stype', 'sintensity']].dropna(how = 'all')
        
            
    weather = muterun_js('Weather/api_weather_test_3.js', '615702')
    weatherapi = json.loads(weather.stdout)
    
    print(weatherapi['climate'].lower())
    if weatherapi['climate'].lower() in cloudy['ctype'].tolist():
        weatherapi['climatetype'] = 'cloudy'
    if weatherapi['climate'].lower() in rainy['rtype'].tolist():
        weatherapi['climatetype'] = 'rainy'
    if weatherapi['climate'].lower() in sunny['stype'].tolist():
        weatherapi['climatetype'] = 'sunny'
    return weatherapi
    