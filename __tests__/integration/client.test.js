import request from 'supertest';
import app from '../../src/app';

describe('client', () => {
  describe('create', () => {
    it('should create a new client when call the route', async () => {
      expect.assertions(1);

      const result = await request(app)
        .post('./client')
        .send({ name: 'Client 01', uf: 'RS' });

      expect(result.status).toBe(200);
    });
  });
});
