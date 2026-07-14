import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
declare const prismaClientSingleton: () => PrismaClient<import("@prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/client").DefaultArgs>;
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;
export declare class PrismaService implements OnModuleInit, OnModuleDestroy {
    private client;
    constructor();
    get $(): PrismaClientSingleton;
    get user(): import("@prisma/client").Prisma.UserDelegate<import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    get order(): import("@prisma/client").Prisma.OrderDelegate<import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
export {};
