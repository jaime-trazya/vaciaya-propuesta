# Vacía Ya · Prototipo editorial

Web de solicitud de presupuestos de vaciado para particulares y negocios. Proyecto Next.js con React y TypeScript, rediseñado sobre la rama `v0/vaciaya-prototipo`.

## Desarrollo local

Desde esta carpeta, en PowerShell:

```powershell
npm.cmd install --package-lock=false
npm.cmd run dev
```

Para comprobar la versión de producción:

```powershell
npm.cmd run build
npm.cmd run start
```

Se mantiene el archivo `pnpm-lock.yaml` original. Si utilizas pnpm, puedes instalar con `pnpm install --frozen-lockfile`.

## Diseño y comportamiento

- Paleta burdeos `#773B49`, burdeos oscuro `#502B35`, crema `#F7F2EC` y antracita `#303035`.
- Cormorant Garamond y DM Sans alojadas localmente, con licencias en `app/fonts/`.
- Fotografías originales del repositorio conservadas y versiones WebP optimizadas para la web.
- Hero editorial, cinco tipos de espacios, explicación de vaciados completos y parciales, situaciones habituales, intermediación, ubicación y FAQ.
- Dos formularios independientes en dos pasos, con todos los campos de la propuesta.
- Menú móvil, navegación por teclado, estados de foco, validación al salir del campo y al continuar, control del consentimiento y reinicio.
- Movimiento discreto y respeto de `prefers-reduced-motion`.
- Aviso legal, privacidad y cookies con el mismo lenguaje visual.
- Sin bibliotecas adicionales de interfaz, animación o seguimiento.

## Demostración y privacidad

Los formularios no envían solicitudes. No hay API, correo, base de datos, cookies ni almacenamiento local conectados a los datos introducidos. Las confirmaciones explican expresamente que son una demostración. La casilla de consentimiento empieza desmarcada y es obligatoria para completar la prueba.

Los controles permanecen desactivados hasta que JavaScript puede gestionar la demostración. La política de seguridad bloquea las acciones de envío de formularios.

Todas las páginas heredan `noindex, nofollow` en metadatos y cabeceras. La aplicación no incorpora analítica, píxeles de publicidad ni recursos de fuentes externos.

La información legal distingue el prototipo del tratamiento previsto. No se han inventado datos fiscales, societarios, proveedores, precios, cobertura ni disponibilidad. Los datos y condiciones operativas pendientes deben verificarse antes de activar solicitudes reales. Referencia consultada: [AEPD, deber de información](https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/6-el-deber-de-informacion).

## Validación del 21 de octubre de 2026

- Compilación de producción y comprobación TypeScript correctas.
- Prueba en Edge/Chromium con ventanas de 320, 360, 390, 667, 768, 1024, 1440 y 1920 píxeles; incluye orientación horizontal.
- Comienzo del formulario visible en las primeras pantallas móviles verticales comprobadas y ausencia de desbordamiento horizontal.
- Dos formularios probados: campos vacíos, código postal incompleto, fechas pasadas, valores numéricos inválidos, teléfono y correo inválidos, consentimiento, conservación al cambiar de paso, confirmación y reinicio.
- Menú móvil, cierre con Escape, enlaces internos, radios mediante teclado, FAQ, regreso desde páginas legales y modo sin JavaScript comprobados.
- Nueve auditorías axe de páginas y estados sin infracciones automáticas detectadas para WCAG A/AA 2.0/2.1.
- Sin errores de consola, recursos rotos, solicitudes con datos, cookies ni uso de almacenamiento local o de sesión en el recorrido probado.
- Lighthouse móvil simulado: rendimiento 82, accesibilidad 100 y buenas prácticas 100. CLS 0. El SEO obtiene 63 por el bloqueo deliberado de indexación del prototipo.
- Las comprobaciones se han realizado en Chromium; no equivalen a una certificación de accesibilidad ni a pruebas en dispositivos físicos o Safari.

[Informe de validación](docs/validation.json) · [Vista de escritorio](docs/preview-desktop.png) · [Vista móvil](docs/preview-mobile.png) · [Página completa](docs/preview-page-desktop.png).

## Vercel y publicación

Proyecto solicitado: `ya-vaciaya`, dentro de `jaimeperez-9212s-projects`.

La consulta por nombre mediante el conector y la CLI devolvió «proyecto no encontrado», y la búsqueda del equipo no devolvió proyectos coincidentes. No se ha creado, sustituido ni modificado ningún proyecto remoto, ni se ha añadido una vinculación con identificadores inventados.

Los cambios permanecen locales. Se mantiene la indicación original del repositorio: la publicación requiere autorización expresa.

- `main`: producción.
- `pruebas`: desarrollo y validación.
