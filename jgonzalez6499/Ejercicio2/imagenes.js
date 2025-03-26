import { API_KEY_UNSPLASH } from "../config.js";
const apiKey = API_KEY_UNSPLASH;

function showPhoto() {
    const foto = document.getElementById("tema").value;
    const num = document.getElementById("numero").value;
    
    fetch(
      `https://api.unsplash.com/search/photos?query=${foto}&per_page=${num}`,
      {
        headers: {
          Authorization: `Client-ID ${apiKey}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Aquí puedes trabajar con los datos de las fotos
        data.forEach((photo) => {
          console.log(photo.urls.regular); // Imprime la URL de la imagen
          // Puedes mostrar la imagen en tu página web, por ejemplo:
          const img = document.createElement("img");
          img.src = photo.urls.regular;
          document.body.appendChild(img);
        });
      })
      .catch((error) => {
        console.error("Error al obtener las fotos:", error);
      });
  }