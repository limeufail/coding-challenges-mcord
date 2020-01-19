# NewsFeedApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8 and uses Express 4.17.1.

# DISCLAIMER
All testing were done in localhost only (both client and server). Im currently busy in office so I have to to do this solution during weekends.

# How to install 

1. clone this repo @ https://github.com/limeufail/coding-challenges-mcord
2. on your local execute the following;
  - cd to your cloned repo
  - git checkout newsfeed/server (to change to the correct branch)
  - npm i
  - npm run dev (this will run on localhost port 4300)
  - you can now test using postman. available endpoints below;
    * http://localhost:4300/api/news/sources
    * http://localhost:4300/api/news/2/techcrunch

# FEATURES
- This app connects to https://newsapi.org/ using Everything() method with category 'technology' and country 'US'.
- This app supports pagination to be called on-demand in client side.

# NOTES
- Im using Allow CORS: Access-Control-Allow-Origin (https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en) to bypass CORS policy in localhost