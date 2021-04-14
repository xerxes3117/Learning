class maxHeap {
  constructor(arr){
    this.heap = arr;
    for(var i = Math.floor(arr.length/2); i >= 0; i--){
      this.__maxHeapify(i);
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

  __percolateUp(index){
    if(index <= 0){
      return;
    }
    let parentIndex = Math.floor((index -1)/2);
    if(this.heap[parentIndex] < this.heap[index]){
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
      this.__percolateUp(parentIndex);
    }
  }

  __maxHeapify(i){
    //If parent is a leaf node no need to shift down (single node is already a heap in itself)
    if(i > this.heap.length/2){
      return;
    }
    let left = 2*i + 1;
    let right = 2*i + 2;
    let largest = i; 
    //Update largest to element which is largest among parent, left and right child
    if(this.heap[i] < this.heap[left]){
      largest = left;
    }
    if(this.heap[largest] < this.heap[right]){
      largest = right;
    }
    //If largest is not the parent itself (ith element) then we need to swap it with largest element
    if(largest != i){
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]]
      //Recursive call till parent is heapified (i.e. any of above 2 conditions is followed)
      this.__maxHeapify(largest)
    }
  }
}

let heap1 = new maxHeap([24,55,7,57,91,68,42,6,43,32,15,83,53])
console.log(heap1.fetchHeap())
console.log(heap1.insert(100))
console.log(heap1.insert(33))
console.log(heap1.insert(73))
console.log(heap1.fetchHeap())