const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "David",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

enum Cores {
  Vermelho,
  Azul,
  Branco,
}

//let corPreferida = Cores.Vermelho;
//let corPreferida2 = Cores[1];

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {}

respond("Princess Caroline", UserResponse.Yes);

enum BLHE {
  No = 0,
  Yes = "YES",
}

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("David", new Date());

function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

const s = firstElement(["a", "b", "c"]);
const n = firstElement([1, 2, 3]);
const u = firstElement([]);

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

const parsed = map(["1", "2", "3"], (n) => parseInt(n));
//console.log(parsed);

function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

const longerArray = longest([1, 2], [1, 2, 3]);
const longerString = longest("alice", "bob");
//const notOk = longest(10,100);

function minLength<Type extends { length: number }>(
  obj: Type,
  min: number
): Type | number {
  if (obj.length >= min) {
    return obj;
  } else {
    return 0;
    //return {length: min};
  }
}

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

//const arr2 = combine([1,2,3], ["hello"]);
const arr = combine<number | string>([1, 2, 3], ["hello"]);

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

const a = firstElement([1, 2, 3]);
const b = firstElement2([1, 2, 3]);

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

//NÃO FAÇA ASSIM
/*function filter2<Type, Func extends(arg: Type) => boolean>(arr: Type[], func: Func): Type[]{
  return arr.filter(func);
}*/

function f(n: number) {
  console.log(n.toFixed());
  console.log(n.toFixed(3));
}

function f2(n?: number) {
  if (n !== undefined) {
    console.log(n.toFixed());
    console.log(n.toFixed(3));
  }
}

function f3(n = 10) {
  console.log(n.toFixed());
  console.log(n.toFixed(3));
}

f(3.12);
f2(undefined);
f3();

// APENAS ESCREVER PARAMETROS DE FUNÇÃO OPCIONAIS QUANDO NÃO FOR CHAMAR
// A FUNÇÃO COM O PARAMETRO OPCIONAL
function myForEach(arr: any[], fn: (arg: any, index?: number) => void){
  for(let i = 0; i < arr.length; i++){
    fn(arr[i],i);
  }
}

myForEach([1,2,3], (a) => console.log(a));
// POSSIVELMENTE ERRO DE COMPILAÇÃO SE I FOR UNDEFINED
//myForEach([1,2,3], (a,i) => console.log(i.toFixed()));

// SOBRECARGA DE FUNÇÃO
function makeDate(timestamp: number): Date;
function makeDate(d: number, m: number, a: number): Date;
function makeDate(dOrTimestamp: number, m?: number, a?: number): Date{
  if(m !== undefined && a !== undefined){
    return new Date(dOrTimestamp, m, a);
  }else{
    return new Date(dOrTimestamp);
  }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5,5,5);
// FUNÇÃO DE SOBRECARGA NÃO PODE SER CHAMADO COM NÚMERO DE PARÂMETROS DIFERENTES
//const d3 = makeDate(1,3);

// REST PARAMETERS
function multiply(n:number, ...m: number[]){
  return m.map((x) => n * x);
}

const a2 = multiply(10,1,2,3,4);

const arr1 = [1,2,3];
const arr2 = [4,5,6];
arr1.push(...arr2);


interface StringArray{
  [index: number]: string;
}

//const myArray: StringArray = getStringArray();
//const secondItem = myArray[1];

interface BasicAddress{
  name?: string,
  street: string,
  city: string,
  country: string,
  postalcode: string
}

interface AddressWithUnit extends BasicAddress{
  unit: string
}

interface Box<Type>{
  contents: Type;
}

let boxA: Box<string> = {contents: "hello"};
boxA.contents;

function setContents<Type>(box: Box<Type>, newContent: Type){
  box.contents = newContent;
}

type Box2<Type> = {
  contents: Type;
}

type orNull<Type> = Type | null;
type oneOrMany<Type> = Type | Type[];
type oneOrManyOrNull<Type> = orNull<oneOrMany<Type>>;
type oneOrManyOrNullStrings = oneOrManyOrNull<string>;

function doSomething(value: Array<string>){

}

let myArray: string[] = ["hello", "world"];

doSomething(myArray);
doSomething(new Array("hello", "world"));

// READ ONLY ARRAYS
//const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
const roArray: readonly string[] = ["red", "green", "blue"];

// TIPO TUPLA
type StringNumberPair = [string, number];

// DESTRUCTURE DE TUPLAS
function doDestructure(stringHash: [string, number]){
  const [inputString, hash] = stringHash;

  console.log(inputString);
  console.log(hash);
}

// TUPLAS COM PROPRIEDADES OPCIONAIS
type Either2dOr3d = [number, number, number?];

function setCoordinate(coord: Either2dOr3d){
  const [x,y,z] = coord;

  console.log(`Providaded coordinates had ${coord.length} dimensions`);
}