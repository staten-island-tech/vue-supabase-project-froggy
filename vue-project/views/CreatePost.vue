document.getElementById("ihatecoding").addEventListener("submit", function (e) {
  e.preventDefault();
  let newworks = {
    title: document.getElementById("tital").value,
    picture: document.getElementById("image").value,
    description: document.getElementById("deez").value,
    button: "more",
  };
  inject(newworks);
  document.getElementById("ihatecoding").reset(); //WinnieVite

function inject(newworks) {
  gallery.insertAdjacentHTML(
    "afterbegin",
    `<div class="container">
      <div class="picture"> <img 
src="${newworks.picture}"
/></div>
<div class="title"> ${newworks.title}
</div>
<div class="description"> <p>${newworks.description}</p></div>
<button class="bigger">${newworks.button}</button>

    </div>`
  );
}

