
// params {Boolean} p_detailsLoaded. Using to indicate if user cliks first time on details tab
 

/**
 * Fires when user cliks on details tab first time.
 */
function loadDetails(){
  $.p_detailsLoaded = true;
  var allBooksWithDetails = getBooksAndDetails();
  //details template
  var detailsStache = can.stache("<ul>{{#each allBooks}}<li><b>{{bookName}}</b></li>Store name:{{store}}<br/>Author:{{details.author}}<br/>Price:{{details.price}}<br/><br/>{{/each}}</ul>");
  //data for details
  var details = detailsStache({
    allBooks: allBooksWithDetails
  });

  $("#detailsTab").append(details);
}


/**
 * Function returns all book details loaded from data.json
 * 
 * return {Array} allBook
 */
function getBooksAndDetails(){
  var item1 = 0;
  var allBooks = [];
  var currentStore;
  while (item1 < $.p_data.length) {
    currentStore = $.p_data[item1];
    var item2 = 0;
    var currentBook;
    while(item2 < currentStore.books.length){
      currentBook = currentStore.books[item2];
      currentBook.store = currentStore.storeName;
      allBooks.push(currentBook);
      item2++;
    }
    item1++;
  }
  return allBooks;
}