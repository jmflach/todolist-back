const request = require('supertest');

test('Should return information about all the tasks', async () => {
  const tasks = await request('http://localhost:3333').get('/tasks');

  expect(tasks.status).toBe(200);
  expect(tasks.body.length).toBeGreaterThan(0);
})