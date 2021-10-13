import { Prisma } from '@prisma/client';

export default class Block implements Prisma.BlockCreateInput {
  id?: number;
  number: number;
  name: string;
  Room?: Prisma.RoomCreateNestedManyWithoutBlockInput;
}
