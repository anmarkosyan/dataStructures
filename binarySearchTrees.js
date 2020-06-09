
//      10
//   5      13
//2    7  11   18

class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTrees {
    constructor() {
        this.root = null;

    }
    insert(val){
        //check  if the root is  in or no, and set the new value as a root
        let newNode = new Node(val);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }else{
            let current = this.root;
            //create while loop for check if another insert value is less than root,and if isn't yet
            //value push it in left side,if there already have value, update current
            //value next
            while (true){
                if(val === current.val) return undefined;
                if(val < current.val){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }else{
                        current = current.left;
                    }
                    //we do the same in the right side , if value is greater then root
                }else if(val > current.val){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }else{
                        current = current.right;
                    }
                }
            }
        }
    }
}
const tree = new BinarySearchTrees();
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(13);
tree.insert(7);
tree.insert(11);
tree.insert(18);
tree.insert(31);
tree.insert(10);//insert the same root

//      10
//   5      13
//2    7  11   18
