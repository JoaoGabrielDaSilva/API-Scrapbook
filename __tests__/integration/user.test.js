import request from 'supertest';
import app from '../../src/app';
import User from '../../src/app/models/User';

describe('user', () => {
  it('should do something...', async () => {
    expect.assertions(1);

    const name = 'Vini';
    const email = 'vini@gmail.com';
    const password = '11223344';

    const user = await User.create({ name, email, password });

    expect(user).toBeInstanceOf(User);
  });

  it('should do otherthing...', async () => {
    expect.assertions(1);

    const response = await (await request(app).post('./users')).setEncoding({
      name: 'Vini',
      email: 'vini@gmail.com',
      password: '11223344',
    });

    expect(response.status).toBe(200);
  });
});
