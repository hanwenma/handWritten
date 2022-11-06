export function async(generator: Function) {
  const iterator = generator();

  function handleNext(iteratorResult) {
    if (iteratorResult.done) return;

    const result = iteratorResult.value;

    if (result instanceof Promise) {
      result
        .then((value) => {
          handleNext(iterator.next(value));
        })
        .catch((reason) => iterator.throw(reason));
    }
  }

  try {
    handleNext(iterator.next());
  } catch (error) {
    console.log("error for async = ", error);
  }
}

// 测试
function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("promise1 running ...");
      resolve({ name: "zs", age: 18 });
    }, 3000);
  });
}

function promise2(info) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("promise2 running ...");
      resolve({ ...info, job: "front-end", hobbies: ["football", "swimming"] });
    }, 2000);
  });
}

function* generator() {
  const data = yield promise1();
  const result = yield promise2(data);
  console.log("generator running ...", result);
  return result;
}

async(generator);
