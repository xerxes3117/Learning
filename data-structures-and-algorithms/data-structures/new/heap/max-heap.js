/**
 * Notes
 * 1) For insertion we use percolateUp and for removal we use percolateDown
 * 2) Note that while percolating any element down we have to swap with largest of element (parent) and it's 2 children. This has to be done to make sure max heap is maintained
 * 3) No need to do this while percolating any element up and swapping with it's parent (because in already maintained heap parent would always be larger than below nodes) 
 */

class maxHeap {
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
    if(this.heap[parentIndex] < this.heap[index]){
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
      this.__percolateUp(parentIndex);
    }
  }

  __percolateDown(i){
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
      this.__percolateDown(largest)
    }
  }
}

let heap1 = new maxHeap([24,55,7,57,91,68,42,6,43,32,15,83,53])
console.log(heap1.fetchHeap())
console.log(heap1.insert(100))
console.log(heap1.insert(33))
console.log(heap1.insert(93))
console.log(heap1.fetchHeap())
console.log(heap1.remove())
console.log(heap1.remove())
console.log(heap1.fetchHeap())