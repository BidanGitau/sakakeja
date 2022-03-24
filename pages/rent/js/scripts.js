$(document).ready(function(){
    $("#filter-button").click(function(event){
        let filterByLocation = $("#location").val();
        if(filterByLocation.toLowerCase() === "karen"){
            $(".display-result").text("Showing Results For Houses In " + filterByLocation);
            $(".karen").show();
            $(".roysambu").hide();
            $(".runda").hide();
        }
        if (filterByLocation.toLowerCase() === "roysambu"){
            $(".display-result").text("Showing Results For Houses In " + filterByLocation);
            $(".karen").hide();
            $(".runda").hide()
            $(".roysambu").show();
        }
        if(filterByLocation.toLowerCase() === "runda"){
            $(".display-result").text("Showing Results For Houses In " + filterByLocation);
            $(".runda").show();
            $(".karen").hide();
            $(".roysambu").hide();   
        }
    });
})