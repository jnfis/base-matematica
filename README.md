# Base Matemática

Plan personal de nivelación de 12 semanas para llegar con la base lista a Ingeniería Industrial (UDLA, Executive Online). Es un sitio estático: un `index.html`, una hoja de estilos, una aplicación en JavaScript y el contenido de cada semana en archivos separados.

## Qué incluye

- 12 semanas, 60 sesiones de unos 60 minutos: 4 lecciones y 1 repaso con mini test por semana.
- Ejercicios autocorregidos (numéricos, de alternativas y de texto) con pista y solución.
- Guía del cuaderno en cada sesión: qué escribir y resolver a mano.
- Enlaces a videos en español para cada tema.
- Diagnóstico inicial y simulacro final con resultado por área.
- Progreso guardado en el navegador, con exportación e importación.
- Tema claro y oscuro.

## Cómo usarlo en tu computador

Abre `index.html` con doble clic. No necesita servidor ni instalación. Las fórmulas y las fuentes se cargan desde internet.

Si prefieres servirlo en local:

```bash
python -m http.server 8080
```

y entra a `http://localhost:8080`.

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo, `base-matematica`).
2. En esta carpeta, ejecuta:

```bash
git init
git add .
git commit -m "Plan de nivelación: sitio inicial"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/base-matematica.git
git push -u origin main
```

3. En GitHub, entra a **Settings → Pages**, elige **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guarda.
4. En uno o dos minutos el sitio queda en `https://TU_USUARIO.github.io/base-matematica/`.

El archivo `.nojekyll` evita que GitHub procese el sitio con Jekyll.

## Sobre el progreso

El avance se guarda con `localStorage`, es decir, solo en el navegador y la dirección desde donde abriste el sitio. Si lo usas primero desde el archivo local y después desde GitHub Pages, exporta el progreso en la página **Progreso** e impórtalo en el otro lugar.

## Estructura

```
index.html
assets/css/app.css              estilos
assets/js/app.js                router, ejercicios, progreso, tema
assets/js/content/plan.js       bloques y canales recomendados
assets/js/content/semanaNN.js   contenido de cada semana
assets/js/content/diagnostico.js
```

## Cómo editar el contenido

Cada semana es un objeto registrado con `CURSO.semana({...})`. Cada sesión tiene `bloques` (concepto, ejemplo, tip, error), `ejercicios`, `cuaderno`, `videos` y `cierre`. Las fórmulas van en LaTeX entre `\(` y `\)` para texto en línea, o `\[` y `\]` para fórmulas centradas.

Tipos de ejercicio:

- `num`: respuesta numérica. Acepta coma o punto decimal y fracciones como `3/4`. Tolerancia opcional con `tol`.
- `opcion`: alternativas en `opciones`, índice de la correcta en `correcta`.
- `texto`: una o varias respuestas aceptadas en `respuesta`.
