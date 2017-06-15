import Rx from 'rxjs/Rx';

export default class KeyListener
{
    
    constructor()
    {
        this.listener = null;
        this.subscription = null;
        let inputObj = null;
    }
    //https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/fromevent.md
    createListener(jqRef)
    {
        this.inputObj = jqRef;
        let listener = Rx.Observable.fromEvent(jqRef,"keyup");
        let bindOnError = this.onError.bind(this);
        let bindOnKeyUp = this.onKeyUp.bind(this);
        let bindOnComplete = this.onComplete.bind(this);
        this.subscription = listener.subscribe(bindOnKeyUp,bindOnError,bindOnComplete)
    }
    
    onError(err)
    {
        console.log("error "+err)
    }
    onKeyUp(k)
    {
       // console.log("key "+k.key +" "+this.inputObj.val())
       $('#echo-area').text(this.inputObj.val())
    }
    onComplete(p)
    {
        console.log("complete "+p)
        
        
    }
}
