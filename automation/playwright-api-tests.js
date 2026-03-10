const { test, expect } = require('@playwright/test');

test.describe('API Tests', () => {
  test('GET /users - Retrieve all users', async ({ request }) => {
    const res = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('application/json');
    const users = await res.json();
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThan(0);
    users.forEach(u => {
      expect(u).toHaveProperty('id');
      expect(u).toHaveProperty('name');
      expect(u).toHaveProperty('username');
      expect(u).toHaveProperty('email');
    });
  });

  test('GET /users/1 - Retrieve a specific user', async ({ request }) => {
    const res = await request.get('https://jsonplaceholder.typicode.com/users/1');
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('application/json');
    const user = await res.json();
    expect(user).toHaveProperty('id', 1);
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('username');
    expect(user).toHaveProperty('email');
  });

  test('GET /users/999999 - Edge case: invalid user id', async ({ request }) => {
    const res = await request.get('https://jsonplaceholder.typicode.com/users/999999');
    expect(res.status()).toBe(404);
    expect(res.headers()['content-type']).toContain('application/json');
    const user = await res.json();
    expect(typeof user).toBe('object');
  });

  test('POST /posts - Create a new post', async ({ request }) => {
    const payload = { title: 'foo', body: 'bar', userId: 1 };
    const res = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: payload,
      headers: { 'Content-Type': 'application/json' }
    });
    expect(res.status()).toBe(201);
    expect(res.headers()['content-type']).toContain('application/json');
    const post = await res.json();
    expect(post).toHaveProperty('id');
    expect(post).toHaveProperty('title', 'foo');
    expect(post).toHaveProperty('body', 'bar');
    expect(post).toHaveProperty('userId', 1);
  });

  test('POST /posts - Edge case: missing title', async ({ request }) => {
    const payload = { body: 'bar', userId: 1 };
    const res = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: payload,
      headers: { 'Content-Type': 'application/json' }
    });
    expect(res.status()).toBe(201);
    expect(res.headers()['content-type']).toContain('application/json');
    const post = await res.json();
    expect(post).toHaveProperty('id');
    expect(post).toHaveProperty('body', 'bar');
    expect(post).toHaveProperty('userId', 1);
  });

  test('PUT /posts/1 - Update an existing post', async ({ request }) => {
    const payload = { id: 1, title: 'updated title', body: 'updated body', userId: 1 };
    const res = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
      data: payload,
      headers: { 'Content-Type': 'application/json' }
    });
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('application/json');
    const post = await res.json();
    expect(post).toHaveProperty('id', 1);
    expect(post).toHaveProperty('title', 'updated title');
    expect(post).toHaveProperty('body', 'updated body');
    expect(post).toHaveProperty('userId', 1);
  });

  test('PUT /posts/1 - Edge case: wrong content-type', async ({ request }) => {
    const res = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
      data: 'not-json',
      headers: { 'Content-Type': 'text/plain' }
    });
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('application/json');
    const post = await res.json();
    expect(typeof post).toBe('object');
  });
});
