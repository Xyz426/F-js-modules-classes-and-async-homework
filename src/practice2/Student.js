import { Person } from "./Person";
// TODO feedback: 文件里只需导出一个模块，推荐用export default
export class Student extends Person{
    constructor(name,className){
        super(name);
        this.name = name;
        this.className = className;
    }
    study = () => {
        this.move();
        console.log(`${this.name} is studying in ${this.className}`);
    }
}
