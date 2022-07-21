// 题目描述:
// 有一组版本号如下 ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
// 现在需要对其进行排序，排序的结果为 ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']

export default function sortVerion(versions: string[]) {
  versions.sort((x, y) => {
    const arr1 = x.split(".");
    const arr2 = y.split(".");

    let i = 0;
    while (true) {
      const s1: any = arr1[i];
      const s2: any = arr2[i];

      i++;
      
      if (s1 === undefined || s2 === undefined) {
        return arr2.length - arr1.length;
      }

      if(s1 === s2) continue;

      return s2 - s1;
    }
  });
}


// 测试
const versions = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'];
sortVerion(versions);
console.log(versions);