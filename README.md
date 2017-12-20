Pour faire marcher tout ca, vous allez avoir besoin de:
- installer mongodb sur linux
- importer la bdd stockée dans le fichier .json
  - mongoimport --jsonArray --db karl --collection clothes --file clothesPopulation.json
  - je sais pas si la commande marche si on n'a pas préalablement créé la db 'karl' dans laquelle on a créé la collection 'clothes'
  - le faire si ca ne marche pas
- lancer le fichier .py apres avoir installé les packages spécifiés dans ce dernier (en commentaire)

