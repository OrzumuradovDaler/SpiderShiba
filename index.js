let heart1 = document.querySelector('.lds-heart');
let heart2 = document.querySelector('.lds-heart1');
let heart3 = document.querySelector('.lds-heart2');
setTimeout(() => {
    setInterval(item => {
        if (heart3.style.right >= '700px'){
            clearInterval(timer);
        } 
        else {
            heart3.style.left +='750px'
        }
      }, 200); 
   
      setTimeout(() => {
        

      setInterval(item => {
        if (heart2.style.right >= '700px'){
            clearInterval(timer);
        } 
        else {
            heart2.style.left +='750px'
        }
      }, 200); 
    }, 100);
      setTimeout(() => {
        
        setInterval(item => {
            if (heart1.style.right >= '700px'){
                clearInterval(timer);
            } 
            else {
                heart1.style.left +='750px'
            }
          }, 200); 


    }, 200);

}
)