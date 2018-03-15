function BST(value){    //binary search tree const function
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value){
  if (value <= this.value) {
      if(!this.left) this.left = new BST(value); //if there is no left child then set the left child into a new BST of the vlaue we passed in to our method
      else this.left.insert(value);
  }
  else if (value > this.value){
    if(!this.right) this.right = new BST(value);
    else this.right.insert(value); 
  }
};


BST.prototype.contains = function(value) {
  if(value === this.value) return true; 
  else if (value < this.value) {
    if(!this.left) return false;
    else return this.left.contains(value);
  }
  else if (value > this.value){
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};


BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if(order === 'pre-order')iteratorFunc(this.value);// if we want to run this method in pre-order then we will have to pass the pre-order paramenter.
  if(this.left) this.left.depthFirstTraversal(iteratorFunc, order); //if there is a left child node run the depthFirstTraversal method
  if (order === 'in-order')iteratorFunc(this.value);
  if(this.right)this.right.depthFirstTraversal(iteratorFunc, order);
  if(order === 'post-order') iteratorFunc(this.value); // run the left order than the right order followed by post-order
};

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this]; //define a queue then place our root node in that queue
  while(queue.length) { //define while loop that will continuely run as long as our queue isnt empty
    var treeNode = queue.shift(); //takes the first node out of tree node and store it in the queue
    iteratorFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left); //push both child nodes back into the queue
    if (treeNode.right) queue.push(treeNode.right);
  }
};


// return the smallest value in the tree
BST.prototype.getMinVal = function() {
  if(this.left) return this.left.getMinVal();
  else return this.value;
};
BST.prototype.getMaxVal = function() {
  if(this.right) return this.right.getMaxVal();
  else return this.value;
};

var bst = new BST(50); //root node
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);





console.log('MIN: ', bst.getMinVal());
console.log('Max: ', bst.getMaxVal());

