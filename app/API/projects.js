var projects = [
    {
        id: "tender",
        type: "group",
        title: "tender",
        main_tools: ["HTML", "jQuery", "Spoonacular API"],
        role: "Front End",
        short: "Recipe browsing app with dating app interface for quick finds.",
        github: "https://github.com/mrealy/tender",
        heroku: "https://tender-recipes.herokuapp.com/",
        tools: "HTML, CSS, Javascript, jQuery, Firebase, Spoonacular API",        
        description: "Recipe browsing app with the interface of a dating app.  Comically inspired by tinder, this app allows users to quickly browse through multiple recipes using the Seatgeek API.  They can set filters for what to search for, and browse multiple recipes side-by-side, and then route to the full recipe page when they've made a selection.",
        contribution: ["Project conception", "Project lead", "Wireframing & HTML", "jQuery", "Spoonacular API data extraction"],        
        screenshots: ["/img/tender-1.PNG", "/img/tender-2.PNG", "/img/tender-3.PNG"],
        contributors: ["Laura McGinn", "Jeannine Hall", "Paul Sulikowski"]
    },
    {
        id: "who",
        type: "group",
        title: "who ARE you?",
        main_tools: ["Node/Express", "handlebars", "Sequelize"],
        role: "Full Stack",
        short: "Questions game for getting to know people (CRUD app)",
        github: "https://github.com/thensle/whoAreYou_Game",
        heroku: "https://secure-journey-72741.herokuapp.com/",
        tools: "Node, express, handlebars, Sequelize, passport",  
        description: "Get to know you card game with safe for work and not safe work questions.  Ability to create new cards, delete cards, or edit them.",
        contribution: ["Express GET/POST Routes", "Sequelize models", "Handlebars templating"],
        screenshots: ["/img/whoAREyou-1.PNG", "/img/whoAREyou-2.PNG", "/img/whoAREyou-3.PNG"],
        contributors: ["Julie Fisher", "Liam Fox", "Tara Hensle", "Chris Leeson"]
    },
    {
        id: "shuttle",
        type: "group",
        title: "ShuttleExtravaganza!",
        main_tools: ["Node/Express", "React", "Mongoose"],
        role: "Full Stack",
        short: "App for finding local events and connecting with other event attendees",
        github: "https://github.com/linhng15/Extravaganza",
        heroku: "https://agile-chamber-59717.herokuapp.com/",
        tools: "Node, express, React, Mongoose, Seatgeek API, Google Maps API", 
        description: "App for finding and saving upcoming events that helps users find other app users near them that are also interested in the same events.  Find a ride or a friend!",
        contribution: ["Project conception", "Project lead", "React Components", "Mongoose modeling", "Monoose GET/POST requests"],
        screenshots: ["/img/Extravaganza-1.PNG", "/img/Extravaganza-2.PNG", "/img/Extravaganza-3.PNG"],
        contributors: ["Caryn Carter", "Jared Moscrip", "Linh Nguyen"
    },
    {
        id: "NYT",
        type: "solo",
        title: "NYT Article Search",
        main_tools: ["React", "Mongoose", "Node/Express"],
        role: "Full Stack",
        short: "MERN app for searching and saving articles through the New York Times API.",
        github: "https://github.com/mrealy/NYT-react",
        heroku: "https://obscure-ocean-86063.herokuapp.com",
        tools: "React, React Router, Node, Mongoose, Express, NYT API, Bootstrap, webpack, axios",        
        description: "Search for New York Times articles by making axios get requests to the NYT api.  Using a react/bootstrap front end, lists articles you can then view or save to the database using mongoose.",
        contribution: ["Sole Contributor"],        
        screenshots: ["/img/NYTreact-1.png", "/img/NYTreact-2.png", "/img/NYTreact-3.png"],
        contributors: ["Sole Contributor"]
    },
    {
        id: "scraper",
        type: "solo",
        title: "Good News Scraper",
        main_tools: ["cheerio", "Node/Mongoose", "handlebars/jQuery"],
        role: "Full Stack",
        short: "Web app that scrapes news articles from Good News Newtork that can be viewed, saved, and commented on.",
        github: "https://github.com/mrealy/mongo-scraper",
        heroku: "https://good-news-scraper.herokuapp.com",
        tools: "jQuery, handlebars, CSS, Node, Express, Mongoose, cheerio",        
        description: "Web app that scrapes uplifting news articles from goodnewsnetwork.org and displays them on the front end for viewing or saving for later using handlebars templates. Saved articles can be reviewed and commented upon for discussion.",
        contribution: ["Sole Contributor"],        
        screenshots: ["/img/scraper-1.png", "/img/scraper-2.png", "/img/scraper-3.png"],
        contributors: ["Sole Contributor"]
    }
]

module.exports = projects;

