$(document).ready(function() {
    $("#fName").focus();

    $("#contact_form").validate({
        rules: {
            fName: {
                required: true,
            },
	    lName: {
                required: true,
            },
	    email: {
                required: true,
                email: true
            },
	    phone: {
                required: true,
                minlength:10,
                digits: true
            },
	    reference: {
                required: true
            },
	    date: {
                required: true,
                date:true
            }
        },
        messages: {
            fName: {
                required: "Please provide your first name."            
		},
	   lName: {
                required: "Please provide your last name."            
		}

        }
    })
}); // end ready
