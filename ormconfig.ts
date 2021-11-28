export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'changeme',
  database: 'teste',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  synchronize: false,
  migrationsTableName: 'migrations',
  logging: ['query', 'error'],
  // ssl: true,
};
