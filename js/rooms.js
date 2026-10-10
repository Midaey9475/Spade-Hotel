// rooms.js
// ---------------------------------------------------------------
// All the rooms live in ONE list here. The room cards on the page and
// the payment pop-up both read from this list, so to add or change a room
// you only edit this file.
//
// Each room has:
//   name   - the title on the card
//   guests - who the room is for
//   price  - the price as a plain number (the commas are added by the code)
//   image  - the picture
//   alt    - a short description of the picture (for screen readers)
// ---------------------------------------------------------------

const rooms = [
    {
        name: "Luxurious Room",
        guests: "2 Adult 1 Child",
        price: 30000,
        image: "assets/images/rooms/luxurious-room.webp",
        alt: "Luxurious hotel room with a large window"
    },
    {
        name: "Couple's Room",
        guests: "2 Adult",
        price: 35000,
        image: "assets/images/rooms/couples-room.webp",
        alt: "Couple's room with a double bed and warm lighting"
    },
    {
        name: "Family Room",
        guests: "2 Adult 2 - 3 Child",
        price: 45000,
        image: "assets/images/rooms/family-room.webp",
        alt: "Family room with two beds"
    },
    {
        name: "Luxurious Room",
        guests: "Single Adult",
        price: 30000,
        image: "assets/images/rooms/luxurious-single.webp",
        alt: "Single luxurious room with a view"
    },
    {
        name: "Exclusive Family Suite",
        guests: "2 Adult 2 - 3 Child",
        price: 50000,
        image: "assets/images/rooms/exclusive-family-suite.webp",
        alt: "Exclusive family suite"
    },
    {
        name: "V.I.P Suite",
        guests: "2 Adults",
        price: 100000,
        image: "assets/images/rooms/vip-suite.webp",
        alt: "V.I.P suite"
    },
    {
        name: "V.V.I.P",
        guests: "Multipurpose",
        price: 150000,
        image: "assets/images/rooms/vvip-suite.webp",
        alt: "V.V.I.P suite"
    },
    {
        name: "Penthouse Apartment",
        guests: "Multipurpose Apartment",
        price: 250000,
        image: "assets/images/rooms/penthouse.webp",
        alt: "Penthouse apartment"
    }
];
