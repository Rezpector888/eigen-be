import { Module } from '@nestjs/common';
import { BooksModule } from './modules/books/books.module';
import { MembersModule } from './modules/members/members.module';
import { PrismaModule } from 'nestjs-prisma';
import { PenaltyModule } from './modules/penalty/penalty.module';
import { BorrowedBooksModule } from './modules/borrowed-books/borrowed-books.module';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    BooksModule, 
    MembersModule, PenaltyModule, BorrowedBooksModule],
})
export class AppModule {}
