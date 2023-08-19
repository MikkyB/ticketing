import { Publisher, Subjects, TicketUpdatedEvent } from '@m_x_tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
