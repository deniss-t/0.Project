//JS
'use strict'
let money = +prompt('Ваш бюджет на месяц?');
let time = prompt(`Введите дату в формате YYYY MM DD`);
let appData = {
	budjet: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};



for (let i = 0; i < 2; i++){
	let a = prompt('Введите обязательную статью расходов в этом месяце');
	let b = prompt('Во сколько обойдется?');
	if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
	console.log('done');
	appData.expenses[a] = b;
	} else {

	}
};

appData.moneyPerDay = appData.budjet / 30;

alert('Ежудневный бюджет: ' + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
	console.log('Minimum level of income');
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('avarege level of income');
} else if(appData.moneyPerDay > 2000 ) {
	console.log('height level of income');
} else {
	console.log('En Error');
}