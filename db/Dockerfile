FROM mariadb:latest


ADD setup.sql /docker-entrypoint-initdb.d
CMD ["mysqld"]

EXPOSE 3306
