const queries = {
    books: {
        selectAll: 'SELECT * FROM books',
        add: 'INSERT INTO books (title, author, publisher, publish_year) VALUES ($1, $2, $3, $4)'
    }
};

module.exports = queries;