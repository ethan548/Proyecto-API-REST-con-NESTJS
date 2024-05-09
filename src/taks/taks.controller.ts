import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import {TaksService} from './taks.service'
import {CreateTaksDto} from '../taks/dto/taks.dto'

@Controller('task')
export class TaksController {
    constructor(private taksService:TaksService){}
    @Post()
    create(@Body() createTaskDto:CreateTaksDto){
       return this.taksService.addTaks(createTaskDto)
    }
    @Get()
    findAll(){
        console.log(this.taksService);
        return this.taksService.findAll()
    }
    @Delete(':id')
    async deleteById(@Param('id') id:string ){
        const succes = await this.taksService.deleteById(id)
        if(succes === null){
            throw new HttpException('No se encontro el id',HttpStatus.NOT_FOUND)
        }
        throw new HttpException('Se elimino correctamente',HttpStatus.OK)
    }
    @Patch(':id')
    async patchTask(@Param('id') id:string){
        const patchSucces = await this.taksService.patchTask(id)
        console.log(typeof patchSucces);
        if(typeof patchSucces === 'string'){
            throw new HttpException(patchSucces,HttpStatus.NOT_FOUND)
        }
        return patchSucces
    }
}
