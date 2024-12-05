<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

##I used the following packages:

- @nestjs/typeorm: For database integration.
- typeorm: ORM for interacting with Postgres.
- pg: PostgreSQL driver.
- firebase-admin: For Firebase Authentication.
- class-validator/class-transformer: For input validation.
- multer: For handling file uploads (image storage).

##Set up Firebase in your client app using your Firebase configuration:

```bash
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_AUTH_DOMAIN",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_STORAGE_BUCKET",
messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
```

##Authenticate User and Obtain Token
#For example, sign in a user with email and password:

```bash
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

async function login(email, password) {
try {
const userCredential = await signInWithEmailAndPassword(auth, email, password);
const user = userCredential.user;
const token = await user.getIdToken(); // Get the ID token
console.log('ID Token:', token);
return token;
} catch (error) {
console.error('Error logging in:', error);
}
}
```

## API Endpoints

- POST /auth/login
- POST /auth/register
- GET /posts
- GET /posts/:id
- POST /posts
- PUT /posts/:id
- DELETE /posts/:id

```bash

{
  "apis": [
    {
      "method": "GET",
      "endpoint": "/posts",
      "description": "Fetch all posts.",
      "request_params": {},
      "response": {
        "status": 200,
        "body": [
          {
            "id": 1,
            "title": "Post Title 1",
            "content": "Content for post 1",
            "createdAt": "2024-12-05T06:30:00Z"
          },
          {
            "id": 2,
            "title": "Post Title 2",
            "content": "Content for post 2",
            "createdAt": "2024-12-05T06:35:00Z"
          }
        ]
      }
    },
    {
      "method": "GET",
      "endpoint": "/posts/:id",
      "description": "Fetch a single post by its ID.",
      "request_params": {
        "id": "The ID of the post to retrieve."
      },
      "response": {
        "status": 200,
        "body": {
          "id": 1,
          "title": "Post Title 1",
          "content": "Content for post 1",
          "createdAt": "2024-12-05T06:30:00Z"
        }
      },
      "error_response": {
        "status": 404,
        "body": {
          "message": "Post not found",
          "statusCode": 404
        }
      }
    },
    {
      "method": "POST",
      "endpoint": "/posts",
      "description": "Create a new blog post.",
      "request_body": {
        "title": "New Post Title",
        "content": "This is the content of the new post"
      },
      "response": {
        "status": 201,
        "body": {
          "id": 3,
          "title": "New Post Title",
          "content": "This is the content of the new post",
          "createdAt": "2024-12-05T06:40:00Z"
        }
      }
    },
    {
      "method": "PUT",
      "endpoint": "/posts/:id",
      "description": "Update an existing post by its ID.",
      "request_params": {
        "id": "The ID of the post to update."
      },
      "request_body": {
        "title": "Updated Post Title",
        "content": "Updated content for the post"
      },
      "response": {
        "status": 200,
        "body": {
          "id": 1,
          "title": "Updated Post Title",
          "content": "Updated content for the post",
          "createdAt": "2024-12-05T06:30:00Z"
        }
      },
      "error_response": {
        "status": 404,
        "body": {
          "message": "Post not found",
          "statusCode": 404
        }
      }
    },
    {
      "method": "DELETE",
      "endpoint": "/posts/:id",
      "description": "Delete a post by its ID.",
      "request_params": {
        "id": "The ID of the post to delete."
      },
      "response": {
        "status": 200,
        "body": {
          "message": "Post deleted successfully"
        }
      },
      "error_response": {
        "status": 404,
        "body": {
          "message": "Post not found",
          "statusCode": 404
        }
      }
    },
    {
      "method": "POST",
      "endpoint": "/posts/set-role",
      "description": "Set the role of a user (Admin/User).",
      "request_body": {
        "userId": "some-user-id",
        "role": "admin"
      },
      "response": {
        "status": 200,
        "body": {
          "message": "Role updated successfully"
        }
      },
      "error_response": {
        "status": 400,
        "body": {
          "message": "Invalid role or user ID",
          "statusCode": 400
        }
      }
    },
    {
      "method": "POST",
      "endpoint": "/auth/login",
      "description": "Authenticate and login using Firebase token.",
      "request_body": {
        "token": "firebase-id-token"
      },
      "response": {
        "status": 200,
        "body": {
          "message": "Authentication successful",
          "userId": "user-id",
          "email": "user@example.com"
        }
      },
      "error_response": {
        "status": 401,
        "body": {
          "message": "Unauthorized: Missing or invalid token",
          "statusCode": 401
        }
      }
    }
  ]
}


```
