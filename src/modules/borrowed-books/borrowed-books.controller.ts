import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BorrowedBooksService } from './borrowed-books.service';
import { CreateBorrowedBookDto } from './dto/create-borrowed-book.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("Borrowed Books")
@Controller('borrowed-books')
export class BorrowedBooksController {
  constructor(private readonly borrowedBooksService: BorrowedBooksService) {}

  @Post()
  create(@Body() createBorrowedBookDto: CreateBorrowedBookDto) {
    return this.borrowedBooksService.borrowBook(createBorrowedBookDto);
  }

  @Get(":id/return")
  returnBook(@Param("id") id: string){
    return this.borrowedBooksService.returnBook(id);
  }
}
