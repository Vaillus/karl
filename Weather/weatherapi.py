#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Mar 19 19:40:00 2018

@author: benoit
"""
from Naked.toolshed.shell import muterun_js
import json

'''
Take an WOEID code and return temperature and climate
'''
def weatherapi(woeid):
    str(woeid)
    weather = muterun_js('Weather/api_weather_test_3.js', '615702')
    weatherapi = json.loads(weather.stdout)
    return weatherapi
