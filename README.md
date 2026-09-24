# DevOps Task Manager

A full-stack Task Manager application built with **React/Vite, Node.js/Express, and MongoDB Atlas**, with an automated **CI/CD pipeline using Jenkins, Docker, Docker Hub, and AWS EC2**.

## Tech Stack

* **Frontend:** React, Vite
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **DevOps:** Git, GitHub, Jenkins, Docker, Docker Hub
* **Cloud:** AWS EC2
* **Deployment:** SSH + Docker

## Features

* Create, update, and delete tasks
* REST API based backend
* MongoDB Atlas database integration
* Dockerized frontend and backend
* Automated CI/CD deployment

## CI/CD Pipeline

```text
Developer
   ↓
Git Push
   ↓
GitHub
   ↓
Webhook
   ↓
Jenkins
   ↓
Docker Build
   ↓
Docker Hub
   ↓
AWS EC2
   ↓
Docker Containers
```

## Deployment

The application runs as two separate Docker containers on AWS EC2:

```text
Frontend → Port 5173
Backend  → Port 5000
```

Jenkins automatically builds and pushes Docker images to Docker Hub and deploys the latest images to EC2.

## Project Structure

```text
devops-task-manager/
├── frontend/
├── backend/
├── docker-compose.yml
└── README.md
```

## Key DevOps Concepts

* Git-based version control
* GitHub Webhooks
* Jenkins CI/CD automation
* Docker image and container management
* Docker Hub image registry
* SSH-based EC2 deployment
* AWS EC2 hosting
