const botao = document.querySelector("button");

acessarApi = () => {
  for (let i = 1; i <= 4; i++) {
    const img = document.querySelector(".img" + i);
    const personagemName = document.querySelector(".name" + i);

    let aleatorio = Math.floor(Math.random() * 671);
    fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        img.src = data.image;
        personagemName.innerHTML = data.name;
      });
  }
};

botao.onclick = acessarApi;
window.addEventListener("load", acessarApi);
