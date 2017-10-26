class Book {
    constructor(id, title, author, publisher, publishYear) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.publishYear = publishYear;
    }

    toDB() {
        let bookDB = [];
        if (this.id) {
            bookDB.push(this.id);
        }
        return bookDB.concat([this.title, this.author, this.publisher, this.publishYear]);
    }
}

module.exports = Book;