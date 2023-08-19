import { Listener, OrderCreatedEvent, Subjects } from '@m_x_tickets/common';
import { Message } from 'node-nats-streaming';
import { queueGroupName } from './queue-group-name';
import { expirationQueue } from '../../queues/expiration-queue';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;
  async onMessage(
    data: OrderCreatedEvent['data'],
    msg: Message
  ): Promise<void> {
    try {
      const delay = Math.max(
        new Date(data.expiresAt).getTime() - new Date().getTime(),
        0
      );
      console.log(`Expiration module. Delay: ${delay}`);

      expirationQueue.add(
        {
          orderId: data.id,
        },
        {
          delay,
        }
      );

      msg.ack();
    } catch (err) {
      console.log(`Expiration module. Exception: ${err}`);
    }
  }
}
