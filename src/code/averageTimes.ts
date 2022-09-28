
export default function averageTime(times: string[]){
    let total: number = 0;
    for (const time of times) {
        total += new Date(`2022/01/01 ${time}`).getTime();
    }
    const date = new Date(total / times.length);
    return `${date.getHours()}:${date.getMinutes()}`
}

// 测试
var arr = ["8:01", "9:30", "11:50"];

console.log(averageTime(arr));