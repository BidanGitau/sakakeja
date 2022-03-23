// Business Logic
// Make constructor function for the filter function
function Filter(location, noOfRoom, price){
    this.location = location;
    this.noOfRoom = noOfRoom;
    this.price = price;
}

// Add Objects to Filter Constructor
let firstHouse = new Filter("Roysambu", 3, 50000);
let secondHouse = new Filter("Karen", 4, 80000);
let thirdHouse = new Filter("Roysambu", 2, 20000);

// User Logic
$(document).ready(function(){
    $("#filter-button").click(function(event){
        $(".card").hide();
        let filterByRooms = $("#rooms").val();
        let filterByLocation = $("#location").val();
        let filterByPrice = $("#price").val();
        let filterOptions = [firstHouse, secondHouse, thirdHouse];
        let inputOptions = [filterByRooms, filterByLocation, filterByPrice];

        for (let i = 0; i < inputOptions.length; i++){
            if( inputOptions[i] === ""){
                alert("Inputs Can't Be Empty");
            }
        }

        if (filterByRooms !=="" && filterByLocation !== "" && filterByPrice !==""){
            for(let i = 0; i<filterOptions.length; i++){
                if ((filterOptions[i].location === filterByLocation)){
                    $(".card").filter(".karen").show();
                }
                else{
                    $(".card").filter(".roysambu").hide();
                }
            }
        }
    });
})