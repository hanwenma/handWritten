export default function renderDom(vnode: any) {
  const { tag, attrs, children } = vnode;

  const el = document.createElement(tag.toLowerCase());
  if (attrs) {
    for (const k in attrs) {
      el.setAttribute(k, attrs[k]);
    }
  }

  if (Array.isArray(children)) {
    children.forEach((vd) => {
      const child = renderDom(vd);
      el.appendChild(child);
    });
  } else if (children) {
    const text = document.createTextNode(children);
    el.appendChild(text);
  }

  return el;
}

// 测试
const vnode = {
  tag: "DIV",
  attrs: {
    id: "app",
  },
  children: [
    {
      tag: "SPAN",
      children: [
        { tag: "A", children: [] },
        { tag: "SPAN", children: "hello" },
      ],
    },
    {
      tag: "SPAN",
      children: [
        { tag: "A", children: [] },
        { tag: "A", children: [] },
      ],
    },
  ],
};

const dom = renderDom(vnode);
console.log(dom);
