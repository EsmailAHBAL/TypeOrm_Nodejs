import { Post } from '../entity/Post';
import { AppDataSource } from './../data-source';

 class postService{
   postRepository=AppDataSource.getRepository(Post)

   async getAllPost()
   {
       return this.postRepository.manager.find(Post)
   }

  async insertPost(post:Post)
  {
      return this.postRepository.save(post)
  }
}

export default new postService()