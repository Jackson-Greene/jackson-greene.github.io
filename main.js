
$(document).ready(function() 
{
    
    $(".contact-image").hover(function()
    {
        
        $(this).attr("src", "contact-image-gradient.png");
        $(this).css("height", "5.07vw");
        $(".contact-text").css("font-weight", "bold");
        $(".contact-text").css("top", "-0.07vw");
        $(".contact-text").css("left", "-0.035vw");

    });


    $(".contact-image").mouseleave(function()
    {
        
        $(this).attr("src", "contact-image.png");
        $(this).css("height", "5vw");
        $(".contact-text").css("font-weight", "normal");
        $(".contact-text").css("top", "0vw");
        $(".contact-text").css("left", "0vw");

    });


    $(".contact-image").click(function()
    { 
        prompt("copy email to clipboard: Ctrl+C, Enter", "jackson.greene@student.curtin.edu.au")
        
    });


    $(".resume-image").hover(function()
    {
        
        $(this).attr("src", "resume-image-gradient.png");
        $(this).css("height", "5.07vw");
        $(".resume-text").css("font-weight", "bold");
        $(".contact-text").css("top", "-0.07vw");
        $(".contact-text").css("left", "-0.035vw");

    });


    $(".resume-image").mouseleave(function()
    {
        
        $(this).attr("src", "resume-image.png");
        $(this).css("height", "5vw");
        $(".resume-text").css("font-weight", "normal");
        $(".resume-text").css("top", "0vw");
        $(".resume-text").css("left", "0vw");

    });


    $(".projects-image").hover(function()
    {
        
        $(this).attr("src", "projects-image-gradient.png");
        $(this).css("height", "5.07vw");
        $(".projects-text").css("font-weight", "bold");
        $(".projects-text").css("top", "-0.07vw");
        $(".projects-text").css("left", "-0.035vw");

    });


    $(".projects-image").mouseleave(function()
    {
        
        $(this).attr("src", "projects-image.png");
        $(this).css("height", "5vw");
        $(".projects-text").css("font-weight", "normal");
        $(".projects-text").css("top", "0vw");
        $(".projects-text").css("left", "0vw");

    });

});
