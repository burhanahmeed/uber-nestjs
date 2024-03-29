import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Order, OrderItem } from '@prisma/client';

interface OrderData { longitude: number, latitude: number, subtotal: number, deliveryFee: number, address: string, queue: string, items: { itemId: number, itemName: string, itemPrice: number, itemImage: string }[]}

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(orderData: OrderData ): Promise<Order> {
    const { longitude, latitude, subtotal, deliveryFee, address, queue, items } = orderData;

    return this.prisma.order.create({
      data: {
        longitude,
        latitude,
        subtotal,
        deliveryFee,
        address,
        queue,
        createdAt: new Date(),
        updatedAt: new Date(),
        OrderItem: {
          create: items.map(item => ({
            itemId: item.itemId,
            itemName: item.itemName,
            itemPrice: item.itemPrice,
            itemImage: item.itemImage
          }))
        }
      },
      include: {
        OrderItem: true
      }
    });
  }
}