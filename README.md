# NewsFeedApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8 and uses the following core.
- angular 8
- angular material
- angular pwa
- angular service worker

# DISCLAIMER
All testing were done in localhost only (both client and server). Im currently busy in office so I have to to do this solution during weekends.

# How to install 

1. clone this repo @ https://github.com/limeufail/moscord-coding-challenges/tree/newsfeed/server
2. on your local execute the following;
  - cd to your cloned repo
  - npm i
  - npm run build
  - http-server -p 8080 -c-1 /dist/news-feed-app/
  - you can now test in browser via http://localhost:4200;

# FEATURES
- Connects to https://localhost:4300/api endpoint.
- Supports offline mode.
- Uses material design

# EXCLUDED
- responsive design (but offline mode can work both in mobile and desktop)

# NOTES
- Im using Allow CORS: Access-Control-Allow-Origin (https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en) to bypass CORS policy in localhost
