# Tune Weight

Aplicacion web hecha con React y Vite para calcular el indice de masa corporal (IMC) a partir del peso y la altura del usuario. El proyecto muestra un resultado visual segun la categoria obtenida y reproduce un audio relacionado con ese estado.

## Caracteristicas

- Calculo rapido del IMC desde un formulario simple.
- Validaciones basicas para evitar valores vacios o fuera de rango.
- Resultado visual con imagen personalizada segun la categoria.
- Reproduccion automatica de audio al mostrar el resultado.
- Interfaz construida con React y estilos apoyados en Bootstrap.

## Categorias manejadas

La aplicacion clasifica el resultado en tres estados:

- Bajo peso: IMC menor a `18.5`
- Normal: IMC entre `18.5` y `24.9`
- Sobrepeso o superior: IMC de `25` en adelante

## Tecnologias usadas

- React 19
- Vite
- Bootstrap 5
- Bootstrap Icons
- ESLint

## Instalacion

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd tune_weight
```

2. Instala las dependencias:

```bash
npm install
```

## Scripts disponibles

```bash
npm run dev
```

Inicia el servidor de desarrollo.

```bash
npm run build
```

Genera la version de produccion.

```bash
npm run preview
```

Previsualiza localmente la build de produccion.

```bash
npm run lint
```

Ejecuta las reglas de lint del proyecto.

## Estructura del proyecto

```text
src/
|-- assets/
|   |-- audio/
|   `-- images/
|-- components/
|   |-- Head/
|   `-- ResultCard/
|-- pages/
|   `-- Home.jsx
|-- App.jsx
|-- App.css
|-- index.css
`-- main.jsx
```

## Flujo de uso

1. El usuario ingresa su peso.
2. Ingresa su altura en metros.
3. Presiona el boton `Calcular`.
4. La app valida los datos y calcula el IMC.
5. Se muestra una tarjeta con imagen y audio segun el resultado.

## Estado actual

El proyecto esta orientado a una experiencia sencilla y visual. Actualmente el resultado se presenta por categorias, sin historial de mediciones ni almacenamiento de datos.

## Posibles mejoras

- Mostrar el valor exacto del IMC junto con la categoria.
- Evitar recargar la pagina completa al reiniciar el formulario.
- Mejorar accesibilidad y mensajes de error en pantalla.
- Ajustar el comportamiento del boton de calcular y la logica de carga.
- Hacer el diseno mas adaptable en pantallas pequenas.
