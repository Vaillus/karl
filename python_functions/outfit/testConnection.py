#  import json
import outfit
import pymongo
import sys

sys.path.append("../")
import re


#  To make the following line work, make sure that mongod is running on your computer.
#  To do so, install mongoDB and run the command: 'sudo service mongod start'

# returns the dataBase. Not to be used on the long term

def connect_database():
    file = open("/home/hugo/Documents/karl/python_functions/Outfit/donnéesSecrètes.txt")
    secretData = re.sub('\\n', '', file.read())

    client = pymongo.MongoClient(secretData)
    db = client.karl

    return db


def get_clothes_database():
    """

    :return: clothes database
    """
    db = connect_database()
    collection = db.cloths
    clothes = list(collection.find({}))

    return clothes


def insert_document_in_collection(document,collection):
    """

    :param document: document to insert
    :param collection: name of the collection where to insert tuple
    :return:
    """
    db = connect_database()
    collection = db[collection]
    print(collection.find()[0].keys())
    post_id = collection.insert_one(document).inserted_id


clothes = get_clothes_database()

myOutfit = outfit.get_outfit(clothes)

