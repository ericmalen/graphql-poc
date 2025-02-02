Proprietary DB

to run docker file individually:
1- docker build -t my-postgres .
2- docker run -d --name my-postgres -p 5432:5432 my-postgres
3- docker ps
4- docker exec -it my-postgres psql -U user -d mydb
5- \dt
