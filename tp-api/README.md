# Mock Third-Party API

## Deployment

### Local Deployment

To deploy the mock third-party API locally:

1. **Build and run the mock third-party database**:
   Refer to the [Mock Third-Party README]() for detailed instructions.

2. **Install Dependencies**:

   ```bash
   npm ci
   ```

3. **Run locally**:
   ```bash
   npm start
   ```
4. **Access the API**:
   You can now interact with the mock third-party API at `http://localhost:3007`.

### Docker Deployment

To deploy the mock API with Docker, follow these steps:

1. **Build and run the mock third-party database**:
   Refer to the [Mock Third-Party README]() for detailed instructions.

2. **Build the Docker Image**:

   ```bash
   docker build -t tp-api .
   ```

3. **Run the Docker Container**:

   ```bash
   docker run -d --name tp-api -p 3007:3007 tp-api
   ```

4. **Verify the Container is Running**:

   ```bash
   docker ps
   ```

5. **Access the API**:
   You can now interact with the mock third-party API at `http://localhost:3007`.
