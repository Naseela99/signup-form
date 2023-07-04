var submit_btn = document.querySelector('.bottom-button');


submit_btn.addEventListener('click',validateForm);

email_error_div = document.createElement('div')

var email_d = document.querySelector('.e_col')


email_d.appendChild(email_error_div)

error_div = document.createElement('div')

var l_col = document.querySelector('.pass_col')

l_col.appendChild(error_div)



function validateForm(){


  


    var pass_d = document.querySelector('#pwd')
    var pass = pass_d.value
    var con_pass_d = document.querySelector('#con_pwd')
    con_pass = con_pass_d.value


    console.log(pass, con_pass)


    if(!pass){
       
        error_div.textContent = '*Password is mandatory'

        error_div.style.color = "red";
        error_div.style.fontSize = "10px";

        pass_d.style.border = "2px solid red";



    }

    if(pass!=con_pass){


        error_div.textContent = '*Passwords do not match'

        error_div.style.color = "red";
        error_div.style.fontSize = "10px";

        pass_d.style.border = "2px solid red";
        con_pass_d.style.border = "2px solid red";




    }


    var email = document.querySelector('#email_id').value

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){

        

        
        email_error_div.textContent = 'Please enter valid email'

        email_error_div.style.color = "red";
        email_error_div.style.fontSize = "10px";
        

        var email_inp = document.querySelector('#email_id')

        email_inp.style.border = "2px solid red";



       

    }

}


