import { Prisma, Role } from '@prisma/client';

export class User implements Prisma.UserCreateInput {
  createdAt?: string | Date;
  email: string;
  name?: string;
  role?: Role;
}
