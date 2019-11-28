window.onload = function() {
    
    let yourBudget = +prompt('Ваш бюджет?', '0');
    let shopName = prompt('Название Вашего магазина?', '');
    let goods = '';
    let dayBudget = yourBudget / 30;

    let mainList = {
        budget: 0,
        shopName: '',
        shopGoods: [],
        employers: {},
        open: false
    };

    for(let i = 0; i < 3; i++) {
       goods =  this.prompt('Какой тип товаров будем продавать?', '');
        mainList.shopGoods.push(goods);
    }

    this.document.write(dayBudget);
    this.console.log(mainList);
}