import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from './Author';
@Entity()
export class Post  {

 @PrimaryGeneratedColumn()
    id:number
   @Column()
    title:string
    @Column()
    likes:number
    @Column()
    dislikes:number
    @Column()
    date:string

  @ManyToOne(()=>Author,(author)=>author.posts)
@JoinColumn(
 {
   name:"id_author"
 }
  )
  author :Author
     
}