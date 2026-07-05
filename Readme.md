# Order Management System

A full-stack Order Management System built using **Node.js, Express.js, React.js, MongoDB, and Node-Cron**.

This application demonstrates REST API development, React dashboard implementation, MongoDB database design, and scheduled background jobs.

---

## Features

### Backend

- Create Order
- Get All Orders
- Get Single Order
- Update Order
- Delete Order
- Dashboard Statistics API
- Scheduler Logs API
- Automatic Order Status Scheduler
- Scheduler Execution Logs
- Pagination
- Search
- Status Filter
- Rate Limiting
- Global Error Handling
- Secure Scheduler API

### Frontend

- Dashboard
- Orders Management
- Create Order
- Scheduler Logs
- Search Orders
- Status Filter
- Pagination
- Loading State
- Empty State
- Refresh Button

---

## Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Node Cron
- Morgan
- Dotenv

---

## Folder Structure

```
OrderManagementSystem

Backend/

Frontend/

README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend

```bash
cd Backend

npm install

npm run dev
```

### Frontend

```bash
cd Frontend

npm install

npm run dev
```

---

## Environment Variables

### Backend

```
PORT=

MONGO_URI=

SCHEDULER_SECRET=
```

### Frontend

```
VITE_API_URL=http://localhost:5000/api
```

---

## API Endpoints

### Orders

POST /api/orders

GET /api/orders

GET /api/orders/:orderId

PATCH /api/orders/:orderId

DELETE /api/orders/:orderId

---

### Dashboard

GET /api/dashboard/stats

---

### Scheduler

POST /api/scheduler/run

GET /api/scheduler/logs

---

## Scheduler

A background cron job executes every five minutes.

Responsibilities:

- Fetch PLACED orders
- Update to PROCESSING after 10 minutes
- Update PROCESSING orders to READY_TO_SHIP after 20 minutes
- Save scheduler execution logs

---

## Deployment

Backend

Render

Frontend

Vercel

MongoDB

MongoDB Atlas

---

## Future Improvements

- Authentication
- Role Based Access
- Email Notifications
- Export Orders
- Charts & Analytics
- Unit Testing

---

## Author

Md. Irfan