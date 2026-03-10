# Manual API Test Cases & Results

## Instructions
For each endpoint tested, document the following:
1. **Request details**: URL, method, headers, body (if any)
2. **Response details**: Status code, headers, body
3. **Short analysis**: Briefly explain if the result is as expected and any observations
4. **Edge case**: Include at least one edge case per endpoint

---


### 1. GET /users – Retrieve all users
#### Request
- **URL**: https://jsonplaceholder.typicode.com/users
- **Method**: GET
- **Headers**: None
- **Body**: N/A

#### Response
- **Status code**: 200
- **Headers**: Content-Type: application/json
- **Body**: Array of user objects with id, name, username, email, etc.

#### Analysis
The endpoint returns a non-empty array of users, each with required fields. Status code and content type are as expected.

#### Edge Case
- GET /users/999999 (invalid user id): Returns 404 and an empty object.

---

### 2. GET /users/1 – Retrieve a specific user
#### Request
- **URL**: https://jsonplaceholder.typicode.com/users/1
- **Method**: GET
- **Headers**: None
- **Body**: N/A

#### Response
- **Status code**: 200
- **Headers**: Content-Type: application/json
- **Body**: User object with id, name, username, email, etc.

#### Analysis
Returns the user object with all required fields. Status code and content type are correct.

#### Edge Case
- GET /users/999999: Returns 404 and an empty object for a non-existent user.

---

### 3. POST /posts – Create a new post
#### Request
- **URL**: https://jsonplaceholder.typicode.com/posts
- **Method**: POST
- **Headers**: Content-Type: application/json
- **Body**: { "title": "foo", "body": "bar", "userId": 1 }

#### Response
- **Status code**: 201
- **Headers**: Content-Type: application/json
- **Body**: Created post object with id, title, body, userId

#### Analysis
Post is created successfully, response includes all required fields. Status code and content type are as expected.

#### Edge Case
- POST /posts with missing title: API still returns 201 and creates a post with only body and userId.

---

### 4. PUT /posts/1 – Update an existing post
#### Request
- **URL**: https://jsonplaceholder.typicode.com/posts/1
- **Method**: PUT
- **Headers**: Content-Type: application/json
- **Body**: { "id": 1, "title": "updated title", "body": "updated body", "userId": 1 }

#### Response
- **Status code**: 200
- **Headers**: Content-Type: application/json
- **Body**: Updated post object with id, title, body, userId

#### Analysis
Post is updated successfully, response includes all required fields. Status code and content type are as expected.

#### Edge Case
- PUT /posts/1 with wrong content-type (text/plain): API still returns 200 and a JSON object.

---

### 2. GET /users/1 – Retrieve a specific user
#### Request
- **URL**: https://jsonplaceholder.typicode.com/users/1
- **Method**: GET
- **Headers**: (if any)
- **Body**: N/A

#### Response
- **Status code**: 
- **Headers**: 
- **Body**: 

#### Analysis

#### Edge Case
- (e.g., GET /users/9999 for a non-existent user)

---

### 3. POST /posts – Create a new post
#### Request
- **URL**: https://jsonplaceholder.typicode.com/posts
- **Method**: POST
- **Headers**: Content-Type: application/json
- **Body**: { "title": "...", "body": "..." }

#### Response
- **Status code**: 
- **Headers**: 
- **Body**: 

#### Analysis

#### Edge Case
- (e.g., POST /posts with missing required fields)

---

### 4. PUT /posts/1 – Update an existing post
#### Request
- **URL**: https://jsonplaceholder.typicode.com/posts/1
- **Method**: PUT
- **Headers**: Content-Type: application/json
- **Body**: { "title": "...", "body": "..." }

#### Response
- **Status code**: 
- **Headers**: 
- **Body**: 

#### Analysis

#### Edge Case
- (e.g., PUT /posts/9999 for a non-existent post)
