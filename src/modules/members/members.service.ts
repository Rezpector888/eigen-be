import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { BorrowedBooks, Members } from '@prisma/client';

@Injectable()
export class MembersService {
  constructor(private prismaService: PrismaService) {}

  async findAll(): Promise<Members[]> {
    return await this.prismaService.members.findMany();
  }

  async findOne(id: string): Promise<Members> {
    return await this.prismaService.members.findFirst({
      where: {
        id,
      },
    });
  }

  async findBorrowedBooks(memberId: string): Promise<BorrowedBooks[]> {
    return await this.prismaService.borrowedBooks.findMany({
      where: {
        memberId,
        returnedAt: null,
      },
    });
  }

  async memberHasPenalty(memberId: string): Promise<boolean> {
    const penalty = await this.prismaService.penalty.findFirst({
      where: {
        memberId
      }
    });
    return penalty !== null && new Date() < penalty?.endDate;
  }
}
