# LuchaDeMonstruos Backend

## Descripción del Proyecto

Este es el backend del proyecto **LuchaDeMonstruos**, el cual proporciona los endpoints necesarios para que la parte de frontend (**LuchaDeMonstruosFront**) permita a los usuarios seleccionar villanos con bonificaciones, asignarlas a monstruos y enfrentarlos en batallas. Los atributos y habilidades de los monstruos se modifican de acuerdo con las bonificaciones aplicadas por el villano seleccionado.

## Características Principales
- CRUD para Villanos, Monstruos, Atributos y Bonificaciones.
- Relación entre Villanos y Monstruos, con bonificaciones aplicadas a atributos específicos.
- Generación de datos iniciales usando un script SQL.
- Configuración de Docker para desplegar una base de datos MySQL.

## Estructura de la Base de Datos
La base de datos cuenta con las siguientes tablas:

1. **Villanos**: Contiene información sobre los villanos y sus títulos.
2. **Monstruos**: Contiene información sobre los monstruos, incluyendo su asociación con villanos.
3. **AtributosMonstruos**: Define los atributos disponibles (Ataque, Defensa, Puntos de Vida).
4. **AtributosMonstruos_has_Monstruos**: Relaciona atributos con monstruos, asignándoles valores específicos.
5. **BonificacionVillanos**: Define las bonificaciones que un villano puede aplicar a los atributos de los monstruos.

## Requisitos Previos

1. Docker y Docker Compose instalados.
2. Node.js y npm instalados (opcional para desarrollo local sin Docker).
3. MySQL Client (para administración manual, opcional).

## Configuración del Entorno

Cree un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
DB_HOST=localhost
     DB_PORT=3006
     APP_HOST=
     APP_PORT=3001
     DB_USER=jorge
     DB_PASSWORD=1234
     DB_NAME=LuchadeMonstruos
     SESSION_SECRET=
     DB_DIALECT=mysql
```

## Instalación y Uso

### 1. Configurar Docker

Asegúrese de que Docker esté ejecutándose y configure el archivo `docker-compose.yml` si es necesario:

```yaml
services:
    db:
        container_name: ${DB_HOST}
        image: mysql:8.0
        restart: unless-stopped
        environment:
            MYSQL_ROOT_PASSWORD: ${DB_PASSWORD}
            MYSQL_USER: ${DB_USER}
            MYSQL_PASSWORD: ${DB_PASSWORD}
            MYSQL_DATABASE: ${DB_NAME}
        ports:
            - ${DB_PORT}:3306
        volumes:
            - ./mySQL/scripts:/docker-entrypoint-initdb.d:ro
            - ./mySQL/conf/mycustom.cnf:/etc/mysql/conf.d/custom.cnf:ro
            - /var/lib/mysql
```

### 2. Inicializar la Base de Datos

Incluya los siguientes scripts SQL en `./mySQL/scripts` para que se ejecuten al iniciar el contenedor:

- **Esquema de la Base de Datos:**
  ```sql
  CREATE DATABASE IF NOT EXISTS `LuchadeMonstruos` /*!40100 DEFAULT CHARACTER SET utf8mb3 */;
  -- Tablas y relaciones descritas en la sección "Estructura de la Base de Datos".
  ```
- **Datos Iniciales:**
  ```sql
  INSERT INTO Villanos (idVillanos, Nombre, Titulo) VALUES ...
  INSERT INTO Monstruos (idMonstruos, Nombre, idVillanoMonstruo) VALUES ...
  INSERT INTO AtributosMonstruos (idAtributo, Nombre) VALUES ...
  INSERT INTO BonificacionVillanos (NombreBonificacion, Villanos_idVillanos, AtributosMonstruos_idAtributo, Valor) VALUES ...
  ```

### 3. Levantar el Proyecto

Ejecute el siguiente comando para inicializar el contenedor Docker:

```bash
docker-compose up -d
```

Esto iniciará un contenedor de MySQL y configurará la base de datos.

### 4. Ejecutar el Backend

1. Instale las dependencias del proyecto:
   ```bash
   npm install
   ```
2. Ejecute el servidor:
   ```bash
   npm start
   ```
3. El backend estará disponible en `http://localhost:3001`.

## Endpoints Disponibles

- **Villanos:**
  - `GET /villanos`: Obtener todos los villanos. 

- **Monstruos:**
  - `GET /monstruos`: Obtener todos los monstruos.  

## Tecnologías Utilizadas

- **Node.js**: Para la lógica del backend.
- **Express.js**: Framework para construir los endpoints.
- **MySQL**: Base de datos relacional para almacenar la información.
- **Docker**: Para facilitar la configuración y despliegue del entorno.

## Contribución

Si desea contribuir al proyecto, por favor siga los siguientes pasos:

1. Haga un fork del repositorio.
2. Cree una nueva rama:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realice los cambios y haga commits:
   ```bash
   git commit -m "Agregada nueva funcionalidad"
   ```
4. Envie un pull request.

## Licencia

Este proyecto está licenciado bajo los términos de [MIT License](LICENSE).

