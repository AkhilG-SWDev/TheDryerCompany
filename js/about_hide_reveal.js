
//event handler for the click() event method of the <a> elements
$(document).ready(function() {

    $("a").click(function() {

	//toggleClass() method to add or remove the hide class from the div element
    $(this).prev().toggleClass("hide");
    
    if($(this).prev().hasClass("hide")){
    
    $(this).text("Show more");
    
    }else{
    
    $(this).text("Show less");
    
    }
    
    });
    
    });