# Rideau Canal Web Dashboard

## Overview

This repository contains the web dashboard component of the Rideau Canal Real‑Time Monitoring System.  
The dashboard provides a user‑friendly interface for visualizing real‑time ice safety and environmental conditions across multiple canal locations. It retrieves aggregated data from Azure Cosmos DB through a backend API and displays the latest safety status and measurements to end users.

The application is designed as a full‑stack web solution and is deployed to Azure App Service.

---

## Dashboard Features

- Displays real‑time safety status for multiple canal locations
- Shows aggregated environmental data, including:
  - Ice thickness
  - Surface temperature
  - Snow accumulation
- Color‑coded safety indicators:
  - **Safe**
  - **Caution**
  - **Unsafe**
- Location‑based summaries for quick comparison
- Responsive web interface accessible via browser
- Live data updates sourced from Azure Cosmos DB

---

## Technologies Used

- **Node.js** – Backend runtime environment
- **Express.js** – REST API framework
- **Azure Cosmos DB (NoSQL)** – Data storage for aggregated results
- **HTML, CSS, JavaScript** – Frontend web technologies
- **Azure App Service (Linux)** – Cloud hosting platform
- **GitHub Actions** – Continuous Integration and Deployment (CI/CD)
- **dotenv** – Environment variable management

---

## Prerequisites

Before running or deploying the web dashboard, ensure the following requirements are met:

- **Node.js 18 or higher**
- **npm** (comes with Node.js)
- An active **Azure subscription**
- An existing **Azure Cosmos DB (NoSQL) account**
- Aggregated sensor data available in Cosmos DB
- **GitHub account** (for CI/CD and deployment)
- Deployed **Azure App Service (Linux, Node.js)**

Optional but recommended:
- A modern web browser (Chrome, Edge, or Firefox)
- Local development environment such as **Visual Studio Code**

``
## Installation

Follow these steps to set up and run the web dashboard locally.

### 1. Clone the Repository


git clone https://github.com/RuaaThamer/rideau-canal-dashboard.git
cd rideau-canal-dashboard

### 2. Install Dependencies
Ensure Node.js and npm are installed, then run:

npm install

### 3. Environment Configuration
Create a .env file based on the provided example:
cp .env.example .env

Update .env with your Azure Cosmos DB details

Run the Application Locally
Start the backend server:

## 4. Configuration

The web dashboard uses environment variables to securely configure access to Azure services and runtime settings.

### Environment Variables

The application is configured using a `.env` file for local development and **Application Settings** when deployed to Azure App Service.

Create a `.env` file based

## API Endpoints

The backend API exposes RESTful endpoints that provide aggregated sensor data to the dashboard frontend. All data is retrieved from Azure Cosmos DB.

### GET /api/latest

Returns the most recent aggregated safety data for each canal location.

# Deployment to Azure App Service

The web dashboard is deployed to **Azure App Service** using **GitHub Actions** for continuous integration and deployment.

---

## Step‑by‑Step Deployment Guide

1.  **Create an Azure App Service** (Linux, Node.js runtime).
2.  **Connect the App Service** to the GitHub repository.
3.  **Configure environment variables** in Azure:
    * `COSMOS_DB_ENDPOINT`
    * `COSMOS_DB_KEY`
    * `COSMOS_DB_DATABASE`
    * `COSMOS_DB_CONTAINER`
4.  **Push code changes** to the `main` branch.
5.  **GitHub Actions** automatically builds and deploys the application.
6.  **Verify deployment** using the Azure App Service URL.

---

## Configuration Settings

All sensitive configuration values are stored as **environment variables** in Azure App Service.
Local development uses a `.env` file, while production uses **Azure Application Settings**. Secrets are never committed to version control.

---

## Dashboard Features

### Real‑Time Updates
* Displays the most recent aggregated sensor data.
* Automatically reflects new Stream Analytics results.

### Charts and Visualizations
* Location‑based summaries.
* Numeric indicators for ice thickness, temperature, and snow accumulation.
* Time‑ordered historical views via API endpoints.

### Safety Status Indicators
* Clear safety classification per location:
    * 🟢 **Safe**
    * 🟡 **Caution**
    * 🔴 **Unsafe**
* Color‑coded labels for quick interpretation.

---

## Troubleshooting

### Common Issues and Fixes

| Issue | Solution |
| :--- | :--- |
| **Dashboard does not load** | Verify Azure App Service deployment status. |
| **No data displayed** | Confirm Cosmos DB contains aggregated data. |
| **API returns errors** | Check environment variable configuration. |
| **503 Application Error** | Ensure app listens on `process.env.PORT`. |
| **Deployment fails** | Review GitHub Actions logs and Azure Log Stream. |
