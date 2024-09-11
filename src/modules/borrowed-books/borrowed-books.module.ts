import { Module } from '@nestjs/common';
import { BorrowedBooksService } from './borrowed-books.service';
import { BorrowedBooksController } from './borrowed-books.controller';

@Module({
  controllers: [BorrowedBooksController],
  providers: [BorrowedBooksService],
})
export class BorrowedBooksModule {}
