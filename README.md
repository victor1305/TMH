# Proyecto TMH

Este es un proyecto desarrollado con React, Next.js y TypeScript. Incluye una lista de productos con funcionalidad de filtrado, una página de perfil de usuario y una lista de tareas como parte de una prueba técnica

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1) Clona este repositorio:

```bash
git clone git@github.com:victor1305/TMH.git
cd TMH
```

2) Instala las dependencias:

```bash
npm install
```

## Ejecución del proyecto

```bash
npm run dev
```

El servidor estará disponible en http://localhost:3000. Abre tu navegador y accede a esta URL para ver el proyecto.


## Ejecución de las pruebas

```bash
npm test
```

## Estructura del proyecto

El proyecto sigue la estructura estándar de Next.js. Aquí algunos directorios importantes:

  - /components: Contiene todos los componentes reutilizables del proyecto.
  - /pages: Define las rutas y páginas principales de la aplicación.
  - /lib: Incluye funciones auxiliares y definiciones de tipos.


## Funcionalidades principales

  - Lista de Productos con Filtro:

  - Permite filtrar productos por nombre en tiempo real.
  - Los datos de los productos son obtenidos desde una API ficticia.
  - Página de Perfil de Usuario: Muestra información básica del usuario, como nombre, correo electrónico y foto de perfil.
  - Lista de Tareas: Permite agregar y eliminar tareas en una lista interactiva.