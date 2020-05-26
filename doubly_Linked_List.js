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
    //set,replacing the value of the node in the double linked list
    set(index,val){
        let foundNode = this.get(index);
        if(foundNode !== null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    //insert,adding a node ina double linked list by a certain position
    insert(index,val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);


        let newNode = new Node(val);
        let beforeNode = this.get(index -1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode; newNode.prev = beforeNode;
        newNode.next = afterNode; afterNode.prev = newNode;

        this.length++;
        return true;
    }
    //remove,removing a node in a double linked list, by a certain position
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        let removeNode = this.get(index);
        let prevNode = removeNode.prev;
        let nextNode = removeNode.next;

        prevNode.next = nextNode
        nextNode.prev = prevNode;
        // removeNode.prev.next = removeNode.next;
        // removeNode.next.prev = removeNode.prev;
        removeNode.next = null;
        removeNode.prev = null;
        this.length--;
        return removeNode;

    }
}

const list = new DoubleLinkedList();
list.push('hi');
list.push('hello');
list.push('ola');









