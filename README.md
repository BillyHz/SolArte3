# SolArte – Landing Page Premium Rústica 🌿

> Artesanía costarricense hecha con alma

## 📁 Estructura del Proyecto

```
SolArte3/
├── index.html      # Estructura completa de la landing page
├── styles.css      # Sistema de diseño y estilos premium
├── script.js       # Animaciones e interacciones
├── README.md       # Esta documentación
└── images/         # Carpeta para imágenes (añadir cuando estén disponibles)
```

## 🎨 Paleta de Colores

| Variable            | HEX       | Uso                          |
|---------------------|-----------|------------------------------|
| `--bg-primary`      | `#2C1B12` | Fondo principal (madera oscura) |
| `--bg-secondary`    | `#3A2618` | Fondo secundario (café profundo) |
| `--bg-tertiary`     | `#4B2E1F` | Tarjetas y secciones |
| `--primary-500`     | `#B84A1E` | Terracota / acento principal |
| `--primary-400`     | `#CC6133` | Hover states |
| `--primary-300`     | `#DE8860` | Gradientes suaves |
| `--text-primary`    | `#FAF7F2` | Texto principal (blanco cálido) |
| `--text-secondary`  | `#E6D9CF` | Texto secundario |
| `--success`         | `#6A8E3F` | Verde oliva (positivo) |
| `--warning`         | `#C97C2F` | Naranja terracota (alertas) |

## 🖋 Tipografía

- **Títulos/Display**: Playfair Display (serif clásica, auténtica)
- **Subtítulos**: Plus Jakarta Sans (moderna, profesional)
- **Cuerpo**: Inter (legible, limpia)

## 📄 Secciones Incluidas

1. **Navbar** - Fijo, con blur al scroll, menú hamburguesa en mobile
2. **Hero** - Full viewport, SVG artístico animado, estadísticas
3. **Social Proof** - Categorías de productos en píldoras
4. **Servicios** - 6 flip cards interactivas con arte SVG personalizado
5. **Showcase** - 4 estadísticas con contador animado
6. **Testimonios** - 3 reseñas de clientes
7. **Nosotros** - Historia y valores de la marca
8. **CTA Final** - Llamada a la acción con glow
9. **Contacto** - Info + formulario funcional
10. **Footer** - Links, redes sociales, copyright

## ✨ Características Técnicas

- ✅ 50 partículas flotantes animadas
- ✅ Flip cards 3D (hover desktop / tap mobile)
- ✅ Scroll reveal con Intersection Observer
- ✅ Contadores animados
- ✅ Navbar sticky con glassmorphism
- ✅ Parallax suave en el hero
- ✅ Formulario con feedback visual
- ✅ 100% responsive (mobile, tablet, desktop)
- ✅ Arte SVG único sin dependencias de imágenes externas
- ✅ Google Fonts: Playfair Display + Inter + Plus Jakarta Sans

## 🚀 Cómo usar

1. Abre `index.html` directamente en el navegador, o
2. Usa un servidor local:
   ```bash
   npx serve .
   # o
   python -m http.server 8080
   ```

## 🖼 Imágenes (Opcional)

Si el servicio de generación de imágenes está disponible, coloca las imágenes en `/images/`:
- `logo.png` – Logo principal 512×512px
- `hero_visual.png` – Visual del hero 1200×1200px
- `service_1.png` a `service_6.png` – Servicios 800×600px

Reemplaza los SVGs en el HTML con tags `<img>` correspondientes.

## 📞 Datos de Contacto (Personalizar)

Edita en `index.html`:
- **Teléfono**: `+506 0000-0000`
- **Email**: `hola@solarte.cr`
- **Ubicación**: `Heredia, Costa Rica`
- **Redes**: Links en la sección de contacto y footer

---

© 2026 SolArte · Artesanía Costarricense Hecha con Alma 🇨🇷
