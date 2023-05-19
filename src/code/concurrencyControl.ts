/*
并发数控制

设计一个 Task 队列，传入一个数字当做当前 最大运行数 的限制，
队列里可以放若干个 Task（异步，Promise 等），当入队的任务超过限制，就延迟到当前运行的任务运行完再执行，
后续还可以将 Task 入队，并且遵循之前的规则
*/


// 生成用于测试的任务集合
const tasks = new Array(10).fill(0).map((v, i) => {
    return function task() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`task ${i + 1} finish！`)
                // resolve(i + 1)
                if (i % 2 == 0) resolve(i + 1)
                else reject(i + 1)
            }, i * 200);
        })
    }
})

// 测试代码
const sendRequest = concurrencyControl(tasks, 3, () => {
    console.log(`task all finish！`)
})

//sendRequest()


// 方式一
function concurrencyControl(tasks, limit, callback) {
    const queue = tasks.slice()
    let count = 0

    const runTask = () => {
        while (limit) {
            limit--

            if (queue.length) {
                const task = queue.shift() // 取出队头任务

                task().then(() => {
                    limit++
                    count++

                    if (count === tasks.length) {
                        callback()
                    } else {
                        runTask() // 继续执行下一个任务
                    }
                })
            }
        }
    }

    return runTask
}

// 方式二
class ConcurrencyControl1 {
    queue: any[];
    tasks: any[];
    count: number;
    limit: number;
    callback: () => unknown;

    constructor(tasks: any[], limit: number, callback: () => unknown) {
        this.queue = tasks.slice()
        this.tasks = tasks
        this.count = 0
        this.limit = limit
        this.callback = callback
    }

    runTask() {
        while (this.limit) {
            this.limit--

            if (this.queue.length) {
                const task = this.queue.shift() // 取出队头任务

                task()
                    .finally(() => {
                        this.limit++
                        this.count++

                        if (this.count === this.tasks.length) {
                            this.callback() // 执行回调函数
                        } else {
                            this.runTask() // 继续执行下一个任务
                        }
                    })
            }
        }
    }

    addTask(task) {
        // 同步添加任务
        this.queue.push(task)
        this.tasks.push(task)
        // 当直接调用 addTask 也可直接执行
        this.runTask()
    }
}

// 实现方式三
class ConcurrencyControl {
    queue: Set<any>;
    tasks: any[];
    limit: number;
    callback: () => unknown;

    constructor(tasks: any[], limit: number, callback: () => unknown) {
        this.tasks = tasks.slice()
        this.queue = new Set()
        this.limit = limit
        this.callback = callback
    }

    runTask() {
        if(this.tasks.length == 0) return

        while (this.queue.size < this.limit) {

            const task = this.tasks.shift() // 取出队头任务
            this.queue.add(task) // 往队列中添加当前执行的任务

            task()
                .finally(() => {
                    this.queue.delete(task) // 当前任务执行完毕，从队列中删除改任务

                    if (this.queue.size == 0) {
                        this.callback() // 执行回调函数
                    } else {
                        this.runTask() // 继续执行下一个任务
                    }
                })
        }

    }

    addTask(task) {
        // 同步添加任务
        this.tasks.push(task)
        // 当直接调用 addTask 也可直接执行
        this.runTask()
    }
}

// 测试代码
const Control = new ConcurrencyControl(tasks, 3, () => {
    console.log(`task all finish！`)
})

// 执行队列任务
Control.runTask()

// 添加新任务
Control.addTask(function task() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`task 9999 finish！`)
            resolve(999)
        }, 100);
    })
})


export default concurrencyControl


