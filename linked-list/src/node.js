(function(global) {
    function Node(data, next) {

        if (!(this instanceof Node)) {
            return new Node(data, next);
        }

        this.data = data;
        this.next = next;
    }

    global.ak = global.ak || {};
    global.ak.Node = Node;
}(this));