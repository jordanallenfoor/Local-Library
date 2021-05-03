function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++) {
    if (authors[i].id === id) {
      return authors[i];
    }
  }
}

function findBookById(books, id) {
  let result = books.find((book) => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  let booksOut = books.filter((book) => book.borrows[0].returned === false);
  let booksIn = books.filter((book) => book.borrows[0].returned === true);
  let borrowedStats = [booksOut, booksIn];

  return borrowedStats;
}

function getBorrowersForBook(book, accounts) {
  let borrowed = book.borrows;
  let result = borrowed
    .map((status) => {
      let borrowersInfo = findAuthorById(accounts, status.id);
      borrowersInfo.returned = status.returned;
      return borrowersInfo;
    })
    .slice(0, 10);
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
