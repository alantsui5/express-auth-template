
# Express JWT Template

## How to run this project
```
npx degit https://github.com/alantsui5/express-template/
npm run dev
```

## Origin
It is a express template forked from [jwt-express-typeorm](https://github.com/andregardi/jwt-express-typeorm) with medium article [TypeScript Rest API with Express.js, JWT, Authorization Roles and TypeORM](https://medium.com/javascript-in-plain-english/creating-a-rest-api-with-jwt-authentication-and-role-based-authorization-using-typescript-fbfa3cab22a4)

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
