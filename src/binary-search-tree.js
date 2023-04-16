const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.tree = null;
  }
  root() {
    return this.tree;
  }

  add(data) {
    function addData(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      if (node.data > data) {
        node.left = addData(node.left, data);
      } else if (node.data < data) {
        node.right = addData(node.right, data);
      }
      return node;
    }
    this.tree = addData(this.tree, data);
  }

  has(data) {
    function hasData(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if (node.data > data) {
        return hasData(node.left, data);
      } else if (node.data < data) {
        return hasData(node.right, data);
      }
    }
    return hasData(this.tree, data);
  }

  find(data) {
    function findData(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      if (node.data > data) {
        return findData(node.left, data);
      } else if (node.data < data) {
        return findData(node.right, data);
      }
    }
    return findData(this.tree, data);
  }

  remove(data) {
    function removeData(node, data) {
      if (!node) return null;
      if (node.data > data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let rightMin = node.right;
        while (rightMin.left) {
          rightMin = rightMin.left;
        }
        node.data = rightMin.data;
        node.right = removeData(node.right, rightMin.data);
        return node;
      }
    }

    this.tree = removeData(this.tree, data);
  }

  min() {
    if (!this.tree) return null;
    let min = this.tree;
    while (min.left) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    if (!this.tree) return null;
    let max = this.tree;
    while (max.right) {
      max = max.right;
    }
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};
