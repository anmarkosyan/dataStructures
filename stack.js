//*********************** Stack data structure ****************
//They are data collections ,and abstract data structures.
//The only rule is its abide by a principal LAST IN FIRST OUT
//The last element added to a stack is going to be  the first one
//to be removed---FIST IN LAST OUT

//STACK is just concept , it's basically a set of rules that says OK
//you need to be able to store data in such a way that the
//first thing added in is the last thing removed.
//The last thing added in is the first thing removed.

//There are different ways to use Stack rule,here is with singly linked list
//implementation
class Element {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //push like unshift method, because we add node not in the end,but in first
    //we do that for solve the problem in constant time
    push(val){
        let newElement = new Element(val);
        if(!this.first){
            this.first = newElement;
            this.last = this.first;
        }else{
            let temp = this.first
            this.first = newElement;
            newElement.next = temp;
        }
        return ++this.size;

    }
    //like push, pop also created like shift method,the case is the same reason
    pop() {
        if(!this.size) return null;
        let removeNode = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return removeNode.val;
    }

}
const list = new Stack();
list.push('door');
list.push('table');
list.push('window');