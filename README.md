# Task Management Angular App

A responsive Angular task tracker with add, delete, and reminder workflows backed by a local JSON API.

## Features

- View a task list
- Add and delete tasks
- Toggle reminder emphasis
- Show or hide the add-task form
- About route and reusable standalone components
- Unit tests for components and services
- Separate development and production API URLs

## Technology

Angular 22, TypeScript, RxJS, Font Awesome, Vitest, and JSON Server.

## Run locally

Prerequisites: Node.js and npm.

1. Install dependencies:

   ```powershell
   npm ci
   ```

2. Start the local API in the first terminal:

   ```powershell
   npm run server
   ```

   JSON Server reads `db.json` and serves tasks at `http://localhost:5000/tasks`.

3. Start Angular in a second terminal:

   ```powershell
   npm start
   ```

4. Open `http://localhost:4200`.

## Validate

```powershell
npm test -- --watch=false
npm run build
```

The production build uses `/api`. A real deployment must route that path to a compatible backend or replace the production environment URL.

