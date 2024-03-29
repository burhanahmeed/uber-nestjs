import { Controller, Post, Body } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post()
    async createOrder(@Body() createOrderDto: CreateOrderDto) {
        const order = await this.orderService.createOrder(createOrderDto);
        return order;
    }
}