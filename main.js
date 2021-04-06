const string = 'Sonya';
console.log ( `#### string :`, string, `(${ typeof string })` );

const count = 4;
console.log ( `#### count :`, count, `(${ typeof count })` );

const infinity = 5/0;
console.log ( `#### infinity :`, infinity, `(${ typeof infinity })` );

const NotANumber = 10 * 'as';
console.log ( `#### NotANumber :`, NotANumber, `(${ typeof NotANumber })` );

const symbol = Symbol();
console.log ( `#### symbol :`, symbol, `(${ typeof symbol })` );

const bigint =  BigInt(3);
console.log ( `#### bigint :`, bigint, `(${ typeof bigint })` );

let someVariable;
console.log ( `#### someVariable :`, someVariable, `(${ typeof someVariable })` );

let someNull = null;
console.log ( `#### someNull :`, someNull, `(${ typeof someNull })` );

const obj = {};
console.log ( `#### obj :`, obj, `(${ typeof obj })` );

const arr = [];
console.log ( `#### arr :`, arr, `(${ typeof arr })` );

const fn = function () {};
console.log ( `#### fn :`, fn, `(${ typeof fn })` );