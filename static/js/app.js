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
}
