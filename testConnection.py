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
#users = open('users.json')
#print(users[0]);
#outfit = outfit.getOutfit(clothes)
#socks = outfit.getClothesbyCat(d, 'socks')

#for i in range(0, len(outfit)):
#    print(outfit[i])
newClothes = list()
for i in range(1, len(clothes)-1):
	newClothes.append(clothes[i])
#for i in range(0, len(clothes)-1):
#	if (clothes[i]['category'] == "jacket" or clothes[i]['category'] == "pants" or clothes[i]['category'] == "tshirt" or clothes[i]['category'] == "hoodie" or clothes[i]['category'] == "long sleeves tshirt" or clothes[i]['category'] == "sweater" or clothes[i]['category'] == "short"):
#		print(newClothes[i]['name'])

print(newClothes[0])
myOutfit = outfit.getOutfit(newClothes)
print(myOutfit)
myOutfit = outfit.getOutfit(db=newClothes, outfit=myOutfit, bpNeeded=[1])
print(myOutfit)