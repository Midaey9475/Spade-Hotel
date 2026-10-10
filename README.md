# Spade Hotel ♠

The website for **Spade Hotel**, a five star hotel in Ibadan. It is built with plain **HTML, CSS and a little JavaScript**.

This was my first website design, made right after learning HTML/CSS. The look is all my own idea, so the design (colours, fonts, gradients, shapes) is kept exactly as it was. This update is about making it **work well on every screen size**: phones, tablets, laptops and big monitors.

> This is a demo project. The booking and payment form does not take real payments and nothing is sent to a server.

## What you can do on the site

- Read about the hotel and see what it offers
- Pick arrival and departure dates and click **Book now** to jump to the rooms
- Slide through the **8 rooms** and click one to open the payment pop-up for that room
- Fill the payment form (a thank you message shows after it is submitted)
- Open the **About** page

## How to run it

No installation needed. Download the folder and open `index.html` in your browser.
You need an internet connection for the fonts, the scroll animations and the date picker.

## Folder structure

```
Hotel-Website/
├── index.html           Home page
├── about.html           About page
├── css/
│   ├── hotel.css        Styles for the home page
│   └── about.css        Styles for the about page
├── js/
│   ├── rooms.js         The list of rooms (edit this to change the room cards)
│   └── main.js          Menu button, room cards, payment pop-up, date pickers
└── assets/
    ├── images/          hero, hotel, rooms, offers, icons (and unused)
    └── favicon/         Browser tab and phone home screen icons
```

## Responsive design

The CSS is written for big screens first, then adjusted at these widths:

| Screen | What changes |
|---|---|
| **1024px and smaller** (tablets) | The navbar turns into a menu button. The booking bar moves inside the hero as a 2 column form. The intro section is shown with the text on top and the pictures under it. Offers show 2 per row. |
| **700px and smaller** | The payment pop-up stacks: room picture on top, form under it. |
| **560px and smaller** (phones) | Everything is one column. The booking bar fields stack. The room cards are sized to the screen and slide sideways. |

Other things that make it work on touch screens:

- Hover effects only run on devices that can hover. On phones the offer descriptions are always visible, because there is no hover.
- The room cards keep their sideways sliding row, with a "Swipe to see more rooms" hint on small screens.
- Form text is 16px on phones so the browser does not zoom in when you tap a field.
- The page never scrolls sideways, and the payment pop-up always fits the screen.

## Adding or changing a room

1. Put the picture in `assets/images/rooms/`
2. Open `js/rooms.js` and copy one room block to the end of the list
3. Change the name, guests, price and picture

The room card and the payment pop-up both read from this list, so nothing else needs changing.

## What changed from the first version

- Added `<!DOCTYPE html>` (the pages used to run in the browser's old "quirks mode"), fixed invalid CSS, and gave every element a unique id
- Fixed the layout on phones and tablets: the booking bar was squeezed, only 2 of the 8 rooms could be reached, and the intro section was hidden
- The payment pop-up now shows the amount on phones, and the first room no longer shows the wrong price after another room was opened
- Images went from **46 MB to about 1 MB** (resized and converted to WebP)
- The 8 copy-pasted room functions became one list (`rooms.js`) and one function
- Working menu button with a proper dropdown (the "Book Now" link was not closed and "Home" had no link)
- Links work: the phone number and email open the phone/mail app
- Added a "Back to Spade Hotel" link on the About page
- Removed files and links that were not used (animate.css, extra fonts, the favicon generator zip)
- Files organised into `css`, `js` and `assets` folders

## Things to fill in / ideas for later

- Check the email in the footer (`spades1@gmail.com`)
- Real social media links (the icons currently link to `#`)
- Connect the booking form to a real backend and payment service
- A page for each room

## Tech

HTML5 · CSS3 · Vanilla JavaScript · [AOS](https://michalsnik.github.io/aos/) (scroll animations) · jQuery UI (date picker) · Google Fonts (Pacifico, Lilita One, Dancing Script, Caveat)
