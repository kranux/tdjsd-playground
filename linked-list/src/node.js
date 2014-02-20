"use strict";

(function(global) {
    function Node(data, next) {

        if (!(this instanceof Node)) {
            return new Node(data || undefined, next || undefined);
        }

        this._data = data;
        this._next = next;
    }

    Node.prototype.data = function() {
        if (typeof arguments[0] != 'undefined') {
            this._data = arguments[0];
        }

        return this._data;
    };

    Node.prototype.next = function() {
        if (typeof arguments[0] != 'undefined') {
            if (!isValidNode(arguments[0])) {
                throw new TypeError("obj must be of type ak.Node.");
            }
            this._next = arguments[0];
        }

        return this._next;
    };

    function isValidNode(obj) {
        if (obj === null) {
            return true;
        }
        if (typeof obj != 'object') {
            return false;
        }
        if (!(obj instanceof ak.Node)) {
            return false;
        }
        return true;
    }

    global.ak = global.ak || {};
    global.ak.Node = Node;
    global.ak.Node.isValidNode = isValidNode;
}(this));