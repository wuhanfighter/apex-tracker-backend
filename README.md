# Apex Tracker
Lets you track your Apex Legend game account career statistics. 
### Backend Usage

This project requires runtime environment and utilized API below
  - [TrackerGG](https://fixer.io/)
  - [NodeJs](https://nodejs.org/en/)
  
Install the dependencies and run the backend.
```sh
$ npm install
$ npm run start
```

Create an .env file at root project directory and apply following parameter.\
**Note**: Leave ```CORS_ORIGIN``` blank if you don't utilized frontend framework.
```
PORT = 
NODE_ENV = 
TRACKER_API_URL = 
TRACKER_API_KEY = 
CORS_ORIGIN = 
```

Search your desire game account career statistics by providing platform and id.
```sh
/api/v1/profile/{platform}/{id}
```

Available platform supported by the API provided.
  - [origin](https://origin.com/)
  - [xbl](https://nodejs.org/en/)
  - [psn](https://playstation.com/)