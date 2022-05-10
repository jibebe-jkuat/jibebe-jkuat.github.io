$(window).on("load", function() {
    "use strict";



    //  Contact Form Working Functionality

    $( "#submit_3" ).on( "click", function() {
        var errors = "";

        var user_name = document.getElementById("username");
        var contact_email_address = document.getElementById("email");
        if(user_name.value === ""){
            errors+= 'Please provide your name.';
        }
        else if(contact_email_address.value === ""){
            errors+= 'Please provide an email address.';
        }


        if(errors)
        {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHTML = errors;
            return false;
        }

        else{
            $.ajax({
                type: "POST",
                url: "process.php",
                data: $("#contact_form_3").serialize(),
                success: function(msg)
                {
                    if(msg === 'success')
                    {
                        document.getElementById("error").style.display = "none";
                        document.getElementById("username").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("description").value = "";
    //                      $("#contact_form_3").hide();
                        document.getElementById("success").style.display = "block";
                        document.getElementById("success").innerHTML = "Thank You! We'll contact you shortly.";
                    }else{
                        document.getElementById("error").style.display = "block";
                        document.getElementById("error").innerHTML = "Oops! Something went wrong while prceeding.";
                    }
                }

            });

        }
    });



}); 