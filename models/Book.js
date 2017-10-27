class Book {
    constructor(id, title, author, publisher, publishYear) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.publishYear = publishYear;
    }

    toDB() {
        return [this.title, this.author, this.publisher, this.publishYear];
    }
}

module.exports = Book;