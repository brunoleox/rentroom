import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';

@Injectable()
export class BlockService {
  constructor(private readonly prisma: PrismaService) {}
  create(createBlockDto: CreateBlockDto) {
    return this.prisma.block.create({
      data: {
        name: createBlockDto.name,
      },
    });
  }

  findAll() {
    return this.prisma.block.findMany({
      include: { Room: true },
    });
  }

  findOne(id: number) {
    return this.prisma.block.findUnique({
      where: { id },
      include: { Room: true },
    });
  }

  update(id: number, data: UpdateBlockDto) {
    return this.prisma.block.update({
      where: { id },
      data: {
        ...data,
      },
    });
  }

  remove(id: number) {
    return this.prisma.block.delete({
      where: { id },
    });
  }
}
