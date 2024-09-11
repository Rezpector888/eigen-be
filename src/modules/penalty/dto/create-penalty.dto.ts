import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePenaltyDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    memberId: string
}
