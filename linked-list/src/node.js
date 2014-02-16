"use strict";

(function(global) {
    function Node(data, next) {

        if (!(this instanceof Node)) {
            return new Node(data, next);
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
            this._next = arguments[0];
        }

        return this._next;
    };

    global.ak = global.ak || {};
    global.ak.Node = Node;
}(this));