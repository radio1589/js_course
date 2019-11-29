window.onload = function() {
    
    let money = +prompt('Ваш бюджет?', '0');
    let name = prompt('Название Вашего магазина?', '');
    let goods = '';
    let dayBudget = money / 30;
    let time = 19;

    let mainList = {
        budget: money,
        shopName: name,
        shopGoods: [],
        employers: {},
        open: false
    };

    if (time < 0) {
        this.console.log('Назад в прошлое? Очень хорошо');
    } else if (time > 19 && time < 8) {
        this.console.log('Извините мы еще закрыты');
    } else if (time > 8 && time < 19) {
        this.console.log('Мы открыты');
    } else {
        this.console.log('Это вообще непонятная ситуация.. Переучет короч');
    }

    for(let i = 0; i < 3; i++) {
       goods =  this.prompt('Какой тип товаров будем продавать?', '');

       if (typeof goods === 'string' && goods != null && goods != '') {
        mainList.shopGoods.push(goods);
       }
        
    }

    this.document.write(dayBudget);
    this.console.log(mainList);
}