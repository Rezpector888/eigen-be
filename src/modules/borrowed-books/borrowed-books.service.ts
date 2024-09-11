import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBorrowedBookDto } from './dto/create-borrowed-book.dto';
import { PrismaService } from 'nestjs-prisma';
import { BorrowedBooks } from '@prisma/client';

@Injectable()
export class BorrowedBooksService {
  constructor(private prismaService: PrismaService) {

  }
  async borrowBook(createBorrowedBookDto: CreateBorrowedBookDto): Promise<BorrowedBooks> {
    const { bookId, memberId} = createBorrowedBookDto;
    const countBorrowedBook = await this.prismaService.borrowedBooks.count({
      where: {
        memberId,
        returnedAt: null
      }
    })
    if(countBorrowedBook >= 2){
      throw new BadRequestException("Cannot borrow more than 2 books")
    }
    return await this.prismaService.borrowedBooks.create({
      data: {
        bookId,
        memberId,
      }
    })
  }

  async returnBook(id: string): Promise<BorrowedBooks> {
    return await this.prismaService.borrowedBooks.update({
      where: {
        id
      },
      data: {
        returnedAt: new Date()
      }
    })
  }
}
