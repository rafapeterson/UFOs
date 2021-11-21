// import the data from data.js
const tableData = data;
// reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
  // clear table to start
  tbody.html("");

  // for each row to iterate through data
  data.forEach((dataRow) => {
    // add a table row as it ierates through the data
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add each value as a table cell
    Object.values(dataRow).forEach((val) => {
      // set up action of appending data into a table data tag <td>
      let cell = row.append("td");
      // add values in each cell
      cell.text(val);
    });
  });
};

function handleClick(){
    // telling D3 to look for the #datetime ID in the HTML tags & having it hold the data in the "date" variable.
   let date = d3.select("#datetime").property("value");
   let filteredData = tableData;

   //using if statement to check for date & if present return only the data with that date.
   if (date) {
       // apply 'filter' to the table data to only keep the rows where 'datetime' value matches the filter value
       filteredData = filteredData.filter(row => row.datetime === date);
   };

   // Rebuild the table using filtered data
   buildTable(filteredData);

};
// attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);
