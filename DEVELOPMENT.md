# Bunker Studio - Configuración Local

## Variables de Entorno Locales

Crear archivo `.env.local` en la raíz:

```env
VITE_API_URL=http://localhost:5000
VITE_ADMIN_PASSWORD=BunkerAdmin2026
```

## Para Desarrollo Local

1. Asegúrate de que la API backend está corriendo en `http://localhost:5000`
2. O usa la URL de producción: `https://bunker-api-he07.onrender.com`

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea el build para producción
- `npm run preview` - Vista previa del build
- `npm run lint` - Ejecuta ESLint

## Estructura de Carpetas

```
src/
├── components/
│   ├── Navbar.jsx         - Barra de navegación
│   ├── Hero.jsx           - Sección principal
│   ├── Services.jsx       - Servicios
│   ├── SocialMediaPacks.jsx - Packs
│   ├── ContactForm.jsx    - Formulario
│   ├── Footer.jsx         - Pie de página
│   └── Dashboard.jsx      - Panel admin
├── pages/
│   └── Landing.jsx        - Página principal
├── App.jsx                - Componente raíz
├── main.jsx               - Entry point
├── App.css                - Estilos de App
└── index.css              - Estilos globales
```

## Troubleshooting

### Puerto 5173 en uso
```bash
npm run dev -- --port 3000
```

### Limpiar node_modules
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problemas con Tailwind
```bash
npm run build
```

## Notas Importantes

- Todos los componentes son responsivos (mobile-first)
- Usa Tailwind CSS para estilos
- Las animaciones usan Framer Motion
- Los iconos son de Lucide React
- La navegación usa React Scroll para smooth scroll
