const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM \n Is \n Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street\n Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//test

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let siteTitle = document.querySelector('title')
siteTitle.textContent = "Great Idea!"

let links = document.querySelectorAll('a')
links[0].textContent = siteContent["nav"]["nav-item-1"]
links[1].textContent = siteContent["nav"]["nav-item-2"]
links[2].textContent = siteContent["nav"]["nav-item-3"]
links[3].textContent = siteContent["nav"]["nav-item-4"]
links[4].textContent = siteContent["nav"]["nav-item-5"]
links[5].textContent = siteContent["nav"]["nav-item-6"]

links.forEach( (item) => {
  item.style.color = "green";
})

let nav = document.querySelector('nav')
let a1 = document.createElement('a')
a1.textContent = "anc1";
let a2 = document.createElement('a')
a2.textContent = "anc2";
nav.appendChild(a1)
nav.prepend(a2)






let h1 = document.querySelector('.cta-text h1')
h1.innerText = siteContent["cta"]["h1"]

let button = document.querySelector('button')
button.textContent = siteContent["cta"]["button"]

let ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent["cta"]["img-src"]

let textContentH4 = document.querySelectorAll('.text-content h4')
let textContentP = document.querySelectorAll('.text-content p')

textContentH4[0].textContent = siteContent["main-content"]["features-h4"]
textContentP[0].textContent = siteContent["main-content"]["features-content"]

textContentH4[1].textContent = siteContent["main-content"]["about-h4"]
textContentP[1].textContent = siteContent["main-content"]["about-content"]

textContentH4[2].textContent = siteContent["main-content"]["services-h4"]
textContentP[2].textContent = siteContent["main-content"]["services-content"]

textContentH4[3].textContent = siteContent["main-content"]["product-h4"]
textContentP[3].textContent = siteContent["main-content"]["product-content"]

textContentH4[4].textContent = siteContent["main-content"]["vision-h4"]
textContentP[4].textContent = siteContent["main-content"]["vision-content"]

let middleImg = document.querySelector('.middle-img')
middleImg.src = "img/mid-page-accent.jpg"

let contact = document.querySelector(".contact h4")
contact.textContent = siteContent["contact"]["contact-h4"]

let contactP = document.querySelectorAll(".contact p")
contactP[0].innerText = siteContent["contact"]["address"]
contactP[1].textContent = siteContent["contact"]["phone"]
contactP[2].textContent = siteContent["contact"]["email"]

let footerP = document.querySelector("footer p")
footerP.textContent = siteContent["footer"]["copyright"]
















