
# Express JWT Template

<img width="705" alt="Logo" src="https://user-images.githubusercontent.com/33037271/215788063-6b8d5ca3-3258-461f-9b57-5a0664b4df16.png">

Provide a light TypeScript implementation on JWT with Express and TypeORM used. <br />
Implementing JWT without passport.JS library and NestJS framework, mades incremental feature update more accessible.

## Core dependencies
- JS Framework 👉 NodeJS 8.10.61
- Language 👉 TypeScript 2.9.2
- Web Framework 👉 Express 4.17.1
- ORM 👉 Typeorm: 0.2.25
- Development Database 👉 Sqlite3 NodeJS Driver 4.0.3
- Production Database 👉 Postgres NodeJS Driver 8.2.1
- Documentation 👉 swagger-ui-express

## How to run this project
```
npx degit https://github.com/alantsui5/express-template/
cd express-template
npm run start
```

## Fixes
However, it fixed some bug that occur in that repository includes
* Fixed JWT Authentication Error by changing the middleware to respond to `authorization: Bearer <token>`
* Fixed TypeORM and TypeScript Version mismatch by adding `^` in front of version number and `npm upgrade`

## Enahncement
It also add some functionalities for better portability
* Add postgreSQL configurations by `ormconfig.ts` 
* Change the ormconfig by detecting deployment environment
* Add dotenv
* Deployed to heroku with heroku's postgreSQL

## API Documentations

### User
These Routes need to be in role admin
* Get: `/user/`： List All user
* Post: `/user/`： Add a new user
* Get: `/user/:id`: List a user with a ID
* Patch: `/user/:id`: Edit a user with ID
* Delete `/user/:id`: Delete a user with ID

### Auth
*  Get: `/login`: Login
* Post: `/register`: Register
* Post: `/change-password`: Change Password, need JWT


## Reference
It is a express template forked from [jwt-express-typeorm](https://github.com/andregardi/jwt-express-typeorm) with medium article [TypeScript Rest API with Express.js, JWT, Authorization Roles and TypeORM](https://medium.com/javascript-in-plain-english/creating-a-rest-api-with-jwt-authentication-and-role-based-authorization-using-typescript-fbfa3cab22a4)
