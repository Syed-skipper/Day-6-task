1.1
class Movie {

  constructor(title,studio,rating)
  {
   this.title=title;
   this.studio=studio;
   this.rating=rating;

  }
}
var red = new Movie("master","green studio","4.5");
console.log(red);
1.2
class Movie {
  constructor(title, studio, rating = "pg") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
var red = new Movie("master", "green studio");
console.log(red);
1.3
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getPG() {
    let PG = [];
    for (let i = 0; i< movall.length; i++) {
      if (movall[i].rating === "PG") {
        PG.push([i]);
      }
    }
    return PG;
  }
}
let mov1  = new Movie("asuran", "sr studio", "PG-50");
let mov2  = new Movie("master", "vijay studio", "PG");
let mov3  = new Movie("mummy", "mahe studio", "PG-40");
let mov4  = new Movie("mummy2", "red studio", "PG-53");
let mov5  = new Movie("mummy3", "color studio", "PG");
let mov6  = new Movie("sachien", "ar studio", "PG-11");
let movall = [mov1,mov2,mov3,mov4,mov5,mov6];
console.log(mov3.getPG());

1.4
var movie = new Movie("Casino Royal", "Eon Production", "PG13");
console.log(movie);

2. question

class circle {

    constructor(radius,color)
                {
                    this.radius= radius;
                    this.color= color;
                }
       circle()
       {
        console.log(`${this.radius}, ${this.color}`);
       }
       circle(radius)
       {
        let cir = this.radius;
         return cir
       }
        circle(radius,color)
       {
        let cir1 = this.radius, this.color;
         return cir1
       }
      get Radius()
       {
        return this.radius
       }
      set Radius (radi)
      {
        this.radius = radi;
      }
      get Color()
       {
        return this.color
       }
      set Color(colo)
      {
        this.color = colo ;
      }
      toString()
      {
        console.log(`${this.radius}, ${this.color}`);
      }
      getArea()
      {
        const pi = 3.14;
        let area = (pi*this.radius*this.radius);
         return area
      }
       getCircumference()
      {
        const pi = 3.14;
        let circum = (`${2*pi*this.radius}`);
        console.log(circum);
   }
}

var c1 = new circle("4.0","red");
  
 

3.question

class person{

      constructor(Name,age,address,phonenumber,email,sex,maritalstatus,town,state,nationality,occupation)
              {

                this.Name=Name;
                this.age=age;
                this.address=address;
                this.phonenumber=phonenumber;
                this.email=email;
                this.sex=sex;
                this.maritalstatus=maritalstatus;
                this.town=town;
                this.state=state;
                this.nationality=nationality;
                this.occupation=occupation;
              }
}

var per = new person("syed","22","40/south street,natham","9876543210","syedskipper@gmail.com","Male","single","Natham","tamilnadu","indian","student");
console.log(per);

4. question

class uber {
    constructor(distance,rate){
          this.distance= distance;
          this.rate = rate;

    }
getprice() {
    let fair = The Total rate is ${this.distance * this.rate};
    return fair;
  }

}

// let foo = new uber("40", "15");
// console.log(uber.getprice());
