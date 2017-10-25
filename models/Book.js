class Book {
    constructor(title, author, publisher, publishYear) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.publishYear = publishYear;
    }

    toDB() {
        return {
            title: this.title,
            author: this.author,
            publisher: this.publisher,
            publish_year: this.publishYear
        }
    }
}

module.exports = Book;