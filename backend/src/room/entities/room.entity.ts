import { Prisma } from '@prisma/client';
export default class Room implements Prisma.RoomCreateInput {
  name: string;
  capacity: number;
  block: Prisma.BlockCreateNestedOneWithoutRoomInput;
}
