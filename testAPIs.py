import sys
sys.path.append('/home/benoit/Documents/PPE/karl/Calendar')
sys.path.append('/home/benoit/Documents/PPE/karl/Weather')

import OfWeather
import weatherapi
import calendarapi
    
upcomingweather = weatherapi.getweather(615702)
upcomingevents = calendarapi.getcalendar(1)

print(upcomingweather)
print(upcomingevents)
    
clothes = OfWeather.getClothesCold()
print(clothes)