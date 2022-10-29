const manuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');

const destopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');




manuEmail.addEventListener('click', toogleDestopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarIcon.addEventListener('click', toggleCartAside);


function toogleDestopMenu () {
    const isAsideOpen = !aside.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.add('inactive');
    }
    destopMenu.classList.toggle('inactive');
}

function toogleMobileMenu () {
    const isAsideOpen = !aside.classList.contains('inactive');
    
    if (isAsideOpen) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside () {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !destopMenu.classList.contains('inavtive');

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive')
    }
    if (isDesktopMenuOpen) {
        destopMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 220,
    image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Car Alpine',
    price: 25000,
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?cs=srgb&dl=pexels-alexgtacar-1592384.jpg&fm=jpg&_gl=1*1elzvje*_ga*MTk1MjI1MzE4LjE2NjY5Mzk4MTg.*_ga_8JE65Q40S6*MTY2NzA2OTM0OC44LjEuMTY2NzA2OTY1NC4wLjAuMA..',
});
productList.push({
    name: 'Car Challenger',
    price: 50000,
    image: 'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?cs=srgb&dl=pexels-cesar-perez-733745.jpg&fm=jpg&_gl=1*1d8x6op*_ga*MTk1MjI1MzE4LjE2NjY5Mzk4MTg.*_ga_8JE65Q40S6*MTY2NzA3MTU3MC45LjEuMTY2NzA3MTU4OC4wLjAuMA..',
});
productList.push({
    name: 'Car Mustang',
    price: 70000,
    image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?cs=srgb&dl=pexels-thuany-marcante-1805053.jpg&fm=jpg&_gl=1*rnqnhr*_ga*MTk1MjI1MzE4LjE2NjY5Mzk4MTg.*_ga_8JE65Q40S6*MTY2NzA2OTM0OC44LjEuMTY2NzA2OTM1MS4wLjAuMA..',
});
productList.push({
    name: 'Car Audi',
    price: 80000,
    image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Bike',
    price: 220,
    image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Car Alpine',
    price: 25000,
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?cs=srgb&dl=pexels-alexgtacar-1592384.jpg&fm=jpg&_gl=1*1elzvje*_ga*MTk1MjI1MzE4LjE2NjY5Mzk4MTg.*_ga_8JE65Q40S6*MTY2NzA2OTM0OC44LjEuMTY2NzA2OTY1NC4wLjAuMA..',
});
productList.push({
    name: 'Car Challenger',
    price: 50000,
    image: 'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?cs=srgb&dl=pexels-cesar-perez-733745.jpg&fm=jpg&_gl=1*1d8x6op*_ga*MTk1MjI1MzE4LjE2NjY5Mzk4MTg.*_ga_8JE65Q40S6*MTY2NzA3MTU3MC45LjEuMTY2NzA3MTU4OC4wLjAuMA..',
});
productList.push({
    name: 'Car Mustang',
    price: 70000,
    image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?cs=srgb&dl=pexels-thuany-marcante-1805053.jpg&fm=jpg&_gl=1*rnqnhr*_ga*MTk1MjI1MzE4LjE2NjY5Mzk4MTg.*_ga_8JE65Q40S6*MTY2NzA2OTM0OC44LjEuMTY2NzA2OTM1MS4wLjAuMA..',
});
productList.push({
    name: 'Car Audi',
    price: 80000,
    image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
console.log(productList);

function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName)
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
