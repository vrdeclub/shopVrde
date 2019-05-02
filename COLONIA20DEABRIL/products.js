let products = [
    { name: 'Acelga (kg)', amount: 0, url: 'images/acelga.jpg', type: 'veggie' },
    { name: 'Achicoria (500g)', amount: 0, url: 'images/achicoria.jpg', type: 'veggie' },
    { name: 'Aji Vinagre (500g)', amount: 0, url: 'images/ajivinagre.jpg', type: 'veggie' },
    // { name: 'Ajo (x3)', amount: 0, url: 'images/ajo.jpg', type: 'veggie' },
    { name: 'Albahaca (x2)', amount: 0, url: 'images/albahaca.jpg', type: 'veggie' },
    { name: 'Anco (kg)', amount: 0, url: 'images/anco.jpg', type: 'veggie' },
    // { name: 'Apio (kg)', amount: 0, url: 'images/apio.jpg', type: 'veggie' },
    { name: 'Batata (kg)', amount: 0, url: 'images/batata.jpg', type: 'veggie' },
    { name: 'Brocoli (kg)', amount: 0, url: 'images/brocoli.jpg', type: 'veggie' },
    { name: 'Berenjena (kg)', amount: 0, url: 'images/berenjena.jpg', type: 'veggie' },
    { name: 'Cebolla (kg)', amount: 0, url: 'images/cebolla.jpg', type: 'veggie' },
    { name: 'Chaucha (kg)', amount: 0, url: 'images/chaucha.jpg', type: 'veggie' },
    { name: 'Choclo x 2', amount: 0, url: 'images/choclo.jpg', type: 'veggie', price: 15 },
    // { name: 'Espinaca (500g)', amount: 0, url: 'images/espinaca.jpg', type: 'veggie' },
    { name: 'Hinojo (Paq)', amount: 0, url: 'images/hinojo.jpg', type: 'veggie', price: 25 },
    { name: 'Kale Morado (500g)', amount: 0, url: 'images/kalemorado.jpg', type: 'veggie' },
    { name: 'Kale (500g)', amount: 0, url: 'images/kale.jpg', type: 'veggie' },
    { name: 'Lechuga Criolla (kg)', amount: 0, url: 'images/lechugamantecosa.jpg', type: 'veggie' },
    { name: 'Lechuga Crespa (kg)', amount: 0, url: 'images/lechugacrespa.jpg', type: 'veggie' },
    // { name: 'Mijo (500g)', amount: 0, url: 'images/mijo.jpg', type: 'veggie' },
    { name: 'Morron Verde (kg)', amount: 0, url: 'images/morron.jpg', type: 'veggie' },
    { name: 'Morron Rojo (kg)', amount: 0, url: 'images/morronrojo.jpg', type: 'veggie', price: 30 },
    { name: 'Nabo (kg)', amount: 0, url: 'images/nabo.jpg', type: 'veggie' },
    { name: 'Pack Choi (kg)', amount: 0, url: 'images/packchoi.jpg', type: 'veggie' },
    { name: 'Papa (kg)', amount: 0, url: 'images/papa.jpg', type: 'veggie' },
    // { name: 'Papa Colorada (kg)', amount: 0, url: 'images/papacolorada.jpg', type: 'veggie' },
    { name: 'Pepino (kg)', amount: 0, url: 'images/pepino.jpg', type: 'veggie' },
    { name: 'Perejil (400g)', amount: 0, url: 'images/perejil.jpg', type: 'veggie' },
    { name: 'Puerro (PAQ)', amount: 0, url: 'images/puerro.jpg', type: 'veggie' },
    { name: 'Rabanito (500g)', amount: 0, url: 'images/rabanito.jpg', type: 'veggie' },
    { name: 'Radicheta (500g)', amount: 0, url: 'images/radicheta.jpg', type: 'veggie' },
    { name: 'Repollo (kg)', amount: 0, url: 'images/repollo.jpg', type: 'veggie' },
    { name: 'Remolacha (kg)', amount: 0, url: 'images/remolacha.jpg', type: 'veggie' },
    { name: 'Rucula (500g)', amount: 0, url: 'images/rucula.jpg', type: 'veggie' },
    // { name: 'Tomate (kg)', amount: 0, url: 'images/tomato.jpg', type: 'veggie' },
    // { name: 'Tomate Cherry (500g)', amount: 0, url: 'images/tomatecherry.jpg', type: 'veggie' },
    { name: 'Verdeo (500g)', amount: 0, url: 'images/verdeo.jpg', type: 'veggie' },
    { name: 'Zanahoria (kg)', amount: 0, url: 'images/zanahoria.jpg', type: 'veggie' },
    { name: 'Zapallito (kg)', amount: 0, url: 'images/zapallitos.jpg', type: 'veggie' },
    { name: 'Zuchinni (kg)', amount: 0, url: 'images/zuchinni.jpg', type: 'veggie' },

]
products = products.sort()

let discounts = [
    // { amount: "1", price: 55 },
    //{ amount: "2", price: 52.50 },
    //{ amount: "3", price: 50 },
    //{ amount: "4", price: 47.50 },
    // { amount: "5+", price: 45 },
    //{ amount: "60 > 200", price: 41 },
    //{ amount: "200 > 250", price: 36 },
    //{ amount: "250 >", price: 32 }
]


//Scroll top on pageload
window.addEventListener('scroll', function (evt) {

    var distance_from_top = document.documentElement.scrollTop

    if (distance_from_top === 0) {
        document.getElementsByClassName("search")[0].classList.remove("fixed");
    }

    if (distance_from_top > 0) {
        document.getElementsByClassName("search")[0].classList.add("fixed");
    }

});