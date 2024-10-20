import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      uri: 'amqp://rabbitmq:rabbitmq@localhost:5672',
      exchanges: [
        {
          name: 'auth_exchange',
          type: 'topic',
        },
      ],
      channels: {
        'auth_channel': {
          prefetchCount: 5,
          default: true,
        },
      },
    }),
  ],
})
export class AppModule {}





