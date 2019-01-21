var app = new Vue({
    el: '#app',
    data: {
        title: 'VERDURA "ORGANICA" DE PROCEDENCIA DUDOSA...',
        search: "",
        price:55,
        discounts:[
            {
                amount:"1",
                price:55
            },
            {
                amount:"2",
                price:52.50
            },
            {
                amount:"3",
                price:50
            },
            {
                amount:"4",
                price:47.50
            },
            {
                amount:"5-59",
                price:45
            },
            {
                amount:"60-199",
                price:41
            },
            {
                amount:"200-249",
                price:36
            },
            {
                amount:"250+",
                price:32
            },
        ],
        productList: { 
            veggies: [
                {
                    name: 'Tomate (Kg)',
                    amount: 0,
                    url: 'images/tomate.jpg'
                },
                {
                    name: 'Tomate (Kg)',
                    amount: 0,
                    url: 'images/tomate.jpg'
                }
            ],
            [
                {
                    name: 'Tomate (Kg)',
                    amount: 0,
                    url: 'images/tomate.jpg'
                },
                {
                    name: 'Acelga (PAQ)',
                    amount: 0,
                    url: 'images/acelga.jpg'
                },
                {
                    name: 'Zanahoria (PAQ)',
                    amount: 0,
                    url: 'images/zanahoria.jpg'
                },            {
                    name: 'Remolacha (PAQ)',
                    amount: 0,
                    url: 'images/remolacha.jpg'
                },
                {
                    name: 'Rucula (PAQ)',
                    amount: 0,
                    url: 'images/rucula.jpg'
                },
                {
                    name: 'Papa (Kg)',
                    amount: 0,
                    url: 'images/papa.jpg'
                },
                {
                    name: 'Choclo x 3',
                    amount: 0,
                    url: 'images/choclo.jpg'
                },
                {
                    name: 'Morron (Kg)',
                    amount: 0,
                    url: 'images/morron.jpg'
                },
                {
                    name: 'Perejil (Kg)',
                    amount: 0,
                    url: 'images/perejil.jpg'
                },
                {
                    name: 'Aji Vinagre (1/2 Kg)',
                    amount: 0,
                    url: 'images/ajivinagre.jpg'
                },
                {
                    name: 'Nabo (Kg)',
                    amount: 0,
                    url: 'images/nabo.jpg'
                },
                {
                    name: 'Repollo (Unidad)',
                    amount: 0,
                    url: 'images/repollo.jpg'
                },
                {
                    name: 'Zapallito (Kg)',
                    amount: 0,
                    url: 'images/zapallito.jpg'
                },
                {
                    name: 'Zuchinni (Kg)',
                    amount: 0,
                    url: 'images/zuchinni.jpg'
                },
                {
                    name: 'Pack Choi (PAQ)',
                    amount: 0,
                    url: 'images/packchoi.jpg'
                },
                {
                    name: 'Pepino (Kg)',
                    amount: 0,
                    url: 'images/pepino.jpg'
                },
                {
                    name: 'Verdeo (PAQ)',
                    amount: 0,
                    url: 'images/verdeo.jpg'
                },
                {
                    name: 'Puerro (PAQ)',
                    amount: 0,
                    url: 'images/puerro.jpg'
                },
                {
                    name: 'Anco (Unidad)',
                    amount: 0,
                    url: 'images/anco.jpg'
                },
                {
                    name: 'Kale (PAQ)',
                    amount: 0,
                    url: 'images/kale.jpg'
                },
                {
                    name: 'Lima (1/2 Kg)',
                    amount: 0,
                    url: 'images/lima.jpg'
                },
                {
                    name: 'Rabanito (PAQ)',
                    amount: 0,
                    url: 'images/rabanito.jpg'
                },
                {
                    name: 'Brocoli (Unidad)',
                    amount: 0,
                    url: 'images/brocoli.jpg'
                },
                {
                    name: 'Lechuga (1/2kg)',
                    amount: 0,
                    url: 'images/lechuga.jpg'
                },
                {
                    name: 'Hinojo (Kg)',
                    amount: 0,
                    url: 'images/hinojo.jpg'
                }
            ],
          
        cartTotal:0,
        cart:[],
        cartItems:0
    },
    methods: {
        getTotal: function () {
            var self = this;
            this.cartTotal = 0;
            this.cartItems = 0;
            
            this.cart.veggies = this.productList.veggies.filter(function (item) {
                return item.total > 0;
            });
            
            for(var item in this.cart ){
                this.cartItems += this.cart[item].amount;
            }
            
            if(this.cartItems <= 1){this.price = 55}
            else if(this.cartItems == 2){this.price = 52.50}
            else if(this.cartItems == 3){this.price = 50}
            else if(this.cartItems == 4){this.price = 47.50}
            else if(this.cartItems >= 5 && this.cartItems <= 59){this.price = 45}
            else if(this.cartItems >= 60 && this.cartItems <= 199){this.price = 41}
            else if(this.cartItems >= 200 && this.cartItems <= 249){this.price = 36}
            else {this.price = 32}
            
            for(var item in this.cart ){
                this.cart[item].total = this.cart[item].amount*this.price;
                this.cartTotal += this.cart[item].total;
            }

        },
        addItem: function (item) {
            item.amount++;
            item.total = item.amount*this.price;
            this.getTotal();
        },
        removeItem: function (item) {
            if (item.amount > 0) {
                item.amount--;
            }
            item.total = item.amount*this.price;
            this.getTotal();
        },
        updateValue: function(item) {
            if(item.amount == "" || parseFloat(item.amount) == NaN){ item.amount = 0}
            else(item.amount = parseFloat(item.amount))
            item.total = item.amount*this.price;
            this.getTotal();
        },
        saveSale : function (cart) {
            console.log(cart)
            var today = new Date().toLocaleDateString('es-GB', {
                day : 'numeric',
                month : 'numeric',
                year : 'numeric'
            }).split('/').join('-');

            var sale = []

            for(var item in cart) {
                sale.push({
                    variedad: cart[item].name,
                    cantidad:cart[item].amount,
                    precio:this.price,
                    pago:cart[item].total 
                })
            }

            console.log(sale)

            database.ref('/' + today).push(sale, function (error) {
                if (error) {
                    console.log("error")
                } else {
                    console.log("saved")
                    window.location.reload();
                }
            });
        }

    },
    computed: {
        filteredItems: function () {
            var self = this;
            return this.productList.filter(function (item) {
                return item.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
            });
        }

    }
})