function changeBookInfo(bookId, newTitle, newAuthor) {
    const book = document.getElementById(bookId);

    if (book) {
        const titleElement = book.querySelector('.book-title');
        const authorElement = book.querySelector('.book-author');

        if (titleElement && authorElement) {
            titleElement.textContent = newTitle;
            authorElement.textContent = newAuthor;
        }
    }
}
function updateBookInfo() {
    const selectedBookId = document.getElementById('bookSelector').value;
    const newTitle = document.getElementById('newTitle').value;
    const newAuthor = document.getElementById('newAuthor').value;

    changeBookInfo(selectedBookId, newTitle, newAuthor);
}
function openBookPage(bookId) {
    // You can customize the URL or any other logic based on the selected book
    window.location.href = `book-details.html?book=${bookId}`;
}