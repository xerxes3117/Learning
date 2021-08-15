class minHeap {
  constructor(arr){
    this.heap = arr;
    for(var i = Math.floor(arr.length/2); i >= 0; i--){
      this.__percolateDown(i);
    }
  }

  fetchHeap(){
    return this.heap;
  }

  getMax() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  insert(val){
    this.heap.push(val);
    this.__percolateUp(this.heap.length -1);
  }

  remove(){
    let maxEl = this.heap[0];
    this.heap[0] = this.heap[this.heap.length-1];
    this.heap.pop();
    this.__percolateDown(0)
    return maxEl;
  }

  __percolateUp(index){
    if(index <= 0){
      return;
    }
    let parentIndex = Math.floor((index -1)/2);
    if(this.heap[parentIndex] > this.heap[index]){
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
      this.__percolateUp(parentIndex);
    }
  }

  __percolateDown(i){
    if(i > this.heap.length/2){
      return;
    }
    let left = 2*i + 1;
    let right = 2*i + 2;
    let smallest = i; 
    if(this.heap[i] > this.heap[left]){
      smallest = left;
    }
    if(this.heap[smallest] > this.heap[right]){
      smallest = right;
    }
    if(smallest != i){
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]]
      this.__percolateDown(smallest)
    }
  }
}

let heap1 = new minHeap([24,55,7,57,91,68,42,6,43,32,15,83,53])
console.log(heap1.fetchHeap())
console.log(heap1.insert(100))
console.log(heap1.insert(33))
console.log(heap1.insert(93))
console.log(heap1.fetchHeap())
console.log(heap1.remove())
console.log(heap1.remove())
console.log(heap1.fetchHeap())