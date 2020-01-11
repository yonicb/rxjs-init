import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next(function () {
    console.log('Primera peticion !');
  });
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log('just before subscribe');
observable.subscribe({
  next(x) {
    if (typeof x === "function") {
      x()
    } else {
      console.log('got value ' + x);
    }
  },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe');