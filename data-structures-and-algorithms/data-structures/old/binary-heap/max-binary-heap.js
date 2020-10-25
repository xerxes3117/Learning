class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(value) {
        this.values.push(value);
        var currIndex = this.values.length - 1,
            parentIndex = Math.floor((currIndex - 1) / 2);

        this.bubbleUp(currIndex, parentIndex);
        return this.values;
    }
    bubbleUp(currIndex, parentIndex) {
        while (this.values[currIndex] > this.values[parentIndex] && currIndex !== 0) {
            [this.values[currIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[currIndex]];
            currIndex = parentIndex;
            parentIndex = Math.floor((currIndex - 1) / 2);
        }
    }
    extractMax() {
        const max = this.values[0];
        const latest = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = latest;
            this.sinkDown(); 
        }
        return max;
    }
    sinkDown() {
        let parentIndex = 0;
        let len = this.values.length;
        while (2 * parentIndex + 1 < len) {
            var left = this.values[2 * parentIndex + 1],
                right = this.values[2 * parentIndex + 2];
            if (right) {
                var replaceLoc = right > left ? 2 * parentIndex + 2 : 2 * parentIndex + 1;
            } else {
                var replaceLoc = 2 * parentIndex + 1;
            }
            if (this.values[replaceLoc] < this.values[parentIndex]) break;
            [this.values[parentIndex], this.values[replaceLoc]] = [this.values[replaceLoc], this.values[parentIndex]];
            parentIndex = replaceLoc;
        }
    }
};

let myHeap = new MaxBinaryHeap();
myHeap.insert(41);
myHeap.insert(39);
myHeap.insert(33);
myHeap.insert(18);
myHeap.insert(27);
myHeap.insert(12);
myHeap.insert(55);
console.log(myHeap.values);
myHeap.extractMax();
console.log(myHeap.values);
myHeap.extractMax();
console.log(myHeap.values);
myHeap.extractMax();
console.log(myHeap.values);
myHeap.extractMax();
console.log(myHeap.values);
myHeap.extractMax();
console.log(myHeap.values);
myHeap.extractMax();
console.log(myHeap.values);
myHeap.extractMax();
console.log(myHeap.values);