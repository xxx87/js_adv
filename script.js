/***  String Reverse  ***/
function strReverse(string) {
    return string.split('').reverse().join(''); /* split - превращает строку в массив, reverse - меняет порядок элементов в массиве на противоположный, join - слкеивает массив обратно в строку */
}
strReverse('Hello');


/***  Задача по вычислению Факториала ***/
// var 1
    function factorial(arg) {
        if(arg != 1){
            return arg * factorial(arg-1);
        } else {
            return 1;
        };
    };    
    alert(factorial(+prompt('Факториал какого числа вы хотите увидеть?')));
	
// var 2
    function factorial(arg) {
        return arg ? arg * factorial(arg - 1) : 1;
    };    
    alert(factorial(+prompt('Факториал какого числа вы хотите увидеть?')));   
    
// var 3
function factorial(arg){
     var res = 1;
     while(arg) {
         res *= arg--;
     }
     return res;
}
alert(factorial(+prompt('Факториал какого числа вы хотите увидеть?')));


/***  Задача по Find the Longest Word in a String  ***/
function findLongestWord(str) {
    var arr = str.split(' ');
    var wordLong = 0;
    for (i=0; i<arr.length; i++){
        if(arr[i].length > wordLong) {
            wordLong = arr[i].length;
        }
    }
return wordLong;
}
findLongestWord("The quick brown fox jumped over the lazy dog");


/***  Задача по Title Case a Sentence  ***/
 function titleCase(str){
    var words = str.split(' ');
    var arr = [];
    var word;
   for (var i in words)
   {
      word = words[i].toLowerCase(); // сначал все в нижний регистр.
      word = word[0].toUpperCase() + word.substring(1); // первый символ в Апп, со второго возвращаем подстрокой до конца.
      arr.push(word);
   }
   console.log(arr.join(" "));
}
titleCase("fffm a gg little tea pot gsrfsd asafdsf ");


/***  Найдите среднее арифметическое  ***/
var arr = [12, 15, 20, 25, 59, 79], sum = 0, i = 0, len = arr.length;
for(i; i<len; i+=1){
    sum += arr[i]/len;
}
console.log(sum);


/***   положительные числа. квадратный корень  ***/
var arr = [1, 5, 20, 9, -25, -59, -79], arr_positive = [], i = 0, len = arr.length;
for(i; i<len; i+=1){
    if(arr[i] > 0) {
        arr_positive.push(arr[i]);
        console.log('Квадратный корень числа ' + arr[i] + ' равен: ' + Math.sqrt(arr_positive[i]));
    }
}
console.log(arr_positive);


/*
Домашнее задание к пятнице
1. Return Largest Numbers in Arrays (Freecodecamp)
2. Confirm the Ending (Freecodecamp)
3. Сделайте функцию, которая считает и выводит количество своих вызовов.
4. Прочитать что означает числа Фибоначчи. Написать на Javascript. Использовать цикл. Промежуток выбирайте по своему усмотрению. Также установите счетчик внутри цикла, чтобы узнать количество итераций. Промежуток выбирайте по своему усмотрению. Также установите счетчик внутри цикла, чтобы узнать количество итераций. Фибоначчи вывести массивом.
*/

/***  Return Largest Numbers in Arrays  ***/

// Variant 1:
function largestOfFour(arr) {
    var newArr = [], len = arr.length, i;
        for(i=0; i<len; i+=1){
          newArr.push(Math.max.apply(null, arr[i]));
        }
    return newArr;
}
    largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Variant 2:
function largestOfFour(arr) {
    var newArr = [], len = arr.length, maxNum, i, j;
        for(i = 0; i<len; i+=1){
            maxNum = 0;
            for(j = 0; j<arr[i].length; j+=1){
                if(arr[i][j] > maxNum){
                    maxNum = arr[i][j];
                }
            }
          newArr.push(maxNum);
        }
    return newArr;
}
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/***  Confirm the Ending  ***/
function confirmEnding(str, target) {
    var tLen = target.length;
    return str.slice(-tLen) === target;
}
console.log(confirmEnding("He has to give me a new name", "e"));


/***  Сделайте функцию, которая считает и выводит количество своих вызовов  ***/
    var counter = 0;
    function count() {
        console.log(++counter);
    }
    count();
    count();
    count();
    count();
    count();


/***  числа Фибоначчи. Написать на Javascript. Использовать цикл. Фибоначчи вывести массивом  ***/
function fibonacchi(num) {
    var sumFibonacci, numberOne, numberTwo, newArr = [], counter = 0, i;
        for (i = 1; i <= num; i++) {
            sumFibonacci = numberOne + numberTwo || 1;
            numberOne = numberTwo;
            numberTwo = sumFibonacci;
            newArr.push(sumFibonacci);
            counter++;
        }
    console.log(newArr);
    console.log('Цикл сделал ' + counter + ' итераций')
}
fibonacchi(10);


/***   первая задача - Repeat a string   ***/
    function repeatStringNumTimes(str, num) {
        return num > 0 ? str.repeat(num) : "";
    }
    console.log(repeatStringNumTimes("abc", -3));


/***   вторая Задача - Truncate a string   ***/
    function truncateString(str, num) {
        switch(true){
            case num <= 3 : return str.slice(0, num) + '...'; break;
            case str.length > num : return str.slice(0, num - 3) + '...'; break;
            default: return str;
        }
    }
    console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));


/***   1. Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.   ***/
    var arr = ["qq", "ww", "ee", "rr", "tt"], ul, li, i;
    function inputArrIn() {
        ul = document.createElement('ul');
        document.getElementsByTagName('body')[0].appendChild(ul);
        for(i = 0; i < arr.length; i += 1){
            li = document.createElement('li');
            document.getElementsByTagName('ul')[0].appendChild(li);
            li.innerHTML = arr[i];
        }
    }
    inputArrIn();


/***  Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут   ***/
    <input id="inp" type="text">
    <button onclick="clon()">Clone</button>

    var inp, inpClone;
    function clon(){
        inp = document.getElementById('inp');
        inpClone = inp.cloneNode(true);
        document.body.appendChild(inpClone);
    };


/***  Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы  ****/
    var arr = [1,3,6,5,-6,3,-22,-5];
    function negative(){
        return arr.some(function(n){
            return n < 0;
        });
    };
console.log(negative());


/*** Chunky Monkey Complete  ***/
function chunkArrayInGroups(arr, size) {
    var start = 0,
        s = size,
        i,
        newArr = [];

    for(i = 0; i < arr.length/size; i+=1) {
        newArr[i] = arr.slice(start, s);
        start = s;
        s += size;
    }
    return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g"], 3));


/***   Slasher Flick   ***/
function slasher(arr, howMany) {
    return arr.slice(howMany);
}
console.log(slasher([1, 2, 3], 9));



/*** Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'. Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'. Это должно работать и для вновь добавленных li. Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul)  ***/

/*html*/
<ul id="list"></ul>
<button id="addButton">Add item</button>

<script>
    var ul = document.getElementById('list');
    var button = document.getElementById('addButton');

    button.addEventListener('click', addLi);

    ul.addEventListener('click', addItem);

    function addLi() {
        var li = document.createElement('li');
        li.innerText = 'Пункт';
        ul.appendChild(li);
    }

    function addItem(elem){

           event.target.innerHTML += '!';
    };
//    List(list);


/***   Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'   ***/
function twoNum(arr){
    var res, i;
    for(i = 0; i < arr.length; i += 1){
        if(arr[i] === arr[i+1]){
            res = "Есть совпадение";
            break;
        } else {
            res = "Нет совпадений";
        }
    }
    return res;
}
console.log(twoNum([1,3,1,5,6,3,8,99]));


/***  Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.   ***/

    function getDigitsSum(digit) {
        var arr = String(digit).split(''),
            res = 0,
            i;
        for(i = 0; i < arr.length; i += 1){
            res += +arr[i];
        }
        return res;
    }
    console.log(getDigitsSum(1663));


/***   1. Mutations   ***/
    function mutation(arr) {
        var i;
        for(i = 0; i < arr[1].length; i += 1){
            if(arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1){
                return false;
            }
        }
        return true;
    }
    console.log(mutation(["voodoo", "vd"]));


/***   2. Falsy Bouncer   ***/
    function bouncer(arr) {
      var newArr = arr.filter(myFilter);
      return newArr;
    }
    function myFilter(n) {
        return !!n === true;
    }
    console.log(bouncer(["a", "b", 9, 0, false]));
/*  v2  */
    function bouncer(arr) {
      return arr.filter(Boolean);
    }
    console.log(bouncer(["a", "b", 9, 0, false, NaN, "", 0, undefined]));

/***  3. Everything be true ( Intermediate Algorithm Scripting)  ***/
    function truthCheck(collection, pre) {
        var i = 0, size = collection.length;
        for(; i < size; i += 1){
            if(!collection[i][pre]){
                return false;
            }
        }
        return true;
    }
    console.log(truthCheck([{"user": "Tinky-Winky"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));




/***  1. Seek and Destroy (FCC)  ***/
    function destroyer(arr) {
        var arg = Array.prototype.slice.call(arguments, 1), i, j;
        for(i = 0; i < arg.length; i += 1){
            for(j = 0; j < arr.length; j += 1){
                if(arr[j] === arg[i]){
                    arr.splice( j, 1 );
                    j--;
                }
            }
        }
        return arr;
    }
    console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));


/***   2. Where do I belong Complete (FCC)   ***/



/***   3. Sum All Numbers in a Range Complete (FCC Intermediate)   ***/
