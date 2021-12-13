# Duly_Noted

Duly Noted is a note-taking app.

* Technologies Used

* Javascript
  * CSS
  * HTML
  * Express
  * Postgres
  * Sequelize
  * React

* MVP
  * Hosted on Heroku
  * New Account Creation, Login, Demo Login
    * Users can sign up, sign in, and log out
    * Users can use demo button to login to see all the features
  * Books
    * Users can create, edit, and delete books
  * Notes
    * Users can create, edit, and delete notes
  * Search
    * Users can use the search bar to search for notes

* Instructions
  * Git clone https://github.com/andrwtran/duly-noted.git
  * Run npm install
  * Install postgres
  * Create a new user in postgres (credentials in env.example)
  * Create a .env file (copy env.example)
  * Run npx dotenv sequelize db:create
  * Run npx dotenv sequelize db:migrate
  * Run npx dotenv sequelize db:seed:all
  * Change directory to /frontend and run npm start
  * Change directory to /backend and run npm start
  * Use demo login or create own user

* Dependencies
  * "js-cookie": "^3.0.1",
  * "react": "^17.0.2",
  * "react-dom": "^17.0.2",
  * "react-redux": "^7.2.6",
  * "react-router-dom": "^5.3.0",
  * "react-scripts": "4.0.3",
  * "redux": "^4.1.2",
  * "redux-thunk": "^2.4.1"
  * "bcryptjs": "^2.4.3",
  * "cookie-parser": "^1.4.6",
  * "cors": "^2.8.5",
  * "csurf": "^1.11.0",
  * "dotenv": "^10.0.0",
  * "express": "^4.17.1",
  * "express-async-handler": "^1.2.0",
  * "express-validator": "^6.13.0",
  * "faker": "^5.5.3",
  * "helmet": "^4.6.0",
  * "jsonwebtoken": "^8.5.1",
  * "morgan": "^1.10.0",
  * "per-env": "^1.0.2",
  * "pg": "^8.7.1",
  * "sequelize": "^5.22.4",
  * "sequelize-cli": "^5.5.1"
