TestCase("ak.Node tests", {
    "test if ak.Node is defined in global space": function() {
        assert(typeof ak.Node != 'undefined');
    },

    "test create node using new keyword and check if its instance of ak.Node": function() {
        var head = new ak.Node(10);
        assert(head instanceof ak.Node);
    },

    "test create node without using new keyword and check if its instance of ak.Node": function() {
        var head = ak.Node(10);
        assert(head instanceof ak.Node);
    },

    "test create new node and get correct data": function() {
        var head = new ak.Node(10);
        assertEquals(head.data(), 10);
    },

    "test add next node and check if next() returns correct data": function() {
        var head = new ak.Node(10, new ak.Node(20));
        assertEquals(head.next().data(), 20);
    },
});