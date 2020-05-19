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
 class SinglyLinkedList {
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
    //pop value to the tail, and return the value of the node removed
     pop() {
         //check if there are no nodes
         if (!this.head) return undefined;
         //loop through the list until you reach the tail
         //create 2 variables for check last node,starting over first value
         let current = this.head;
         let newTail = current;
         while (current.next) {
             newTail = current;
             current = current.next;
         }
         //tail is now pointing the newTail
         this.tail = newTail;
         //the new tail to be null
         this.tail.next = null;
         this.length--;
         //if the length is 0
         if (this.length === 0) {
             this.head = null;
             this.tail = null;
         }
         return current;
     }

     //shift
     shift() {
         //if there are no nods return undefined
         if(!this.head) return undefined;
         //store the current head property in a variable
         let currHead = this.head;
         this.head = currHead.next;
         //decrement the length by 1
         this.length--;
         if(this.length === 0) {
             this.tail = null;
         }
         //return the value of the node remove
         return currHead;
     }
     //unshift
     unshift(val){
        let newVal = new Node(val);
         if(!this.head){
             this.head = newVal;
             this.tail = this.head;
         }else {
             newVal.next = this.head.next;
             this.head = newVal;
         }
             this.length++;
             //return the linked list
             return this;
    }

     //get is a method that takes a number an index or a position
     //and return the item in that position
     get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    //create set method for changing the value of the node based on its
     //position on the linked list
    set(index,val){
        //call get method to find correct index
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false
    }
    insert(index,val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        //if index somewhere in the middle
        let newNode = new Node(val);
        let prev = this.get(index -1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        //return true if the insert worked
        return true;
    }
    //remove-removing a node from the linked list at the specific position
     remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length-1) return this.pop();
        if(index === 0) return this.shift();

        let prev = this.get(index -1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;

     }

}

 const list = new SinglyLinkedList();

console.log(list.push('hi'));
console.log(list.push('there'));
console.log(list.push('how'));
console.log(list.push('are'));
console.log(list.push('you'));
console.log(list.get(3));
console.log(list.remove(3));
console.log(list.remove(2));
console.log(list);


