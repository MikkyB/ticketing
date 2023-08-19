import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@m_x_tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
