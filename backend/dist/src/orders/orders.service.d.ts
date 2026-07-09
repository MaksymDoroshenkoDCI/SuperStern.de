import { PrismaService } from '../prisma.service';
export declare class OrdersService {
    private prisma;
    private transporter;
    constructor(prisma: PrismaService);
    private validateBerlinPlz;
    createOrder(data: {
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
    getOrders(): Promise<{
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
    updateOrderStatus(id: string, status: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED'): Promise<{
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
    private sendNotificationEmail;
}
