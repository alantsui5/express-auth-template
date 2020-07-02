const CI_DATABASE_URL = 'postgres://test:test@postgres:5432/test';

const base = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  schema: 'public',
  synchronize: false,
  logging: false,
  entities: ['src/entity/*.ts'],
  migrations: ['src/migration/*.ts'],
  subscribers: ['src/subscriber/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  },
  migrationsRun: true
};

const config = {
  test: {
    url: process.env.CI ? CI_DATABASE_URL : process.env.DATABASE_TEST_URL,
    dropSchema: true
  },
  development: {},
  production: {
    dropSchema: false
  }
};

module.exports = process.env.CI
  ? { ...base, ...config['test'] }
  : { ...base, ...config[process.env.NODE_ENV || 'development'] };