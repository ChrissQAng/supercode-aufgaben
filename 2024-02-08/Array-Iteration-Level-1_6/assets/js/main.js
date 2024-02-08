let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];
let array = album.map((item) => {
  let element = item.toLowerCase();
  if (element.includes(".gif") || element.includes(".jpg")) {
    return element.slice(0, -4);
  } else {
    return (element = "invalid");
  }
});

console.log(array);
