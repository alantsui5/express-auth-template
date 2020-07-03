const herokuConfig:Object = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "synchronize": true,
  "logging": false,
  "entities": [
     "src/entity/**/*.ts"
  ],
  "migrations": [
     "src/migration/**/*.ts"
  ],
  "subscribers": [
     "src/subscriber/**/*.ts"
  ],
  "cli": {
     "entitiesDir": "src/entity",
     "migrationsDir": "src/migration",
     "subscribersDir": "src/subscriber"
  }
}

const postgresConfig:Object = {
  "name":"postgress",
  "type": "postgres",
  "host":"localhost",
  "port":5432,
  "username":"test",
  "password":"test",
  "database":"test",
  "synchronize": true,
  "logging": false,
  "entities": [
     "src/entity/**/*.ts"
  ],
  "migrations": [
     "src/migration/**/*.ts"
  ],
  "subscribers": [
     "src/subscriber/**/*.ts"
  ],
  "cli": {
     "entitiesDir": "src/entity",
     "migrationsDir": "src/migration",
     "subscribersDir": "src/subscriber"
  }
}

const sqliteConfig:Object = {
  "name":"sqlite",
  "type": "sqlite",
  "database": "database.sqlite",
  "synchronize": true,
  "logging": false,
  "entities": [
     "src/entity/**/*.ts"
  ],
  "migrations": [
     "src/migration/**/*.ts"
  ],
  "subscribers": [
     "src/subscriber/**/*.ts"
  ],
  "cli": {
     "entitiesDir": "src/entity",
     "migrationsDir": "src/migration",
     "subscribersDir": "src/subscriber"
  }
}

export default process.env.Cloud?herokuConfig:sqliteConfig
