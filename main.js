console.log ( `#### TYPES` );

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

// String & Concatenate

console.log ( '#### STRING' );

console.log ( `#### String(10) :`, String(10), `(${ typeof String(10) })` );

console.log ( `#### 'Hello' + 'World' :`, 'Hello' + 'World' );

const hello = 'Hello';
const world = 'World';
const concat = hello + world;

console.log ( `#### concat :`, concat );
console.log ( `#### concat + 5 :`, concat + 5 );
console.log ( `#### concat + true :`, concat + true );
console.log ( `#### concat + undefined :`, concat + undefined );
console.log ( `#### concat + function() {}:`, concat + function() {} );
console.log ( `#### concat + [1,2,3]:`, concat + [1,2,3] );

console.log ( `#### concat + {a: 1}:`, concat + {a: 1} );

// Number

console.log ( '#### NUMBER' );

console.log ( `#### Number('5') :`, Number('5'), `(${ typeof Number('5') })` );
console.log ( `#### Number('asd') :`, Number('asd'), `(${ typeof Number('asd') })` );

console.log ( `#### +'5' :`, +'5', `(${ typeof +'5' })` );

console.log ( `#### +true :`, +true, `(${ typeof +true })` );
console.log ( `#### +false :`, +false, `(${ typeof +false })` );
console.log ( `#### +null :`, +null, `(${ typeof +null })` );

// Boolean

console.log ( '#### BOOLEAN' );

console.log ( `#### Boolean('') :`, Boolean(''), `(${ typeof Boolean('') })` );
console.log ( `#### Boolean(' ') :`, Boolean(' '), `(${ typeof Boolean(' ') })` );
console.log ( `#### Boolean(0) :`, Boolean(0), `(${ typeof Boolean(0) })` );
console.log ( `#### Boolean(null) :`, Boolean(null), `(${ typeof Boolean(null) })` );

console.log ( `#### !!'asd' :`, !!'asd', `(${ typeof !!'asd' })` );