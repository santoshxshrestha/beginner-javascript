class R {
    constructor(width,breadth, height) {
        this.width = width;
        this.height = height;
        this.breadth = breadth;
    }

    get a(){
        return this.width * this.height * this.height;
    }

    set a({length, height}) {
        // console.log("Area cannot be set directly.");
        this.length = length
        this.height = height
    }

}

let rect = new R(2,2,2);
console.log(rect.a);


//setting the vlaue calles the set function 
rect.a = {length: 0, height: 0};
console.log(rect.a)
