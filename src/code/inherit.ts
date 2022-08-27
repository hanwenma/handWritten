export function Child(this: any, params:any) {
    Parent.call(this, params);
    this.age = params.age;
    this.sex = params.sex;
}

function Parent(this:any, params:any) {
    this.firstName = params.firstName;
    this.learn = function (){
        alert(`learning ${params.learn}`);
    }
}

Parent.prototype.eat = function(name: string){
    alert(`eat ${name}!`);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

// 测试
const child = new Child({age: 18, sex: 'man', learn: 'language', firstName: 'zhang'});
console.log(child);
child.eat('apple');
