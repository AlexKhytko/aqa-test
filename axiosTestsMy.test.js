const axios = require('axios');

test("Get the list of posts", async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      headers: {
          'Content-Type': 'application/json',
      }
  });
  console.log(response.status);
 })
 test("Get the list of posts", async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1', {
      headers: {
          'Content-Type': 'application/json',
      }
  });
  console.log(response.status);
 })
 test("Get the list of posts", async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments', {
      headers: {
          'Content-Type': 'application/json',
      }
  });
  console.log(response.status);
 })
 test("Get the list of posts", async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1', {
      headers: {
          'Content-Type': 'application/json',
      }
  });
  console.log(response.status);
 })

test("Post the list of posts", async () => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: "New Post",
    body: "This is a new post created for testing.",
    userId: 1
  }, {
      headers: {
          'Content-Type': 'application/json',
      }
  });
  console.log(response.status);
   
})
test("Delete the list of posts", async () => {
  const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1', {
      headers: {
          'Content-Type': 'application/json',
      }
  });
  console.log(response.status);
  
})

test("Patch the list of posts", async () => {
  const response = await axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
      headers: {
          'Content-Type': 'application/json',
      }
  });
    console.log(response.status);
})
test("Put the list of posts", async () => {
  const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
      headers: {
          'Content-Type': 'application/json',
      }
  });
    console.log(response.status);
})
