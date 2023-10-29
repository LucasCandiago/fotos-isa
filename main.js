let fotos = [];
const div = document.querySelector(".foto");

for (let i = 1; i <= 23; i++) {
  fotos.push(`./fotos/${i}.jpg`);
}

const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  div.innerHTML = "";
  const index = Math.floor(Math.random() * 22);
  const img = document.createElement("img");
  img.src = fotos[index];
  div.appendChild(img);
});
