# Nutriscore

<div align="center" width="100%">
  
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink)
</div>

##  Features
NutriScore is an open source application for tracking user meals for the day and displaying calories, protein, carbs, etc. for each food item as well as a daily total. 

1. **JWTs and bycrypt**: Secure storage of user data and authenticated user sessions.
2. **Intuitive User Interface**: NutriScore is built with the user in mind! An intuitive main page with easy navigation between the different pages.
3. **Chart JS**: NutriScore utilizes Chart JS to display a graph of the breakdown of macros for each day.

## Installation
1. Ensure that you have the required prerequisites installed:
  - [npm](https://www.npmjs.com/)
2. Fork and clone the repository
3. Navigate to the root project directory and install dependencies
```bash
npm install
```
4. In the client directory, to start the client run npm run dev
```bash
cd client
npm run dev
```
5. In another terminal, cd into server and run npm run dev
```bash
cd server
npm install
npm run dev
```
6. Create a .env file in the server folder that contains the following variables
```bash
DB_URI = 
API_KEY = 
SECRET_KEY = 
```
