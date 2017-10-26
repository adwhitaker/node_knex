class Book {
    constructor(id, title, author, publisher, publishYear) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.publishYear = publishYear;
    }

    toDB() {
        return {
            book_id: this.id,
            title: this.title,
            author: this.author,
            publisher: this.publisher,
            publish_year: this.publishYear
        }
    }
}

module.exports = Book;