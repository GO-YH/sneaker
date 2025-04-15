const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products=[
    {
        id: 1,
        title: "Air Force",
        Price: 119,
        colors: [
            {
                code: "Black",
                img: "./img/Product/air.png",
            },
            {
                code: "darkblue",
                img: "./img/Product/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./img/Product/jordan.png",
            },
            {
                code: "green",
                img: "./img/Product/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./img/Product/blazer.png",
            },
            {
                code: "green",
                img: "./img/Product/blazer2.png",
            }    
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors:[
            {
                code: "black",
                img: "./img/Product/Crater.png",
            },
            {
                code: "green",
                img: "./img/Product/Crater2.png",
            }    
        ],
    },
    {
        id: 5,
        title:"Hippie",
        price: 99,
        colors:[
            {
                code: "gray",
                img: "./img/Product/Hippie.png",
            },
            {
                code: "green",
                img: "./img/Product/Hippie2.png",
            }    
        ],
    },
    {
        id: 6,
        title:"Vaporfly",
        price: 169,
        colors:[
            {
                code: "red",
                img: "./img/Product/vaporfly.png",
            },
            {
                code: "blue",
                img: "./img/Product/vaporfly2.png",
            }    
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index) => {
    item.addEventListener("click",()=> {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "RM"+ choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});        

currentProductColors.forEach((color, index) => {
    color.addEventListener("click",() => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click",() => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white"
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click",() => {
    payment.style.display = "none";
});