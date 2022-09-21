const node = (value) => {
	return {
		value: value ? value : null,
		nextNode: null,
	};
};

// Recursive Method
// const getLastNode = (list) => {
//     if (list.nextNode === null) {
//         return list
//     }
//     return getLastNode(list.nextNode)
// }

// Iteration
const getLastNode = (list) => {
	while (list.nextNode !== null) {
		list = list.nextNode;
	}
	return list;
};

const linkedList = () => {
	let head = null;
	let size = 0;

	const append = (value) => {
		if (head === null) {
			head = node(value);
		} else if (head.nextNode === null) {
			head.nextNode = node(value);
		} else {
			let lastNode = getLastNode(head);
			lastNode.nextNode = node(value);
		}
		size++;
	};

	const prepend = (value) => {
		if (head === null) {
			head = node(value);
		} else {
			let previousHead = head;
			head = node(value);
			head.nextNode = previousHead;
		}
		size++;
	};

	const at = (index) => {
		if (index > size) {
			throw new Error("Please provide an index less than the list size.");
		}
		let pointer = head;
		let nodeCount = 1;

		while (nodeCount < index) {
			pointer = pointer.nextNode;
			nodeCount++;
		}
		return pointer;
	};

	const pop = () => {
		if (head === null) {
			return;
		}

		let pointer = head;
		let nodeCount = 1;
		while (nodeCount < size - 1) {
			pointer = pointer.nextNode;
			nodeCount++;
		}
		pointer.nextNode = null;
		size--;
	};

	const contains = (value) => {
		let pointer = head;
		while (pointer.value !== value) {
			if (pointer.nextNode === null) {
				return false;
			}
			pointer = pointer.nextNode;
		}
		return true;
	};

	const find = (value) => {
		if (size === 0) {
			return null;
		}
		let pointer = head;
		let nodeCount = 1;
		while (nodeCount <= size) {
			if (pointer.value === value) {
				return nodeCount;
			}
			pointer = pointer.nextNode;
			nodeCount++;
		}
		return null;
	};

	const toString = () => {
		let string = "";
		let nullString = "null";
		if (head === null) {
			string = "(null) -> null";
		} else {
			let pointer = head;
			string = `(${pointer.value})`;
			for (let i = 1; i <= size; i++) {
				if (pointer.nextNode) {
					pointer = pointer.nextNode;
					string = string.concat(" -> ", `(${pointer.value})`);
				} else {
					string = string.concat(" -> ", nullString);
				}
			}
		}
		return string;
	};

	return {
		get head() {
			return head;
		},
		get size() {
			return size;
		},
		get tail() {
			if (head === null) {
				return null;
			}
			return getLastNode(head);
		},
		append,
		prepend,
		at,
		pop,
		contains,
		find,
		toString,
	};
};

let list = linkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
console.log(list.head);

module.exports = linkedList;
