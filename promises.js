/*
<-------------------------------NOTE----------------------------->

JavaScript Promise Object
A JavaScript Promise is an object that can be used to get the outcome
 of an asynchronous operation when that result is not instantly available.

Since JavaScript code runs in a non-blocking manner, promises become essential when
 we have to wait for some asynchronous operation without holding back the execution of the rest of the code.

States of a JavaScript Promise
A JavaScript Promise object can be in one of three states: pending, resolved, or rejected.

While the value is not yet available, the Promise stays in the pending state. Afterwards, 
it transitions to one of the two states: resolved or rejected.

*/

var promises = new Promise((resolve, reject) => {
    var res = true;

    if (res) {
        resolve('Resolved !');
    } else {
        reject(Error('Error !'));
    }
});

promises.then(
    res => console.log(res),
    err => alert(err)
);