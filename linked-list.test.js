const linkedList = require("./linked-list");

describe("Linked List methods", () => {
	let list;

	beforeEach(() => {
		list = linkedList();
	});

	test("head, tail, and size should be null at first call", () => {
		expect(list.head).toBe(null);
		expect(list.tail).toBe(null);
		expect(list.size).toBe(0);
	});

	test("On first append, head and tail should no longer be null", () => {
		list.append(1);
		expect(list.head.value).toBe(1);
		expect(list.tail.value).toBe(1);
	});

	test("On third append, tail should no longer be equal to head", () => {
		list.append(1);
		list.append(2);
		list.append(3);
		list.append(4);
		expect(list.tail.value).toBe(4);
	});

	test("prepend should make the head, tail, and size not null", () => {
		list.prepend(1);
		expect(list.head.value).toBe(1);
		expect(list.tail.value).toBe(1);
	});

	test("prepend should update the head and tail", () => {
		list.append(2);
		list.append(3);
		list.prepend(1);
		list.prepend("0");
		expect(list.head.value).toBe("0");
		expect(list.tail.value).toBe(3);
	});

	test("size should return the total number of nodes in the list", () => {
		list.append(2);
		list.append(3);
		list.prepend(1);
		expect(list.size).toBe(3);
	});

	test("throw an error when index given to at function is greater than the size of the list", () => {
		expect(() => {
			list.at(1);
		}).toThrow("Please provide an index less than the list size.");
	});

	test("at should return the node of the given index", () => {
		list.append(1);
		list.append(2);
		list.append(3);
		list.append(4);
		expect(list.at(1).value).toBe(1);
		expect(list.at(2).value).toBe(2);
		expect(list.at(3).value).toBe(3);
		expect(list.at(4).value).toBe(4);
	});

	test("pop should remove the last node of the list, and size should decrease by 1", () => {
		list.append(1);
		list.append(2);
		list.append(3);
		list.append(4);
		list.pop();
		expect(list.size).toBe(3);
		expect(list.tail.value).toBe(3);
	});

	test("contains should return true if the list contains the value entered", () => {
		list.append(1);
		list.append(2);
		list.append(3);
		list.append(4);
		expect(list.contains(3)).toBeTruthy();
		expect(list.contains(0)).toBeFalsy();
	});

	test("find should return the index of the entered value, and null if none", () => {
		list.append(1);
		list.append(2);
		list.append(3);
		list.append(4);
		expect(list.find(1)).toBe(1);
		expect(list.find(3)).toBe(3);
		expect(list.find(4)).toBe(4);
		expect(list.find(10)).toBeNull();
	});

	test("toString should return a string representation of the linked list", () => {
		expect(list.toString()).toBe("(null) -> null");

		list.append(1);
		expect(list.toString()).toBe("(1) -> null");

		list.append(2);
		list.append(3);
		expect(list.toString()).toBe("(1) -> (2) -> (3) -> null");
	});
});
