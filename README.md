# BUNKER STUDIO - Frontend

Página web moderna para BUNKER STUDIO - Diseño Gráfico y Contenido Audiovisual.

## 📁 Estructura del Proyecto

```
front-bunker/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── SocialMediaPacks.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── Dashboard.jsx    # Panel de administración
│   ├── pages/              # Páginas principales
│   │   └── Landing.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── public/                 # Archivos estáticos
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json            # Configuración para Vercel
└── .env.example           # Variables de ejemplo

```

## 🚀 Instalación y Uso

### Prerequisitos
- Node.js 16+ 
- npm o yarn

### Instalación

```bash
# Entrar a la carpeta del proyecto
cd front-bunker

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# El servidor estará en: http://localhost:5173
```

### Build para Producción

```bash
# Crear build optimizado
npm run build

# Ver preview del build
npm run preview
```

## 🛠️ Tecnologías Utilizadas

- **React 19** - Framework UI
- **Vite** - Bundler rápido
- **Tailwind CSS 4** - Estilos CSS utility
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos SVG
- **React Scroll** - Navegación smooth scroll

## 🔧 Configuración

### Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto (copiar desde `.env.example`):

```env
VITE_API_URL=https://bunker-api-he07.onrender.com
VITE_ADMIN_PASSWORD=BunkerAdmin2026
```

### API Endpoints

- **Base URL**: `https://bunker-api-he07.onrender.com`
- **Crear contacto**: `POST /api/contactos`
- **Obtener contactos**: `GET /api/contactos` (requiere header `x-admin-key`)

## 📱 Responsividad

El proyecto está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 🖥️ Desktops (1024px+)

## 🎨 Componentes Principales

### Navbar
Barra de navegación fija con links smooth-scroll a todas las secciones.

### Hero
Sección principal con animaciones y tipografía grande.

### Services
Tarjetas de servicios con efecto hover interactivo.

### SocialMediaPacks
Packs de servicios con información de características.

### ContactForm
Formulario conectado a la API backend.

### Dashboard
Panel de administración para ver leads (requiere autenticación).

### Footer
Pie de página con links a redes sociales.

## 🔐 Seguridad

- Credenciales de admin almacenadas en variables de entorno
- No expongas `VITE_ADMIN_PASSWORD` en el código
- Usa HTTPS en producción

## 📦 Deployment

### En Vercel

1. Conectar repositorio a Vercel
2. Las variables de entorno se configuran en el panel
3. El `vercel.json` maneja automáticamente la configuración de SPA

### En otras plataformas

- Asegurate de compilar con: `npm run build`
- Servir la carpeta `dist/` como raíz estática
- Configurar fallback a `index.html` para SPA routing

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o PR.

## 📄 Licencia

Proyecto privado © 2026 BUNKER STUDIO
