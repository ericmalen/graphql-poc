FROM postgres:latest

ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_DB=tpdb

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
