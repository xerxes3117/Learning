class myPromise {

    resolveData;
    rejectData;
    resolveCallback;
    rejectCallback;

    isResolved = false;
    isRejected = false;

    constructor(executorFn) {
        const resolve = (value) => {
            this.resolveData = value;
            this.isResolved = true;
            //Below line is required for asynchronous executions
            //where promise will be resolved later than it's then call (example 3)
            if(this.resolveCallback) this.then(this.resolveCallback);
        }

        const reject = (error) => {
            this.rejectData = error;
            this.isRejected = true;
            if(this.rejectCallback) this.catch(this.rejectCallback);
        }

        executorFn(resolve, reject);
    }

    then(callback) {
        this.resolveCallback = callback;
        //Below line is required for synchronous executions
        //where promise will be resolved before it's then call (example 1)
        if(this.isResolved) this.resolveCallback(this.resolveData);
    }
    
    catch(errorCb) {
        this.rejectCallback = errorCb;
        if(this.isRejected) this.rejectCallback(this.rejectData);
    }
}

//Testcases

//Example 1: Synchronous resolve
const promise1 = new myPromise(function (resolve, reject) {
    resolve('hello');
})

promise1.then(res => console.log(res));

//Example 2: Synchronous reject (no chaining)
const promise2 = new myPromise(function (resolve, reject) {
    reject('some error occured');
})

promise2.catch(err => console.log(err));

// //Example 3: Asynchronous resolve  
const promise3 = new myPromise(function (resolve, reject) {
    setTimeout(function () {
        resolve('hello');
    }, 3000)
})

promise3.then(res => console.log(res));

// //Example 4: Asynchronous reject (no chaining)
const promise4 = new myPromise(function (resolve, reject) {
    setTimeout(function () {
        reject('error occured');
    }, 3000)
})

promise4.catch(err => console.log(err));

//Example 5: Chained promise
let promise5 = new myPromise((resolve, reject) => {
	//executer
	setTimeout(() => {
    	resolve(20)
    }, 3000)
})

promise5.then(res => res*2).then(res => console.log(res))

//Example 6: Rejected promise with catch chaining
let promise6 = new myPromise((resolve, reject) => {
	//executer
	setTimeout(() => {
    	reject('hello')
    }, 3000)
})

promise6
    .then(res => res*2)
    .then(res => console.log(res))
    .catch(error => 'promise rejected with error')
    .catch(error => console.log(error))