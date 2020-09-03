const showMenu = () => {
    const nav = document.getElementById('nav-menu'),
    toggle = document.getElementById('nav-toggle')
   
   if(toggle && nav){
     toggle.addEventListener('click', () =>{
       nav.classList.toggle('show');
       toggle.classList.toggle('change') 
       
     })
   } 
 }
 showMenu();
 
 
 // ACTIVE MENU
 const navLink = document.querySelectorAll('.nav__link')
 function linkAction(){
   // active link
   navLink.forEach(n => n.classList.remove('active'))
   console.log(this.classList.add('active'))
   // Remove menu mobile
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show')
   // Remove X icon menu
   const toggle = document.getElementById('nav-toggle')
   toggle.classList.remove('change') 
 }
 navLink.forEach(n => n.addEventListener('click', linkAction))
 
 
 // BARRA SCROOL
 window.addEventListener('scroll', event =>{
     const winScroll =
     document.body.scrollTop || document.documentElement.scrollTop;
     
     const height =
     document.documentElement.scrollHeight - document.documentElement.clientHeight;
     const scrolled = (winScroll / height) * 100;
     document.documentElement.style.setProperty('--body-read-size', `${scrolled}%`)
 })
 
 
 // Efecto escritura
 const typed = new Typed('.typed', {
 stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 95, // Velocidad en mlisegundos para poner una letra,
  startDelay: 1100, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 15, // Velocidad en milisegundos para borrrar una letra,
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 400, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: '|', // Caracter para el cursor
  contentType: 'html', // 'html' o 'null' para texto sin formato
 })
 
 
 // SCROLL UP BUTTON
 document.getElementById('button-up').addEventListener('click', scrollUp);
 
 function scrollUp(){
   const currentScroll = document.documentElement.scrollTop;
   if(currentScroll > 0){
     window.requestAnimationFrame(scrollUp)
     window.scrollTo(0, currentScroll - (currentScroll / 3))
   }
 }
 
 // SCROLL PARA QUE DESAPAREZCA EL BOTON
 
 const buttonUp = document.getElementById('button-up');
 window.onscroll = () => {;
   const scroll = document.documentElement.scrollTop;
   if(scroll > 400){
     buttonUp.style.transform ='scale(1)'
   }else {
     buttonUp.style.transform = 'scale(0)'
   }
 }
 
 /*SCROLL ANIMATION */
 const sr = ScrollReveal({
   origin: 'top',
   distance: '80px',
   duration: 2000,
   reset: true
 });
 
 /*SCROLL INICIO*/
 sr.reveal('.home__title',{}); 
 sr.reveal('.button',{delay: 200}); 
 sr.reveal('.home__img',{delay: 400}); 
 sr.reveal('.home__social-icon',{ interval: 200}); 
 
 /*SCROLL SOBREMI*/
 sr.reveal('.about__img',{}); 
 sr.reveal('.about__subtitle',{delay: 400}); 
 sr.reveal('.about__text',{delay: 400}); 
 
 /*SCROLL HABILIDADES*/
 sr.reveal('.skills__subtitle',{}); 
 sr.reveal('.skills__text',{}); 
 sr.reveal('.skills__data',{interval: 200}); 
 sr.reveal('.skills__img',{delay: 600});
 
 /*SCROLL PORTAFOLIO*/
 sr.reveal('.work__img',{interval: 200}); 
 
 /*SCROLL CONTACTO*/
 sr.reveal('.contact__info',{interval: 200}); 