/***  Задача по String Reverse  ***/
function strReverse(string) {
    return string.split('').reverse().join(''); /* split - превращает строку в массив, reverse - меняет порядок элементов в массиве на противоположный, join - слкеивает массив обратно в строку */
}
strReverse('Hello');
/**********************************/

/***  Задача по вычислению Факториала ***/

/*************** Запись через проверку*************************************/
    function factorial(arg) {
        if(arg != 1){
            return arg * factorial(arg-1);
        } else {
            return 1;
        };
    };    
    alert(factorial(+prompt('Факториал какого числа вы хотите увидеть?')));
	
/**************************** Тоже самое, только через тернарный операвор  ************/
    function factorial(arg) {
        return arg ? arg * factorial(arg - 1) : 1;
    };    
    alert(factorial(+prompt('Факториал какого числа вы хотите увидеть?')));   
    
/************************ Факториал черех Вайл  *****************************/
function factorial(arg){
     var res = 1;
     while(arg) {
         res *= arg--;
     }
     return res;
}
alert(factorial(+prompt('Факториал какого числа вы хотите увидеть?')));
/****************************************************************************/

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
/****************************************************************************/

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
/****************************************************************************/

/***  Return Largest Numbers in Arrays  ***/

// Variant 1:

function largestOfFour(arr) {
    var newArr = [], len = arr.length, i;
        for(i=0; i<len; i+=1){
          newArr.push(Math.max.apply(null, arr[i]));
        }
      //console.log(newArr);
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
      //console.log(newArr);
    return newArr;
}
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/***  Confirm the Ending  ***/

function confirmEnding(str, target) {

    var tLen = target.length;
    if(str.slice(-tLen) === target) {
        return true;
    } else {
        return false;
    }
}
console.log(confirmEnding("He has to give me a new name", "e"));

/****************************************************************************/
