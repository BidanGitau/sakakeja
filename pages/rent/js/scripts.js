$(document).ready(function(){
    $("#filter-button").click(function(event){
        let filterByLocation = $("#location").val();
        if(filterByLocation === "Karen"){
            $(".karen").show();
            $(".roysambu").hide();
            $(".runda").hide();
        }
        if (filterByLocation === "Roysambu"){
            $(".karen").hide();
            $(".runda").hide()
            $(".roysambu").show();
        }
        if(filterByLocation === "Runda"){
            $(".runda").show();
            $(".karen").hide();
            $(".roysambu").hide();   
        }
    });
})