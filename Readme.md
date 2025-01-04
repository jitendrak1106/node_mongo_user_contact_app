# CRUD API's
Create an User and Contacts application API using NodeJS, Experss, MongoDB
This is basic application where User can register, and login.
User can create contacts information
User can view its created contacts
User can Edit and Delete the contacts as well.
## About

This Repository is for beginners of NodeJS who wants to implement ReST API.

### Prerequisites

Following are the softwares requried to install.
* [Node.js](https://nodejs.org) - Chrome's V8 Javascript Engine
* [MongoDB](https://mongodb.org) - NoSQL Database

### Install the project

- Install the packages mentioned in package.json file for getting all dependencies of the project.
  <br/>
  
  ```bash
  npm install --save
  ```

- Starting the application using below command
  <br/>
  
  ```
  npm run dev
  ```
## API Endpoints
	You can test the API endpoints using POSTMAN or any other tools.

  - User Registration <br>
	- Method: POST
	- URL : /api/users/register
	- Payload: 
		```
		{
            "username":"amitabh",
            "email":"amitabh@gmail.com",
            "password":"amitabh@123"
        }
		```
    - Response:
        ```
        {
            "_id": "6778b04b92c2bffea1865095",
            "email": "amitabh@gmail.com"
        }
        ```
  - User Login <br>
	- Method : POST
	- URL : /api/users/login
    - Payload: 
		```
		{
            "email":"amitabh@gmail.com",
            "password":"amitabh@123"
        }
		```
	- Response:
		```
		{
            "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc3OGIwNGI5MmMyYmZmZWExODY1MDk1IiwiZW1haWwiOiJhbWl0YWJoQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiYW1pdGFiaCJ9LCJpYXQiOjE3MzU5NjI5NTEsImV4cCI6MTczNTk2Mzg1MX0.qZh1_4bwro3MYlEXSA8EwOqWfCc3szXcBBOvQ99iihU"
        }
		```

> Please note that below all Contact API requires access token to be provided in header

  - Create Contact <br>
	- Method : POST
	- URL : /api/contacts/
    - Payload: 
		```
		{
            "name":"Ravindra",
            "email":"ravindra@gmail.com",
            "phone":"6252417890"
        }
		```
	- Response:
		```
		{
            "user_id": "6778b04b92c2bffea1865095",
            "name": "Ravindra",
            "email": "ravindra@gmail.com",
            "phone": "6252417890",
            "_id": "6778f24e14b0cdb48756a83d",
            "createdAt": "2025-01-04T08:33:18.589Z",
            "updatedAt": "2025-01-04T08:33:18.589Z",
            "__v": 0
        }
		```

  - Get my all contacts <br>
	- Method: GET
	- URL : /api/contacts/

	- Response: 
		```
		[
            {
                "_id": "6778f24e14b0cdb48756a83d",
                "user_id": "6778b04b92c2bffea1865095",
                "name": "Ravindra",
                "email": "ravindra@gmail.com",
                "phone": "6252417890",
                "createdAt": "2025-01-04T08:33:18.589Z",
                "updatedAt": "2025-01-04T08:33:18.589Z",
                "__v": 0
            }
        ]
		```

  - Get particular contact <br>
	- Method: GET
	- URL : /api/contacts/6778f24e14b0cdb48756a83d

	- Response:
		```
		{
            "_id": "6778f24e14b0cdb48756a83d",
            "user_id": "6778b04b92c2bffea1865095",
            "name": "Ravindra",
            "email": "ravindra@gmail.com",
            "phone": "6252417890",
            "createdAt": "2025-01-04T08:33:18.589Z",
            "updatedAt": "2025-01-04T08:33:18.589Z",
            "__v": 0
        }
		```

  - Update Contact <br>
	- Method : PUT
	- URL : /api/contacts/6778f24e14b0cdb48756a83d
    - Payload: 
		```
		{
            "name":"Jitendra",
            "email":"jitendra@gmail.com",
            "phone":"0987321654"
        }
		```
	- Response:
		```
		{
            "_id": "6778f24e14b0cdb48756a83d",
            "user_id": "6778b04b92c2bffea1865095",
            "name": "Jitendra",
            "email": "jitendra@gmail.com",
            "phone": "0987321654",
            "createdAt": "2025-01-04T08:33:18.589Z",
            "updatedAt": "2025-01-04T08:40:41.911Z",
            "__v": 0
        }

  - DELETE particular contact <br>
	- Method: DELETE
	- URL : /api/contacts/6778f24e14b0cdb48756a83d

	- Response:
		```
		{
            "_id": "6778f24e14b0cdb48756a83d",
            "user_id": "6778b04b92c2bffea1865095",
            "name": "Jitendra",
            "email": "jitendra@gmail.com",
            "phone": "0987321654",
            "createdAt": "2025-01-04T08:33:18.589Z",
            "updatedAt": "2025-01-04T08:40:41.911Z",
            "__v": 0
        }
		```
		```

## Developers

* **Jitendra Kelhe** - [jitendrak1106](https://github.com/jitendrak1106)