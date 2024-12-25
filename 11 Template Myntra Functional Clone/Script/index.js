let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItems");

  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];

  displayItemsOnhomepage();
  AddbagIcon();
}

function addItem(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  console.log(`Item ${itemId} added to bag. Current bag items:`, bagItems);
  AddbagIcon();
}

function AddbagIcon() {
  let bagItemIcon = document.querySelector(".item-count");
  if (bagItems.length > 0) {
    bagItemIcon.style.visibility = "visible";
    bagItemIcon.innerText = bagItems.length;
  } else {
    bagItemIcon.style.visibility = "hidden";
  }
}

function displayItemsOnhomepage() {
  let itemContainer = document.querySelector(".items-container");

  if (!itemContainer) {
    return;
  }

  let innerHTML = "";

  items.forEach((item) => {
    innerHTML += `
     <div class="item-container">
          <img src="${item.image}" class="item-img" alt="item image">
          <div class="rating">
              ${item.rating.stars}⭐ | ${item.rating.count} reviews
          </div>
          <div class="company-name">
              ${item.company}
          </div>
          <div class="item-name">${item.item_name}</div>
          <div class="price">
              <span class="current-price">₹${item.current_price}</span>
              <span class="original-price">₹${item.original_price}</span>
              <span class="discount">(${item.discount_percentage}% off)</span>
          </div>
          <button class="btn-add-bag" onclick="addItem(${item.id})">Add to Bag</button>
      </div>`;
  });

  itemContainer.innerHTML = innerHTML;
}
