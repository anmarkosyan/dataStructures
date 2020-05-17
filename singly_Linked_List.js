 //*********************** singly Linked List *******************************
 //LINKED LIST is a data structure that allows you to stores whatever data you
 // want(string,number),and its contains a head,tail and length
 //**************************************************************************

 //piece of data = val
 //reference to next node = next

 class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
 }
 class SinglyLinkedList{
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    //how push the value
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;

    }

 }
 const list = new SinglyLinkedList();

console.log(list.push('hi'));
console.log(list.push('there'));
console.log(list.push('how'));
console.log(list.head.next.next);

