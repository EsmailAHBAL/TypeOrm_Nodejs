import { User } from './entity/User';
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Author } from './entity/Author';
import { Post } from './entity/Post';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "Passw0rd",
    database: "mydb",
    synchronize: true,
    logging: false,
    entities: [User,Author,Post],
    migrations: [],
    subscribers: [],
})
