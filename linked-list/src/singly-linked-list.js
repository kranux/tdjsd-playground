(function(global) {

    function SinglyLinkedList() {
        if (!(this instanceof SinglyLinkedList)) {
            return new SinglyLinkedList();
        }
        this.firstNode = null;
    };

    SinglyLinkedList.prototype.insertBeginning = function(newNode) {
        newNode.next(this.firstNode);
        this.firstNode = newNode;
    };

    SinglyLinkedList.prototype.insertAfter = function(node, newNode) {
        newNode.next(node.next());
        node.next(newNode);
    };

    SinglyLinkedList.prototype.removeAfter = function(node) {
        node.next(node.next().next());
    };

    SinglyLinkedList.prototype.removeBeginning = function() {
        this.firstNode = this.firstNode.next();
    };

    SinglyLinkedList.prototype.length = function() {
        var currentNode = this.firstNode,
            length = 0;
        while (currentNode != null) {
            currentNode = currentNode.next();
            length += 1;
        }
        return length;
    };

    SinglyLinkedList.prototype.isEmpty = function() {
        return this.firstNode === null;
    };

    global.ak = global.ak || {};
    global.ak.SinglyLinkedList = SinglyLinkedList;
})(this);