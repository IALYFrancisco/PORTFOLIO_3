var seeLoreProjectBtn = document.getElementById('seeMoreProjectBtn');

seeLoreProjectBtn.addEventListener("click", (event) => {
       
    let listProjetContainer = document.querySelector('.list_project');

    listProjetContainer.classList.toggle("toogled");

    let textIncitation = document.querySelector('p.incitation');

    textIncitation.classList.toggle("toggled");

})