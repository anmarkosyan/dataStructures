//***************** Queue (Q) **************************************************
//Q , like Stack is data structure, that allows only adding and removing things,
//but here you should use --- FIRST IN FIRST OUT rule.
//there is diff ways use this --
// in Arrays (push(val) and shift() or unshift(val)and pop()) = its not so good for time complex
// in singly linked list = its good for use, constant time
//in double linked list = the same

class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.start = null;
        this.end = null;
        this.size = 0;
    }
    //we ush push(val) method call it enqueue
    enqueue(val){
        let newNode = new Node(val);
        if(!this.start){
            this.start = newNode;
            this.end = newNode;
        } else {
            this.end.next = newNode;
            this.end = newNode
        }
        return  ++this.size;
    }
    //ush shift() method called dequeue
    dequeue(){
        if(!this.start) return null;
        let removeNode = this.start;
        if(this.start === this.end){
            this.end = null;
        }
        this.start = this.start.next;
        this.size--;
        return removeNode.val;
    }

}
const list = new Queue();
list.enqueue('10');
list.enqueue('6');
list.enqueue('100');


