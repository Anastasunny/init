  class Tree {
      constructor(nameTree, age, maxHeight){
        this.nameTree = nameTree;
        this.age = age;
        this.maxHeight = maxHeight;
      }

      addYear(age) {
          this.age = this.age + age;
      }

      getMaxHeight() {
        return this.maxHeight;
      }
      toString() {
        return `The tree '${this.nameTree}' has height: ${this.maxHeight}  and age: ${this.age}`
    }
  }

module.exports = Tree;