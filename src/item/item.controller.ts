import { Controller, Get, Query, Param } from '@nestjs/common';
import { Item } from '@prisma/client';
import { ItemService } from './item.service';

@Controller('items')
export class ItemController {
    constructor(private readonly itemService: ItemService) {}

    @Get()
    async getAllItems(@Query('page') page: number, @Query('size') size: number): Promise<Item[]> {
        return this.itemService.getItems(page || 1, size || 30);
    }

    @Get(':id')
    async getItemById(@Param('id') id: string): Promise<Item|{}> {
        return this.itemService.getItemById(Number(id));
    }
}