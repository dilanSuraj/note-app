# Notes Management App
In this project, we are going to create node CRUD application with express and mongodb.

#### To Run this project Clone it and install modules using
```
npm install
```

Then Create config.env file and create PORT and MONGO_URI Variable and specify Value.
That's it. You are ready to go. To execute this project just type
```
npm start
```

# Run in Docker
docker-compose up
# use -d flag to run in background

# Tear down
docker-compose down

# To be able to edit files, add volume to compose file
volumes: ['./:/usr/src/app']

# To re-build
docker-compose build

Enjoy...!
