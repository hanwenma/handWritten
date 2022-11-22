import { ListNode } from "./mergeTwoLists";

export function reverseBetween(head, m, n) {
  const dummy = new ListNode();
  dummy.next = head;

  // 获得区间头结点
  let leftHead = dummy;
  for (let i = 0; i < m - 1; i++) {
    leftHead = leftHead.next;
  }

  // start 是反转区间的第一个结点
  let start = leftHead.next;
  // pre 指向start
  let pre = start;
  // cur 指向 start 的下一个结点
  let cur = pre.next;
  // 开始重复反转动作
  for (let i = m; i < n; i++) {
    // 第一次： pre = 2  cur = 3  next = 4   3 -> 2
    // 第二次：       3        4         5   4 -> 3 -> 2
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  //  leftHead 的后继结点此时为反转后的区间的第一个结点
  leftHead.next = pre;
  // 将区间内反转后的最后一个结点 next 指向 cur
  start.next = cur;

  return dummy.next;
}

// 测试
const head = new ListNode([1, 2, 3, 4, 5, 6]);
reverseBetween(head, 2, 5);

console.log(head);
