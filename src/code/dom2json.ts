
export default function dom2Json(domtree: HTMLElement) {
  // 定义基本结构
  let node: any = {};
  node.name = domtree.tagName;
  node.children = [];

  // 遍历处理子节点
  domtree.childNodes.forEach((child: any) =>{
    if(child.tagName) node.children.push(dom2Json(child))
  }
  );

  return node;
}

// 测试
function createElement(tag: string) {
  const container = document.createElement(tag);
  container.innerHTML = `
    <span>
      <a>1241</a>
    </span>
    <span>
      <a></a>
      <a></a>
    </span>
`;
  return container;
}

const node = dom2Json(createElement("div"));

console.log(node);
