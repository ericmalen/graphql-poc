# GraphQL POC (Proof of Concept)

## Overview

This repository is proof of concept to test the capabilities of GraphQL Yoga. The goal is to explore how GraphQL can serve as a single source of truth in an application architecture, especially in scenarios where data is fetched from both a proprietary database and a third-party REST API. The POC also aims to provide insights for the adoption of GraphQL as an API in a different project.

## Project Status

### Completed:

- Individual Dockerfiles and Docker Compose setup
- Basic REST API using Express.js
- Initial database implementations
- GraphQL API structure with server setup and basic queries

### Ongoing Work:

- GraphQL mutations and complex queries
- Refactoring database schemas
- Schema diagrams
- Interaction diagram

## Installation & Deployment

### Prerequisites

- Docker and Docker Compose
- Node.js and npm

### Setup Instructions

1. **Clone the Repository**:
   Clone the repository and navigate to the root directory:

   ```bash
   git clone https://github.com/your-username/graphql-poc.git
   cd graphql-poc
   ```

2. **Build and Deploy the Services**:
   Once you have cloned the repository, you can build and deploy the services using Docker Compose:

   ```bash
   docker-compose up --build
   ```

   If you prefer to run the services in detached mode, you can use:

   ```bash
   docker-compose up -d --build
   ```

   This command will:

   - Build the Docker images for all services
   - Run all containers

3. **Access the GraphQL Playground**:
   After the services have been deployed, you can access the GraphQL API at the following URL:

   ```bash
   http://localhost:4000/graphql
   ```

   This will bring up the GraphQL Playground (GraphiQL IDE), where you can interact with the API using queries and mutations.

4. **Access the GraphQL API Endpoint**:
   Alternatively, you can directly interact with the API by sending HTTP requests to:
   ```bash
   http://localhost:4000/graphql
   ```

### Individual Services

Each service can be containerized and deployed independently for testing purposes.

For more details on how to run the services independently, refer to the README files located in their respective directories.

## Usage

Once deployed, users can:

- **Interact with the GraphQL API**:

  - Access the GraphQL Playground at `http://localhost:4000/graphql` to explore and test queries and mutations
  - Use the `POST` method to send GraphQL queries and mutations directly to `http://localhost:4000/graphql`

- **Individual Service Access**:
  If you'd like to test any individual service separately, you can access them by:
  - Running `docker exec -it p-postgres psql -U user -d mydb` (Mock Proprietary Database)
  - Running `docker exec -it tp-postgres psql -U user -d tpdb` (Mock Third-Party Database)
  - Sending an HTTP request to `localhost:3007/{endpoint}` (Mock Third-Party API)

## To-Do

- **Security**:
  - Implement authentication mechanisms
  - Apply defense-in-depth security measures
  - Configure for Zero Trust architecture
- **Refactor Databases**:
  - Redesign both databases
- **Database Schema Diagrams**:
  - Add diagrams to visually represent the database schemas
- **Service Interaction Diagram**:
  - Add a diagram that demonstrates how the different services interact in the architecture
