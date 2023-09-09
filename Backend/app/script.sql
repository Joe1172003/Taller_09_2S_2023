-- Crear la base de datos
CREATE DATABASE Usuarios;

-- Conectar a la base de datos recién creada
\c Usuarios

-- Crear la tabla Usuarios
CREATE TABLE Usuarios (
    ID SERIAL PRIMARY KEY,
    Username VARCHAR(50) UNIQUE,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    CorreoElectronico VARCHAR(100) UNIQUE,
    Contrasena VARCHAR(100)
);

-- Salir del prompt de PostgreSQL
-- docker run --name postgre -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres --ip 172.17.0.10 -d postgres
\q
