# Frontend Mentor - FAQ accordion card solution by Maame

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./img/Screenshot%20(65).png)


### Links

- Solution URL: [Maame's FAQ accordion card solution](https://mbonamensa.github.io/fem_faq-accordion-card)
- Live Site URL: [Frontend Mentor | FAQ Accordion Card by Maame](https://mbonamensa.github.io/fem_faq-accordion-card)
- Figma file: [I created my own figma file](https://www.figma.com/file/6MMnRZacTFuO0UJGSTU0U8/Frontend-Mentor---FAQ-Accordion-Card?node-id=0%3A1&t=8gMJQ0Wz7Dc2fDkR-1)

## My process

### Built with

- Semantic HTML5 markup
- Accesible accordion markup
- SASS
- Flexbox
- Mobile-first workflow

### What I learned

Before I started the challenge, I did some research to find out the best way to markup accordions such that they are accessible. I came across a number of markups that can be used and I decided to go with a `button` wrapped in a heading as question and paragraph wrapped in a `div` as answer. Here's what the code looks like: 

```html
  <div class="question-wrapper">
        <h3><button aria-controls="id-1" aria-expanded="false">How many team members can I invite?</button></h3>
        <div class="answer" aria-controls="id-1" hidden>
          <p>You can invite up to 2 additional users on the Free plan. There is no limit on 
            team members for the Premium plan.
          </p>
        </div>
      </div>
```

I also learned about the `toggleAttribute` JavaScript method which adds or removes an attribute on a given html element.

### Continued development

I'd want to try out other accessible markup for accordions that I read about in my research to help me determine which one works best, in terms of writing less code and having less problems when styling.

### Useful resources

- [Accessible ARIA Accordions](https://www.scottohara.me/blog/2017/10/25/accordion-release.html) 
- [How do you mark up an accordion?](https://www.sarasoueidan.com/blog/accordion-markup/) 


## Author

- Website - [Maame Yaa Serwaa Bona-Mensa](https://mbonamensa.netlify.app)
- Frontend Mentor - [@mbonamensa](https://www.frontendmentor.io/profile/mbonamensa)
- Twitter - [@mys_bm](https://www.twitter.com/mys_bm)
