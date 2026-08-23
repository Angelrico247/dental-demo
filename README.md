# Dental Clinic — demo

Sitio demostrativo de una clínica dental en Zapopan, Jalisco. Réplica en estructura y
lenguaje visual del shot de Dribbble *"Dentist & Dental Clinic Webflow Website Design"*
(Kazi Mohammed Erfan / Pentaclay), llevado a español y ampliado a un sitio completo.

## Correr en local

```bash
pnpm install
pnpm dev
```

Abre http://localhost:3000 (o `pnpm dev -- -p 3002` para el puerto del preview).

## Stack

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript
- Tailwind CSS v4 **CSS-first**: todo el tema vive en `src/app/globals.css`, no hay `tailwind.config`
- framer-motion para las animaciones
- Poppins vía `next/font/google`, pesos 300/400/500/600

## Estructura

```
src/app/                  rutas (servidor, delgadas) → *PageClient
src/components/           icons, ui/, layout/ (Navbar, Footer, PageShell, PageHeader)
src/features/clinic/      tipos + datos mock compartidos (servicios, doctores, precios, FAQ)
src/features/home/        la landing y sus 11 secciones
src/features/appointments/ flujo de agendar cita (modal de 3 pasos + contexto global)
```

## Notas

- **Todos los datos son ficticios**: la clínica, los doctores, los precios y los testimonios.
  No hay backend; los formularios simulan el envío.
- Las fotografías son de Unsplash, referenciadas por URL.
- Reglas de tipografía: peso 300 solo en tamaños ≥ `text-3xl`; `uppercase` únicamente en los
  eyebrows. Los pesos 700+ ni siquiera se cargan.
