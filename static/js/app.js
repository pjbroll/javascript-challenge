// Assign the data from `data.js` to a descriptive variable
var tableData = data;


// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo reports from data.js
console.log(tableData);



tableData.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
});


var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
   
})

})