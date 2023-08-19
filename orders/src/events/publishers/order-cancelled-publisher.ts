import { Publisher, Subjects, OrderCancelledEvent } from '@m_x_tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
