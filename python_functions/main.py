import sys
import python_functions.variables as variables
import python_functions.Outfit.outfit as outfit
print(variables.DATABASE)
sys.path.append(variables.DATABASE)
print(sys.path)
if __name__ == '__main__':
    file = open("{}clothes.json".format(variables.DATABASE))
    outfit.get_outfit()
