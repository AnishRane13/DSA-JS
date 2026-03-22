// https://leetcode.com/problems/min-stack/description/

var MinStack = function() {
    this.elements = [];
    this.minStack = [];
};

MinStack.prototype.push = function(val) {
    this.elements.push(val);

    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

MinStack.prototype.pop = function() {
    let removed = this.elements.pop();

    if (removed === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

MinStack.prototype.top = function() {
    return this.elements[this.elements.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};