# Node.js Todo List
This is my first project using Node
## Cloning the project
```Bash 
  git clone https://github.com/rodrigoqueiroz12/nodejs-todo-list.git

  cd ./nodejs-todo-list
```

## Create MySQL Database and Table
```sql
  CREATE DATABASE IF NOT EXISTS DATABASE_NAME;

  USE DATABASE_NAME;

  CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `created_at` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```

## Update the Backend .env file
```
  SERVER_PORT=YOUR_PORT

  DATABASE_HOST=localhost
  DATABASE_USER=DATABASE_USER
  DATABASE_PASSWORD=DATABASE_PASSWORD
  DATABASE_NAME=DATABASE_NAME
```

## Running Backend

```terminal
  cd ./backend

  npm install

  npm start
```

## Running Frontend

```bash
  cd ./frontend

  Run the Live Server VSCode extension 
```
    