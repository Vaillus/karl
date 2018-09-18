#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Mar 19 19:46:40 2018

@author: benoit
"""
from Naked.toolshed.shell import muterun_js

'''
Take the client id code and return the upcomings events
'''
def getcalendar(id):
    calendar = muterun_js('Calendar/quickstart.js')
    calendarapi = calendar.stdout.decode("utf-8")
    return calendarapi

