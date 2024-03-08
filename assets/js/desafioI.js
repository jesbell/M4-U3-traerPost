const getPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
      // Realizamos una solicitud a la API usando fetch
      let response = await fetch(url);
      // Esperamos la respuesta y la convertimos en formato JSON
      let data = await response.json();
  
      // Verificamos si los datos obtenidos no son nulos
      if (data !== null) {
        /* console.log(data); */
        const postData = document.getElementById('post-data');

        postData.innerHTML = '';

        const ulElement = document.createElement('ul');

        data.forEach(post => {
            console.log(post.id);

            const liElement = document.createElement('li');
            const titleElement = document.createElement('h3');
            const bodyElement = document.createElement('p');

            titleElement.textContent = `${post.title}`;
            bodyElement.textContent = `${post.body}`;

            liElement.appendChild(titleElement);
            liElement.appendChild(bodyElement);
            ulElement.appendChild(liElement);
        });

        postData.appendChild(ulElement);

      }
    } catch (error) {
      // Capturamos y mostramos errores en la consola
      console.log(error);
    }
};