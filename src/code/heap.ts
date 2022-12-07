/*
  大顶堆 / 小顶堆

  索引为 n 的结点来说：
    1. 索引为 (n-1)/2 的结点是它的父结点
    2. 索引 2*n+1 的结点是它的左孩子结点
    3. 索为引 2*n+2 的结点是它的右孩子结点
*/

// 下沉：删除、取出
export function downHeap(low, high, heap) {
    // 初始化 i 为当前结点，j 为当前结点的左孩子
    let i = low, j = i * 2 + 1
    // 当 j 不超过上界时，重复向下对比+交换的操作
    while (j <= high) {
        // 如果右孩子比左孩子更大，则用右孩子和根结点比较
        if (j + 1 <= high && heap[j + 1] > heap[j]) {
            j = j + 1
        }

        // 若当前结点比孩子结点小，则交换两者的位置，把较大的结点“拱上去”
        if (heap[i] < heap[j]) {
            // 交换位置
            const temp = heap[j]
            heap[j] = heap[i]
            heap[i] = temp

            // i 更新为被交换的孩子结点的索引
            i = j
            // j 更新为孩子结点的左孩子的索引
            j = j * 2 + 1
        } else {
            break
        }
    }
}

// 测试
const maxHeap: any[] = [
    { val: "5" },
    { val: "4" },
    { val: "3" },
    { val: "2" },
    { val: "1" },
    { val: "0" },
];

downHeap(0, maxHeap.length - 1, maxHeap);

console.log(maxHeap);

// 上浮：插入、添加
export function upHeap(low, high, heap) {
    // 初始化 i（当前结点索引）为上界
    let i = high  
    // 初始化 j 为 i 的父结点
    let j = Math.floor((i-1)/2)  
    // 当 j 不逾越下界时，重复向上对比+交换的过程
    while(j>=low)  {
        // 若当前结点比父结点大
        if(heap[j]<heap[i]) {
            // 交换当前结点与父结点，保持父结点是较大的一个
            const temp = heap[j] 
            heap[j] = heap[i]  
            heap[i] = temp
            
            // i更新为被交换父结点的位置
            i=j   
            // j更新为父结点的父结点
            j=Math.floor((i-1)/2)  
        } else {
            break
        }
    }
}

// 测试
const minHeap: any[] = [
    { val: "5" },
    { val: "4" },
    { val: "3" },
    { val: "2" },
    { val: "1" },
    { val: "0" },
]

downHeap(0, minHeap.length - 1, minHeap);

console.log(minHeap);