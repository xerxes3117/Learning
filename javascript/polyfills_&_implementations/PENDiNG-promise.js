//@todo
// 1) test this implementation by running all test cases
// 2) add comments 
class myPromise {

    resolvedData;
    rejectedData;
    
    isResolved = false;
    isRejected = false;

    resolveChain = [];
    rejectChain = [];

    constructor(executor){
        const resolve = (value) => {
            this.resolvedData = value;
            this.isResolved = true;

            if(this.resolveChain.length > 0)
                this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData)
        }

        const reject = (value) => {
            this.rejectedData = value;
            this.isRejected = true;

            if(this.rejectChain.length > 0)
                this.rejectChain.reduce((acc, fn) => fn(acc), this.rejectedData)
        }

        executor(resolve, reject)
    }

    then(callback){
        this.resolveChain.push(callback);
        if(this.isResolved){
            this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData)
        }

        return this
    }

    catch(callback){
        this.rejectChain.push(callback);
        if(this.isRejected){
            this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData)
        }

        return this
    }
}

//Testcases

//Synchronous promise execution
let promise1 = new myPromise((resolve, reject) => {
	//executer
    resolve('hello')
})

promise1.then(res => console.log(res))

//Async promise execution
let promise2 = new myPromise((resolve, reject) => {
	//executer
	setTimeout(() => {
    	resolve('hello')
    }, 3000)
})

promise2.then(res => console.log(res))

//Chained promise execution
let promise3 = new myPromise((resolve, reject) => {
	//executer
	setTimeout(() => {
    	resolve('hello')
    }, 3000)
})

promise3.then(res => res*2).then(res => console.log(res))

//Rejected promise
let promise4 = new myPromise((resolve, reject) => {
	//executer
	setTimeout(() => {
    	reject('hello')
    }, 3000)
})

promise4.then(res => res*2).then(res => console.log(res)).catch(error => console.log(error))
