/*
  真题描述：将两个有序链表合并为一个新的有序链表并返回。
  新链表是通过拼接给定的两个链表的所有结点组成的。 

  示例： 
  输入：1->2->4, 1->3->4 
  输出：1->1->2->3->4->4
*/

export function ListNode(this: any, vals: number[] = []) {
  this.val = vals.shift() || -1;
  this.next = vals.length === 0 ? null : new ListNode(vals);
}

export function mergeTwoLists(l1, l2) {
  // 创建新链表
  const head = new ListNode([0]);
  // 新链表当前节点
  let curr = head;

  // l1 的当前节点
  let lh = l1;
  // l2 的当前节点
  let rh = l2;

  // 循环遍历两个链表
  while (lh && rh) {
    if (lh.val <= rh.val) {
      // l1 当前节点作为新链表的下一个节点
      curr.next = lh;
      // 更新 l1 的当前节点
      lh = lh.next;
    } else {
      // l2 当前节点作为新链表的下一个节点
      curr.next = rh;
      // 更新 l2 的当前节点
      rh = rh.next;
    }

    // 更新新链表的头结点
    curr = curr.next;
  }

  // l1 有剩余
  if (lh) {
    curr.next = lh;
  }

  // l2 有剩余
  if (rh) {
    curr.next = rh;
  }

  // 返回合并后的新链表
  return head.next;
}

// 测试
const l1 = new ListNode([1, 2, 4]);
const l2 = new ListNode([1, 3, 4]);

// console.log(mergeTwoLists(l1, l2));
