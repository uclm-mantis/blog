---
title: "Editar el aspecto"
date: "2024-12-29"
author: Francisco Moya
section: Blog
type: post
order: 1
description:
    Para editar el aspecto debes tener alguna familiaridad con NextJS. Se trata de un framework web construido sobre React. En MBlog usamos también módulos para facilitar la creación de gráficos (Mermaid), gráficos estadísticos (Recharts) y textos científicos (KaTeX).
---

Para editar el aspecto debes tener alguna familiaridad con [NextJS](https://nextjs.org/). Se trata de un framework web construido sobre [React](https://es.react.dev/). En **MBlog** usamos también módulos para facilitar la creación de gráficos ([Mermaid](https://mermaid.js.org/)), gráficos estadísticos ([Recharts](https://recharts.org/)) y textos científicos ([KaTeX](https://katex.org/)).

## Renderers de contenido

Observa `components/renderers` y `components/sectionRenderers`. Son componentes que presentan (*renderizan*) contenido. Cada componente en `components/renderers` rendiriza un documento Markdown.  Los hemos dividido en dos tipos:

* Aquellos cuyo nombre termina en `Summary` están pensados para presentar un resumen del contenido en algún tipo de tabla o presentación global de todos los documentos Markdown que cumplen cierto criterio.

* Aquellos cuyo nombre termina en `Article` están pensados para mostrar todos los detalles, normalemente en una página independiente.

* Aqueyos cuyo nombre termina en `Featured` están pensados para destacar algunos documentos en el mismo lugar donde se presentan los `Summary`.

En la plantilla se incluyen cuatro tipos de archivos Markdown:

Tipo    | Descripción
------- | -----------
Post    | Mensaje en un blog. Incluye datos de título, autor, fecha, palabras clave, imagen de portada, etc.
Member  | Un miembro del equipo. Incluye datos sobre nombre completo, redes sociales, contacto por teléfono o email, imagen, etc.
Project | Datos relativos a un proyecto. Incluye datos sobre financiación, título, fechas, etc. Mira la sección `Projects` para ver ejemplos.
Block   | Es un segmento de una página compleja. Mira la página `About` para ver un ejemplo.

En total, se incluyen ocho renderers de contenido en `components/renderers`:

Renderer       | Descripción
------------   | -----------
BlockArticle   | Presenta un bloque de contenido, como los que se muestran en `/section/About`. Se caracterizan porque no deja ningún margen con respecto al borde de la página. Esto permite un máximo de flexibilidad a la hora de presentar contenidos creativos, poner imágenes de fondo, o definir un color de fondo. Nótese que no disponemos de un renderer *BlockSummary* porque no tiene sentido. Un bloque representa una parte de una página, la colección es la página y no tiene sentido renderizar un bloque por sí mismo.  En cualquier caso, si se desea rendrizar, el resultado sería el mismo que en la página, por lo que es el mismo renderer.
MemberSummary  | Presenta una tarjeta correspondiente a un miembro del equipo. Ver ejemplos en `section/Team` para ver cómo se tratan los elementos opcionales no rellenos.
MemberArticle  | Presenta una página de perfil de un miembro del equipo.
PostSummary    | Presenta una cab
ecera de un mensaje de blog.
PostFeatured   | Presenta una tarjeta para destacar los datos de cabecera de un mensaje de blog.
PostArticle    | Presenta el mensaje de blog.
ProjectSummary | Presenta una tarjeta resumen de un proyecto.
ProjectArticle | Presenta un documento de descripción de un proyecto.

La gran mayoría de las veces utilizaremos estos renderers a través de una interfaz común usando el elemento `<ContentRenderer>`.  Dependiendo del valor del campo `type` en el documento Markdown, se llamará a un renderer u a otro, según la tabla de `components/renderers/index.ts`.

Los renderers de contenido en su variante `article` se utilizan directamente en las rutas del tipo `content/slug` donde *slug* representa la ruta dentro de la carpeta `content` sin la extensión `.md` o `.mdx`.  La variante `summary` se utiliza en los renderers de secciones, que se describen a continuación.

## Renderers de secciones

Agrupaciones de estos contenidos pueden mostrarse en una página de resumen global, empleando uno de los componentes de `components/sectionRenderers`. En la plantilla se definen cuatro tipos de agrupaciones:

Renderer         | Descripción
---------------- | -----------
LinearRenderer   | Concatena de forma lineal los resultados de renderizar los documentos del grupo. No deja espacio entre ellos porque está pensado para componer bloques en una página.
ListRenderer     | Presenta un resumen en formato de lista de los elementos del grupo, precedido opcionalmente por un conjunto de elementos destacados. Está pensado para tener un formato de tipo blog.
GridRenderer     | Presenta una tabla con los resúmenes de los elementos del grupo. Está pensado para presentar elementos como *Member* o *Project* en forma de tarjetas.
CarouselRenderer | Presenta un carrusel de tarjetas resumen

En los grupos, el contenido no impone la forma en que se representa. Lo tiene que decidir el usuario en el archivo `config.ts`. Por ejemplo, en la plantilla aparece esta configuración:

```
export const sectionRenderers = {
    About: { renderer: LinearRenderer, isSinglePage: true },
    Projects: { renderer: CarouselRenderer, isSinglePage: false },
    Team: { renderer: GridRenderer, isSinglePage: false },
    Blog: { renderer: ListRenderer, isSinglePage: false },
} as const;
```

Este bloque decide realmente el aspecto global del sitio.  La sección `About` se configura con un el *LinearRenderer* indicando que se trata de una única página que aglutina todos los elementos.  Eso afecta a los enlaces del menú desplegable de la derecha. En este caso los enlaces serán a contenido interno de la página.  La sección `Projects` se configura con un *CarouselRenderer*, haciendo que los proyectos se muestren en una especie de carrusel de tarjetas de resumen.  La sección `Blog` se configura como un *ListRenderer* para tener un aspecto similar al de un blog tradicional.

Los renderers de sección se utilizan directamente en las rutas del tipo `section/nombre`, donde *nombre* es alguno de los valores del campo `section` en los archivos Markdown.  La forma en la que se renderiza se determina a partir del objeto `sectionRenderers` descrito arriba.  Si no se ha configurado se elige *ListRenderer* como opción por defecto.

## Añadir o reorganizar secciones

Las secciones son simplemente los valores de los campos `section` de los documentos Markdown. Puedes cambiar libremente sus valores y cambiar la forma en que se presentan editando el objeto `sectionRenderers` de `config.ts`.  Las secciones aparecen en el menú de la parte superior de forma automática.  El orden de aparición es el orden en el que encuentra las secciones en la carpeta `content`.  Por este motivo, se suele organizar en carpetas que corresponden a las secciones y con números al principio para forzar un orden determinado.

<div className="flex w-3/4 mx-auto border p-2 rounded-lg shadow">
  <FileTreeViewer fileTree={[
    { name: '/content',      type: 'directory', children: [
      { name: '1_about/',    type: 'directory' },
      { name: '3_projects/', type: 'directory' },
      { name: '4_team/',     type: 'directory' },
      { name: '6_blog/',     type: 'directory' },
    ]}
  ]} />
</div>

## Añadir un nuevo tipo de contenido

Los tipos de contenido no son más que los valores de los campos `type` de los documentos Markdown.  Para crear un nuevo tipo `Publication` debes hacer lo siguiente:

1. Crea al menos un documento con el campo `type` relleno con el valor `publication`.
2. Crea nuevos componentes para renderizar las publicaciones en modo resumen y artículo. Por ejemplo: `components/renderers/PublicationSummary.ts` y `components/renderers/PublicationArticle.ts`.  Puedes basar tus renderers en alguno de los que incluye la plantilla y decirle a ChatGPT o Grok que lo adapte al nuevo tipo.
3. Edita `components/renderers/index.ts` para añadir los nuevos renderers de forma que `ContentRenderer` sepa mostrar este nuevo contenido.

