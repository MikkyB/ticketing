import request from 'supertest';
import { app } from '../../app';

const createTicket = (title: string, price: number) => {
  return request(app).post('/api/tickets').set('Cookie', global.signin()).send({
    title,
    price,
  });
};

it('can fetch list of tickets', async () => {
  await createTicket('ticket #1', 10).expect(201);
  await createTicket('ticket #2', 12).expect(201);
  await createTicket('ticket #3', 11).expect(201);

  const response = await request(app).get('/api/tickets').send();

  expect(response.body.length).toEqual(3);
});
