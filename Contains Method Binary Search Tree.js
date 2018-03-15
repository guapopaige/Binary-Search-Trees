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








var bst = new BST(50);

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

console.log(bst.right.right);


