

const Dev = function(name, age, mainLanguage, developerType) {
this.name = name;
this.age = age;
this.mainLanguage = mainLanguage
this.developerType = developerType;

}

this.salutation = function(){

console.log(`hi! i am dev ${this.developerType}, i work with ${this.mainLanguage} and my name is ${this.name}.\n\n`);

}

}



const FrontEndDev = function(name, age, mainLanguage,developerType, frameWork) {

constructor(){
super();
this.name = name;
this.age = age;
this.mainLanguage = mainLanguage;
this.developerType= developerType;


}
this.frameWork = frameWork;

}

const BackEndDev1 = function(name, age, mainLanguage,developerType, database){

constructor(){
super();
this.name = name;
this.age = age;
this.mainLanguage = mainLanguage;
this.developerType = developerType;


}
this.database = database;

}

const BackEndDev2 = function(name, age, mainLanguage,developerType,database) {

 this.developerType = developerTyp




  }
  this.database = database;







const frontEnd1 = new FrontEndDev("Javier", 24,"JavaScript","fronEnd", "React");

const backEnd1 = new BackEndDev("Renoir", 55, "JavaScript","backEnd", "SQL server");

const backEnd2 = new BackEndDev2("Sofhie",25,"JavaScript","backEnd","SQL Oracle");

console.log(frontEnd1);

frontEnd1.salutation();



console.log(backEnd1);
backEnd1.salutation();

console.log(backEnd2);
backEnd2.salutation();

console.log("test");