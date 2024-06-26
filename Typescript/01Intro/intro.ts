 let greetings: string = "shubham";

 console.log(greetings);

 function name(a : string, b: boolean){

 }

 name("a",true);

//  to provide a default value to the function

function defaultVal(a : string, b: boolean, c: number = 23){

}

defaultVal("shubh", true);

// we can create our own type like
type User = {
    name: String;
    email: String;
    isActive : boolean
}

function createUser(user: User): User{
    return {name : "shubh", email: "s@s.com", isActive : true}
}

createUser({name :"shubh", email: "s@s.com", isActive: true})
 export {}

