$(document).ready(function(){
    $("#filter-button").click(function(event){
        let filterByLocation = $("#location").val();
        if(filterByLocation.toLowerCase() === "karen"){
            $(".karen").show();
            $(".roysambu").hide();
            $(".runda").hide();
        }
        if (filterByLocation.toLowerCase() === "roysambu"){
            $(".karen").hide();
            $(".runda").hide()
            $(".roysambu").show();
        }
        if(filterByLocation.toLowerCase() === "runda"){
            $(".runda").show();
            $(".karen").hide();
            $(".roysambu").hide();   
        }
    });
})