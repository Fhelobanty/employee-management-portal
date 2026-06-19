# Employee Management Portal – AWS DevOps CI/CD Project 1 as a CodeAlpha Intern

## Project Overview

The Employee Management Portal is a full-stack cloud-native application designed to demonstrate modern DevOps practices using Amazon Web Services (AWS).

The application allows organizations to manage employee records through a web interface while implementing an end-to-end DevOps workflow including:

* Source Code Management with GitHub
* Continuous Integration and Continuous Delivery (CI/CD)
* Containerization with Docker
* Image Management using Amazon Elastic Container Registry (ECR)
* Container Orchestration using Amazon ECS Fargate
* Managed PostgreSQL Database using Amazon RDS
* Centralized Logging with Amazon CloudWatch
* Infrastructure Deployment on AWS

This project was developed as part of CodeAlpha DevOps engineering internship practical exercise and demonstrates the complete lifecycle of building, packaging, deploying, monitoring and managing a cloud application.

---

# Architecture

```text
GitHub Repository
        │
        ▼
     Jenkins
        │
        ▼
Docker Build Process
        │
        ▼
Amazon ECR
        │
        ▼
Amazon ECS Fargate
        │
        ▼
Node.js Backend API
        │
        ▼
Amazon RDS PostgreSQL

Frontend (React + Vite)
        │
        ▼
Amazon ECS Fargate

Monitoring
        │
        ▼
Amazon CloudWatch
```

---

# Technology Stack

## Frontend

* React.js
* Vite
* JavaScript
* CSS

## Backend

* Node.js
* Express.js

## Database

* PostgreSQL
* Amazon RDS

## DevOps Tools

* Git
* GitHub
* Jenkins
* Docker

## AWS Services

* Amazon ECS Fargate
* Amazon ECR
* Amazon RDS PostgreSQL
* Amazon CloudWatch
* IAM
* VPC
* Security Groups

---

# Project Features

* Employee creation
* Employee retrieval
* Employee update
* Employee deletion
* RESTful API architecture
* PostgreSQL persistent storage
* Cloud deployment
* Containerized services
* Centralized log management
* Automated deployment workflow

---

# Repository Structure

```text
employee-management-portal
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── database
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   ├── public
│   ├── vite.config.js
│   └── package.json
│
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
└── README.md
```

---

# CI/CD Pipeline

The project implements a Jenkins pipeline that automates application build processes.

Pipeline stages include:

### Stage 1 – Source Code Checkout

Jenkins retrieves the latest code from GitHub.

### Stage 2 – Backend Dependency Installation

```bash
npm install
```

### Stage 3 – Frontend Dependency Installation

```bash
npm install
```

### Stage 4 – Docker Image Build

Backend image:

```bash
docker build -t employee-backend .
```

Frontend image:

```bash
docker build -t employee-frontend .
```

### Stage 5 – Container Validation

Docker images are verified before deployment.

### Stage 6 – Deployment to AWS

Docker images are pushed to Amazon ECR and deployed to Amazon ECS Fargate.

---

# Docker Containerization

Both frontend and backend services were containerized using Docker.

Benefits:

* Consistent environments
* Portability
* Simplified deployment
* Scalability

---

# Amazon Elastic Container Registry (ECR)

Two repositories were created:

### Backend Repository

```text
employee-backend
```

### Frontend Repository

```text
employee-frontend
```

ECR stores Docker images used by ECS during deployments.

---

# Amazon ECS Fargate Deployment

The application was deployed using:

* ECS Cluster
* ECS Services
* Fargate Launch Type

Services:

### Backend Service

```text
employee-backend-service
```

### Frontend Service

```text
employee-frontend-service
```

Advantages:

* Serverless container management
* Automatic scaling
* Reduced infrastructure management

---

# Amazon RDS PostgreSQL

The project uses Amazon RDS PostgreSQL as the managed relational database service.

### Database Information

Database Engine:

```text
PostgreSQL
```

Database Instance:

```text
employee-postgres
```

Benefits:

* Managed backups
* High availability options
* Secure connectivity
* Persistent storage

---

# Database Validation

Database connectivity was successfully verified through ECS logs.

Successful backend startup log:

```text
DATABASE CONNECTED SUCCESSFULLY
DATABASE TABLES VERIFIED
```

This confirms:

* ECS can reach RDS
* Credentials are valid
* Database tables were created successfully

---

# CloudWatch Monitoring

Amazon CloudWatch was configured for centralized logging.

Backend logs capture:

* Application startup
* Database connections
* Runtime events
* Error tracking

Example:

```text
DATABASE CONNECTED SUCCESSFULLY
DATABASE TABLES VERIFIED
Server running on port 5000
```

---

# API Validation

The deployed backend API was successfully tested.

Example endpoint:

```text
http://18.206.152.187:5000/api/employees
```

Result:

* Employee records returned successfully
* Database connectivity confirmed
* API functionality verified

---

# Security Implementation

The project uses AWS security best practices:

* IAM-based permissions
* Security Groups
* VPC isolation
* Managed RDS authentication
* Private ECR image storage

---

# Learning Outcomes

This project provided hands-on experience with:

* DevOps lifecycle
* CI/CD implementation
* Docker containerization
* Cloud-native deployments
* AWS ECS Fargate
* AWS ECR
* AWS RDS
* AWS CloudWatch
* Jenkins pipelines
* GitHub integration
* Infrastructure monitoring

---

# Screenshots


## Amazon ECR Repositories

<img width="1920" height="556" alt="image" src="https://github.com/user-attachments/assets/91bd1899-dd1a-4e8b-97e5-f81ef3bfa6df" />

---

## Amazon ECS Cluster

<img width="1920" height="491" alt="image" src="https://github.com/user-attachments/assets/b3320621-78b1-4b6a-b707-bce1d18c959b" />

---

## Amazon ECS Services

<img width="1913" height="720" alt="image" src="https://github.com/user-attachments/assets/e8176c50-434f-4282-8d78-af8661a6aed1" />
<img width="1920" height="634" alt="image" src="https://github.com/user-attachments/assets/cae477e7-3527-4339-a231-f216337544a7" />

---

## Amazon RDS PostgreSQL Instance

<img width="1920" height="958" alt="image" src="https://github.com/user-attachments/assets/d15bac4f-9758-4e99-a5ae-4eb83da42a31" />

---

## CloudWatch Logs

<img width="1920" height="707" alt="image" src="https://github.com/user-attachments/assets/87f0a5d4-fb77-4e94-9ca2-961c8fba572d" />
<img width="1920" height="968" alt="image" src="https://github.com/user-attachments/assets/58c8f16a-4a80-441e-94be-8cf37df6e564" />
<img width="1920" height="866" alt="image" src="https://github.com/user-attachments/assets/43e28655-a9d8-464d-a281-3fc17dc008ad" />


---

## Backend API Validation

<img width="1920" height="382" alt="image" src="https://github.com/user-attachments/assets/c55f8af4-d6bf-45f5-9027-f2436b391863" />


---

## Frontend Pages
<img width="1920" height="701" alt="Employee portal" src="https://github.com/user-attachments/assets/abeeb89d-7c3e-47a6-bfa2-5732ce858035" />
<img width="1908" height="997" alt="Employee portal 2" src="https://github.com/user-attachments/assets/e23c64f8-89b7-4c3b-92c2-ede141dd385f" />
<img width="1911" height="973" alt="Portal 3" src="https://github.com/user-attachments/assets/8f7707c6-7265-4a04-8f32-1fa41f0ebe43" />

---

# Future Improvements

* Application Load Balancer (ALB)
* HTTPS with AWS Certificate Manager
* Route 53 Domain Integration
* Auto Scaling Policies
* Infrastructure as Code using Terraform
* Blue/Green Deployments
* GitHub Webhook Automation
* AWS CodePipeline Integration

---

# Author

** Atoyebi Micheal Ademola **

CodeAlpha Internship DevOps Project 1

AWS • Docker • Jenkins • ECS • ECR • RDS • CloudWatch • GitHub
