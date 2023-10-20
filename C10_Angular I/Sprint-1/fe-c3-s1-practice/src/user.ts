//Define User class
class User {
//Field declartions
    private username:string;
    private password:string;
    private contact:number;
    private email:string;
    private address:string;
//constuctor 
    constructor(username:string, password:string, 
        contact:number, email:string, address:string)
    {
        this.username=username;
        this.password=password;
        this.contact=contact;
        this.email=email;
        this.address=address;
    }
//getter and setter methods


}

//Fetch form values using Object.fromentries()
const submitUser = (formData: any) => {
    let form:any = document.querySelector("#reg-form")
    let data:any = new FormData(form); 
    let users = new User(data.get("username"),data.get("password"),data.get("contact"),data.get("email"),data.get("address"))
    //alert("savedata")
    registerUser(users)   
    return false;

    //call registerUser method with the constructed User object
}

//POST data using fetch() api
function registerUser(user: User) {

     //Dispay welcome message after successful registration
     fetch("http://localhost:3000/users",{
        method:"POST",
        body:JSON.stringify(user),
        headers:
        {
            "content-type": "application/json;charset=UTF-8"
        }
    }).then(response => response.json()).then(json => console.log(json))
    alert("Registration Successful")
    return false;



    //Dispay welcome message after successful registration
}