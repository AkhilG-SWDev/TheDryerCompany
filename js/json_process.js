$(document).ready(function(){
    $.getJSON("json/json_process.json", function(data) { //for displaying json data
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#team").append(
                    "Name: ".fontcolor("green") + value.name.bold().fontcolor("blue") + "<br>" + 
                    "Title: ".fontcolor("green") + value.title.bold().fontcolor("red") + "<br>" + 
                    "Department: ".fontcolor("green") + value.department.bold().fontcolor("gray") + "<br>" + 
                    "Bio: ".fontcolor("green") + value.bio.italics().fontcolor("black") + "<br><br>"
                );
            });
        }); 
    });
});