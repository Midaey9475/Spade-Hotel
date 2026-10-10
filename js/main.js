// main.js
// ---------------------------------------------------------------
// The JavaScript for the home page:
//   1. the menu button (tablets and phones)
//   2. building the room cards from the list in rooms.js
//   3. the payment pop-up
//   4. the booking bar (date picker and Book now button)
//   5. scroll animations
//
// NOTE: rooms.js must be loaded BEFORE this file.
// ---------------------------------------------------------------


// Turn a number like 30000 into "30,000"
function formatPrice(amount) {
    return amount.toLocaleString("en-US");
}


// ----- 1. Menu button (hamburger) -----
const burgerBtn = document.getElementById("burgerBtn");
const burgerMenu = document.getElementById("burgerMenu");
const burgerIcon = document.getElementById("burgerIcon");

function openMenu() {
    burgerMenu.classList.add("open");
    burgerIcon.src = "assets/images/icons/close.png";     // the button now shows an X
    burgerBtn.setAttribute("aria-expanded", "true");
    burgerBtn.setAttribute("aria-label", "Close menu");
}

function closeMenu() {
    burgerMenu.classList.remove("open");
    burgerIcon.src = "assets/images/icons/menu.png";      // back to the three lines
    burgerBtn.setAttribute("aria-expanded", "false");
    burgerBtn.setAttribute("aria-label", "Open menu");
}

// clicking the button opens the menu, clicking again closes it
burgerBtn.addEventListener("click", function () {
    if (burgerMenu.classList.contains("open")) {
        closeMenu();
    } else {
        openMenu();
    }
});

// the menu also closes when a link is clicked or when the page is scrolled
burgerMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
});
window.addEventListener("scroll", function () {
    if (burgerMenu.classList.contains("open")) {
        closeMenu();
    }
});


// 2. Build the room cards
const roomRow = document.getElementById("roomRow");

rooms.forEach(function (room) {
    // a card is a div that works like a button (so keyboard users can use it too)
    const card = document.createElement("div");
    card.className = "room";
    card.setAttribute("role", "button");
    card.setAttribute("aria-haspopup", "dialog");
    card.tabIndex = 0;

    // long names get a slightly smaller title so they fit on one line
    let titleClass = "";
    if (room.name.length > 20) {
        titleClass = "longName";
    }

    card.innerHTML = `
        <img class="roomPic" src="${room.image}" alt="${room.alt}" loading="lazy" decoding="async">
        <h3 class="${titleClass}">${room.name}</h3>
        <p class="guests">${room.guests}</p>
        <p class="price">Starting from <b>&#8358;${formatPrice(room.price)}</b></p>
    `;

    // clicking the card (or pressing Enter / Space) opens the payment pop-up for THIS room
    card.addEventListener("click", function () {
        openPayment(room);
    });
    card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openPayment(room);
        }
    });

    roomRow.appendChild(card);
});


// 3. Payment pop-up
const paymentTab = document.getElementById("payback");
const paymentBox = document.getElementById("payment1");
const payForm = document.getElementById("payForm");
const payPicImg = document.getElementById("payPicImg");
const rmPrice = document.getElementById("rmPrice");
const successRoom = document.getElementById("successRoom");
const payError = document.getElementById("payError");
const termsBox = document.getElementById("terms");

// the fields that must not be empty
const requiredFields = [
    document.getElementById("Email"),
    document.getElementById("Card_Number"),
    document.getElementById("expDate"),
    document.getElementById("CVV"),
    document.getElementById("Password")
];

// remember which element was clicked so we can return to it when the pop-up closes
let lastClicked = null;

function openPayment(room) {
    lastClicked = document.activeElement;

    // fill the pop-up with this room's picture and price
    payPicImg.src = room.image;
    rmPrice.textContent = formatPrice(room.price);
    successRoom.textContent = room.name;

    // start with a clean form every time
    payForm.reset();
    payError.textContent = "";
    requiredFields.forEach(function (field) {
        field.classList.remove("invalid");
    });
    paymentBox.classList.remove("done");

    paymentTab.classList.add("open");
    paymentTab.setAttribute("aria-hidden", "false");
    document.body.classList.add("noScroll");      // the page behind should not scroll
    document.getElementById("closePay").focus();
}

function closePayment() {
    paymentTab.classList.remove("open");
    paymentTab.setAttribute("aria-hidden", "true");
    document.body.classList.remove("noScroll");
    if (lastClicked) {
        lastClicked.focus();
    }
}

// the ways to close the pop-up: X button, Close button, dark area around it, Escape key
document.getElementById("closePay").addEventListener("click", closePayment);
document.getElementById("closePay2").addEventListener("click", closePayment);
paymentTab.addEventListener("click", function (event) {
    if (event.target === paymentTab) {
        closePayment();
    }
});
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && paymentTab.classList.contains("open")) {
        closePayment();
    }
});

// when the Submit button is clicked
payForm.addEventListener("submit", function (event) {
    event.preventDefault();      // stop the page from reloading

    // mark every empty field with a red line
    let allFilled = true;
    requiredFields.forEach(function (field) {
        if (field.value.trim() === "") {
            field.classList.add("invalid");
            allFilled = false;
        }
    });

    if (!allFilled) {
        payError.textContent = "Please fill in the fields marked in red.";
        return;
    }
    if (!termsBox.checked) {
        payError.textContent = "Please agree to the terms and conditions.";
        return;
    }

    // everything is fine: show the thank you message (this is a demo, no payment is taken)
    payError.textContent = "";
    paymentBox.classList.add("done");
});

// the red line disappears as soon as the visitor starts typing in that field
requiredFields.forEach(function (field) {
    field.addEventListener("input", function () {
        field.classList.remove("invalid");
    });
});


// ----- 4. Booking bar -----
// "Book now" takes the visitor down to the rooms
document.getElementById("booking").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("rooms").scrollIntoView({ behavior: "smooth" });
});

// Date pickers (jQuery UI). The departure date can't be before the arrival date.
if (window.jQuery && jQuery.fn.datepicker) {
    $("#arrivalDate").datepicker({
        dateFormat: "dd/mm/yy",
        minDate: 0,                                   // 0 = today, no dates in the past
        onSelect: function () {
            $("#departureDate").datepicker("option", "minDate", $(this).datepicker("getDate"));
        }
    });
    $("#departureDate").datepicker({
        dateFormat: "dd/mm/yy",
        minDate: 0
    });
}


// ----- 5. Scroll animations (AOS) -----
if (window.AOS) {
    AOS.init({
        // no animations for people who asked their device for less motion
        disable: function () {
            return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        }
    });
}
