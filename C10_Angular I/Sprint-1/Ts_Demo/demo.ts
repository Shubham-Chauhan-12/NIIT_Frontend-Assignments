class demo{
    name: string = "Shubham"

    constructor(name:string){
        this.name = name
    }

    getName():void{
        console.log(this.name);
        
    }
    
}
     
let obj = new demo("S");
obj.getName()

