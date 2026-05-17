interface IUser {
  name: string;
  age: number;
  isAdmin: boolean;
  country?: string;
}

interface IUser2 extends IUser {
  surname: string;
  id: number;
  hobbi: string;
}

let myStatus: "loading" | "success" | "error" = "loading";

let textFormat: "uppercase" | "lowercase" | "capitalize"  = "uppercase";

function dataReceive(number:number, number2:number): number {
  return number + number2;
}

function accept (text:string, formarType: "uppercase" | "lowercase" | "capitalize") {
  if (formarType === "uppercase") {
    return text.toUpperCase()
  } else if (formarType === "lowercase") {
    return text.toLowerCase()
  } else if (formarType === "capitalize") {
    return (text[0].toUpperCase() + text.slice(1)) 
  }
  return;
}

function accept2 (text2:string, symbol:string) {
  let removeSymbol = text2.replaceAll(symbol, "")
  return removeSymbol;
}

let listUsers: IUser[] = [
  { name: "Mumin", age: 20, isAdmin:true},
  { name: "Abdurahman", age: 22, isAdmin:false},
  { name: "Nuriddin", age: 23, isAdmin:false}
];

let filteredUsers = listUsers.filter((user) => user.isAdmin === true);
let filteredUsers1 = listUsers.filter((user) => user.age > 19);





