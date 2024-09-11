import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBorrowedBookDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    memberId: string;


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    bookId: string;
}
