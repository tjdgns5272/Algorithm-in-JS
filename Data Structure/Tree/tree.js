class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    insertNode(value) {
        const childNode = new Tree(value);
        this.children.push(childNode);
    }

    contains(value) {
        if (this.value === value) { // base Case
            return true;
        }
        if (this.children.length !== 0) {
            for (let obj of this.children) {
                if (obj.contains(value)) {
                    return true
                }
            }
        }
        return false;
    }
}
