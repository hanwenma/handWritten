import { ListNode } from "./mergeTwoLists";

/*
 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。

 示例 1:
       输入: 1->2->3->3->4->4->5
       输出: 1->2->5
 示例 2:
       输入: 1->1->1->2->3
       输出: 2->3
 */

export function noRepeatListNode(node) {
  if (!node || !node.next) {
    return node;
  }

  // dummy 节点
  const dummy = new ListNode();
  // dummy 永远指向头结点
  dummy.next = node;

  let curr = dummy;

  while (curr.next && curr.next.next) {
    if (curr.next.val === curr.next.next.val) {
      const val = curr.next.val;
      // 反复地排查后面的元素是否存在多次重复该值的情况
      while (curr.next && curr.next.val === val) {
        // 若有，则删除
        curr.next = curr.next.next;
      }
    } else {
      curr = curr.next;
    }
  }

  return dummy.next;
}

// 测试
const node = new ListNode([1, 2, 3, 3, 3, 4, 4, 5]);
console.log(noRepeatListNode(node));
