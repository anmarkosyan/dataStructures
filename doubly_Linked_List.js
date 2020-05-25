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
}


/*
//create first node
const head = new Node('23');
//add second node
const secondNode = new Node(16);
head.next = secondNode;
secondNode.prev = head;
//add third node
const thirdNode = new Node(10);
secondNode.next = thirdNode;
thirdNode.prev= secondNode;
const tail = thirdNode;
*/







