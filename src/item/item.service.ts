import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ItemService {
    constructor(private prisma: PrismaService) {}

    async getItems(page: number, pageSize: number) {
        const skip = (page - 1) * pageSize;
        const items = await this.prisma.item.findMany({
            skip,
            take: pageSize,
        });
        return items;
    }

    async getItemById(id: number) {
        const item = await this.prisma.item.findUnique({
            where: { id },
        });
        return item;
    }
}