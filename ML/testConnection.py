#import json
import outfit
import pymongo
import re

#To make the following line work, make sure that mongod is running on your computer.
#To do so, install mongoDB and run the command: 'sudo service mongod start'

#returns the dataBase. Not to be used on the long term
def getDataBase():
	file = open("donnéesSecrètes.txt")
	secretData = re.sub('\\n', '', file.read())

	client = pymongo.MongoClient(secretData)
	db = client.karl
	collection = db.clothes

	clothes = list(collection.find({}))

	return clothes

#with open('clothes.json') as json_data:
#    clothes = json.load(json_data)

clothes = getDataBase()

newClothes = list()
for i in range(1, len(clothes)-1):
	newClothes.append(clothes[i])

print(newClothes[0])
myOutfit = outfit.getOutfit(newClothes)
print(myOutfit)
myOutfit = outfit.getOutfit(db=newClothes, outfit=myOutfit, bpNeeded=[1])
print(myOutfit)
