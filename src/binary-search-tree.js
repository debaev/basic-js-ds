const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor () {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    var value = new Node(data);
    if(!this.rootNode) {
      this.rootNode = value;
    } else {
      function findPosition(node, newNode) {
        if(newNode.data < node.data) {
          !node.left ?  node.left = newNode : findPosition(node.left, newNode);
        } else {
          !node.right ? node.right = newNode : findPosition(node.right, newNode);
        }
      }
      findPosition(this.rootNode, value); 
    }
  }

  has(data) {
    if(!this.rootNode) {
      return false;
    }
    function search(node) {
      if(data < node.data) {
        return node.left ? search(node.left) : false;
      } else if (data > node.data) {
        return node.right ? search(node.right) : false;
      } else {
        return true; 
      }
    }
    
    return search(this.rootNode)
  }

  find(data) {
    if(!this.rootNode) {
      return null;
    }
    function search(node) {
      if(data < node.data) {
        return node.left ? search(node.left) : null;
      } else if (data > node.data) {
        return node.right ? search(node.right) : null;
      } else {
        return node; 
      }
    }
    
    return search(this.rootNode)
  }

  remove(data) {
    function deleteNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = deleteNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        function findRightMin(node) {
          if (!node.left) {
            return node;
          } else {
            return findRightMin(node.left);
          }
        }
        const rightMin = findRightMin(node.right);
        node.data = rightMin.data;
        node.right = deleteNode(node.right, rightMin.data);
        return node;
      }
      
    }
    this.root = deleteNode(this.rootNode, data);
  }

  min() {
    function findMin(node) {
      return node.left ? findMin(node.left) : node.data
    }
    return findMin(this.rootNode)
  }

  max() {
    function findMin(node) {
      return node.right ? findMin(node.right) : node.data
    }
    return findMin(this.rootNode)
  }
}