import { ListNode } from "./mergeTwoLists";

// 判断环形链表

// 立 flag 法
export function hasCycle1(head) {
  while (head) {
    if (head.flag) return true;

    head.flag = true;
    head = head.next;
  }

  return false;
}

// hash 表
export function hasCycle2(head) {
  const set = new Set();
  while (head) {
    if (set.has(head)) return true;

    set.add(head);
    head = head.next;
  }

  return false;
}

// 双指针
export function hasCycle3(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;

    if (slow === fast) return true;
    slow = slow.next;
  }

  return false;
}

// 测试
const head = new ListNode([1, 2, 3, 4, 5], true);
// 形成环
ListNode.last.next = head;

console.log(hasCycle1(head));
console.log(hasCycle2(head));
console.log(hasCycle3(head));
