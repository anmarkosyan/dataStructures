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
        let newNode = new Node(val);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }else{
            let current = this.root;
            while (true){
                if(val === current.val) return undefined;
                if(val < current.val){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }else{
                        current = current.left;
                    }
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
    find(val){
        if(this.root === null) return false;
        let current = this.root,
            found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            } else if(val > current.val){
                current = current.right;
            }else{
                found = true;     // return true;
            }
        }
        if(!found) return false;  //return false
        return current;
    }
    //we should go over the tree,visit every single node//output[10,5,13,2,7,11,18]
    BFS(){
        //make a variable that returned at the end
        let node = this.root,
            data = [],
            queue = [];
        //place the root node in the queue
        queue.push(node);
        //loop over the queue, if there is something
        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    // there is 3 different ways to explore Depth First Search(DFS)
    // preOrder type of searching using DFS algorithms//output [10,5,2,7,13,11,18]
    DFSPreOrder(){
        let data = [];
        //use helper recursion function
        function traverse(node) {
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
         }
         traverse(this.root);
        return data;
    }
    //output [2,7,5,11,18,13,10]
    DFSPostOrder(){
        let data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }
    //output [2,5,7,10,11,13,18]
    DFSInOrder(){
        let data = [];
        function traverse(node) {
            node.left && traverse(node.left);
            data.push(node.val);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return data;
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



//      10
//   5      13
//2    7  11   18