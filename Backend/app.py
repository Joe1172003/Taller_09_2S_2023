from flask import Flask, request, jsonify, make_response
from flask_cors import *
import psycopg2

app = Flask(__name__)
CORS(app)

#Crear la base de datos
def createDatabase():
    try:
        conn = psycopg2.connect(
            host="db",
            database="postgres",
            user="postgres",
            password="postgres"
        )
        cursor = conn.cursor()
        cursor.execute("SELECT datname FROM pg_database WHERE datname = 'usuarios'")
        existe = cursor.fetchone()

        if not existe:
            cursor.execute("CREATE DATABASE usuarios")
            print("Base de datos creada.")
        else:
            print("Base de datos existente.")

        conn.commit()
        cursor.close()
        conn.close()

    except Exception as e:
        print("Error al crear la base de datos:", e)

def createTable():
    try:
        conn = psycopg2.connect(
            host="db",
            database="usuarios",
            user="postgres",
            password="postgres"
        )
        cursor = conn.cursor()
        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS Usuarios (
                ID SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE,
                nombre VARCHAR(50),
                apellido VARCHAR(50),
                correoelectronico VARCHAR(100) UNIQUE,
                contrasena VARCHAR(100)
            );
            """
        )
        conn.commit()
        cursor.close()
        conn.close()
        print("Tabla creada o existente.")
    except Exception as e:
        print("Error al crear la tabla:", e)

#Consultas
@app.route('/')
@cross_origin()
def index():
    return "¡Bienvenido a mi backend!"

@app.route('/create', methods=['POST'])
@cross_origin()
def crearUsuario():
    data = request.get_json()
    print(data)
    try: 
        conn = psycopg2.connect(
            host="db",
            database="usuarios",
            user="postgres",
            password="postgres"
        )
        cursor = conn.cursor()
        cursor.execute(
            'INSERT INTO usuarios (username, nombre, apellido, correoelectronico, contrasena) VALUES (%s, %s, %s, %s, %s)',
            (data['username'], data['nombre'], data['apellido'], data['correo'], data['password'])
        )
        conn.commit()
        cursor.close()
        print("Uusario creado correctamente.")
        return jsonify({'mensaje': '1'}), 201
    except psycopg2.IntegrityError as e:
        print("Ya existe:", e)
        return jsonify({'mensaje': '2'}), 400
    except Exception as e:
        print("Error al crear el usuario:", e)
        return jsonify({'mensaje': '3'}), 500

@app.route('/read', methods=['POST'])
@cross_origin()
def verificarUsuario():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    conn = psycopg2.connect(
        host="db",
        database="usuarios",
        user="postgres",
        password="postgres"
    )
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM usuarios WHERE username = %s AND contrasena = %s', (username, password))
    usuario = cursor.fetchone()
    cursor.close()

    print("Usuario Creado.")
    if usuario:
        return jsonify({'mensaje': '1'})
    return jsonify({'mensaje': '2'}), 404

@app.route('/update/<string:id>', methods=['PUT'])
@cross_origin()
def actualizarUsuario(id):
    data = request.get_json()

    try:
        if request.method == 'OPTIONS':
            response = make_response()
            response.headers.add('Access-Control-Allow-Origin', '*')
            response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
            response.headers.add('Access-Control-Allow-Methods', 'PUT')
            return response
        
        elif request.method == 'PUT':
            conn = psycopg2.connect(
                host="db",
                database="usuarios",
                user="postgres",
                password="postgres"
            )
            cursor = conn.cursor()

            cursor.execute('SELECT * FROM usuarios WHERE username = %s', (id,))
            usuario_existente = cursor.fetchone()

            if usuario_existente:
                cursor.execute(
                    'UPDATE usuarios SET contrasena = %s WHERE username = %s',
                    (data['password'], id)
                )
                conn.commit()
                cursor.close()
                conn.close()
                print("Usuario Actualizado.")
                return jsonify({'mensaje': '1'}), 200
            else:
                cursor.close()
                conn.close()
                print("Usuario no encontrado.")
                return jsonify({'mensaje': '2'}), 404

    except Exception as e:
        print("Error al actualizar el usuario:", e)
        return jsonify({'mensaje': '3'}), 500

@app.route('/delete/<string:id>', methods=['DELETE'])
@cross_origin()
def eliminarUsuario(id):
    try:
        if request.method == 'OPTIONS':
            response = make_response()
            response.headers.add('Access-Control-Allow-Origin', '*')
            response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
            response.headers.add('Access-Control-Allow-Methods', 'DELETE')
            return response
        elif request.method == 'DELETE':
            conn = psycopg2.connect(
                host="db",
                database="usuarios",
                user="postgres",
                password="postgres"
            )
            cursor = conn.cursor()

            cursor.execute('SELECT * FROM usuarios WHERE username = %s', (id,))
            existe = cursor.fetchone()

            if existe:
                cursor.execute('DELETE FROM usuarios WHERE username = %s', (id,))
                conn.commit()
                cursor.close()
                conn.close()
                print("Usuario Eliminado.")
                return jsonify({'mensaje': '1'}), 200
            else:
                cursor.close()
                conn.close()
                print("Usuario no encontrado.")
                return jsonify({'mensaje': '2'}), 404

    except Exception as e:
        print("Error al eliminar el usuario:", e)
        return jsonify({'mensaje': '3'}), 500


createDatabase()
createTable()

if __name__ == '__main__':
    app.run('0.0.0.0')

