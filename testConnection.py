import json
import outfit

#To make the following line work, make sure that mongod is running on your computer.
#To do so, install mongoDB and run the command: 'sudo service mongod start'
#client = MongoClient('localhost', 27017)
#db = client.karl
#collection = db.clothes

with open('clothes.json') as json_data:
    clothes = json.load(json_data)

#with open('users.json') as json_data:
 #   users = json.load(json_data)
users = open('users.json')
print(users[0]);
outfit = outfit.getOutfit(d)
#socks = outfit.getClothesbyCat(d, 'socks')
for i in range(0, len(outfit)):
    print(outfit[i]['name'])