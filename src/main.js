// Fetch the items from the JSON file
function loadItems() {
  return fetch("../data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

// // Update the list with the given items
function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}
// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
    <li class="item">
        <img
          src="${item.image}"
          alt="${item.type}"
          class="item__thumbnail"
        />
        <span class="item__description">
          <div class="name">${item.name}</div>
          <div class="detail">${item.detail}</div>
          <div class="price">${item.price}</div>
          <i class="${item.icon}"></i>${item.likes}
          <div class="date">${item.date}</div>
        </span>
      </li>`;
}

// filter buttons list from the given data item
// hightolow button
function onButtonClick1(items) {
  items.sort(function (a, b) {
    return b.price - a.price;
  });
  displayItems(items);
  // const filtered = items.filter(() => true);
  // displayItems(filtered);
}

// lowtoHigh button
function onButtonClick2(items) {
  items.sort(function (a, b) {
    return a.price - b.price;
  });
  displayItems(items);
  // const filtered = items.filter(() => true);
  // displayItems(filtered);
}

// newest button
function onButtonClick3(items) {
  items.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  displayItems(items);
  // const filtered = items.filter(() => true);
  // displayItems(filtered);
}

// likes button
function onButtonClick4(items) {
  items.sort(function (a, b) {
    return b.likes - a.likes;
  });
  displayItems(items);
  // const filtered = items.filter(() => true);
  // displayItems(filtered);
}

// abc array button
function onButtonClick5(items) {
  items.sort(function (a, b) {
    return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
  });
  displayItems(items);
  // const filtered = items.filter(() => true);
  // displayItems(filtered);
}

function setEventListeners(items) {
  // const logo = document.querySelector(".logo");
  const hightoLow = document.querySelector(".btn.hightoLow");
  const lowtoHigh = document.querySelector(".btn.lowtoHigh");
  const newest = document.querySelector(".btn.newest");
  const recommend = document.querySelector(".btn.recommend");
  const abc = document.querySelector(".btnall.abc");

  // logo.addEventListener("click", () => onButtonClick(items));
  hightoLow.addEventListener("click", () => onButtonClick1(items));
  lowtoHigh.addEventListener("click", () => onButtonClick2(items));
  newest.addEventListener("click", () => onButtonClick3(items));
  recommend.addEventListener("click", () => onButtonClick4(items));
  abc.addEventListener("click", () => onButtonClick5(items));
}

// main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
