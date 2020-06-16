


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
}
const heap = new MaxBinaryHeap();



//   [41,39,33,18,27,12]// insert
//idx 0, 1, 2, 3, 4, 5