document.addEventListener('DOMContentLoaded', function () {

const typein = document.querySelector(".typein");
const contenaire = document.querySelector('.to_do');
const para = document.querySelector('.para');
const sup_btn = document.querySelector('#btn');
const btn = document.querySelector('#btn');


function to_doing(){
    typein.addEventListener('keydown', function(event){
        if (event.key=== 'Enter'){
           event.preventDefault();
           valeur = typein.value.trim();
           console.log(valeur);
       
        if (valeur !== ''){
           nouvelElement = document.createElement('p');
           nouvelElement.textContent = valeur;
           contenaire.appendChild(nouvelElement);

           nouvelElement.addEventListener('click', function(event){
            event.preventDefault();
            btn.style.display = 'block';
           });

           btn.addEventListener('click', function(){
            btn.style.display = 'none';
            contenaire.removeChild(nouvelElement);
            });



           contenaire.scrollTop = contenaire.scrollHeight;
       
           typein.value='';
        }
       
       };
       });
    
    para.addEventListener('click', function (event){
        event.preventDefault();
        sup_btn.style.display = 'block';
    })

    sup_btn.addEventListener('click', function(event){
        para.remove();
        sup_btn.style.display= 'none';
    })

       
};

to_doing();
});