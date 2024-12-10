# Proyecto: Adopta tu Monstruo

## Descripción
"Adopta tu Monstruo" es una aplicación que permite asignar poderes a monstruos y gestionar la relación entre ellos. El proyecto utiliza una base de datos relacional con Sequelize para modelar relaciones de uno a muchos y de muchos a muchos entre los elementos principales: **monstruos**, **villanos** y **poderes**.

## Características
- Gestión de **monstruos** y sus atributos.
- Relación de **villanos** con monstruos.
- Asignación de **poderes** a monstruos mediante una relación de muchos a muchos.
- Evita duplicados al asignar poderes.
- API RESTful desarrollada con Node.js y Sequelize.

## Tecnologías Utilizadas
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework para la construcción de la API.
- **Sequelize**: ORM para manejar la base de datos.
- **MySQL**: Base de datos relacional.
- **ES Modules**: Sistema de módulos de JavaScript.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/adopta-tu-monstruo.git
   cd adopta-tu-monstruo
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto.
   - Añade las siguientes variables:
     ```env
     DB_HOST=localhost
     DB_PORT=3306
     APP_HOST=
     APP_PORT=3001
     DB_USER=jorge
     DB_PASSWORD=1234
     DB_NAME=adoptaTuMonstruo
     SESSION_SECRET=
     DB_DIALECT=mysql
     ```

4. Genera las tablas en la base de datos:
   ```bash
   npm run migrate
   ```

5. (Opcional) Carga datos iniciales:
   ```bash
   npm run seed
   ```

6. Inicia el servidor:
   ```bash
   npm start
   ```

## Endpoints de la API

### Monstruos
- **GET /api/monstruos**: Obtiene todos los monstruos.
- **POST /api/monstruos**: Crea un nuevo monstruo.

### Villanos
- **GET /api/villanos**: Obtiene todos los villanos.
- **POST /api/villanos**: Crea un nuevo villano.

### Poderes
- **GET /api/poderes**: Obtiene todos los poderes.
- **POST /api/poderes**: Crea un nuevo poder.

### Asignación de Poderes
- **POST /api/monstruos/asignar-poderes**: Asigna poderes a los monstruos de forma aleatoria.
  - Parámetros opcionales:
    - `num`: Número de asignaciones a realizar.

## Estructura del Proyecto
```
/adopta-tu-monstruo
├── /models
│   ├── monstruo.js
│   ├── villano.js
│   ├── poder.js
│   ├── poderesMonstruos.js
│   └── index.js
├── /routes
│   ├── monstruos.js
│   ├── villanos.js
│   ├── poderes.js
│   └── index.js
├── /controllers
│   ├── monstruosController.js
│   ├── villanosController.js
│   ├── poderesController.js
│   └── asignarPoderesController.js
├── /migrations
├── /seeders
├── app.js
├── package.json
├── .env
└── README.md
```

## Funcionalidades en Proceso
- Asignación de múltiples poderes a un solo monstruo en una sola operación.
- Implementación de límites de asignación por monstruo.

## Contribución
1. Haz un fork del proyecto.
2. Crea una nueva rama:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commits:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Sube tus cambios:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un Pull Request.

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

