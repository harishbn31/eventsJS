# Event Management DCT Academy 
## Document for deployment of React + Node App in Heroku 
Event Managemnent in academy like organizing events, manage events and registration for events will be done through this application.

## Prerequisites
You need to sign up for a Heroku account if you don't already have one, and install the Heroku and go through the heroku git commands.

## Deploy to Heroku
To deploy:
create new app in heroku and get clone of it to your local.
Inside the repo directory add your node + express folders except node_modules.
Create a folder 'react' for front-end part add react folder inside it.
## Inside node+express folder
#### For node+mongo+express set up in heroku https://github.com/dctacademy/heroku-mongo-node
Some changes to be made inside index.js or your server.js file

Note: 
  1. run this command before assigning the path 
  ```cd react_folder && npm install && npm run build```
  2. Check the path as your folder structure.
```javascript
 const path = require('path');
 app.use(express.static(path.join(__dirname, '../your_react_app_folder/build')));

 app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/your_react_app_folder/index.html'));
 });
```
## Node package.json
 Inside the script object
 ```javascript
  "heroku-postbuild": "cd your_react_app_folder && npm install && npm run build"
 ```
## Inside react folder package.json file

### After the scripts add the code 
```javascript
"proxy": "http://localhost:5000"
```
#### In axios call insted of using http://localhost:5000/ use '/'.
Example: http://localhost:5000/events use '/events' 
### run git commands
```git
git add .
git commit -m "message"
git push heroku master
```
Simultaneously deploy the frontend + backend to Heroku.


