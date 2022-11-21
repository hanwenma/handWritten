/*
真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

示例： 给定一个链表: 1->2->3->4->5, 和 n = 2.
当删除了倒数第二个结点后，链表变为 1->2->3->5.
说明： 给定的 n 保证是有效的。
*/
import { ListNode } from "./mergeTwoLists";

export function removeNthFromEnd(head, count) {
  const dummy = new ListNode();
  dummy.next = head;

  // 快慢指针
  let slow = dummy,
    fast = dummy;

  // 根据指定的节点数先移动快指针
  while (count) {
    fast = fast.next;
    count--;
  }

  // 更新快慢指针
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // 此时 slow 和 fast 就是目标节点的 前后节点
  slow.next = fast;

  return dummy.next;
}

// 测试
const node = new ListNode([1, 2, 3, 4, 5]);

removeNthFromEnd(node, 2);

console.log(node);
