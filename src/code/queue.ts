/*
题目描述：使用栈实现队列的下列操作：
push(x) -- 将一个元素放入队列的尾部。
pop() -- 从队列首部移除元素。
peek() -- 返回队列首部的元素。
empty() -- 返回队列是否为空。

示例: MyQueue queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.peek(); // 返回 1
queue.pop(); // 返回 1
queue.empty(); // 返回 false
*/

export class QueueWithStack {
    stack1: number[]
    stack2: number[]

    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

    push(x) {
        this.stack1.push(x)
    }

    pop() {
        const len1 = this.stack1.length
        for (let i = 0; i < len1; i++) {
            this.stack2.push(this.stack1.pop()!);
        }

        return this.stack2.pop()
    }

    peek() {
        const len1 = this.stack1.length

        for (let i = 0; i < len1; i++) {
            this.stack2.push(this.stack1.pop()!);
        }

        return this.stack2[this.stack2.length - 1]
    }

    empty() {
        return !this.stack1.length && !this.stack2.length
    }
}

// 测试
const queue = new QueueWithStack();

queue.push(1);
queue.push(2);

console.log(queue.peek()); // 返回 1
console.log(queue.pop()); // 返回 1
console.log(queue.empty()); // 返回 false