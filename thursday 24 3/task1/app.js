
function Person(fname, lname, age, dateofbirth, favioratefood, favioratemovie){
    this.firstname = fname;
    this.lastname = lname;
    this.age = age;
    this.dateofbirth= dateofbirth;
    this.favioratefood=favioratefood;
    this.favioratemovie=favioratemovie;

}

myName = new Person("dyar", "hunaity", 18, "2003", "mansef", "the dark knight rises");
document.write(myName.firstname + " is " + myName.age + " born in " + myName.dateofbirth + " his faviorate food is " + myName.favioratefood + " his faviorate movie is " + myName.favioratemovie)