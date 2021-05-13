//1. Если переменная больше нуля и меньше 5-ти, то выведите "Верно", в противном случае выведите "Неверно".
let i = 2;
if (i > 0 && i < 5) {
    alert("Правильно");
} else {
    alert("Неправильно");
}

//  2. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем "зима", если имеет значение "2" - "весна" и так далее. Решите задачу через switch-case.
let a = 1+1;
switch (a) {
    case 1:
        alert("Зима");
        break;
    case 2:
        alert("Весна");
        break;
    case 3:
        alert("Літо");
        break;
    case 4:
        alert("Осінь");
        break;
    default:
        alert("Значення поза обраним діапазоном");
}

//3. Данная строка 'aaa bbb ccc ". Вырез с нее слово "bbb" тремя различными способами (через substr, substring, slice).
var str = "aaa bbb ccc";
console.log(str.substring(4,7));
console.log(str.substr(4,3));
console.log(str.slice(4,7));

// 4. Данная строка 'I learn javascript! ". Найдите позицию подстроки "learn" и длину строки. Заменить javascript на html
var str = "I learn javascript!"
console.log(str.search('learn'), str.length);
console.log(str.replace('javascript', 'html'))

// 5. Проверьте, что строка начинается на http: //
var str = 'http://google.com';
if (str.substr(0, 7) == 'http://') {
	alert('Так');
} else {
	alert('Ні');
}


// 6. Сделайте функцию, принимает параметром число от 1 до 7, а возвращает день недели.
let a = +prompt("Input digit from 1 to 7");
function GetDay(a) {
    if (a === 1) {
        alert("Понеділок");
    } 
    else if (a === 2) {
        alert("Вівторок");
    }
    else if (a === 3) {
        alert("Середа");
    }
    else if (a === 4) {
        alert("Четвер");
    }
    else if (a === 5) {
        alert("П'ятниця");
    }
    else if (a === 6) {
        alert("Субота");
    }
    else if (a === 7) {
        alert("Неділя");
    }
}
GetDay(a);


//7. С помощью цикла for сформулируйте строку '-1-2-3-4-5-6-7-8-9- "и запишите ее в переменную str
arr = [];
res= '';

for (let i = 1; i < 10; i++) {
    res = '-' + i;
    arr += res;
    var res2 = arr +'-';
}
console.log(res2);
   

//8. Выведите 10 случайных чисел с помощью цикла
for (let i = 0; i < 10; i++) {
    var g = Math.floor(Math.random() * 101);
    console.log(g);
}

// 9. Дан массив [ 'a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
let array = ['a', 'b', 'c'];
array.push (1, 2, 3);
console.log(array);

// 10. Дан массив [1, 2, 3]. Добавьте ему на начало элементы 4, 5, 6.
let array = [1, 2, 3];
array.unshift (4, 5, 6);
console.log(array);

// 11. Дан массив [ 'js', 'css "," jq']. Выведите на экран последний элемент.
let array = ["js","css","jq"];
console.log(array.pop ());

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
let array = [1, 2, 3, 4, 5];
let array2 = array.slice(0, 3);
console.log(array2);

// 13. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый элементы [1, 2, 10, 11, 5].
let array = [1, 2, 3, 4, 5];
array.splice(2, 2, 10, 11);
console.log(array);

// 14. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третьей "333" и так далее.
var arr = [];
for(let i = 1; i <= 9; i++){
    let str = ''
    for(let j = 0; j < i; j++){
        str2 = str + i;
        arr += str2;
    }    
}
console.log(arr);

// 15. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значения, каким заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill ( 'x', 5) сделает массив [ 'x', 'x', 'x', 'x', 'x'].
function arrayFill(a, b) {
    var arr = [];
    for (let i = 1; i <= b; i++) {
		arr.push(a);
    }
    return arr;
}
console.log(arrayFill('y', 10));

// 16. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
var arr = [1, 2, 3, 0, 4, 5, 6];
var step = 1;
var res = arr.reduce(function (i, s) {
    if (i >= 10) {
        console.log(step);
        return;
    } else {
        step++;
        return i + s;
    }
});

// 17. Заполните массив 10-й случайными числами от 1 до 10 с помощью цикла
var arr = [];
for (let i = 0; i < 10; i++) {
    var g = Math.floor(Math.random() * 11);
    arr.push(g);
}
console.log(arr);

// 18. Таблица умножения в цикле
var arr1 = [];
for (var i = 1; i <= 10; i++) {
    arr1.push(i);
};

var arr2 = [];
for (var j = 0; j <= 10; j++) {
    arr2.push(j);
};

var resArr = [];
for (var k = 1; k < 10; k++) {
    for (var z = 1; z <= 10; z++) {
        var result = arr1[k] * arr2[z];
        var res = arr1[k] + ' * ' + arr2[z] + ' = ' + result;
        resArr.push(res);
    }
}
console.log(resArr);

// 19. Дан массив с числами. И не используя метода reverse переверните его элементы в обратном порядке.
var arr = [1, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9];
var num = arr.length;
var res = [];
for (let i = 1; i < num; i++) {
    var res = arr.pop();
    console.log(res);
}

// 20. Дано двумерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива.
var arr = [[1, 2, 3], [4, 5], [6]];
var z = arr.length;
var arr3 = [];
for (i = 1; i <= z; i++) {
    var x = i - 1;  
    var arr2 = arr[x].reduce(function (j, s) {
        return Number(j) + Number(s);
    });
    arr3.push(arr2);
}

var res = arr3.reduce(function (j2, s2) {
    return Number(j2) + Number(s2);
});

console.log(res);

// 21. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
function getDigitsSum(digit) {
    var str = "" + digit;
    var arr = str.split('');
    var res = arr.reduce(function (i, s) {
        return Number(i) + Number(s);
    });
    console.log(res);
}
getDigitsSum(89);

// 22. Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive (), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.
var arr = [24, -15, 68, -17, -19, 14, 2, -5, 8, 6, -7, 10, -11, 18];
var arrPosititive = [];
function isPositive(i){
    if (i > 0){
        console.log(true);
        arrPosititive.push(i);
    }else if (i<0) {
        console.log(false);
    }
}
isPositive(arr.forEach(isPositive));
console.log(arrPosititive);

// 23. С помощью цикла вывести все трицифрови числа в которых сумма всех цифр равна - 9 Например: 2 + 4 + 3 = 9
var arr = [];
for (i = 100; i <= 999; i++) {
    var str = "" + i;
    var key = str.split('');
    for (j = 0; j <= 2; j++) {
        var res = key.reduce(function (k, s) {
            return Number(k) + Number(s);
        });
        if(res===9){
            console.log(key);
            break;
        }
    }
}

// 24. С помощью цикла вывести пользователей как онлайн
var user = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
};
for (let key in user) {
    console.log(user[key].online);
}