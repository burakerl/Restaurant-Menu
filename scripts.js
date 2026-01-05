const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "images/item-1.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "images/item-2.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.",
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "images/item-3.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.",
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "images/item-4.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.",
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "images/item-5.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.",
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "images/item-6.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.",
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "images/item-7.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.",
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "images/item-8.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.",
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "images/item-9.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.",
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "images/item-10.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate neque incidunt est ad quam.",
  },
];

function productDisplay(list) {
  let products = list.map(
    (product) =>
      `<div class="product-container">
          <div class="img-container">
            <img src="${product.img}" alt="" />
          </div>
          <div class="product">
              <div class="product-title">
                  <h4 class="title">${product.title}</h4>
                  <p class="price">$ ${product.price}</p>
              </div>
              <p class="product-info">
                ${product.desc}
              </p>
          </div>
        </div>`
  );

  let productContainer = document.querySelector(".menu-section");
  products = products.join("");
  productContainer.innerHTML = products;
}

productDisplay(menu);

function buttonDisplay() {
  let buttons = document.querySelectorAll(".button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      let filteredMenu = menu.filter((p) => {
        if (btn.id == "all") {
          return menu;
        } else if (p.category == btn.id) {
          return p;
        }
      });
      productDisplay(filteredMenu);
    });
  });
}
buttonDisplay();
