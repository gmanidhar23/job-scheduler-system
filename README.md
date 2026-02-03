# Job Scheduler & Automation System

## Tech Stack
Frontend: Next.js, Tailwind  
Backend: Node.js, Express  
Database: MySQL  

## Setup

### Backend
npm install  
npm run dev  

### Frontend
npm install  
npm run dev  

### Database
Create table:

CREATE TABLE jobs (
 id INT AUTO_INCREMENT PRIMARY KEY,
 taskName VARCHAR(255),
 payload JSON,
 priority ENUM('Low','Medium','High'),
 status ENUM('pending','running','completed'),
 createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

## API

POST /jobs  
GET /jobs  
GET /jobs/:id  
POST /run-job/:id  

## Webhook

Triggered when job completes and sends payload to webhook.site URL.

## Architecture

Frontend → REST API → MySQL → Job Runner → Webhook

## AI Usage

Used ChatGPT (GPT-4.1) for:
- Webhook logic
