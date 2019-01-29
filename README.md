# Event Management DCT Academy 
# Document for deployment of React + Node App in Heroku 
Event Managemnent in academy like organizing events, manage events and registration for events will be done through this application.

# Prerequisites
You need to sign up for a Heroku account if you don't already have one, and install the Heroku and go through the heroku git commands.

# Deploy to Heroku
To deploy:
## create new app in heroku and get clone of it to your local.
## Inside the repo directory add your node + express folders except node_modules.
## Create a folder 'react' for front-end part add react folder inside it.
# Inside node+express folder
## Some changes to be made inside index.js or your server.js file

Note: Check the path as your folder structure.
```javascript
 const path = require('path');
 app.use(express.static(path.join(__dirname, '../app/react/build')));

 app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/react/build/index.html'));
 });
```
## Node package.json
 Inside the script object
 ```javascript
  "heroku-postbuild": "cd app/react/ && npm install && npm run build"
 ```
# Inside react folder package.json file

## After the scripts add the code 
```javascript
"proxy": "http://localhost:5000"
```
## run git commands
### git add .
### git commit -m "message"
### git push heroku master

Simultaneously deploy the frontend + backend to Heroku.


