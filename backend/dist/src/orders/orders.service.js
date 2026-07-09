"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const nodemailer = __importStar(require("nodemailer"));
let OrdersService = class OrdersService {
    prisma;
    transporter;
    constructor(prisma) {
        this.prisma = prisma;
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.mail.yahoo.com',
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER || 'extra.stern@yahoo.com',
                pass: process.env.SMTP_PASS || '',
            },
        });
    }
    validateBerlinPlz(address) {
        const plzRegex = /\b\d{5}\b/g;
        const matches = address.match(plzRegex);
        if (!matches)
            return false;
        return matches.some(plz => {
            const code = parseInt(plz, 10);
            return code >= 10000 && code <= 14199;
        });
    }
    async createOrder(data) {
        if (!this.validateBerlinPlz(data.address)) {
            throw new common_1.BadRequestException('We only serve Berlin (PLZ between 10000 and 14199). Please provide a valid Berlin address with postal code.');
        }
        const order = await this.prisma.order.create({
            data: {
                clientName: data.clientName,
                clientEmail: data.clientEmail,
                clientPhone: data.clientPhone,
                address: data.address,
                serviceType: data.serviceType,
                spaceSize: parseFloat(data.spaceSize.toString()),
                totalPrice: parseFloat(data.totalPrice.toString()),
                bookingDate: new Date(data.bookingDate),
            },
        });
        this.sendNotificationEmail(order).catch(err => {
            console.error('Failed to send email notification:', err.message);
        });
        return order;
    }
    async getOrders() {
        return this.prisma.order.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async updateOrderStatus(id, status) {
        return this.prisma.order.update({
            where: { id },
            data: { status },
        });
    }
    async sendNotificationEmail(order) {
        const mailOptions = {
            from: `"Super Stern Booking" <${process.env.SMTP_USER || 'extra.stern@yahoo.com'}>`,
            to: 'extra.stern@yahoo.com',
            subject: `Neues Booking: ${order.serviceType} - ${order.clientName}`,
            html: `
        <h2>Neues Online-Booking erhalten</h2>
        <p><strong>Kunde:</strong> ${order.clientName}</p>
        <p><strong>E-Mail:</strong> ${order.clientEmail}</p>
        <p><strong>Telefon:</strong> ${order.clientPhone}</p>
        <p><strong>Adresse:</strong> ${order.address}</p>
        <p><strong>Dienstleistung:</strong> ${order.serviceType}</p>
        <p><strong>Größe (qm):</strong> ${order.spaceSize} m²</p>
        <p><strong>Preis:</strong> €${order.totalPrice.toFixed(2)}</p>
        <p><strong>Terminwunsch:</strong> ${new Date(order.bookingDate).toLocaleString('de-DE')}</p>
        <br/>
        <p>Dieses Booking wurde automatisch erfasst und in der Datenbank gespeichert.</p>
      `,
        };
        if (process.env.SMTP_PASS) {
            await this.transporter.sendMail(mailOptions);
            console.log(`Email successfully sent for order ${order.id}`);
        }
        else {
            console.log('--- MOCK EMAIL TRIGGERED ---');
            console.log(`To: ${mailOptions.to}`);
            console.log(`Subject: ${mailOptions.subject}`);
            console.log(`Body: ${mailOptions.html}`);
            console.log('-----------------------------');
        }
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map