/*
并发数控制

设计一个 Task 队列，传入一个数字当做当前 最大运行数 的限制，
队列里可以放若干个 Task（异步，Promise 等），当入队的任务超过限制，就延迟到当前运行的任务运行完再执行，
后续还可以将 Task 入队，并且遵循之前的规则
*/


// 生成用于测试的任务集合
const tasks = new Array(10).fill(0).map((v, i) => {
    return function task() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`task ${i + 1} finish！`)
                resolve(i + 1)
            }, i * 200);
        })
    }
})

// 测试代码
const sendRequest = concurrencyControl(tasks, 3, () => {
    console.log(`task all finish！`)
})

sendRequest()


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
                    }else{
                        runTask() // 继续执行下一个任务
                    }
                })
            }
        }
    }

    return runTask
}

// 方式二

export default concurrencyControl


