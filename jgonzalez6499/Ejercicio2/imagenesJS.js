import { API_KEY_UNSPLASH } from './config.js';
const apiKey = API_KEY_UNSPLASH;

function showPhoto() {
  const foto = document.getElementById("tema").value;
  const num = document.getElementById("numero").value;
  console.log(apiKey)
  console.log("tema:" + foto)
  console.log(num)
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
      data.results.forEach((photo) => {
        let imageUrl = photo.urls.regular;
        // Modifica la URL para solicitar una imagen de 250x250
        imageUrl = imageUrl + "&w=250&h=250";
        console.log(imageUrl);

        const img = document.createElement("img");
        img.src = imageUrl;
        document.body.appendChild(img);

      });
    })
    .catch((error) => {
      console.error("Error al obtener las fotos:", error);
    });
}
document.getElementById("buscarBtn").addEventListener("click", showPhoto);