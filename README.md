# Love Logo

You can view the deployed website [here]()

<p align ="center">
<img src="assets/images/***********.png" width="800" height="100%">
</p>

# UX

Welcome to the Love Logo Quiz!

Love Logo is a mindful quiz that helps focus and concentration but most of all it's fun.
The inspiration for this quiz are my children. I wanted to develop a game that develops their cognitive intelligence and visual memory.
It can be played on your own or with others.  With this game, screen time becomes a positive neurological exercise, developing critical thinking, spelling and attention to detail.
Lovo Logo is intended for children and adults (5+years)

Please note that this quiz was created for the Code Institute’s Milestone Project 2 as part of their Diploma in Full Stack Software Development. The requirements are to make a static front-end website, using HTML, CSS, and (optional) Bootstrap or other CSS frameworks.  

## Users Stories

As a parent:

- I want to make sure the content is applicable to children
- I want my child to easily understand the purpose of the game
- I want my child to have fun while learning

As a player:

- I want to have fun
- I want to see nice and colorful game
- I want to see nice pictures that will keep my attention
- I want to see my time and score
- I want to contact the developer for questions

#

# Scope

## Features

- A simple and colorful page structure so that the user can easily find the game
- "Play" button - takes the user to the play section
- "How to play?" button - provides information about the game rules
- Incorrect guesses counter - the player shall have 4 incorrect guesses per logo
- 2 minute timer shown as a reverse progress bar. The player will need to guess as many correct logos as they can within two minutes.
- "Incorrect Modal" - triggered when the player either guesses 4 incorrect letters
- "Well Done Modal" - triggered when the player guesses the correct letters to reveal the name of the brand
- Contact form - user can contact the game provider if he has questions or suggestions for the game
- Footer - contains mail address and social links

## Future features

- Add more levels to increase difficulty
- Taylor the content to specific age groups (5 - 10 ; 8 - 15 ; 10+)
- Taylor the logos into specific categories (ie. cars, confectionary, toys, etc)
- Add music during game play
- When form is submitted, send a confirmation email

#

# Structure

- **Title**  
  - located at the top of the page

- **Container**
  - White container holds quiz content positioned page center

- **Play Section**  
  - within the container the Play Screen consists of 2 sections. The Logo image question is displayed on the left and the quiz elements 	are displayed on the right. The dynamic keyboard is live for the user to select the letters that they believe is the name of the brand.

- **Contact Form**  
  - allows the user to contact the game provider if he has questions or suggestions for the game

- **Footer**
  - contains mail address and social link

# Wireframes

## Desktop View

<p align="center">
<img src="assets/images/wireframes/desktop-view.png" width="600" height="1000">
</p>

# Tablet view

<p align="center">
<img src="assets/images/wireframes/tablet-view.png" width="500" height="1100">
</p>

# Mobile View

<p align="center">
<img src="assets/images/wireframes/mobile-view.png" width="300" height="1200">
</p>

# Surface

# Design

The design of this site is bright and bold with 2 tone colors. The aesthetic design of the game is kept simple to enable an intuitive UX experience and the main goal of this game is to be fun. The site is intended for children and adults and the content of the logos can be easily adapted and updated to target specific user groups.

The quiz consists of 2 main pages:-
The first page is the landing page of the game and consists of a title and content container. The container contains the game brand logo and  3 control buttons:-

- **Play Button**  
  - located in the container above the "How to Play" button, takes the user to the game section.
- **How to play Button**  
  - located in the container below the "Play" button, with a click a modal opens that displays text stating how to play the game.

- **High Score Button**  
  - located in the container below the "How To Play" button. Local Storage to display high scores list.

The second page is the game section. This section contains the game container. On loading, the dynamic keyboard populates inside the container, using the same bold color as the previous control buttons.  Above the keyboard is the word guess area which, visually, are underscores, until the user selects a correct letter which then is made visible in the word.
The dynamic keyboard is populated using JS and has the same layout as a traditional keyboard.  After a letter has been selected, the keyboard key will change color, indicating to the user that the letter has been used during the game and is now inactive.
Incorrect Guesses counter and Overall Score counter is positioned in container right.

The picture of the logo is positioned left side of the game container.

## Chosen Color

Color palette from Coolors
<p align="center">
<img src="assets/images/readme/colors-palette.png" width="900" height="250">
</p>

- **#9df57ab5** - body background color. It fits nicely with the background image. The site looks colorful and fun.
- **#3c444c** - the main color. I choose this color because it matches nicely with the rest of the page. The color is neither too dark nor too bright.
- **#fee73bde** - color for play, how to play and reset button. The color is cheerful. That’s why I liked it because it elevates the look of the page.
- **#ff4f98**- color for Play btn. Fits nicely with yellow background.
- **#2daaf3** - color for How to play text on the button, Reset text and background of Submit.  The color goes well with yellow and pink and gives the page a cheerful look.
- **deeppink** - color is used for brief introduction before the board game and title of the contact form.
- **#a9bedb** - footer background color. I liked the color because it is neither too dark nor too bright. It fits nicely with the whole page and with a submit button.

## Font

- Arial, sans-serif - main font
- Indie Flower - for headings and buttons

## Media

**Background Image** - covering the first part of the page. It is designed in cheerful colors to make the page cheerful and fun. The picture contains animals as well as the memory game itself. I choose this image because it's children friendly and everyone loves animals.

**Memory Game** - the images contain animals, each with a background of a different color which makes game fun and colorful.

# Technologies Used

## Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JS](https://en.wikipedia.org/wiki/JavaScript)

## Frameworks, Libraries & Programs Used

- [Google Fonts](https://fonts.google.com/https://fonts.google.com/) - provide Indie Flower fonts for the website.

- [Github](https://github.com/IrisSmok) - was used to store the project code.

- [Gitpod](https://www.gitpod.io/) - was used for coding.

- [Font Awesome](https://fontawesome.com/) -was used for the "Did you know?" list icons.

- [Balsamiq](https://balsamiq.com/) - was used to create site wireframes.

- [Am I Responsive](http://ami.responsivedesign.is/) - to check if the site is responsive on different screen sizes.

- [Tiny PNG](https://tinypng.com/) - this site is used to help me compress the images

- [Birme](https://www.birme.net/?target_width=150&target_height=150) - to help me resize the photos for memory board

- [Freepik](https://www.freepik.com/home) - was used for background image

- [Pixabay](https://pixabay.com/) - was used for all the images in the memory game

- [Beautify Tools](https://beautifytools.com/javascript-validator.php) - was used to validate JS

- [W3C Markup Validator](https://validator.w3.org/#validate_by_input) - was used to validate HTML

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - was used to validate CSS

- [Beautify](https://www.jpkc.com/tools/beautify/) - was used to correct indentation issues and get rid of too much whitespace - HTML, CSS and JS

- [Coolors](https://coolors.co/9df57a-3c444c-fee73b-ff4f98-2daaf3-a9bedb) - to make color palette

# Testing

- Tested on Chrome, Opera, Microsoft Edge, and Firefox desktop version browsers
- Chrome Developer Tools are used to test the responsiveness on: Desktop, Laptop, Moto G4, Galaxy S5, iPhone 5/SE, iPhone 6,7,8, iPhone 6,7,8 Plus, iPad, iPad Pro, Galaxy Fold

 Ensure that all user stories are achieved:

**For parents:**

- When entering the page, the parent can quickly and easily see the bright and nice color, images and content of the page.
- Clicking on the "How to play" button, the child can read game instructions that are clear and short.
- The game is fun and challenging for kids. Cheerful images make it fun, while moves counter and timer make it challenging.

**For user:**

- The game is fun for kids. Images of animals, cards that are shuffled each time a new game starts, moves counter and timer makes the game fun and challenging.
- Memory game is designed in bright and colorful colors. Animals images cards with colorful backgrounds make the game nice.
- The background image and cards images are bright and cheerful, easily capturing the user's attention
- A move counter and timer are placed under the memory board so that the user can see the moves and time he made during the game. When users find all 16 matches, a congratulatory pop-up window with final time and moves appears.

I used Lighthouse tools to test my website
<p align="center">
<img src="assets/images/readme/lighthouse-memory-game2.png" width="400" height="100%">
</p>

## Bugs and Issues

- Play button was located inside the "a" tag, which threw a bug in the HTML Validator. I solved the problem by replacing the button tag with the span tag.

- Warning: Family names containing whitespace should be quoted. If quoting is omitted, any whitespace characters before and after the name are ignored and any sequence of whitespace characters inside the name is converted to a single space.
warning was fixed by adding quotes to the Family names

- While playing a memory game I noticed that if you press the reset button you can't turn the cards over again, only after a few seconds. The problem was solved by adding the ResetBoard function to the startGame function which allows the memory board to reset

- I found an error some of the devices were not responsive, Galaxy Fold. I solved this problem by adding an extra media query - max-width 300px

# Final Product

## Desktop View

<p align="center">
<img src="assets/images/readme/final-product-desktop-view.png" width="700" height="600">

<p align="center">
<img src="assets/images/readme/final-product-desktop-view2.png" width="700" height="500">
</p>

<p align="center">
<img src="assets/images/readme/final-product-desktop-view3.png" width="700" height="500">
</p>

## Tablet View

 <p align="center">
<img src="assets/images/readme/final-product-tablet-view.png" width="500" height="700">
</p>

<p align="center">
<img src="assets/images/readme/final-product-tablet-view2.png" width="500" height="600">
</p>

<p align="center">
<img src="assets/images/readme/final-product-tablet-view3.png" width="500" height="700">
</p>

## Mobile View

 <p align="center">
<img src="assets/images/readme/final-product-mobile-view.png" width="500" height="900">
</p>

 <p align="center">
<img src="assets/images/readme/final-product-mobile-view2.png" width="500" height="900">
</p>

 <p align="center">
<img src="assets/images/readme/final-product-mobile-view3.png" width="500" height="900">
</p>

# Deployment

## GitHub Pages

1. Log into GitHub and locate the repository.
2. At the top locate the settings option.
3. Scroll towards  the bottom of the page and locate GitHub Pages.
4. Click on the link "Check it out here!".
4. Under 'Source' dropdown, click 'Master' from the options.
5. Click the save button.
6. The site is now published, it may not be available immediately.
7. The site URL is visible on the green bar under the "Github Pages".

## To run locally

- Log into GitHub and select a repository to download.
- Select code and Download the ZIP file.
- Once the download is complete, you can extract the file and use it in your local environment.

# Credits

Memory Game:

- [Marina Ferreira](https://github.com/code-sketch/memory-game) - youtube
- [Web Dev](https://www.youtube.com/watch?v=bbb9dZotsOc) - youtube
- [Sandra Israel](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript) - for congratulations window, timer and moves

## Media

[Freepik](https://www.freepik.com/home) - was used for background image

[Pixabay](https://pixabay.com/) - was used for all the images in the memory game

## Acknowledgements

- Thanks to my mentor for helpful feedback
- Slack community for answering all my questions
- Big thanks to my children for testing the website
- My mentor Iris for support and helpful feedback
