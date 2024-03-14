const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const website = document.querySelector("#website");
const comment = document.querySelector("#comment");
const form = document.querySelector("form");
const card = document.querySelector(".div");

const DATA = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let newUser = {
    id: `id-${new Date().getTime()}`,
    name: inputName.value,
    email: inputEmail.value,
    website: website.value,
    comment: comment.value,
  };
  DATA.push(newUser);
  console.log(DATA);
  createTable(DATA);
  inputName.value = "";
  inputEmail.value = "";
  comment.value = "";
  website.value = "";
});

function createTable(data) {
  while (card.firstChild) {
    card.firstChild.remove();
  }
  data.forEach((el, i) => {
    let div = document.createElement("div");
    div.innerHTML = `
        <div class = "cicle"></div>
        <h4>${el.name}</h4>
        <h4>${el.email}</h4>
        <h4>${el.website}</h4>
        <h4>${el.comment}</h4>
        <div class="icon">
        <a target="_blank" href="https://www.instagram.com/">
          <img src="./images/bxl-instagram.svg" alt="Instagram" />
        </a>
        <a target="_blank" href="https://twitter.com/">
          <img src="./images/bxl-twitter.svg" alt="twitter" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/">
          <img src="./images/bxl-linkedin.svg" alt="linkedin" />
        </a>
        <a target="_blank" href="https://www.facebook.com/">
          <img src="./images/bxl-facebook.svg" alt="facebook" />
        </a>
      </div>
        <button onclick ="deleteUser(${i})" class="delete">Delete</button>

        `;
    div.classList.add("show");
    card.appendChild(div);
  });
}
createTable(DATA);

function deleteUser(index) {
  DATA.splice(index, 1);
  createTable(DATA);
}
