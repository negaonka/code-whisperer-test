//You can generate full or partial class implementations from a single code comment. The comment should describe the key properties and behaviors of the class.

//A folder has a name, children, and an optional parent. A child can't be added twice. A parent can't have more than one child.

class Folder {
  constructor(name, parent) {
    this.name = name;
    this.parent = parent;
    this.children = [];
  }

  //Documenting code
  /**
   * Adds a child to this folder.
   * @param {Folder}    */

  addChild(child) {
    if (this.children.includes(child)) {
      throw new Error("Child already exists");
    }
    this.children.push(child);
    child.parent = this;
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index === -1) {
      throw new Error("Child does not exist");
    }
    this.children.splice(index, 1);
    child.parent = null;
  }

  getParent() {
    return this.parent;
  }

  getChildren() {
    return this.children;
  }
}
