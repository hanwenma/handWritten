export default class LRUCash {
  max: number;
  cash: string[];
  map: Map<any, any>;

  constructor(max: number = 2) {
    this.max = max;
    this.map = new Map();
    this.cash = [];
  }

  get(key: any) {
    const index = this.cash.findIndex((k) => key === k);

    if (index >= 0) {
      const [key] = this.cash.splice(index, 1);
      this.cash.push(key);
    }

    return this.map.get(key) || -1;
  }

  put(key: any, value: number) {
    if (this.map.has(key)) {
      return;
    }

    if (this.cash.length >= this.max) {
      const oldkey = this.cash.shift();
      this.map.delete(oldkey);
    }

    this.cash.push(key);
    this.map.set(key, value);
  }
}

// 测试
const cashLRU = new LRUCash();

cashLRU.put(1, 1);
cashLRU.put(2, 2);
cashLRU.get(1);
console.log(cashLRU.cash);
cashLRU.put(3, 3);
console.log(cashLRU.cash);



