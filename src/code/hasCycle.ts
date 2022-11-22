import { ListNode } from "./mergeTwoLists";

// 判断环形链表
export function hasCycle(head) {

  while (head) {
    if (head.flag) return true;
    
    head.flag = true;
    head = head.next;
  }

  return false;
}

// 测试
const head = new ListNode([1, 2, 3, 4, 5], true);
// 形成环
ListNode.last.next = head;

console.log(hasCycle(head));
