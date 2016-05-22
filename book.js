
// params {Boolean} p_booksLoaded. Using to indicate if user cliks first time on book tab
 

/**
 * Fires when user cliks on book tab first time.
 */
function loadBooks() {
  $.p_booksLoaded = true;
  var allBooks = getAllBooks();
  //template for book list
  var listStache = can.stache("<ul>{{#each allBooks}}<li>{{.}}</li>{{/each}}</ul>");
  //data for stache
  var list = listStache({
    allBooks: allBooks
  });
 //adding list into book tab
  $("#bookTab").append(list);
}


/**
 * Function returns all book names loaded from data.json
 * 
 * return {Array} allBook
 */
function getAllBooks() {
  var item1 = 0;
  var allBooks = [];
  var currentStore;
  while (item1 < $.p_data.length) {
    currentStore = $.p_data[item1];
    var item2 = 0;
    var currentBook;
    while (item2 < currentStore.books.length) {
      currentBook = currentStore.books[item2];
      allBooks.push(currentBook.bookName);
      item2++;
    }
    item1++;
  }
  return allBooks;
}