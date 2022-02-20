
function funkce_burger(x) {
    x.classList.toggle("change");

    const hamburger=document.getElementsByClassName('burger');
    const nav_odkazy=document.getElementById('odkazy');
    const odkaz=document.getElementsByClassName('btn');
    let i;
    {
      nav_odkazy.classList.toggle('show');
      for(i=0;i<6;i++)
      {
        odkaz[i].classList.toggle('show');
      }
     
    
    }
  }

