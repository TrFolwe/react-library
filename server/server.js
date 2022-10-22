const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 80;

//local exports
const { SQLite } = require("./database/SQLiteDatabase");

app.use(require("cors")());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/addBook", async (req, res) => {
    let requiredBody = ["bookName","bookWriter","bookPageLength","bookPrice"];
    Object.keys(req.body).forEach(bodyE => {
        if(!requiredBody.includes(bodyE)) return res.send(`Required body contents: ${requiredBody.join(", ")}`);
    });

    SQLite.addBook(req.body).then(resolve => res.send(`'${req.body["bookName"]}' inserted row last id ${resolve}`)).catch(reject => console.error(reject));
});

app.post("/removeBook", async (req, res) => {
    if(!Object.keys(req.body).includes("bookId")) return res.send(`bookId required.`);
    res.send(await SQLite.removeBook(req.body.bookId));
});

app.get("/listBook", async (req, res) => {
    res.send(await SQLite.getBookList());
});

app.post("/bookByName", async (req, res) => {
    res.send(await SQLite.getBookByName(req.body.bookName));
})

app.listen(PORT, () => console.log(`Server starting on ${PORT} PORT`));