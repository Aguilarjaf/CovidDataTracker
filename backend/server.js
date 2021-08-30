const express = require("express");
const path = require("path");

require('dotenv').config()

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(`${process.env.NEWS_API}`);

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/newsapi", (req, res) => {
    newsapi.v2.topHeadlines({
        q: 'covid',
        language: 'en',
        country: 'us'
    }).then(response => {
        // Return articles from the covid search as json
        console.log(response.articles);
        res.json(response.articles);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// app.use(express.static(psth.resolve(__dirname)));

// app.use("*", (req, res) => res.status(404).json({error: "Page not found"}));


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
