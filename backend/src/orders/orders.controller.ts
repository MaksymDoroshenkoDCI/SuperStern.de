import { Controller, Get, Post, Patch, Body, Param, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() body: {
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    address: string;
    serviceType: string;
    spaceSize: number;
    totalPrice: number;
    bookingDate: string;
  }) {
    return this.ordersService.createOrder(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.ordersService.getOrders();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/status')
  async updateStatus(
    @Param('id') id: string,
    @Body('status') status: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED',
  ) {
    return this.ordersService.updateOrderStatus(id, status);
  }
}
