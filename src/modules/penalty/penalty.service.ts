import { Injectable } from '@nestjs/common';
import { CreatePenaltyDto } from './dto/create-penalty.dto';
import { Penalty } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PenaltyService {
  private currentDate: Date = new Date();
  constructor(private prismaService: PrismaService) {}
  async create(createPenaltyDto: CreatePenaltyDto): Promise<Penalty> {
    const {memberId} = createPenaltyDto;
    const endDate = new Date()
    endDate.setDate(this.currentDate.getDate() + 3)
    return await this.prismaService.penalty.create({
      data: {
        memberId,
        endDate,
      }
    })
  }

}
