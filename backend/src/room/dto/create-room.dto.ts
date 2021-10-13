import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import Room from '../entities/room.entity';
export class CreateRoomDto extends Room {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  capacity: number;
  blockId: number;
}
