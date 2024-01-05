let myResume=[{
    "basics": {
      "name": "SHIMA APRIN T.M",
      "email": "shima1997ibrahim@gmail.com",
      "phone": ".....",
      "degree": "B.E",
    },
      "location": {
        "address": "48/132 kalanthar masthan street",
        "postalCode": 627751,
        "city": "kadayanallur",
        "state": "Tamilnadu",
        "country": "India",
      },
      "profiles": 
        {
          "github":"https://github.com/shimamuzavvir"
        },
    "work": 
      {
        "company":"not yet work"
      },
    
    "education": 
      {
        "institution": "government College Of Engineering",
        "department": "EEE",
        "studyType": "fulltime",
        "batch start year": 2014,
        "batch end year": 2018,
        "gpa": 7,
      },
    
    "skills": 
      {
        "name": "C,C++,Java,javascript",
        "level": "beginer",
      },
    
    "languages": 
      {
        "language": "Tamil,English",
      },
    
    "interests": 
      {
        "name": "developer",
      },
  }]
  console.log(myResume);
    //for
for(var i=0; i<myResume.length; i++){
    var obj = myResume[i]
    console.log(obj.basics)
}
     //for in
for(var key in myResume){
    console.log(myResume[key].location)
}
      //for of
let text=""
for(var x of myResume){
    text += x
}
console.log(myResume[key].education)
  //for each
myResume.forEach(function(obj){
console.log(obj.languages)
})






