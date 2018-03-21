import sys
sys.path.append('/home/benoit/Documents/PPE/karl/Calendar')
sys.path.append('/home/benoit/Documents/PPE/karl/Weather')


import weatherapi
import calendarapi
    
upcomingweather = weatherapi.weatherapi(615702)
upcomingevents = calendarapi.calendarapi(1)

print(upcomingweather)
print(upcomingevents)
