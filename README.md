


# Ontrax - Sistema de Gestión de Proyectos

![Ontrax](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-6.3.5-green)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.6-blue)

**Ontrax** es una aplicación web moderna de gestión de proyectos desarrollada con React, TypeScript y Vite. Permite a los equipos organizar, gestionar y colaborar en proyectos de manera eficiente a través de una interfaz intuitiva y funcional.

## 🚀 Características Principales

### 📊 Gestión de Proyectos
- **Dashboard centralizado** para visualizar todos los proyectos [1](#0-0) 
- **Creación y edición** de proyectos con información detallada [2](#0-1) 
- **Sistema de roles** diferenciado entre Manager y Colaborador [3](#0-2) 

### ✅ Gestión de Tareas
- **Interfaz tipo Kanban** para organización visual de tareas [4](#0-3) 
- **Estados de tareas** configurables (pending, onHold, inProgress, under_review, completed) [5](#0-4) 
- **Funcionalidad drag-and-drop** para cambio de estados
- **Sistema de notas** para cada tarea [6](#0-5) 

### 👥 Gestión de Equipos
- **Administración de colaboradores** por proyecto [7](#0-6) 
- **Control de permisos** basado en roles [8](#0-7) 
- **Gestión de miembros del equipo** [9](#0-8) 

### 🔐 Sistema de Autenticación
- **Registro e inicio de sesión** completo [10](#0-9) 
- **Confirmación de cuenta** por token [11](#0-10) 
- **Recuperación de contraseña** [12](#0-11) 
- **Gestión de perfil** de usuario [13](#0-12) 

## 🛠️ Tecnologías Utilizadas

### Frontend Core
- **React 19.1.0** - Biblioteca principal para la interfaz de usuario [14](#0-13) 
- **TypeScript 5.8.3** - Tipado estático para JavaScript [15](#0-14) 
- **Vite 6.3.5** - Build tool y servidor de desarrollo [16](#0-15) 

### Gestión de Estado y Datos
- **TanStack React Query 5.76.0** - Manejo de estado del servidor y cache [17](#0-16) 
- **React Hook Form 7.56.3** - Gestión de formularios [18](#0-17) 
- **Zod 3.24.4** - Validación de esquemas y tipos [19](#0-18) 

### UI/UX
- **TailwindCSS 4.1.6** - Framework de utilidades CSS [20](#0-19) 
- **Headless UI** - Componentes accesibles sin estilos [21](#0-20) 
- **Heroicons** - Biblioteca de iconos [22](#0-21) 

### Funcionalidades Adicionales
- **React Router Dom 7.6.0** - Enrutamiento del lado del cliente [23](#0-22) 
- **DND Kit** - Funcionalidad drag-and-drop [24](#0-23) 
- **React Toastify** - Notificaciones toast [25](#0-24) 
- **Axios** - Cliente HTTP para API calls [26](#0-25) 

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn
- Conexión a la API backend de Ontrax

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/devAyyoub/ontrax_frontend.git
cd ontrax_frontend
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env en la raíz del proyecto
cp .env.example .env
```

4. **Iniciar servidor de desarrollo** [27](#0-26) 
```bash
npm run dev
```

5. **Construir para producción** [28](#0-27) 
```bash
npm run build
```

## 🚀 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo [27](#0-26)  |
| `npm run build` | Construye la aplicación para producción [28](#0-27)  |
| `npm run lint` | Ejecuta ESLint para verificar calidad del código [29](#0-28)  |
| `npm run preview` | Previsualiza la build de producción [30](#0-29)  |

## 📁 Estructura del Proyecto

```
src/
├── api/              # Servicios de API
├── components/       # Componentes reutilizables
├── hooks/           # Custom hooks
├── layouts/         # Layouts de página
├── lib/             # Utilidades y configuraciones
├── locales/         # Archivos de internacionalización
├── types/           # Definiciones de tipos TypeScript
├── utils/           # Funciones de utilidad
├── views/           # Páginas/vistas de la aplicación
├── main.tsx         # Punto de entrada principal
└── router.tsx       # Configuración de rutas
```

## 🔧 Configuración

### Alias de rutas
El proyecto utiliza alias `@` para importaciones relativas a la carpeta `src` [32](#0-31) 

### TypeScript
Configuración completa con tipos estrictos y resolución de módulos optimizada [15](#0-14) 

## 🌐 Funcionalidades de la Aplicación

### Autenticación
- Registro de nuevos usuarios
- Inicio de sesión
- Confirmación de cuenta por email
- Recuperación de contraseña
- Gestión de perfil de usuario

### Dashboard
- Vista general de todos los proyectos del usuario
- Diferenciación visual entre proyectos como Manager o Colaborador
- Acceso rápido a acciones de proyecto

### Gestión de Proyectos
- Crear nuevos proyectos con información detallada
- Editar proyectos existentes (solo Managers)
- Eliminar proyectos (solo Managers)
- Ver detalles completos del proyecto

### Gestión de Tareas
- Crear tareas dentro de proyectos
- Organizar tareas en tablero Kanban
- Cambiar estados de tareas con drag-and-drop
- Asignar tareas a miembros del equipo
- Agregar notas y comentarios a tareas

### Gestión de Equipos
- Invitar colaboradores a proyectos
- Gestionar permisos de miembros
- Ver información del equipo

## 📱 Responsive Design

La aplicación está completamente optimizada para dispositivos móviles y de escritorio utilizando TailwindCSS y diseño responsive.

## 🔒 Seguridad

- Autenticación basada en tokens
- Validación de permisos por rol
- Validación de formularios con Zod
- Protección de rutas sensibles

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y pertenece a devAyyoub.

## 📞 Contacto

Para consultas sobre el proyecto, contactar al correo: Ayyoubamjahed@gmail.com .

---

**Ontrax** - Gestión de proyectos simplificada y eficiente.


