
class MaxBinaryHeap {
    constructor() {
        this.value = [41,39,33,18,27,12];
    }
    insert(element){
        this.value.push(element);
        this.swap();
    }
    swap(){
        let idx = this.value.length-1;
        const element = this.value[idx];
        while (idx > 0){
            let parentIdx = Math.floor((idx -1) / 2);
            let parent = this.value[parentIdx];
            if(element <= parent) break;
            this.value[parentIdx] = element;
            this.value[idx] = parent;
            idx = parentIdx;
        }
    }
    removeMax(){
        //we extract first value, and swap end to be first
        //at the end return removed value(firstVal)
        const max = this.value[0];
        const end = this.value.pop();
        if(this.value.length > 0){
            this.value[0] = end
            //now we shat replace new root in its right place
            this.sinkDown();
        }
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.value.length;
        const element = this.value[0];
        while (true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.value[leftChildIdx];
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                rightChild = this.value[rightChildIdx];
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ){
                    swap = rightChildIdx;
                }

            }
            if(swap === null) break;
            this.value[idx] = this.value[swap];
            this.value[swap] = element;
            idx = swap;
        }
    }
}
const heap = new MaxBinaryHeap();

//   [41,39,33,18,27,12]// insert
//idx 0, 1, 2, 3, 4, 5



// this is a Priority queue using minBinaryHeap, but changing some steps
class Node{
    constructor(val,priority) {
        this.val = val;
        this.priority = priority;
    }
}
class PriorityHeap {
    constructor() {
        this.value = [];
    }
    enqueue(val,priority){
        let newNode = new Node(val,priority);
        this.value.push(newNode);
        this.swap();
    }
    swap(){
        let idx = this.value.length-1;
        const element = this.value[idx];
        while (idx > 0){
            let parentIdx = Math.floor((idx -1) / 2);
            let parent = this.value[parentIdx];
            if(element.priority >= parent.priority) break;
            this.value[parentIdx] = element;
            this.value[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        //we extract first value, and swap end to be first
        //at the end return removed value(firstVal)
        const min = this.value[0];
        const end = this.value.pop();
        if(this.value.length > 0){
            this.value[0] = end
            //now we shat replace new root in its right place
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.value.length;
        const element = this.value[0];
        while (true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.value[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                rightChild = this.value[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ){
                    swap = rightChildIdx;
                }

            }
            if(swap === null) break;
            this.value[idx] = this.value[swap];
            this.value[swap] = element;
            idx = swap;
        }
    }
}

const priority = new PriorityHeap();
priority.enqueue("cold",4);
priority.enqueue("freezing",2);
priority.enqueue("icy",1);
priority.enqueue("icy-cold",3);


