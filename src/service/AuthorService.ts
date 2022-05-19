import {
    Author
} from '../entity/Author';
import {
    AppDataSource
} from './../data-source';

class AuthorService {
    authorRepository = AppDataSource.getRepository(Author)
    async register(id, fr, ls, age) {

        const authorRepository = AppDataSource.getRepository(Author)
        let newAuthor = new Author()
        newAuthor.id = id
        newAuthor.age = age
        newAuthor.firstName = fr
        newAuthor.lastName = ls

   return this.authorRepository.save(newAuthor)
        console.log('saved !! 🙂 ');

    }

    async getData() {
        return  this.authorRepository.manager.find(Author)
    }
    async getDataByID(a:number) {
 return this.authorRepository.findBy({id:a})
    }

   async updateData(au:Author)  {
       const {id,age,lastName,firstName}=au
      const findIdForUpdate= await this.authorRepository.findOne({where:{id:id} })
       findIdForUpdate.age=age
       findIdForUpdate.firstName=firstName
       findIdForUpdate.lastName=lastName

      return this.authorRepository.save(findIdForUpdate,)
   }
}
export default new AuthorService()