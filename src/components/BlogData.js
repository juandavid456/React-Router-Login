export const adminUsers = ["felipe","juan","manuel"];
export const editors = ["luis","carlos","maria"];
export const author = ["ana","juan","manuel","sofia"];

function getRandomauthor() {
  const randomIndex = Math.floor(Math.random() * author.length);
  return author[randomIndex];
}
const blogdata = [
  {
    title: "que es react",
    slug: "que-es-react",
    content:
      "react es una libreria de javascript para construir interfaces de usuario",
      author: getRandomauthor(),
      description: "Aprende las bases de la librería más popular para crear interfaces dinámicas."
  },
  {
    title: "que es vue",
    slug: "que-es-vue",
    content:
      "vue es un framework de javascript para construir interfaces de usuario",
      author: getRandomauthor(),
      description: "Descubre la sencillez y potencia de Vue para tus próximos proyectos.",
  },
  {
    title: "que es angular",
    slug: "que-es-angular",
    content:
      "angular es un framework de javascript para construir aplicaciones web",
    author: getRandomauthor(),
    description: "Explora el robusto ecosistema de Google para aplicaciones de gran escala.",
  },
];

export  default  blogdata ;