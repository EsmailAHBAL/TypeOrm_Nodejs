import app from "./app"
import { AppDataSource } from "./data-source"
import { Author } from "./entity/Author"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    app.listen(3300,()=>{

        console.log('Server Up On http://localhost:3300');
        
    })
  
    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "HAMADA"
    // user.lastName = "HAMADA"
    // user.age = 65
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
