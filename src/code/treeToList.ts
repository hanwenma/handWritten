export default function treeToList(treeData: any[]) {
  const list: any[] = [];

  function genList(data) {
    data.forEach((item) => {
      if (item.children) {
        const children = item.children;
        delete item.children;
        list.push(item);
        genList(children);
      } else {
        list.push(item);
      }
    });
  }

  genList(treeData);

  console.log(list);

  return list;
}

// 测试
const treeData = [
  {
    id: 1,
    text: "节点 1",
    parentId: 0,
    children: [
      {
        id: 2,
        text: "节点 1_1",
        parentId: 1,
        children: [
          {
            id: 4,
            text: "节点 1_1_1",
            parentId: 2,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    text: "节点 1_2",
    parentId: 0,
  },
];

treeToList(treeData);
