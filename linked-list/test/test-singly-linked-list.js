"use strict";

TestCase("ak.SinglyLinkedList tests", {
    "test if ak.SinglyLinkedList is defined in global space": function() {
        assert(typeof ak.SinglyLinkedList != 'undefined');
    },

    "test create list using new keyword and check if its instance of ak.SinglyLinkedList": function() {
        var list = new ak.SinglyLinkedList();
        assert(list instanceof ak.SinglyLinkedList);
    },

    "test create list without using new keyword and check if its instance of ak.SinglyLinkedList": function() {
        var list = ak.SinglyLinkedList();
        assert(list instanceof ak.SinglyLinkedList);
    },

    "test create list, insert element at beggining access it's value": function() {
        var list = ak.SinglyLinkedList();
        list.insertBeginning(new ak.Node(1));
        assertEquals(1, list.firstNode.data());
    },

    "test newly created list": function() {
        var list = ak.SinglyLinkedList();
        assertTrue("newly created list.isEmpty(0 should be true", list.isEmpty());
        assertEquals("length of newly created list should be 0", list.length(), 0);
    },

    "test create list, insert element at beggining, insert element after, access its value, remove elements": function() {
        var list = ak.SinglyLinkedList(),
            first = new ak.Node(1),
            second = new ak.Node(2);
        list.insertBeginning(first);
        list.insertAfter(first, second);
        assertSame("first element should be first", first, list.firstNode);
        assertSame("second element should be second", second, list.firstNode.next());

        list.removeAfter(first);
        assertEquals(list.length(), 1);
        assertFalse(list.isEmpty());
        assertEquals(list.firstNode.data(), 1);
        assertNull(list.firstNode.next());

        list.removeBeginning();
        assertEquals(list.length(), 0);
        assertTrue(list.isEmpty(), true);
        assertNull(list.firstNode);
    },

});