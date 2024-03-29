import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { PrismaService } from '../prisma.service';

@Module({
    controllers: [ItemController],
    providers: [ItemService, PrismaService],
})
export class ItemModule {}