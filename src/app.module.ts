import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { TaksModule } from './taks/taks.module';
import {TaksService} from './taks/taks.service'

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.5'),
    TaksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
