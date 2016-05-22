$(document).ready(function() {
  //getting data from data.json
  Recipe = can.Model.extend({
    findAll: "data.json"
  }, {});
  Recipe.findAll({}, function(allData) {
    //fetching received data to global varible
    $.p_data = allData;
    dataLoaded();
  });
});
//handling tab change
$("#devTypes a").bind('click', function(ev) {
  ev.preventDefault();
  can.route.attr("devType", $(this).attr("href").substr(1));
});
//Routing
can.route.bind("devType", function(ev, newValue) {
  $("#devTypes a").each(function() {
    var tabName = $(this).attr("href").substr(1);
    //loading book data if user clicks tab first time
    if (newValue === 'bookTab' && !$.p_booksLoaded) {
      loadBooks();
    }
    //loading details data if user clicks tab first time
    if (newValue === 'detailsTab' && !$.p_detailsLoaded) {
      loadDetails();
    }
    //to add and remove active class
    if (tabName === newValue) {
      $("#" + tabName).fadeIn('slow');
      $(this).parent().addClass("active");
    } else {
      $("#" + tabName).hide();
      $(this).parent().removeClass("active");
    }
  });
});
can.route(":devType", {
  devType: "storeTab"
});
can.route.ready();