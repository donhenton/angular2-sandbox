/*
import Simple from './../../reactive/simple';
import Rx from 'rxjs/Rx';

let t = new Simple();
console.log(t.toString());

Rx.Observable.of(1,2,3).map( x => {
    console.log(x + '!!!');
    return +100;
}).subscribe(j => console.log("j "+j));
*/
import KeyListener from './KeyListener';
let k = new KeyListener();
let entry = $('#text-entry');
k.createListener(entry);
