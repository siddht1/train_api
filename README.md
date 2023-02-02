#  mock train_api

using zero_api to host in vercel 

- Built with nodejs and express
- Is hosted in VERCEL

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

#URL

[(https://train-api-git-main-siddht1.vercel.app/)]
[(https://train-api-two.vercel.app/)]
[(https://train-api-siddht1.vercel.app/)]


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
