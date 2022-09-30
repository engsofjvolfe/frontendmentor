# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Gradient: hsl(6, 100%, 80%) to hsl(335, 100%, 65%)

### Neutral

- Pale Blue: hsl(243, 100%, 93%)
- Grayish Blue: hsl(229, 7%, 55%)
- Dark Blue: hsl(228, 56%, 26%)
- Very Dark Blue: hsl(229, 57%, 11%)

## Typography

### Body Copy

- Font size: 14px

### Font

- Family: [Raleway](https://fonts.google.com/specimen/Raleway)
- Weights: 400, 700


### TRICK FOR BALOON TIP
HTML
    <div class="baloon-tip"></div>
CSS
    .baloon-tip {
        position: absolute;
        right: 5%;
        top: 12%;
        background-color: var(--white);
        border-top: 60px solid var(--white);
        border-right: 50px solid transparent;
        background-clip: padding-box;
        padding: 0 10px 10px 10px;
        transform: rotate(90deg);
    }