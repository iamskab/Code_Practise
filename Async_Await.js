// How to Use Async and Await
/*
In an async/await function, an await statement blocks your code from
executing within its async function until a Promise is returned. 
It’s for this reason that developers often say that async/await 
functions look synchronous but perform asynchronous tasks.

Consider the following example:
*/

function sendCookies() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve("Your cookies have been sent!");
		}, 1000);
	});
}

async function main() {
	const sendMessage = await sendCookies();
	console.log(sendMessage);
}

main();


/*
Our code returns: Your cookies have been sent! It takes 1,000 milliseconds for 
sendCookies() function to return the value “Your cookies have been sent”. 
In this case, we have declared an async function so that our code waits for a promise to resolve or be rejected.

The “async” keyword tells our code that we want to perform an asynchronous 
operation in our function. The “await” keyword tells our code to wait for 
the return of the sendCookies() Promise before it continues executing our program.

Async functions always return a Promise.
*/
