import sys
<<<<<<< HEAD
import var_static
import create_outfits.Outfit.outfit as outfit
sys.path.remove('/home/benoit/Sensego/Missions/user_profile')
sys.path.append(var_static.DATABASE)
print(sys.path)
if __name__ == '__main__':
    a = 2
    file = open("clothes.json")
    outfit.get_outfit()

=======
import variables
sys.path.append(variables.DATABASE)
import python_functions.Outfit.outfit as outfit


if __name__ == '__main__':
    file = open("{}data.json".format(variables.DATABASE))
    outfit.get_outfit()
>>>>>>> 155bd2d99c9eea6953f55af6f39cbeb7131404c6
