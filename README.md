<p align="right"> [ <a href="./README_DE.md"> DE </a> ] </p>

# IPT5-BottleAnimation

```
Work in progress, no preview available
```

## Introduction
In my [web portfolio](https://github.com/FireNick44/webportfolio) I intended to have an animation tied to the flasks. To avoid confusion and so that my IPT5 project is separate from my portfolio, I created this repository. 
A lot of the information here are only important for my IPT5 work.

_(There are Integrated Practice Parts at my school, so called IPTs)._

## Mockup
A static version of my design idea is available in another [repository](https://github.com/FireNick44/webportfolio). <br> My idea is that you can move the bottles on the desktop version with a mouse collision.

## How it's made
The animation is of course made with JavaScript. First, I wanted to use the [Matter.js](https://brm.io/matter-js/) library, but this library offers too many features. Therefore, I decided to write it all myself in JavaScript.

## Supported browsers
A good browser support is very important to me, so I want to implement it well on all devices. It should not be a problem on any desktop pc. On a mobile browser, I will probably use a static animation. Or maybe a shake effect, that is activated when you click on a bottle, with your finger.

For more information visit my [web portfolio](https://github.com/FireNick44/webportfolio) repository.

## User Story

| Nr |         Title         |                                               Story                                                |                          Acceptance criteria                           |
|----|-----------------------|----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| 1. | Smooth animation      | As a website creator, I want to provide all users with a nice animation that should not stutter.   | The animations are smooth and work on all devices.                     |
| 2. | Fast loading time     | As a visitor, I want to quickly see the page, without considering what is present on that page.    | The animation does not need much space and can be downloaded quickly.  |
| 3. | Visitor experience    | As a website visitor, I want a surprising experience, when I visit a portfolio.                    | The portfolio is unique and offers an impressive experience.           |

## Prioritizing

1. A result that works
2. Appearance of the animation
3. Good code
4. Flawless result for a perfectionist
5. Sleep ;)


## Journal

## Known issues

```
Still a work in progress ;)
```

## Installation

Clone or download the project, open the project in visual studio code. The 2D animation in the folder [BottleAnimation](./BottleAnimation) does not need any external libraries.
However, for the 3D animation [Three](./Three) and [WorkingThreeBase](./WorkingThreeBase) folders you need a couple of modules.  Due to storage and privacy reasons there is no node-modules folder. Therefore, you need to install the following modules manually.

### Dependencies:

 - vite
 - three


### How to Install

Install: _(paste the following code to a bash or git terminal)_

```
npm install vite three
```

### Running the Project

```
npm run dev
```

### Open page on 8000 port
```
http://localhost:8000/
```

## License
Project is [MIT licensed](./LICENSE)
