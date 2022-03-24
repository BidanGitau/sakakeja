$(document).ready(function(){
    $("#filter-button").click(function(event){
        let filterByLocation = $("#location").val();
        if(filterByLocation.toLowerCase() === "karen"){
            $(".display-result").text("Showing Results For Houses In " + filterByLocation);
            $(".karen").fadeIn(3000);
            $(".roysambu").fadeOut();
            $(".runda").fadeOut();
        }
        if (filterByLocation.toLowerCase() === "roysambu"){
            $(".display-result").text("Showing Results For Houses In " + filterByLocation);
            $(".roysambu").fadeIn(3000);
            $(".karen").fadeOut();
            $(".runda").fadeOut()
        }
        if(filterByLocation.toLowerCase() === "runda"){
            $(".display-result").text("Showing Results For Houses In " + filterByLocation);
            $(".runda").fadeIn(3000);
            $(".karen").fadeOut();
            $(".roysambu").fadeOut();   
        }
    })
})