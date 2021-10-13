import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
@Injectable()
export class RoomService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRoomDto: CreateRoomDto) {
    return this.prisma.room.create({
      data: {
        capacity: createRoomDto.capacity,
        name: createRoomDto.name,
        block: {
          connect: {
            id: createRoomDto.blockId,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.room.findMany({
      include: { block: true },
    });
  }

  findOne(id: number) {
    return this.prisma.room.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateBlockDto: UpdateRoomDto) {
    return this.prisma.room.update({
      where: {
        id,
      },
      data: {
        name: updateBlockDto.name,
        block: {
          connect: {
            id: updateBlockDto.blockId,
          },
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.room.delete({
      where: { id },
    });
  }
}
