import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

export class CreateTaksDto{
    @IsString()
    @IsNotEmpty()
    title:string;
    @IsString()
    @IsNotEmpty()
    description:string;
    @IsBoolean()
    @IsNotEmpty()
    state:boolean;
}
