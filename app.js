const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Evening dress",
    price: 988,
    description:"These dresses  made from luxurious fabrics  satin and feature sophisticated designs, including long lengths,\
     intricate detailing, and flattering silhouettes that exude grace and sophistication",
    colors: [
      {
        code: "white",
        img: "./img/eveningdress.png",
      },
      {
        code: "black",
        img: "./img/eveningdressblack.png",
      },
    ],
  },
  {
    id: 2,
    title: "Casual dress",
    price: 188,
    description:"This casual dress is the perfect blend of comfort and style, designed for effortless everyday wear.\
     Made from soft, breathable fabric, it features a relaxed fit that drapes elegantly on the body",
    colors: [
      {
        code: "green",
        img: "./img/sliderItem2.png",
      },
      {
        code: "pink",
        img: "./img/casualdrespink.png",
      },
    ],
  },
  {
    id: 3,
    title: "Oficce dress",
    price: 250,
    description:"This office dress combines sophistication with functionality, making it an ideal choice for the professional setting.\
     Crafted from a high-quality, wrinkle-resistant fabric, it features a tailored fit that enhances the silhouette without feeling restrictive",
    colors: [
      {
        code: "lightgray",
        img: "./img/sliderItem3.png",
      },
      {
        code: "darkblue",
        img: "./img/officcedressblue.png",
      }
    ],
  },
  {
    id: 4,
    title: "Special Occasion Dress",
    price: 1899,
    description:"Elegant and eye-catching, this special occasion dress is designed to make a lasting impression.\
     Crafted from luxurious, flowing fabric, it features a fitted bodice that accentuates the waist before cascading into a full, floor-length skirt.",
    colors: [
      {
        code: "gold",
        img: "./img/sliderItem4.png",
      },
      {
        code: "black",
        img: "./img/partydressblack.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc =document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductDesc.textContent =choosenProduct.description;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});