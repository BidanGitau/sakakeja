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