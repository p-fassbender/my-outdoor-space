![Github license](https://img.shields.io/badge/license-MIT-green.svg)

# My Outdoor Space 

The aim of this project was to work as a team and create a MERN stack single-page application that works with real-world data to solve a real-world challenge, with a focus on data and user demand

## Table of Contents
[Technologies Used](#technologies-used) <br>
[Installation](#installation) <br>
[Usage](#use) <br>
[Testing](#tests) <br>
[Media](#media) <br>
[Contact and Questions](#questions) <br>
  

## Technologies Used
* JavaScript
* HTML5
* CSS3
* Bootstrap5
* Express.js
* React.js
* ApolloServer
* GraphQL
* jwt
* bcrypt
* mongoDB
* mongoose
* Concurrently

## Installation
### Clone Repository
* *https:* git clone [https://github.com/p-fassbender/my-outdoor-space.git](https://github.com/p-fassbender/my-outdoor-space.git)
* *ssh:* git clone [git@github.com:p-fassbender/my-outdoor-space.git](git@github.com:p-fassbender/my-outdoor-space.git)

### Install Dependencies
* All NPM packages required for this application are already listed as dependencies in the package.json file. Run the command **npm i** command in your terminal at the root directory level to install the packages.
* Ensure you have Node.js installed on your machine. The application will be invoked by entering node server.js in the command line.

## Use
This program can be run through a browser using the provided link to the the deployed application in the [Media](#media) section. Alternatively, to run this application locally you will need to:

* Clone this repository to receive all of the files
* Set up your environment variables in a .env file
* Run **npm install** command in your terminal at the root directory level to set up all of the dependencies
* Initialize and populate your database by running the **node server/config/seeds** command in your terminal at the root directory level
* Run **npm run develop** to start the application's connection
* Go to the url of the application [http://localhost:3000/](http://localhost:3000/) to begin using it

## Tests
There are no formal tests for this project

## Media
-- screenshots go here --

The following link is to this project's github repository
https://github.com/p-fassbender/my-outdoor-space

The following link is to this project's live website
--heroku site goes here -- 

## Questions
Any questions feel free to contact us via our githubs or by sending any of us an email. <br/>
### Eric
* Email: ericbwebdev86@gmail.com   
* GitHub: https://github.com/ericbwebdev86
### Matt
* Email: mattkolbach@yahoo.com
* GitHub: https://github.com/MattKolbach
### Preston
* Email: fassbenderp0551@gmail.com
* GitHub:  https://github.com/p-fassbender
### Ryan
* Email: 
* GitHub: https://github.com/rtthiel8

## License
MIT license is a short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

## USER STORY
AS An outdoor enthusiast
I WANT a forum where I can share my views and ideas on particular outdoor topics by either starting my own discussion or contributing to somebody else's.

## ACCEPTANCE CRITERIA
* WHEN I visit the site for the first time
THEN I am presented with the homepage which includes navigation links for the homepage and the option to log in
* WHEN I view the homepage
THEN I am presented with a collection of genres and a list of topics for each genre respectfully
* WHEN I click on a topic
THEN I am taken to the individual topic's page
* WHEN I view the topic page 
THEN I am presented with a list of discussion threads for that topic 
* WHEN I am logged in and view the topic page
THEN I have the option to create a thread with a title, content, and image if desired
* When I click on a thread
THEN I am taken to the individual thread's page
* WHEN I view the thread page
THEN I am presented with the original thread and all posts made on the thread
* WHEN I am logged in and view the thread page
THEN I have the option to create a post and add it to the thread with a title and content
* WHEN I click on the title
THEN I am taken to the homepage
* WHEN I choose to sign up
THEN I am prompted to create an account by providing a username and password
* WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
* WHEN I choose to log in
THEN I am prompted to enter my username and password
* WHEN I enter incorrect username or password 
THEN I am notified I have incorrect credentials
* WHEN I am signed in to the site
THEN I see navigation links for the homepage, the menu, and the option to log out
