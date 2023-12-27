//why do we use typescript? because it is a static type language. it is easy to find error in compile time. it is easy to understand the code. it is easy to maintain the code. it is easy to debug the code. it is easy to refactor the code. it is easy to write the code.
let number = 123;
// number='tamim'
let number2: number;
number2 = 123;
//Number or string;
let numberOrString: number | string;
numberOrString = 123;
numberOrString = "tamim";
//Boolean
let bool: boolean;
bool = true;
//boolean or number or string
let boolOrNumberOrString: boolean | number | string;
boolOrNumberOrString = true;
boolOrNumberOrString = 123;
boolOrNumberOrString = "tamim";
//WHy we need type? because we can not assign a number to a string variable. it is not valid in TS. but it is valid in JS.
//array
let array: string[];
array = ["tamim", "limon", "sakib"];
//array of number
let array2: number[];
array2 = [1, 2, 3, 4, 5];
//array of number or string
let array3: (number | string)[];
array3 = [1, 2, 3, 4, "tamim"];
//array of number or string
let array4: Array<number | string>;
array4 = [1, 2, 3, 4, "tamim"];
console.log(array4);
//object
let object: object;
object = {
  name: "tamim",
  age: 23,
};
//object
let object2: {
  name: string;
  age: number;
}; //this is called type alias
object2 = {
  name: "tamim",
  age: 23,
};
//object
let object3: {
  name: string;
  age: number;
}[]; //this is called type alias
object3 = [
  {
    name: "tamim",
    age: 23,
  },
  {
    name: "limon",
    age: 23,
  },
];
//object
let object4:
  | {
      name: string;
      age: number;
    }[]
  | string;
object4 = "tamim";
object4 = [
  {
    name: "tamim",
    age: 23,
  },
  {
    name: "limon",
    age: 23,
  },
];
//object
let object5:
  | {
      name: string;
      age: number;
    }[]
  | string
  | number; //union type
object5 = "tamim";
object5 = 123;
object5 = [
  {
    name: "tamim",
    age: 23,
  },
  {
    name: "limon",
    age: 23,
  },
];
//object

let object6: {
  name: string;
  age?: number;
  hobbies: string[];
  role: [number, string]; //tuple
}; //this is called type alias. age is optional. hobbies is array. role is tuple.what is tupple? it is an array with fixed length and fixed type.
object6 = {
  name: "tamim",
  age: 23,
  hobbies: ["cricket", "football"],
  role: [2, "admin"],
}; //this is valid. because age is optional
object6.role.push("admin");
object6.hobbies.push("admin");
object6 = {
  name: "tamim",
  hobbies: ["cricket", "football"],
  role: [2, "admin"],
}; //this is also valid. because age is optional
//any
let any: any;
any = "tamim";
any = 123;
any = {
  name: "tamim",
  age: 23,
};
//function
//arraow function
let returnString = (): any => {
  return 123;
};
// returnString=123;error. because returnString is a function. Is it valid in JS? yes. but in TS it is not valid.
//function
let returnString2 = (): string => {
  return "tamim";
}; //this is valid.because we have defined the return type.
//function
let fun1 = (user: { useName: string; age: number; phone?: string }) => {
  console.log(user);
};
fun1({ useName: "tamim", age: 23, phone: "123456" });
//type alias.What is type alias? it is a custom type. we can use it as a type.
type user = { useName: string; age: number; phone?: string };
let fun2 = (user: user) => {
  console.log(user.useName);
};
fun2({ useName: "tamim", age: 23, phone: "123456" });
//type alias.What is type alias? it is a custom type. we can use it as a type.
//more complex type alias. we can use union type, array, tuple, optional, any, function, object, etc. here is the example.
type user2 = {
  useName: string;
  age: number;
  phone?: string;
  hobbies: string[];
  role: [number, string];
  fun: (a: number) => number; //what does it do? it takes a number as a parameter and return a number.
  obj: {
    name: string;
    age: number;
  };
};
let fun3 = (user: user2) => {
  console.log(user);
};
fun3({
  useName: "tamim",
  age: 23,
  phone: "123456",
  hobbies: ["cricket", "football"],
  role: [2, "admin"],
  fun: (a: number) => {
    return a;
  },
  obj: {
    name: "tamim",
    age: 23,
  },
});
//Yes!! We've done great job so far!!. But we can do better. We can use interface instead of type alias. Why? because interface is more flexible than type alias. we can extend interface. we can not extend type alias. we can use interface with class. we can not use type alias with class. we can use interface with function. we can not use type alias with function. we can use interface with object. we can not use type alias with object. we can use interface with array. we can not use type alias with array. we can use interface with tuple. we can not use type alias with tuple. we can use interface with union type. we can not use type alias with union type. we can use interface with optional. we can not use type alias with optional. we can use interface with any. we can not use type alias with any. we can use interface with function. we can not use type alias with function. we can use interface with object. we can not use type alias with object.
//interface
