document.querySelector('.logo').addEventListener("click", classToggle);

function classToggle() {
  document.body.classList.toggle('is-open');
}
userHasScrolled = false;
window.onscroll = function (e)
{
    userHasScrolled = true;
}

const header = document.querySelector('header');
if(userHasScrolled)
{
header.style = "background-image: radial-gradient(800px 720px at 54% 64%, rgba(0, 0, 0, 0.25), #100e17, #100e17, #100e17), url('../images/RAM_2066-6.jpg');";
  } 
