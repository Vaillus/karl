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
def getOutfit(db, outfit = list(), categories = [], bpNeeded = [], undesired = list()):
	bpCnt = 0;
	if len(outfit):
		if len(categories):
			if(len(bpNeeded)):
				"""if outfit, categories and bodyparts needed are specified"""
				for category in categories:
					clothes = np.array(getClothesbyCat(db,category))
					bpCnts = np.array()
					for clothe in clothes:
						bpCnt = countBP(bpNeeded, clothe['bodyparts'])
						# add the current count to the list of counts
						np.append(bpCnts, bpCnt)
						# add a random clothe that fits the best the body parts specified in the category
					outfit.append(getRandClothe(clothes[np.argwhere(bpCnts == max(bpCnts))]))
			else:
				"""if only outfit and categories are specified"""
				for cat in categories:
					outfit.append(getRandClothe(db,cat))
		else:
			if(len(bpNeeded)):
				"""if the outfit and bodyparts needed are specified"""

			else:
				"""if only the outfit is specified"""
				categories = [['pants','tshirt','jacket'],[True, True, True]]
				for clothe in outfit:
					if 4 in clothe['bodyparts']:
						categories[1][0] = False
					if 2 in clothe['bodyparts']:
						categories[1][1] = False
					if 6 in clothe['bodyparts'] and 9 in clothe['bodyparts']:
						categories[1][2] = False
				for i in range(0,3):
					if categories[1][i]:
						outfit.append(getRandClothe(db,categories[0][i]))
	else:
		if len(categories):
			if(len(bpNeeded)):
				"""if categories and bodyparts needed are specified but no outfit"""
				for category in categories:
					clothes = np.array(getClothesbyCat(db,category))
					bpCnts = np.array()
					for clothe in clothes:
						bpCnt = 0;
						for bp in clothe['bodyparts']:
							if bp in bpNeeded:
								bpCnt = bpCnt + 1;
								# add the current count to the list of counts
								np.append(bpCnts, bpCnt)
								# add a random clothe that fits the best the body parts specified in the category
								outfit.append(getRandClothe(clothes[np.argwhere(bpCnts == max(bpCnts))]))

	if not categories and not outfit:
		categories = ['pants','tshirt','jacket']

	db = OfWeather.clothesWeather(db, 9, "cloudy")
	for cat in categories:
		outfit.append(getRandClothe(db,cat))
	return outfit


#takes a clothes dataset and a clothe category, sends back all the clothes of this category
def getClothesbyCat(db, cat):
    clothes = list();
    for i in range(0, len(db)-1):
        if (db[i]['category'] == cat):
            clothes.append(db[i])
    return clothes


#takes a clothes dataset and a clothe category, and returns a single clothe of this category
def getRandClothe(db, cat = []):
	if len(cat):
		clothes = getClothesbyCat(db, cat)
		clothe = clothes[randint(0, len(clothes)-1)]
	else:
		clothe = db[randint(0, len(db) - 1)]
	return clothe


#takes a clothes dataset and a clothes bodyparts, and returns clothes that cover these bodyparts
def getClothesbyBP(db, bodyParts):
	clothes =list()
	for i in range(0,len(db)-1):
		if (matchBP(db[i]['bodyparts'],bodyParts)):
			clothes.append(db[i])
	return clothes


#check if there is a match between two sets of bodyparts
def matchBP(bp1, bp2):
	for i in bp1:
		for j in bp2:
			if (i == j):
				return True
	return False

#return the number of bodyparts needed that are in the bodyparts set 'bpComp'
def countBP(bpNeeded, bpComp):
	cnt = 0
	for bp in bpNeeded:
		if bp in bpComp:
			cnt = cnt + 1
	return cnt

def getBestClotheBP(db, bpNeeded):
	score = np.array()
	for i in range(0,len(db)-1):
		score.append(countBP(db[i]['bodyparts'],bpNeeded))
	return getRandClothe(db[np.argwhere(score == max(score))])