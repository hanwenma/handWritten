import { ListNode } from "./mergeTwoLists";

export function reverseList(head){
    let curr = head
    let newHead = null

    while(curr){
        // 记录下一个节点
        const next = curr.next
        // 反转指针
        curr.next = newHead
        // newHead 往前走一步
        newHead = curr
        // oldHead 往后走一步
        curr = next
    }

    // 返回新的头结点
    return newHead
}

// 测试
const head = new ListNode([1,2,3,4,5])
console.log(reverseList(head));
