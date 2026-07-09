"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    app.setGlobalPrefix('api');
    const port = process.env.PORT || 5001;
    await app.listen(port);
    console.log(`Backend server is running on: http://localhost:${port}/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map