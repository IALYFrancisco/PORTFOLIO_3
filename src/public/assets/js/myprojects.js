var seeLoreProjectBtn = document.getElementById('seeMoreProjectBtn');
var profile = document.querySelector('.border')
var dropdown = document.querySelector('.dropdown-container')

seeLoreProjectBtn.addEventListener("click", (event) => {
       
    let listProjetContainer = document.querySelector('.list_project');

    listProjetContainer.classList.toggle("toogled");

    let textIncitation = document.querySelector('p.incitation');

    textIncitation.classList.toggle("toggled");

})

profile.addEventListener('click', () => {
   console.log(dropdown.classList)
   dropdown.classList.toggle('active')
})

document.getElementById('toggleBtn').addEventListener('click', (event) => {
   document.getElementById('navResponsive').classList.toggle('active');
})