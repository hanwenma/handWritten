import { ListNode } from "./mergeTwoLists";

// 删除有序链表的重复节点
export function deleteDuplicates(node) {
  let curr = node;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return node;
}

// 测试
const nodes = new ListNode([1, 1, 3, 4, 5, 5, 5, 6, 9]);

console.log(deleteDuplicates(nodes));
