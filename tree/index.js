class BinaryTree {
  constructor(data) {
    this.data = data;
    // 左二分木
    this.left = null;
    // 右二分木
    this.right = null;
  }
}

let binaryTree = new BinaryTree(1);
let node2 = new BinaryTree(2);
let node3 = new BinaryTree(3);

binaryTree.left = node2;
binaryTree.right = node3;

console.log("Root: " + binaryTree.data);
console.log("Left: " + binaryTree.left.data);
console.log("Right: " + binaryTree.right.data);
