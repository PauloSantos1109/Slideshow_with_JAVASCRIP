'use strict'

const images = [
{'id':'1','url':'./img/One Piece.jpg'},
{'id':'2','url':'./img/Naruto Shippuden.jpg'},
{'id':'3','url':'./img/Samurai - X.jpg'},
{'id':'4','url':'./img/boku no hero.jpg'},
{'id':'5','url':'./img/Pokemon.jpg'},
{'id':'6','url':'./img/Super-Onze.jpg'},
{'id':'7','url':'./img/chrono.jpg'},
{'id':'8','url':'./img/inuyasha.jpg'},
{'id':'9','url':'./img/tenchi.jpg'},
{'id':'10','url':'./img/yuyuhakusho.jpg'},


]
const containerItens = document.querySelector('#container-items');




const loadImages = (images, container) => {
    images.forEach (image =>{
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            
            </div>
        
        `
    })

}


loadImages(images, containerItens);

let items = document.querySelectorAll('.item');


const  next = () => {
    containerItens.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}
const previous = () => {
    const lastItem = items[items.length - 1];
    containerItens.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#next').addEventListener('click', next);
document.querySelector('#previous').addEventListener('click', previous);