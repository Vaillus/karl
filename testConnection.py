from pymongo import MongoClient
#import pprint
import json
import outfit

#To make the following line work, make sure that mongod is running on your computer.
#To do so, install mongoDB and run the command: 'sudo service mongod start'
#client = MongoClient('localhost', 27017)
#db = client.karl
#collection = db.clothes


#for i in range(0, 30):
#	pprint.pprint(collection.find({'category':'tshirt'})[i])
#data = json.load(open('clothes.json','r'))
#pprint(data)
with open('clothes.json') as json_data:
    d = json.load(json_data)

outfit = outfit.getOutfit(d)
#socks = outfit.getClothesbyCat(d, 'socks')
for i in range(0, len(outfit)):
    print(outfit[i]['name'])
