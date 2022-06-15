/**
 * typeof
 * @param target
 * @return string
 */
export function myTypeOf1(target: any): string {
   return Object.prototype.toString.call(target).slice(8).replace(']','');
}

/**
 * typeof
 * @param target
 * @return string
 */
 export function myTypeOf2(target: any): string {
    const isObj = typeof target === 'object';
    if(isObj){
        return Object.prototype.toString.call(target).slice(8).replace(']','').toLocaleLowerCase();
    }else{
        return typeof target;
    }
 }


// 测试
console.log(myTypeOf2(''));
console.log(myTypeOf2(true));
console.log(myTypeOf2(100));
console.log(myTypeOf2(Symbol('test')));
console.log(myTypeOf2(null));
console.log(myTypeOf2(undefined));
console.log(myTypeOf2({}));
console.log(myTypeOf2([]));
console.log(myTypeOf2(function (){}));
