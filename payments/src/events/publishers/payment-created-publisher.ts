import { PaymentCreatedEvent, Publisher, Subjects } from '@m_x_tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
