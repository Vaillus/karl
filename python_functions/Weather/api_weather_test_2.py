import urllib2, urllib, json
baseurl = "https://query.yahooapis.com/v1/public/yql?"
yql_query = "select * from weather.forecast where woeid=615702 and u='c'"
yql_url = baseurl + urllib.urlencode({'q':yql_query}) + "&format=json"
result = urllib2.urlopen(yql_url).read()
data = json.loads(result)


#print json.dumps(data, indent=4, sort_keys=True)
print data['query']['results']['channel']['item']['condition']['temp']
print data['query']['results']['channel']['item']['condition']['text']

