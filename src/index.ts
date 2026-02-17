import {greet, goodBye} from './bacis_type/chatper2'
import { primitive } from './bacis_type/primitive';
import { Array } from './bacis_type/array';
import { tuples } from './bacis_type/tuple';
import { enums } from './bacis_type/enums';
import { Any } from './bacis_type/any';
import { Unknown } from './bacis_type/unknow';
import { Void } from './bacis_type/void';
import { Null } from './bacis_type/null';
import { Inference } from './inference/inference';
import { Annotations } from './inference/annotations';
import { Interface } from './interfaces/interface';
import { extending_Interface } from './interfaces/extendingInterface';


console.log(greet("Chandan"));
console.log(goodBye("chandan kumar jha"))
console.log(primitive())
console.log(Array())
console.log(tuples())
console.log(enums())
console.log(Any())
console.log(Unknown())
console.log(Void())
console.log(Null())
console.log(Inference())
console.log(Annotations())
console.log(Interface({name:'chandan', email:'abcd.gmail.com',password:"1234"}))
console.log(extending_Interface({name:'chandan', city:"delhi", email:'kumar@gmail.conm', password:1234}))