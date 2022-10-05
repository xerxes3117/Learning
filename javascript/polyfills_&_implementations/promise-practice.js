class myPromise {
  resolveData;
  rejectData;
  resolveCallbackChain = [];
  rejectCallbackChain = [];

  isResolved = false;
  isRejected = false;

  constructor(executorFn) {
    const resolve = (value) => {
      this.resolveData = value;
      this.isResolved = true;
      //Below line is required for asynchronous executions
      //where promise will be resolved later than it's "then" call (example 3)
      while (this.resolveCallbackChain.length > 0) {
        const cb = this.resolveCallbackChain.shift();
        this.resolveData = cb(this.resolveData);
      }
    };

    const reject = (error) => {
      this.rejectData = error;
      this.isRejected = true;
      while (this.rejectCallbackChain.length > 0) {
        const cb = this.rejectCallbackChain.shift();
        this.rejectData = cb(this.rejectData);
      }
    };

    executorFn(resolve, reject);
  }

  then(callback) {
    this.resolveCallbackChain.push(callback);
    //Below line is required for synchronous executions
    //where promise will be resolved before it's "then" call (example 1)
    if (this.isResolved) {
        while (this.resolveCallbackChain.length > 0) {
            const cb = this.resolveCallbackChain.shift();
            this.resolveData = cb(this.resolveData);
          }
    }
    return this;
  }

  catch(errorCb) {
    this.rejectCallbackChain.push(errorCb);
    if (this.isRejected) {
        while (this.rejectCallbackChain.length > 0) {
            const cb = this.rejectCallbackChain.shift();
            this.rejectData = cb(this.rejectData);
          }
    }
    return this;
  }
}

//Testcases

//Example 1: Synchronous resolve
const promise1 = new myPromise(function (resolve, reject) {
  resolve("hello");
});

promise1.then((res) => console.log("Example 1: final value: ", res)); // hello

//Example 2: Synchronous reject (no chaining)
const promise2 = new myPromise(function (resolve, reject) {
  reject("some error occured");
});

promise2.catch((err) => console.log("Example 2: error: ", err)); // some error occurred

// //Example 3: Asynchronous resolve
const promise3 = new myPromise(function (resolve, reject) {
  setTimeout(function () {
    resolve("hello");
  }, 3000);
});

promise3.then((res) => console.log("Example 3: final value: ", res)); // hello

// //Example 4: Asynchronous reject (no chaining)
const promise4 = new myPromise(function (resolve, reject) {
  setTimeout(function () {
    reject("error occured");
  }, 3000);
});

promise4.catch((err) => console.log("Example 4: error: ", err)); // error occured

//Example 5: Chained promise
let promise5 = new myPromise((resolve, reject) => {
  //executer
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

promise5.then(res => res * 2)
        .then(res => res * 3)
        .then(res => console.log("Example 5: final value: ", res)); // 120

//Example 6: Chained promise
let promise6 = new myPromise((resolve, reject) => {
  //executer
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

promise6.then(res => console.log("Example 6: initial value: ", res)) // 20
        .then(res => res * 2)
        .then(res => console.log("Example 6: final value: ", res)); // NaN

//Example 7: Rejected promise with catch chaining
let promise7 = new myPromise((resolve, reject) => {
  //executer
  setTimeout(() => {
    reject("some error occurred");
  }, 3000);
});

promise7
  .then((res) => res * 2)
  .then(console.log)
  .catch((err) => console.log("Example 7: error: ", err)); // some error occurred

//Example 8: Rejected promise with catch chaining
let promise8 = new myPromise((resolve, reject) => {
  //executer
  setTimeout(() => {
    reject("hello");
  }, 3000);
});

// NO OUTPUT!!
promise8
  .then((res) => res * 2)
  .then(console.log)
  .catch(() => "promise rejected with error")
  .catch(console.log);
