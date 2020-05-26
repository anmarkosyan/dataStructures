//****************** doubly Linked List *************************
//Double linked list is linked data structure,and its made up
//of a series of nodes.Each node contains 2 pointer next and
//previous.so it has 2 directions.instead single linked list
//has 1 direction , and always started with first value.
//---The first node in a double linked list called  HEAD,
//---second and third node are assigned using NEXT and PREVIOUS pointers,
//---last node called TAIL
//---and we also have link LENGTH
//***************************************************************

//we should set up two classes
//#1 class Node -val
//     -next
//     -prev
class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

//#2 class DoubleLinkedList  -head
//                  -tail
//                  -length
class DoubleLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //push,adding the node to the end
    //at first find the tail,and add new tail, as a next and old tail as a previous
    //and return linked list
    push(val){
        const newNode = new Node(val);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;

        }
        this.length++;
        return this;
    }
    //pop,removing  the node from the end of the  double linked list
    //and return the removed node
    pop(){
        if(this.length === 0) return undefined;
        const newTail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = newTail.prev;
            this.tail.next = null;
            newTail.prev = null;
        }
        this.length--;
        return newTail;
    }
    //shift ,removing the node from the beginning  of the double linked list
    //return the old head
    shift(){
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;

        }
        this.length --;
        return oldHead;
    }
    //unshift,adding the node of the beginning to the double liked list
    //return the hole list
    unshift(val){
        const newHead = new Node(val);
        if(this.length === 0){
            this.head = newHead;
            this.tail = newHead;
        }else{
            this.head.prev = newHead;
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;

    }
    //get,accessing a node in a doubly linked list by its position
    //and return the node of that position
    get(index){
        if(index < 0 || index >= this.length) return null;
        let curr,count;
        //we divide the list length by 2
        //loop over first part the list toward middle
        if(index <= this.length/2) {
             count = 0;
             curr = this.head;
            while (count !== index) {
                curr = curr.next;
                count++;
            }
        }else{
            //loop for second part of list,stating to the end
             count = this.length -1;
             curr = this.tail;
            while(count !== index){
                curr = curr.prev;
                count--;
            }
        }
        return curr;
    }
}

const list = new DoubleLinkedList();
list.push(23);
list.push(100);
list.push(99);









