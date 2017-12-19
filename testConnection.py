#python -m pip install pymongo
import pymongo
from pymongo import MongoClient
import pprint

#To make the following line work, make sure that mongod is running on your computer.
#To do so, install mongoDB and run the command: 'sudo service mongod start'
client = MongoClient('localhost', 27017)
db = client.karl
collection = db.clothes
pprint.pprint(collection.find()[2])

for i in range(0, 30):
	pprint.pprint(collection.find()[i])
