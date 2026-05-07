# WAD Assignment 3b - Node Express MongoDB CRUD

## Aim
Create four APIs using Node.js, Express.js and MongoDB for CRUD operations on user data.

## Run Commands

```bash
npm install
npm start
```

MongoDB connection:

```text
mongodb://127.0.0.1:27017/wad_practical
```

## APIs

| Method | URL | Description |
|---|---|---|
| POST | /api/users | Create user |
| GET | /api/users | Read all users |
| PUT | /api/users/:id | Update user |
| DELETE | /api/users/:id | Delete user |

## Sample JSON

```json
{
  "name": "Amit",
  "email": "amit@example.com",
  "password": "12345",
  "city": "Pune"
}
```
