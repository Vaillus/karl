#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Apr 11 15:59:00 2018

@author: benoit
This script is called from the server (get request)
It takes an argv: the entire database and return (by printing) the outfit generated using getOutfit function from outfit import
"""

import sys
from os.path import dirname, abspath
pathToOutfit = dirname(dirname(dirname(abspath(__file__))))
sys.path.append(pathToOutfit+'/ML')

import json
import outfit
myClothes = json.loads(sys.argv[1])
myoutfittmp = outfit.getOutfit(myClothes["clothes"])
myoutfit = {"clothes" : myoutfittmp}
print(myoutfit)

