import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import {HydratedDocument} from 'mongoose'

export type TaskDocument = HydratedDocument<Task>;

@Schema({timestamps:true,versionKey:false})
export class Task{
    @Prop({required:true})
    title:string
    @Prop({required:true})
    description:string
    @Prop({required:true})
    state:boolean
    
}

export const TaskSchema = SchemaFactory.createForClass(Task)