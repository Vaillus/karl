from pymongo import MongoClient
#import pprint
import json
import outfit
<<<<<<< HEAD

=======
>>>>>>> 76c98e3a732d6d4780a3138abfe84688d7676751

#To make the following line work, make sure that mongod is running on your computer.
#To do so, install mongoDB and run the command: 'sudo service mongod start'
#client = MongoClient('localhost', 27017)
#db = client.karl
#collection = db.clothes
<<<<<<< HEAD


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
=======

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
>>>>>>> 76c98e3a732d6d4780a3138abfe84688d7676751
