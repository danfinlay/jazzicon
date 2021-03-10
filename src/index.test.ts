import generateIdenticon from "./index";

describe("generateIdenticon", () => {
  it("has a div container", () => {
    const div = generateIdenticon(10, 1);
    expect(div.children).toHaveLength(1);
  });
});
