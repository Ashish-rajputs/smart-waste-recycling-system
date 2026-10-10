# Assignment 1 — HTTP Request Log

## Purpose

This document records five HTTP requests made to the JSONPlaceholder
public practice API using curl. Four requests retrieve existing resources,
and one deliberately requests a nonexistent resource to demonstrate a 404.

Base URL: https://jsonplaceholder.typicode.com

---

## Request 1: Retrieve Post 1

### Command
```bash
curl -i https://jsonplaceholder.typicode.com/posts/1
```

### Result
- Status: 200 OK
- Content-Type: application/json; charset=utf-8
- Content-Length: 292

### Response Body
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

### Explanation
- **200 OK:** The request succeeded.
- **Content-Type:** The response contains JSON data encoded using UTF-8.
- **Content-Length:** The response body is 292 bytes.
---

## Request 2: Retrieve Post 2

### Command
```bash
curl -i https://jsonplaceholder.typicode.com/posts/2
```

### Result
- Status: 200 OK
- Content-Type: application/json; charset=utf-8
- Content-Length: 278

### Response Body
The response contains a JSON object with the post's `userId`, `id`, `title`, and `body` fields.

### Explanation
- **200 OK:** The server successfully returned the requested post.
- **Content-Type:** The response contains JSON data encoded using UTF-8.
- **Content-Length:** The response body is 278 bytes.
---

## Request 3: Retrieve User 1

### Command
```bash
curl -i https://jsonplaceholder.typicode.com/users/1
```

### Result
- Status: 200 OK
- Content-Type: application/json; charset=utf-8
- Content-Length: 509

### Response Body
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```

### Explanation
- **200 OK:** The server successfully returned the user resource.
- **Content-Type:** The response body contains JSON data encoded using UTF-8.
- **Content-Length:** The response body is 509 bytes.
---

## Request 4: Retrieve Comment 1

### Command
```bash
curl -i https://jsonplaceholder.typicode.com/comments/1
```

### Result
- Status: 200 OK
- Content-Type: application/json; charset=utf-8
- Content-Length: 268

### Response Body
```json
{
  "postId": 1,
  "id": 1,
  "name": "id labore ex et quam laborum",
  "email": "Eliseo@gardner.biz",
  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
}
```

### Explanation
- **200 OK:** The server successfully returned the comment.
- **Content-Type:** The response body contains JSON data encoded using UTF-8.
- **Content-Length:** The response body is 268 bytes.
---

## Request 5: Request a Nonexistent Post

### Command
```bash
curl -i https://jsonplaceholder.typicode.com/posts/999999
```

### Result
- Status: 404 Not Found
- Content-Type: application/json; charset=utf-8
- Content-Length: 2

### Response Body
```json
{}
```

### Explanation
- **404 Not Found:** The requested post does not exist.
- **Content-Type:** The response body uses JSON format.
- **Content-Length:** The response body is 2 bytes.
- **Purpose:** This request deliberately demonstrates how a server responds when a resource cannot be found.