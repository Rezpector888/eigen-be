import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Books } from '@prisma/client';

@Injectable()
export class BooksService {
  constructor(private prismaService: PrismaService) {

  }

  async findAll(): Promise<Books[]> {
    return await this.prismaService.books.findMany();
  }

  async findOne(id: string): Promise<Books> {
    return await this.prismaService.books.findFirst({
      where: {
        id
      },
    })
  }

  async updateStock(id: string, stock: number): Promise<Books> {
    return await this.prismaService.books.update({
      where: {
        id
      },
      data: {
        stock
      }
    })
  }

}
