import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaksDto } from './dto/taks.dto'
import { Model } from 'mongoose';
import {Task} from '../schemas/task.schema'


@Injectable()
export class TaksService {
    
    constructor(@InjectModel(Task.name) private taskModel:Model<Task>){}

    async addTaks(createTaksDto:CreateTaksDto):Promise<Task>{
        const newTaks = new this.taskModel(createTaksDto);
        return newTaks.save()
    }

    async findAll():Promise<Task[]>{
        const allTask = this.taskModel.find()
        return allTask
    }
    async deleteById(id:string){
        //console.log(typeof id);
        const myId = await this.taskModel.findByIdAndDelete(id)
        return myId
        //console.log(typeof myId[0].id);
        //console.log(this.taskModel.findById(id));
    }

    async patchTask(id:string){
        try {
            const state = (await this.taskModel.findById(id,{state:1})).state;
            const myPatch = await this.taskModel.findByIdAndUpdate(id,{state: (state ? false:true)},{new:true})
            return myPatch
        } catch (error) {
            return error instanceof Error ? error.message : error 
        }
    }
}
