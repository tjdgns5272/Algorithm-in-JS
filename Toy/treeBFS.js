let bfs = function (node) {

    let queue = [node];
    let result = []

    while (queue.length > 0) {
        //Queue를 사용하여 트리의 노드들을 레벨별로 탐색하자.
        // 반복문을 통해 queue 안에 있는 노드들을 하나씩 탐색하고 자식이 있다면 queue에 넣어보자.
        //queue 안에 아무 것도 남지 않았다면 다 탐색한 것이기에 그때, 값을 담은 배열을 리턴하자.
        const head = queue[0]
        queue.shift();
        result.push(head.value)

        head.children.forEach(child => queue.push(child))
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