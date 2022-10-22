const sqlite = require('better-sqlite3')("./library.db");

sqlite.exec(`CREATE TABLE IF NOT EXISTS bookTable(
    _id INTEGER NOT NULL PRIMARY KEY,
    bookName VARCHAR(50) NOT NULL,
    bookWriter VARCHAR(50) NOT NULL,
    bookPageLength VARCHAR(4) NOT NULL,
    bookPrice INTEGER NOT NULL
)`);

class SQLite {
    static addBook(bookData) {
        
        return new Promise((resolve, reject) => {
            try {
                const stmt = sqlite.prepare(`INSERT INTO bookTable(
                    bookName,
                    bookWriter,
                    bookPageLength,
                    bookPrice
                    ) VALUES(?, ?, ?, ?)`);
                resolve(stmt.run(Object.values(bookData)).lastInsertRowid);
            }catch(sqlExp) {
                reject(sqlExp);
            }
        });
    }

    static removeBook(bookId) {
        return new Promise(async (resolve) => {
            const book = await this.getBookById(bookId);
            if(!book) return resolve(`${bookId} ID Not found!`);
            console.log(await this.getBookById(bookId))
            const stmt = sqlite.prepare(`DELETE FROM bookTable WHERE _id = ?`);
            stmt.run(bookId);
            resolve(`'${book.bookName}' deleted row.`);
        });
    }

    static getBookById(bookId) {
        return new Promise((resolve, reject) => {
            try {
                const stmt = sqlite.prepare(`SELECT * FROM bookTable WHERE _id = ?`);
                resolve(stmt.get(bookId));
            }catch(sqlExp) {
                reject(sqlExp);
            }
        });
    }

    static getBookByName(bookName) {
        return new Promise((resolve, reject) => {
            try {
                const stmt = sqlite.prepare(`SELECT * FROM bookTable WHERE bookName = ?`);
                resolve(stmt.get(bookName));
            }catch(sqlExp) {
                reject(sqlExp);
            }
        });
    }

    static getBookList() {
        return new Promise((resolve, reject) => {
            try {
                const stmt = sqlite.prepare(`SELECT * FROM bookTable`);
                const books = [];
                for(const row of stmt.iterate()) books.push(row);
                resolve(books);
            }catch(sqlExp) {
                reject(sqlExp);
            }
        });
    }
}

module.exports = {
    SQLite
};