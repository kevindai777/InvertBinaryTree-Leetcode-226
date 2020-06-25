//The objective is to invert a binary tree.
//Input:
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

//Output:
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(200)
tree.addLeftNode(tree.root, 500)
tree.addRightNode(tree.root, 700)
tree.addLeftNode(tree.root.left, 600)
tree.addRightNode(tree.root.right, 800)
tree.addLeftNode(tree.root.left.left, 1000)
tree.addRightNode(tree.root.left, 950)
tree.addLeftNode(tree.root.right, 720)
tree.addRightNode(tree.root.right.right, 440)
tree.addLeftNode(tree.root.left.left.left, 560)
tree.addRightNode(tree.root.right.right.right, 810)



//O(n) solution that recurses over the tree and switches every left and right
//pointer.

function dfs(node) {
    if (!node) {
        return null
    }

    let left = dfs(node.left)
    let right = dfs(node.right)

    node.left = right 
    node.right = left 

    return node
}
return dfs(tree.root)