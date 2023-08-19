import { Publisher, Subjects, TicketCreatedEvent } from '@m_x_tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
