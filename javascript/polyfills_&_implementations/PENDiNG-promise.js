class Promise {
	
	constructor(callback){
    	this.promiseObj = {
        	'state': 'pending',
            'result': undefined
        }
        callback(
        	this.resolve.bind(this), 
            this.reject.bind(this)
        )
    }
    
    resolve(value){
    	this.promiseObj = {
        	'state': 'fulfilled',
            'result': value
        }
        this.then()
    }
    
    reject(error){
        this.promiseObj = {
        	'state': 'rejected',
            'result': error
        }
        this.then()
    }
    
    then(successCallback, errorCallback){
    	let result = this.promiseObj.result
    	if(this.promiseObj.state == 'fulfilled')
    		successCallback(result)
        else if(this.promiseObj.state == 'rejected')
        	errorCallback(result)
    	return this
    }
    
    catch(errorCallback){
    	
    }
    
    finally(){
    	
    }
}

let promise = new Promise((resolve, reject) => {
	//executer
	setTimeout(() => {
    	resolve('hello')
    }, 3000)
})

promise.then(res => console.log(res))