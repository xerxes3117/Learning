class myPromise {

    resolvedData;
    isResolved = false;
    thenFunc;

    constructor(executor){
        const resolve = (value) => {
            this.resolvedData = value;
            this.isResolved = true;

            if(typeof this.thenFunc == 'function')
                this.thenFunc(this.resolvedData)
        }

        executor(resolve)
    }

    then(callback){
        this.thenFunc = callback;
        if(this.isResolved){
            this.thenFunc(this.resolvedData)
        }
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
