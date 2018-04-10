#import json
import outfit

import pymongo

#To make the following line work, make sure that mongod is running on your computer.
#To do so, install mongoDB and run the command: 'sudo service mongod start'

client = pymongo.MongoClient('mongodb://BenoitLeguay:karlos2018@ds139459.mlab.com:39459/karl')
db = client.karl
collection = db.clothes
print(collection.find()[0])
#with open('clothes.json') as json_data:
#    clothes = json.load(json_data)


newClothes = list()
for i in range(1, len(collection)-1):
	newClothes.append(collection[i])

print(newClothes[0])
myOutfit = outfit.getOutfit(newClothes)
print(myOutfit)
myOutfit = outfit.getOutfit(db=newClothes, outfit=myOutfit, bpNeeded=[1])
print(myOutfit)