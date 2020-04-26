class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    insertFirst(data){
        this.head = new Node(data,this.head);
    }
    size(){
        let cnt = 0;
        let node = this.head;
        while(node){
            cnt++;
            node = node.next;
        }
        return cnt;
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        let node = this.head;
        while(node.next != null){
            node = node.next;
        }
        return node;
    }
    clear(){
        this.head = null;
    }
    removeFirst(){
        if(this.head){
            let first = this.head;
            this.head = first.next;
        }
    }
    removeLast(){
        if(this.head.next != null){
            let node = this.head;
            let prev;
            while(node.next != null){
                prev = node;
                node = node.next;
            }
            prev.next = null;
        }else{
            this.head = null;
        }
    }
    insertLast(data){
        const last = this.getLast();
        let n = new Node(data,null);
        if(last == null){ //empty LL
            this.head = n;
        }else{
            node.next = n;
        }
    }
    getAt(index){
        let node = this.head;
        let counter = 0;
        while(node){
            if(counter == index){
                return node;
            }
            counter++;
            node = node.next;
        }
        return node;
    }
    removeAt(index){
        let node = this.head;
        let counter = 0;
        if(index==0){
            this.head = this.head.next;
        }
        let prev = this.getAt(index -1);
        if(!prev || !prev.next){
            return;
        }
        prev.next = prev.next.next;
        return;
    }
    insertAt(data,index){
        if(!this.head){
            this.head = new Node(data,null);
            return;
        }
        let n = new Node(data,null);
        let prev = this.getAt(index - 1) || this.getLast();
        if(!prev){
            this.head = n;
        }
        node = prev.next;
        prev.next = n;
        n.next = node;
    }
    deleteNode(node) {
        node.val = node.next.val;
        node.next = node.next.next; 
    }
}
module.exports = {Node, LinkedList};