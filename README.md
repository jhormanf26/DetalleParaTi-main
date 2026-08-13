# 💝 DetalleParaTi - Plataforma de Recuerdos Personalizados en Pareja

> *"Preserva cada momento especial con la persona que amas"*

![Version](https://img.shields.io/badge/version-1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Active-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

---

## 📋 Índice

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Uso](#uso)
- [Características Principales](#características-principales)
- [Contribuciones](#contribuciones)
- [Autor](#autor)
- [Licencia](#licencia)

---

## 🎯 Descripción

**DetalleParaTi** es una aplicación web interactiva diseñada para parejas que desean preservar y celebrar sus recuerdos compartidos en un espacio digital íntimo y personalizado.

Soluciona la necesidad de tener un lugar especial donde:
- 📸 Guardar fotos y momentos especiales
- 💌 Conservar mensajes y pensamientos amorosos
- 🎵 Compartir la playlist de la relación
- 📅 Recordar hitos importantes en la línea del tiempo
- 🎁 Disfrutar de sorpresas personalizadas
- ✨ Revivir la historia de amor con interactividad y emoción

---

## ✨ Características

### 🔐 **Autenticación Personalizada**
- Acceso mediante validación de fecha de aniversario
- Interfaz de bienvenida emotiva
- Manejo inteligente de errores

### 🏠 **Dashboard Principal**
- Bienvenida personalizada
- Contador de días en la relación
- Galería destacada de fotos iniciales
- Navegación lateral intuitiva

### 🖼️ **Galería de Fotos**
- Grid responsivo con efectos hover
- Collage automático de imágenes
- Overlay de información en las fotos
- Transiciones suaves y animadas

### 📅 **Línea de Tiempo**
- Visualización cronológica de eventos especiales
- Diseño alternado profesional
- Integración de imágenes en eventos
- Narración de la historia de la pareja

### 💬 **Mensajes Especiales**
- Sección dedicada para mensajes del día
- Funcionalidad de agregar nuevos mensajes
- Animaciones al cargar mensajes
- Almacenamiento persistente en LocalStorage

### 🎵 **Reproductor de Música**
- Tarjetas de canciones con artwork
- Controles de audio nativos
- Información de artista y canción
- Playlist personalizable

### 🎁 **Sección de Sorpresas**
- Botones interactivos para revelaciones
- Contenido sorpresa dinámico
- Efectos de animación especiales
- Experiencias personalizadas

### 🌙 **Modo Oscuro/Claro**
- Toggle flotante accesible
- Transiciones suaves entre temas
- Sistema de variables CSS para fácil personalización
- Persistencia de preferencia en LocalStorage

### 📱 **Diseño Totalmente Responsivo**
- Adaptable a móviles, tablets y desktops
- Navegación colapsable en dispositivos pequeños
- Interfaz optimizada por pantalla
- Experiencia fluida en todos los dispositivos

### 🎨 **Efectos Visuales**
- Animación de corazones flotantes
- Particles.js para fondos dinámicos
- Transiciones suaves entre secciones
- Iconografía moderna con RemixIcon

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
|-----------|------------|
| **JavaScript ES6+** | Lógica interactiva sin dependencias externas |
| **HTML5** | Estructura semántica y accesible |
| **CSS3** | Estilos personalizados, animaciones y variables CSS |
| **Driver.js** | Tours interactivos y guías de usuario |
| **RemixIcon** | Conjunto de iconos modernos y ligeros |
| **Particles.js** | Efectos de partículas animadas en fondos |
| **LocalStorage API** | Almacenamiento de datos persistente en el cliente |

---

## 📁 Estructura del Proyecto

```
DetalleParaTi-main/
├── index.html              # Página de login
├── dashboard.html          # Panel principal de la aplicación
├── styles.css              # Estilos generales (modo claro/oscuro)
├── script/
│   ├── script.js          # Lógica de autenticación
│   └── dashboard.js       # Lógica del dashboard
├── assets/
│   └── img/
│       ├── libro.webp     # Imagen para sorpresas
│       └── carro.webp     # Imagen para sorpresas
├── README.md              # Este archivo
└── tfsa                   # Archivo de configuración (vacío)
```

---

## 🚀 Instalación

### Requisitos Previos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, pero recomendado)

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/jhormanf26/DetalleParaTi-main.git
cd DetalleParaTi-main
```

2. **Usar un servidor local** (recomendado)
```bash
# Opción 1: Python 3
python -m http.server 8000

# Opción 2: Node.js (http-server)
npx http-server

# Opción 3: Live Server en VS Code
# Instalar extensión "Live Server" y hacer clic derecho en index.html
```

3. **Acceder a la aplicación**
```
http://localhost:8000
```

---

## 💻 Uso

### Primer Acceso

1. Ingresa a `index.html` (página de login)
2. Introduce tu **fecha de aniversario** en el formato requerido
3. Haz clic en "Ingresar"
4. Si la fecha es correcta, accederás al dashboard principal

### Navegación en el Dashboard

- **🏠 Inicio**: Bienvenida personalizada y galería destacada
- **💝 Nuestros Recuerdos**: Línea de tiempo de momentos especiales
- **💬 Mensajes Especiales**: Sección de mensajes emotivos del día
- **📸 Nuestras Fotos**: Galería completa de fotos de la pareja
- **🎵 Nuestras Música**: Reproducción de canciones especiales
- **🎁 Sorpresas**: Contenido sorpresa personalizado
- **Otras**: Acceso a funcionalidades adicionales (Flores, SMS Flotantes)

### Funcionalidades Interactivas

- **Modo Oscuro**: Haz clic en el botón del sol/luna en la esquina superior derecha
- **Cerrar Sesión**: Usa el botón de logout para salir
- **Agregar Mensajes**: Usa el botón "Nuevo Mensaje" para guardar pensamientos especiales
- **Ver Sorpresas**: Haz clic en los botones interactivos para revelar contenido

---

## 🎯 Características Principales

### 🔄 Persistencia de Datos
- Todos los datos se almacenan en **LocalStorage**
- Los mensajes y preferencias se mantienen entre sesiones
- Sin necesidad de base de datos backend

### 🎨 Personalización
- **Variables CSS** fáciles de personalizar
- Colores, bordes y transiciones ajustables
- Temas claro/oscuro completamente personalizables

### 📱 Experiencia Móvil
- Sidebar colapsable en dispositivos pequeños
- Botón de hamburguesa en tablets y móviles
- Interfaces optimizadas para cada tamaño de pantalla

### ♿ Accesibilidad
- Controles semánticos de HTML
- Iconografía clara y legible
- Navegación intuitiva y lógica

---

## 📝 Ejemplos de Personalización

### Cambiar Colores Primarios

En `styles.css`, busca la sección `:root` y modifica:

```css
:root {
    --color-primary: #5272db;      /* Azul principal */
    --color-secondary: #1c398a;    /* Azul secundario */
    --color-background: #ffffff;   /* Fondo claro */
    --color-text: #e91e63;         /* Texto */
    /* ... más variables */
}
```

### Cambiar Fecha de Aniversario

En `script/script.js`, busca la validación y ajusta la fecha:

```javascript
const correctDate = "YYYY-MM-DD"; // Cambia aquí tu fecha
```

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar **DetalleParaTi**:

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 🐛 Reportar Problemas

Si encuentras algún bug o tienes sugerencias, abre un [Issue](https://github.com/jhormanf26/DetalleParaTi-main/issues) en el repositorio.

---

## 📸 Capturas de Pantalla

### Página de Login
- Interfaz elegante de autenticación
- Validación de fecha de aniversario

### Dashboard Principal
- Sidebar de navegación lateral
- Galería destacada de fotos
- Contador de días

### Secciones Interactivas
- Línea de tiempo visual
- Reproductor de música integrado
- Sección de sorpresas animadas
- Modo oscuro/claro

---

## 🔐 Seguridad

**Nota importante**: Esta aplicación utiliza validación en el cliente. Aunque es segura para usos personales, tenga en cuenta que:
- La fecha de aniversario se valida en JavaScript
- Los datos se almacenan localmente en el navegador
- Para usos en producción, considere agregar autenticación backend

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo, modificarlo y distribuirlo.

---

## 👨‍💻 Autor

**Luis Kinn DC** ([@jhormanf26](https://github.com/jhormanf26))

- GitHub: [jhormanf26](https://github.com/jhormanf26)
- Proyecto creado: 26 de Febrero
- Última actualización: Mayo 2025

---

## 💝 Agradecimientos

Gracias a:
- [Driver.js](https://driverjs.com/) - Tours interactivos
- [RemixIcon](https://remixicon.com/) - Iconografía moderna
- [Particles.js](https://particlesjs.com/) - Efectos visuales

---

## 📞 Contacto

¿Preguntas o sugerencias? Abre un issue en el repositorio o contacta directamente a través de GitHub.

---

## 🌟 Si te fue útil

Considera darle una ⭐ al repositorio si te gustó el proyecto. ¡Significa mucho!

```
╔═══════════════════════════════════════════════════════════╗
║  ¡Gracias por usar DetalleParaTi! 💝                      ║
║  Haz que cada momento con la persona que amas sea especial ║
╚═══════════════════════════════════════════════════════════╝
```

---

**Happy memories! 🎉❤️**
