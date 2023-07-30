describe("Folder.addChild()", () => {
  it("when adding an existing folder should not add duplicate", () => {
    const folder = new Folder("root");
    const folder2 = new Folder("root");
    folder.addChild(folder2);
    expect(folder.children.length).toBe(1);
  });
});

//test description includes 1) the function I’m testing, 2) the condition I’m testing, and 3) what I expect the result to be
