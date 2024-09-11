import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsPositive, Min } from "class-validator";

export class UpdateBookDto {
    @IsNotEmpty()
    @IsPositive()
    @Min(0)
    @Type(() => Number)
    @IsInt()
    stock: number
}
