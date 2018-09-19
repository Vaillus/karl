import sys
import variables
import python_functions.Outfit.outfit as outfit
sys.path.remove('/home/benoit/Sensego/Missions/user_profile')
sys.path.append(var_static.DATABASE)
print(sys.path)
if __name__ == '__main__':
    a = 2
    file = open("clothes.json")
    outfit.get_outfit()

