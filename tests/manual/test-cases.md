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
- **Headers**: (if any)
- **Body**: N/A

#### Response
- **Status code**: 
- **Headers**: 
- **Body**: 

#### Analysis

#### Edge Case
- (e.g., GET /users with an invalid query parameter)

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
