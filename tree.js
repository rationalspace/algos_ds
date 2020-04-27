class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(data){
        let newNode = new Node(data);
        if(this.root == null){
            this.root = newNode;
            return;
        }else{
            this.insertData(this.root,newNode);
        }
    }
    insertData(node,newNode){
        if(newNode.data < node.data){
            if(node.left == null){
                node.left = newNode;
                return;
            }else{
                this.insertData(node.left,newNode);
            } 
        }else{
            if(newNode.data > node.data){
                if(node.right == null){
                    node.right = newNode;
                    return;
                }else{
                    this.insertData(node.right,newNode);
                }
            }
        }
    }
    remove(data){
        this.root = this.removeNode(this.root, data);
    }
    removeNode(node,data){
        if(node == null) return null;
        if(data < node.data){
            node.left = this.removeNode(node.left,data);
            return node;
        } else if( data > node.data){
            node.right = this.removeNode(node.right, data);
            return node;
        }else{
            if(node.left == null && node.right == null){
                node = null;
                return node;
            }
            if(node.right == null){
                node = node.left;
                return node;
            }
            if(node.left == null){
                node = node.right;
                return node;
            }
            var minnode = this.findMin(node.right);
            node.data = minnode.data;
            node.right = this.removeNode(node.right,minnode);
            return node;
        } 
    }
    inorder(node){
        if(node!==null){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    preorder(node){
        if(node!==null){
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    postorder(node){
        if(node!==null){
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
    findMin(node){
        if(node.left===null){
            return node;
        }else{
            return this.findMin(node.left);
        }    
    }
    search(node,data){
        if(node == null){
            return null;
        }
        if(data < node.data){
            this.search(node.left,data);
        }
        if(data>node.data){
            this.search(node.right,data);
        }
        return node;
    }
    getroot(){
        return this.root;
    }
}
var bst = new BST();
bst.insert(15); 
bst.insert(25); 
bst.insert(10); 
bst.insert(7); 
bst.insert(22); 
bst.insert(17); 
bst.insert(13); 
bst.insert(5); 
bst.insert(9); 
bst.insert(27);

var root = bst.getroot();
bst.inorder(root);