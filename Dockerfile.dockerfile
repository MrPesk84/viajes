# Usa una imagen base de Ubuntu
FROM ubuntu:22.04

# Instala Apache y MySQL Server
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y apache2 mysql-server && \
    apt-get clean

# Expone los puertos de Apache y MySQL
EXPOSE 80 3306

# Inicia ambos servicios al arrancar el contenedor
CMD service mysql start && apachectl -D FOREGROUND