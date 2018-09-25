#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Apr 11 15:59:00 2018

@author: benoit
This script is called from the server (get request)
It takes an argv: the entire database and return (by printing) the outfit generated using getOutfit function from outfit import
""" 


import sys, json
import 
sys.path.append('')
def return_outfit():
    arg2 = sys.argv[2]
    clothes = json.loads(arg2)
    myoutfit_unjsoned = outfit.getOutfit(clothes["clothes"])
    myoutfit = {"clothes" : myoutfit_unjsoned}
    return clothes
    
if __name__ == "__main__":
    
    functions = {'return_outfit': return_outfit}
    res_json = functions[sys.argv[1]]()
    print(res_json)
    sys.stdout.flush()  
    
