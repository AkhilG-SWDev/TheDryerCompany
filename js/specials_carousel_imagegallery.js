
$(document).ready(function(){
    $("#image_list a").click(function (e) {
        e.preventDefault();
        var imgUrl = $(this).attr("href"); //gets the href value
        var title_desc = $(this).attr("title"); // gets the title description value
        $('#caption').html(title_desc); //alters the title
        $("#image").attr("src", imgUrl) //changes the source
    });
});