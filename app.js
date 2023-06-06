var person = {
    name: "David",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
var Cores;
(function (Cores) {
    Cores[Cores["Vermelho"] = 0] = "Vermelho";
    Cores[Cores["Azul"] = 1] = "Azul";
    Cores[Cores["Branco"] = 2] = "Branco";
})(Cores || (Cores = {}));
//let corPreferida = Cores.Vermelho;
//let corPreferida2 = Cores[1];
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) { }
respond("Princess Caroline", UserResponse.Yes);
var BLHE;
(function (BLHE) {
    BLHE[BLHE["No"] = 0] = "No";
    BLHE["Yes"] = "YES";
})(BLHE || (BLHE = {}));
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("David", new Date());
function firstElement(arr) {
    return arr[0];
}
var s = firstElement(["a", "b", "c"]);
var n = firstElement([1, 2, 3]);
var u = firstElement([]);
function map(arr, func) {
    return arr.map(func);
}
var parsed = map(["1", "2", "3"], function (n) { return parseInt(n); });
//console.log(parsed);
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
var longerArray = longest([1, 2], [1, 2, 3]);
var longerString = longest("alice", "bob");
//const notOk = longest(10,100);
function minLength(obj, min) {
    if (obj.length >= min) {
        return obj;
    }
    else {
        return 0;
        //return {length: min};
    }
}
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
//const arr2 = combine([1,2,3], ["hello"]);
var arr = combine([1, 2, 3], ["hello"]);
function firstElement2(arr) {
    return arr[0];
}
var a = firstElement([1, 2, 3]);
var b = firstElement2([1, 2, 3]);
function filter1(arr, func) {
    return arr.filter(func);
}
//NÃO FAÇA ASSIM
/*function filter2<Type, Func extends(arg: Type) => boolean>(arr: Type[], func: Func): Type[]{
  return arr.filter(func);
}*/
function f(n) {
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
function f2(n) {
    if (n !== undefined) {
        console.log(n.toFixed());
        console.log(n.toFixed(3));
    }
}
function f3(n) {
    if (n === void 0) { n = 10; }
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
f(3.12);
f2(undefined);
f3();
// APENAS ESCREVER PARAMETROS DE FUNÇÃO OPCIONAIS QUANDO NÃO FOR CHAMAR
// A FUNÇÃO COM O PARAMETRO OPCIONAL
function myForEach(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        fn(arr[i], i);
    }
}
myForEach([1, 2, 3], function (a) { return console.log(a); });
function makeDate(dOrTimestamp, m, a) {
    if (m !== undefined && a !== undefined) {
        return new Date(dOrTimestamp, m, a);
    }
    else {
        return new Date(dOrTimestamp);
    }
}
var d1 = makeDate(12345678);
var d2 = makeDate(5, 5, 5);
// FUNÇÃO DE SOBRECARGA NÃO PODE SER CHAMADO COM NÚMERO DE PARÂMETROS DIFERENTES
//const d3 = makeDate(1,3);
// REST PARAMETERS
function multiply(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (x) { return n * x; });
}
var a2 = multiply(10, 1, 2, 3, 4);
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
arr1.push.apply(arr1, arr2);
var boxA = { contents: "hello" };
boxA.contents;
function setContents(box, newContent) {
    box.contents = newContent;
}
function doSomething(value) {
}
var myArray = ["hello", "world"];
doSomething(myArray);
doSomething(new Array("hello", "world"));
// READ ONLY ARRAYS
//const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
var roArray = ["red", "green", "blue"];
var x = [4, 7, 9, 2];
var y;
y = x;
y = [1, 2, 3, 4];
console.log(y, x);
