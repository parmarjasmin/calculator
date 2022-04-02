// var addition = document.getElementById("addition");
// var subtraction = document.getElementById("subtraction");
// var multiplication = document.getElementById("multiplication");


// document.getElementById("addition").addEventListener("click", function() {
    //     document.getElementsByClassName("input").innerHTML
    //   });
    var input = document.querySelector('.input');
    var output = document.querySelector('.output');
    var addition = document.getElementById("addition");
    var subtraction = document.getElementById("subtraction");
    var multiplication = document.getElementById("multiplication");
   
    // aritihmetic
    // function plus(){
    //     input.innerHTML += addition.innerText;
    // }
                
    // addition.addEventListener("click",plus);

    // function mins(){
    //     input.innerHTML += subtraction.innerText;
    // }
                
    // subtraction.addEventListener("click",mins);

    // function mal(){
    //     input.innerHTML += multiplication.innerText;
    // }
                
    // multiplication.addEventListener("click",mal);
    
    


    var number = document.querySelectorAll('button');
    
    number.forEach(number => {
        number.addEventListener('click',calculate);
        
    });
    


    function calculate() {
        let buttonText = this.innerText;
        // console.log(buttonText);
        if (buttonText == 'AC') {
            input.innerText = "";   
            output.innerText = "";
            return;
        }

        // if (buttonText == DEL) {
        //     input.innerText = input.innerText.sbustr(0,input.innerText.length-1);
        // }
        if( buttonText == '='){
            output.innerText = eval(input.innerText);
            return;
        }
        else{

            input.innerText += buttonText;
            return;
        }
    }





    // // store value in array
    // var arr = [number];
    
    // for (let i = 0; i < number.length; i++) {
    //     var arr = [number[i]];

    //     // if (i==9) {
    //     //     arr[9   ] = '';
    //     //     input.innerHTML = '';
    //     // }
    //     arr[i] = number[i].innerText;
    // }

    
    // for (let i = 0; i < number.length; i++) {

    //         if (i==9) {
    //             arr[9] = '';
    //             continue;
    //         }
            
            
            
            
            
    //         number[i].addEventListener("click",num);
    //         function num(){
    // }
                
    //             arr[i] = number[i].innerText;
    //             input.innerHTML += number[i].innerText;
            
    //     }
        
    
    