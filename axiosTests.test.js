const axios = require('axios');

// Налаштовуємо інтерсептори для логування запитів і респонсів
axios.interceptors.request.use((config) => {
  console.log(`Запрос: ${config.method.toUpperCase()} ${config.url}`);
  return config;
});

axios.interceptors.response.use(
  (response) => {
    console.log(`Респонс: Статус ${response.status} от URL ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('Ошибка запроса:', error);
    return Promise.reject(error);
  }
);

// 1. Тест на GET запит для отримання списку постів
test('GET posts - Статус 200 і правильні дані', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  expect(response.status).toBe(200); // Перевірка статусу
  expect(Array.isArray(response.data)).toBe(true); // Перевірка, що data - це масив
  expect(response.data[0]).toHaveProperty('id'); // Перевірка наявності поля id
});

// 2. Тест на POST запит для створення нового поста
test('POST create post - Статус 201 і правильні дані', async () => {
  const postData = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
  expect(response.status).toBe(201); // Перевірка статусу
  expect(response.data).toHaveProperty('id'); // Перевірка наявності ID в відповіді
  expect(response.data.title).toBe(postData.title); // Перевірка значення title
});

// 3. Тест на GET запит для отримання поста за ID
test('GET post by ID - Статус 200 і правильні дані', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status).toBe(200); // Перевірка статусу
  expect(response.data).toHaveProperty('id', 1); // Перевірка, що отримали пост з ID 1
});

// 4. Тест на PUT запит для оновлення поста
test('PUT update post - Статус 200 і правильні дані', async () => {
  const updatedPost = {
    title: 'Updated Title',
    body: 'Updated body content',
    userId: 1,
  };
  const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', updatedPost);
  expect(response.status).toBe(200); // Перевірка статусу
  expect(response.data.title).toBe(updatedPost.title); // Перевірка оновленого значення title
});

// 5. Тест на DELETE запит для видалення поста
test('DELETE post - Статус 200', async () => {
  const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status).toBe(200); // Перевірка статусу
});
