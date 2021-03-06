# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

Desktop
![](screenshot/desktop.png)

Mobile
![](screenshot/mobile.png)

Error Message and Icon
![](screenshot/error.png)

### Links

- [Solution URL here](https://github.com/ponhuang/signup-form)
- [Live site URL here](https://ponhuang.github.io/signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- NPM node-sass
- SCSS custom properties
- Flexbox
- Desktop-first workflow

### What I learned

Because I set the same class for each error icon and message, if I use querySelector then it only shows the first one. Make const for currentElement instead of querySelector one class. It can work properly.

```js
const invalidateElement = (element) => {
  const currentElement = element;
  const errorIcon = currentElement.nextElementSibling;
  const errorMessage = currentElement.parentElement.nextElementSibling;

  currentElement.classList.add("invalid");
  errorIcon.classList.remove("hidden");
  errorMessage.classList.remove("hidden");
};
```

### Useful resources

- [JavaScript Form Validation](https://www.youtube.com/watch?v=ps0-JAQENXI&list=PLSPVbqGjagnvrKOLljiUtmhpWFK4HfTJ6&index=19&t=1423s) - This helped me know and write validate function.

## Author

Pon Huang

[Intagram](https://www.instagram.com/une.tw/)
[Art Blog](https://une722.wordpress.com)

## Acknowledgments

Thanks [Nurcholis](https://www.frontendmentor.io/solutions/signup-form-scss-L9uo8GmGaY#comment-62cd874e92ed2b163eed4ef3) Help me to solve the JS problem and icon horizontal align.
