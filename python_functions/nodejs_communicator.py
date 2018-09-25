import sys
import json
import variables
sys.path.append("{}/Outfit".format(variables.PATH))
import outfit


def return_outfit():
    arg2 = sys.argv[2]
    clothes = json.loads(arg2)
    myoutfit_unjsoned = outfit.getOutfit(clothes["clothes"])
    myoutfit = {"clothes": myoutfit_unjsoned}
    return myoutfit


if __name__ == "__main__":
    functions = {'return_outfit': return_outfit}
    res_json = functions[sys.argv[1]]()
    print(res_json)
    sys.stdout.flush()

