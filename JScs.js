//JS
let money;
let time;
function start() {
	money = +prompt('Ваш бюджет на месяц?');
	time = prompt(`Введите дату в формате YYYY MM DD`);

	while(isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?');
	}
}
// start();

let appData = {
	budjet: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function(){
		for (let i = 0; i < 2; i++){
			let a = prompt('Введите обязательную статью расходов в этом месяце');
			let b = prompt('Во сколько обойдется?');
			if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
			console.log('done');
			appData.expenses[a] = b;
			} else {
				i = i - 1;
			}
		}	
	},
	detectDayBudget: function(){
		appData.moneyPerDay = (appData.budjet / 30).toFixed();
		alert('Ежудневный бюджет: ' + appData.moneyPerDay);		
	},
	detectLevel: function(){
		if(appData.moneyPerDay < 100){
			console.log('Minimum level of income');
		} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log('avarege level of income');
		} else if(appData.moneyPerDay > 2000 ) {
			console.log('height level of income');
		} else {
			console.log('En Error');
		}
	},
	chooseExpenses: function(){
		for (let i = 1; i <= 3; i++){
			let c = prompt('Статья необязательных расходов? Nr. ' +  (i));
			appData.optionalExpenses[i] = c;
		}		
	},
	checkSavings: function(){
		if (appData.savings == true) {
			let save = +prompt('Какова сумма накоплений?'),
				percent =+prompt('Под какой процент?');
			appData.monthIncome = save / 100 / 12 * percent;
			alert('Income in month from your deposit: ' + appData.monthIncome);
		}		
	},
	chooseIncome: function(){
		let items = prompt('Введите доп. доходы', '');
		appData.income = items.split(', ');
		appData.income.push(prompt('может что то еще?'));
		appData.income.sort();
	}
};


