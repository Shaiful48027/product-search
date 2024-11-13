let product = [
    {
        id : 1,
        imageUrl : 'https://i.pcmag.com/imagery/articles/04R5CFsM00GguWBgKtJJyEM-2.jpg',
        productName : "Samsung S23 Ultra",
        price : 12000,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam expedita reprehenderit ea consequatur dolor eos praesentium repellat. Repellendus, voluptatem?'
    },
    {
        id : 2,
        imageUrl : 'https://m.media-amazon.com/images/I/61zn3e2q13L.jpg',
        productName : "Tshirt Mens Collection",
        price : 200,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam expedita reprehenderit ea consequatur dolor eos praesentium repellat. Repellendus, voluptatem?'
    },
    {
        id : 3,
        imageUrl : 'https://imgs.search.brave.com/DjIl-Ajn0nlUxXaSrukmIFecIjAIDrTR-Dj5DyeOipQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3Jhenlkb2d0c2hp/cnRzLmNvbS9jZG4v/c2hvcC9maWxlcy9p/bWhpZGluZ2NhbXBz/cXVhcmUuanBnP3Y9/MTcyNDk0ODg4MyZ3/aWR0aD05MDA',
        productName : "Jersey WHile Cotton",
        price : 400,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam expedita reprehenderit ea consequatur dolor eos praesentium repellat. Repellendus, voluptatem?'
    },
    {
        id : 4,
        productName : "it is product Four",
        imageUrl : 'https://service.portfoliohubs.net/wp-content/uploads/2024/03/Screenshot_24-e1709757064944-1.jpg',
        price : 20,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam expedita reprehenderit ea consequatur dolor eos praesentium repellat. Repellendus, voluptatem?'
    }
];


const form = document.getElementById("form");

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const searchBoxValue = e.target.searchBox.value;
    const lowerCase = searchBoxValue.toLowerCase();
    
    const srcResult = product.filter((value)=> {
        const productTitle = value.productName;
        const title = productTitle.toLowerCase();
        return title.includes(lowerCase);
    });

    const rootDiv = document.getElementById('root');
    srcResult.forEach(value => {
        let htmlCode = productDetails(value);
        rootDiv.innerHTML += htmlCode;
    })
})

function productDetails(info){
    const{imageUrl, productName,  price, description} = info;
    const cardDesign = `
        <div class="productCart">
            <img src="${imageUrl}" alt="">
            <div class="productContetn">
                <h2>$${price}</h2>
                <h4>${productName}</h4>
                <p>${description}</p>
            </div>
        </div>
    `;
    return cardDesign;
}

