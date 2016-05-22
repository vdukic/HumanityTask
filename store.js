/**
 * Calls after data is loaded. Used to create sortable table
 */
function dataLoaded() {
  var storeNames = new can.List($.p_data).attr("comparator", "null");
  //grid template
  var gridTemplate = can.stache("<table><thead><tr><th>Store name</th><th>City</th></thead>{{#each bookStores}}<tr><td>{{storeName}}</td><td>{{city}}</td></tr>{{/each}}</table>");
  var table = gridTemplate({
    bookStores: storeNames
  });


  //Using to sort table
  var sorter = new can.Map({
    sortBy: null
  });
  var sortCont = can.view(
    "sort-table",
    sorter, {
      attendence: function() {
        return person.attr("sortBy");
      }
    });
  //adding sort container and table into tab
  $("#storeTab").append(sortCont);
  $("#storeTab").append(table);

  //Handling click events on radio buttons to sort grid
  var el = document.getElementById('storeRadio');
  can.bind.call(el, "click", function(ev) {
    storeNames.attr("comparator", "storeName");
  });
  var el = document.getElementById('cityRadio');
  can.bind.call(el, "click", function(ev) {
    storeNames.attr("comparator", "city");
  });
}