#  mock train_api

using zero_api to host in vercel 

- Built with nodejs and express
- Is hosted in VERCEL

[![N|Solid](https://images.squarespace-cdn.com/content/v1/5cc22d6593a63233d214110c/1597710652025-QEY2UL92MLE1E2BX4WSJ/Vercel+%28Zeit%29.jpg?format=10w)](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiW3uWCkfb8AhVVTmwGHSrICqoQFnoECBEQAQ&url=https%3A%2F%2Fvercel.com%2F&usg=AOvVaw0IyxhwoD9uGvLBGqylHAlt)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/siddht1/train_api/deployments/activity_log?environment=Production)

![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=train-md4tvf67o-siddht1.vercel.app)

#URL

[url_1](https://train-api-git-main-siddht1.vercel.app/)
[url_2](https://train-api-two.vercel.app/)
[url_3](https://train-api-siddht1.vercel.app/)


# Files

-src/index.js
Backbone of the entire project, calls v1/routes under the hood

-src/v1/routes/index.js
 Is the real implementation of the API as version 1,calls v1/routes/routes under the hood
 accessbile via  url/api/v1
 
 -src/v1/routes/routes
 Is the master file to control the API,calls CONTROLLER under the hood
 
 -src/controller
 Real CONTROLLER,calls SERVICES under the hood
 
 -src/services
 REal SERVICE provider,calls DATABASE under the hood
 
 -src/database
 
 DATABASE provider,meant for database query, calls db.json 
 
 -src/database/db.json
 
 JSON implementation of a NOSQL like database,providing the entire database as a JSON file to the V1 API



## UML diagram

```mermaid
sequenceDiagram

src/index.js ->> src/v1/routes/index.js : init()
src/v1/routes/index.js ->> src/v1/routes/train_routes : router()
src/v1/routes/train_routes ->> src/controller : api_controller()
src/controller ->> src/service :   getAllTrains()
 src/controller ->> src/service :  getOneTrain()
  src/controller ->> src/service : createNewTrain()
  src/controller ->> src/service : updateOneTrain()
  src/controller ->> src/service : deleteOneTrain()
src/service   ->> src/database : getAllTrains()
 src/service   ->> src/database : getOneTrain()
  src/service   ->> src/database :createNewTrain()
  src/service   ->> src/database :updateOneTrain()
  src/service   ->> src/database :deleteOneTrain()
  
  src/database --> DB.json : getAllTrains()
  
  DB.json -->  JSON : data()


