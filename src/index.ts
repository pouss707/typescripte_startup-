function stringArraytoUpperCase(array: string[]): string[] {
    return array.map((e: string) => e.toUpperCase());
  }
  
  const TestArr: string[] = ["java", "javascript", "typescript"];
  
  const result: string[] = stringArraytoUpperCase(TestArr);
  const filtred: string[] = filterStrings(TestArr);
  
  function filterStrings(array: string[]): string[] {
    return array.filter((e: string) => e.length > 5);
  }
  
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };
  
  const products: Product[] = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 300, inStock: true },
    { name: "Monitor", price: 200, inStock: true },
  ];
  
  function filterProducts(productList: Product[]): Product[] {
    return productList.filter((p: Product) => p.inStock && p.price < 500);
  }
  
  const filtredProducts: Product[] = filterProducts(products);
  
  console.log(result, filtred, filtredProducts);
  
  const arr: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  // [6,15,24]
  
  const reducedArr: number[] = arr.map((a: number[]) =>
    a.reduce((s, i) => (s += i), 0)
  );
  
  console.log(reducedArr);

  interface User {
    type:"user";
    name:string;
    age:number;
    occupation:string;
};

interface Admin {
    type:"admin";
    name:string;
    age:number;
    role:string;
}

type Person = User|Admin; 

const users: Person[] = [
    {
        type:"user",
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        type:"admin",
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        type:"user",
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        type:"admin",
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function isAdmin(user:Person):user is Admin{
    return user.type === "admin" && "role" in user;
}

function isUser(user:Person):boolean{
    return user.type === "user" && "occupation" in user;
}



function logPerson(person: Person) {
    let additionalInformation:string = "";
    if (isUser(person)) {
        const user:User = person as User;
        additionalInformation = user.occupation;
    }
    if(isAdmin(person)){
         const admin:Admin = person as Admin;
         additionalInformation = admin.role;
    }
    console.log(` - ${person.name}, ${person.age}, ${ additionalInformation }`);
}


console.log("\n -- Users : ");
users.filter(isUser).forEach(logPerson);


console.log("\n -- Admins  : ");
users.filter(isAdmin).forEach(logPerson);