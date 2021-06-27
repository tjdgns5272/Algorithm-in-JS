class BinarySearchTree {
    constructor(value) {
        // constructor로 만든 객체는 이진 탐색 트리의 Node가 됩니다.
        this.value = value;
        this.left = null;
        this.right = null;
    }
    // 이진 탐색 트리의 삽입하는 메서드를 만듭니다.
    insert(value) {
        // 입력값을 기준으로, 현재 노드의 값보다 크거나 작은 것에 대한 조건문이 있어야 합니다.
        // 보다 작다면, Node의 왼쪽이 비어 있는지 확인 후 값을 넣습니다.
        if (value < this.value) { // 5 < 10
            if (this.left === null) {
                this.left = new BinarySearchTree(value); // value : 5 인 새로운 노드 // base Case
            } else { // recursive case
                this.left.insert(value)
            }
        } else if (value > this.value) {
            if (this.right === null) {
                this.right = new BinarySearchTree(value)
            } else { // recursive case
                this.right.insert(value)
            }
        }
    }
    contains(value) {
        // TODO: 값이 포함되어 있다면 true를 반환하세요.
        if (this.value === value) { // base case
            return true;
        }
        // 입력값을 기준으로 현재 노드의 값보다 작은지 판별하는 조건문이 있어야 합니다.
        if (value < this.value) { // left node
            if(this.left && this.left.contains(value)) {
                return true
            }
        }
        if (value > this.value) {
            if(this.right && this.right.contains(value)) {
                return true
            }
        }
        return false
    }

    /*
    트리의 순회에 대해 구현을 합니다.
  지금 만드려고 하는 이 순회 메서드는 단지 순회만 하는 것이 아닌, 함수를 매개변수로 받아 콜백 함수에 값을 적용시킨 것을 순회해야 합니다.
  전위 순회를 통해 어떻게 탐색하는지 이해를 한다면 중위와 후위 순회는 쉽게 다가올 것입니다.
    */

    // 이진 탐색 트리를 전위 순회하는 메서드를 만듭니다.
    preorder(callback) {

        callback(this.value);
        if (this.left) {
            this.left.preorder(callback)
        }
        if (this.right) {
            this.right.preorder(callback)
        }
    }

    // 이진 탐색 트리를 중위 순회하는 메서드를 만듭니다.
    inorder(callback) {
        if (this.left) {
            this.left.inorder(callback)
        }
        callback(this.value);
        if (this.right) {
            this.right.inorder(callback)
        }
    };

    // 이진 탐색 트리를 후위 순회하는 메서드를 만듭니다.
    postorder(callback) {
        if (this.left) {
            this.left.postorder(callback)
        }
        if (this.right) {
            this.right.postorder(callback)
        }
        callback(this.value);
    }

}