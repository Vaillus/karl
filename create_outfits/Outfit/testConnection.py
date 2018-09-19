#  import json
import outfit
import pymongo
import re

#  To make the following line work, make sure that mongod is running on your computer.
#  To do so, install mongoDB and run the command: 'sudo service mongod start'

#returns the dataBase. Not to be used on the long term
def getDataBase():
	"""

	:return: clothes database
	"""
	file = open("donnéesSecrètes.txt")
	secretData = re.sub('\\n', '', file.read())

	client = pymongo.MongoClient(secretData)
	db = client.karl
	collection = db.cloths
	print(collection.find()[0])
	clothes = list(collection.find({}))
	return clothes

#with open('clothes.json') as json_data:
#    clothes = json.load(json_data)

clothes = getDataBase()
#print(clothes)

myOutfit = outfit.getOutfit(clothes)
#outfit.printClothesNames(myOutfit)
myOutfit = outfit.getOutfit(db=clothes, outfit=myOutfit, bpNeeded=[1])
#outfit.printClothesNames(myOutfit)
