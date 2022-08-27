export default function listToTree(list: any[]) {
  const map = {};
  const treeData: any[] = [];

  list.forEach((v) => {
    map[v.id] = v;
  });

  for (const k in map) {
    const item = map[k];

    if (item.parentId === 0) {
      treeData.push(item);
    } else {
      const parent = map[item.parentId];

      if(!parent.children) parent.children = [];

      parent.children.push(item);
    }
  }

  console.log(treeData);
  
  return treeData;
}

// 测试
const list = [
  {
    id: 1,
    text: "节点 1",
    parentId: 0, //这里用0表示为顶级节点
  },
  {
    id: 2,
    text: "节点 1_1",
    parentId: 1, //通过这个字段来确定子父级
  },
  {
    id: 3,
    text: "节点 1_2",
    parentId: 0, //这里用0表示为顶级节点
  },
  {
    id: 4,
    text: "节点 1_1_1",
    parentId: 2, //通过这个字段来确定子父级
  },
];

listToTree(list);
