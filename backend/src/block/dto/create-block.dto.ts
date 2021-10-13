import { IsNotEmpty, IsString } from 'class-validator';
import Block from '../entities/block.entity';

export class CreateBlockDto extends Block {
  @IsString()
  @IsNotEmpty()
  name: string;
}
