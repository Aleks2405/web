//let a = prompt("Как вас зовут");
//alert("Здравствуйте" +" " + a);
// 2 zad
//const n = 2022;
//let b = +prompt("Введите год Вашего рождения")
//alert("Ваш возраст"+ " " +(n - b));

//3zad
//let a = +prompt("Введите сторону квадрата");
//alert("Периметр = " + " " + (a*4));

//4zad
//const n = 3.14;
//let r = +prompt("Введите радиус окружности")
//alert("S = " + " " + (r*r *n ));

//zad 5

//let s = +prompt("Введите расстояние,км");
//let t = +prompt("Время за которое необходмо добратся,час");
//alert("Скорость для движения,км/час"+ " " +(s/t));

//zad6
//const s = 57;
//const e = 59;
//let sum = +prompt("Введи количество долларов, которые вы хотите конвектировать:");
//alert("количество евро состовляет" + " " + (sum/(e/s)));

//zad7
//let f = +prompt("Введите объем флешки,ГБ");
//let a = f*1024/820;
//alert("количесвтов файлов которое можно записать =" + " "+ (Math.trunc(a)));

//zad 8
//let kol = +prompt("Введите сумму денег из кошелька:");
//let price = +prompt("Цена шоколадки");
//let count = kol/price;
//alert ("Количество шоколадок:" +" "+ Math.trunc(count));
//let sdacha = count - Math.trunc(count);
//alert("Сдача:" + " " + sdacha);

//zad 9
//let chislo = +prompt("Введите трехзгачное чтсло");
//alert(Number([...chislo.toString()].reverse().join(""))); я так и не понял зачем тут нужны точки

// zad 10

 for(;;) {
 	let chislo = +prompt("Введите целое число");


if (chislo % 2 == 0)
{
	alert("Введеное число четное");
}else 
{
	alert("Число нечетное");
}
i++;
}


