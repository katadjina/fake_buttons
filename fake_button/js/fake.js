

let img = document.getElementById('img');
let question = document.getElementById('question');
let q= document.getElementById('q');
let options = document.getElementById('options');

// Timer
let num = 30;




const countdown = function(){
    interval = setInterval(
        function(){
            num--;
            console.log(num);
            afficheTemps();
        },
        1000
    )}


    const afficheTemps = function(){
        if (num === 0){
        clearInterval(interval);
         img.style.display = 'block';
         q.innerHTML = "The answer can be only positive. Bugs, errors, new technologies will constantly test your patience and keep you on your toes. BE READY &#129504  "
        options.style.display = 'none';
        }    
    }
    

 
     //affichage
     
   
  
     