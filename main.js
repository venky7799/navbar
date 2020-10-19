function toggleMenu(){
    var menutoggle=document.querySelector('.menutoggle');
    var navv=document.querySelector('.navigation');
      
    menutoggle.classList.toggle('active');
    navv.classList.toggle('active');

    console.log(menutoggle.classList.toggle('active'));

}