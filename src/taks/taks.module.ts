import { Module } from '@nestjs/common';
import { TaksService } from './taks.service';
import { TaksController } from './taks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Task,TaskSchema} from '../schemas/task.schema'

@Module({
  imports: [MongooseModule.forFeature([{name:Task.name,schema:TaskSchema}])],
  providers: [TaksService],
  controllers: [TaksController]
})
export class TaksModule {}
