# Rocket Academy: Project 1: Frontend App

https://bootcamp.rocketacademy.co/1-frontend/1.p-frontend-app

# Investronaut - Market in your pocket

Snappy, Swift and Specialised - Investronaut holds access to the entire market in your pocket - making it easy for investors of all levels to get their daily dose of market updates in a glance!

#Tech Stack

- React.JS
- TailwindCSS
- DaisyUI
- Puppeteer (Web Scrapping)

Project Management:

- Kanban Board - Notion
- Component Structure - Eraser.io (https://app.eraser.io/workspace/iyHLPI391xQgHQyk1zLt?origin=share)

## Core Features

- Customisable snap-to-grid dashboard layour
- Adding new widgets with sidebar
- Landing modal
- Responsive scaling (Mobile, Tablet & Web)

## Widgets:

- Pet Widget: Your little investing companion
- Notepad: Add, delete, save & prioritise daily to-dos
- Stock: Previous close stock price data pulled from polygon.io REST API
- Market Data Widget: Pull analyst reports & market fundamentals using Puppeteer
- World Clock: Set multiple timezones
- Brain Train: Memory game with 4 buttons and gets harder over time

# Outstanding Bugs

- **App.js**: Ln 67. Unable to use IF statement to match with a component, sending <NotesList/> from SideBar.js. Unable to make a 2 span size notes widget when adding from the Side Bar.
- **MarketData.js:** Webscrapper gives (Module not found: Error: Can't resolve 'fs' in '/Users/pichukaku/Documents/bootcamp/m1/project1-bootcamp/node_modules/@tootallnate/quickjs-emscripten/dist/generated') and (BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
  This is no longer the case. Verify if you need this module and configure a polyfill for it.) errors when trying to import puppeteer
- **MemoryGame.js:** Ln 73: lightButton function not working ( const buttonElement = document.getElementById(button); keeps returning undefined
  )

# Future Enhancements

- Clock: Enable it to display countdown to market open
- Pet: Make it more interactive, animations when clicked etc.
- Stock: Get more API calls, put in price changes, change ticker
- Notepad: Tagging of tickers? $TSLA
- MarketData: Pick type of fundamental data to pull - input ticker
- News Widget: Input ticker to pull latest 2-3 news items
- Youtube Widget: Embeded youtube widget to display investing video content

# Resources used

- Astronaut background https://pngtree.com/freepng/astronaut-spaceflight_5420858.html
- Astronaut Pet https://gifer.com/en/UUcK
- Draggable widget layout without libraries https://www.fareez.info/blog/draggable-widget-layouts-using-reactjs/
- Modal popup at launch (with componentDidMount()) https://stackoverflow.com/questions/74797095/why-am-i-unable-to-open-my-dialog-modally-in-javascript
- Stock price API https://polygon.io/docs/stocks
- Webscrapping in Javascript with Puppeteer https://www.freecodecamp.org/news/web-scraping-in-javascript-with-puppeteer/s

# Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

`npm start` Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
