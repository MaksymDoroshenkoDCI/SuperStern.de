import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(body: {
        clientName: string;
        clientEmail: string;
        clientPhone: string;
        address: string;
        serviceType: string;
        spaceSize: number;
        totalPrice: number;
        bookingDate: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        clientName: string;
        clientEmail: string;
        clientPhone: string;
        address: string;
        serviceType: string;
        spaceSize: number;
        totalPrice: number;
        bookingDate: Date;
        status: import("@prisma/client").$Enums.Status;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        clientName: string;
        clientEmail: string;
        clientPhone: string;
        address: string;
        serviceType: string;
        spaceSize: number;
        totalPrice: number;
        bookingDate: Date;
        status: import("@prisma/client").$Enums.Status;
    }[]>;
    updateStatus(id: string, status: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED'): Promise<{
        id: string;
        createdAt: Date;
        clientName: string;
        clientEmail: string;
        clientPhone: string;
        address: string;
        serviceType: string;
        spaceSize: number;
        totalPrice: number;
        bookingDate: Date;
        status: import("@prisma/client").$Enums.Status;
    }>;
}
