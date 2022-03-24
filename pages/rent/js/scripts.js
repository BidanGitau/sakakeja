$(document).ready(function(){
    $("#filter-button").click(function(event){
        let filterByLocation = $("#location").val();
        if(filterByLocation.toLowerCase() === "karen"){
            $(".display-result").text("Showing Results For Houses In " + filterByLocation);
            $(".karen").fadeIn(3000);
            $(".button1").fadeIn(2500);
            $(".roysambu").fadeOut();
            $(".runda").fadeOut();
        }
        if (filterByLocation.toLowerCase() === "roysambu"){
            $(".display-result").text("Showing Results For Houses In " + filterByLocation);
            $(".karen").fadeOut();
            $(".runda").fadeOut()
            $(".roysambu").fadeIn(3000);
            $(".button2").fadeIn(2500);
        }
        if(filterByLocation.toLowerCase() === "runda"){
            $(".display-result").text("Showing Results For Houses In " + filterByLocation);
            $(".runda").fadeIn(3000);
            $(".button3").fadeIn(2500);
            $(".karen").fadeOut();
            $(".roysambu").fadeOut();   
        }
    }),
    $(".button1").click(function(event){
        $(".display-result").text("Showing Results For Houses In Karen");
        $(".karen").fadeIn(3000);
        $(".button2").hide();
        $(".button3").hide();
        $(".roysambu").fadeOut();
        $(".runda").fadeOut();
    })
})