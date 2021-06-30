let bfs = function (node) {
    let result = []

    result.push(node.value)

    if(node.children) {
        for(let child of node.children) {
            result.push(child.value)
        }
        for(let child of node.children) {
            const childNode = bfs(child)
        }
    } else {
        return
    }

    return result
};

let Node = function (value) {
    this.value = value;
    this.children = [];
};

Node.prototype.addChild = function (child) {
    this.children.push(child);
    return child;
};
let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
let output = bfs(root);
console.log(root);
console.log(output); // --> [1, 2, 3, 4, 5]