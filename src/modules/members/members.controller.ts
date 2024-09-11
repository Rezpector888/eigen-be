import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("Members")
@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Get()
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(id);
  }

  @Get(':id/penalty')
  hasPenalty(@Param('id') id: string) {
    return this.membersService.memberHasPenalty(id);
  }

  @Get(':id/borrowed')
  findBookBorrowed(@Param('id') id: string) {
    return this.membersService.findBorrowedBooks(id);
  }

}
