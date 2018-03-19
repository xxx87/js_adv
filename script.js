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

