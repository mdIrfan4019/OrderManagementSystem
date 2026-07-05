# Backend Documentation

## Architecture

```
Routes

↓

Controllers

↓

Services

↓

Models

↓

MongoDB
```

---

## Folder Structure

```
config/

controllers/

cron/

middlewares/

models/

routes/

services/

utils/
```

---

## Config

### database.js

Creates MongoDB connection.

---

## Controllers

### orderController.js

Responsible for

- Create Order

- Get Orders

- Get Single Order

- Update Order

- Delete Order

---

### dashboardController.js

Returns dashboard statistics.

---

### schedulerController.js

Runs scheduler manually.

Returns scheduler logs.

---

## Services

Business logic layer.

No HTTP code.

Only database logic.

---

## Models

### Order

Stores

- Order ID

- Customer

- Phone

- Product

- Amount

- Payment Status

- Order Status

- Status History

---

### SchedulerLog

Stores

- Execution Time

- Orders Checked

- Orders Updated

- Status

- Message

---

## Middleware

asyncHandler

Global Error Handler

Not Found Handler

Rate Limiter

Scheduler Authentication

---

## Scheduler

Node Cron

Runs every five minutes.

Status Flow

PLACED

↓

PROCESSING

↓

READY_TO_SHIP

---

## Utilities

ApiResponse

ApiError

GenerateOrderId