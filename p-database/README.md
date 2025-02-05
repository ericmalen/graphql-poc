# Mock Proprietary Database

## Deployment

1. **Build the image**:

   ```bash
   docker build -t p-postgres .
   ```

2. **Run the container**:

   ```bash
   docker run -d --name p-postgres -p 5432:5432 p-postgres
   ```

3. **Verify the container is running**:

   ```bash
   docker ps
   ```

4. **Access the PostgreSQL terminal**:

   ```bash
   docker exec -it p-postgres psql -U user -d mydb
   ```

5. **List tables to verify successful initialization**:
   ```bash
   \dt
   ```

Here's the modified section with instructions on how to exit the PostgreSQL CLI:

## Usage

Once connected to the PostgreSQL terminal, you can:

- **Query the database:**

  ```sql
  SELECT * FROM users;
  ```

- **Exit the terminal**:

  ```bash
  \q
  ```
