# JSBN
JSBN is a bot client which interprets commands through Twitter, requiring no hosting of servers or infected hosts from the command issuer. It is written purely in javascript as a Proof-of-Concept for javascript's botnet potentials. In the code given, if the user, "somefakenotrealuserherewhodoesn'texistandneverwill" were to tweet the following, everything beforte the \# would be executed faithfully by all clients running this script: ![Command][cmd]


[cmd]: http://i.gyazo.com/cef8932503c461f4c2d9e494b2c2544c.png

#Disclaimer
**PLEASE** don't use this for shady activities, it's meant only as a research project.

#Installation
Simply clone this project into a local directory, and reference 'client.js' in an html file after making the following modifications:
* Line one should be changed to whatever \# you want, but all tweets must contain it, and popular hashtags have the potential to lose tweets in the flood.
* Line three should be modified to reflect your username. For instance, with my twitter, I would insert "/Plazmaz1"
That's about it! All you need to do to test this script is have it running in a browser window, and you can tweet away!

#So What?
You may be asking, "Couldn't you execute these commands anyways?", Theoretically, yes, but the centralization of command on someone *else's* servers, in this case, Twitter, allows for an attacker to control bots in real time with a background XSS script. This allows for bots to be repurposed and modified dynamically. Not only could an attacker serve several payloads to any given user in psuedo-real time, but they can coordinate large scale attacks, such as DDoS using websockets or HTTP requests, or even fuzzing other websites for XSS vulnerabilities. Essentially, the implications of the JavaScript botnet are that attackers can remain completely anonymous, using only existing services, and control a large number of computers in sequence. The thought of this sort of XSS payload propigating is somewhat horrifying.
