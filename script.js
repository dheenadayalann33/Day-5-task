//Task 1 Resume JSON

let resume = {
  name: {
    FirstName: "Dheena",
    LastName: "Dayalan",
  },
  EMail: "dheenadayalan@gmail.com",
  Phno: 987654321,
  Eduction: {
    class10: {
      school: "KCS CBSE",
      marks: 9.4,
    },
    class11: {
      school: "KCS CBSE",
      marks: 9.1,
    },
    college: {
      college: "Loyola college",
      marks: 8.04,
    },
  },
  Skills: ["HTML", "CSS", "Express.js", "Node.js"],
  Workexperience: {
    FullTime: {
      Company: "CR Garments LLP",
      experience: "1.4 y",
    },
    Inturnship: {
      Company: "Frisa Brokerage",
      experience: "4 m",
    },
  },

  Hobbies: ["Football", "FC Barcelona"],
};

let JSONResume = JSON.stringify(resume);
console.log(JSONResume);

//Task 2

//For loop
for (let i = 0; i < Object.keys(resume).length; i++) {
  let objKey = Object.keys(resume)[i];
  if (typeof(resume[objKey] ) == "object") {
    for (let i in resume[objKey]){
      console.log(resume[objKey][i]);
    }
  } else {
    console.log(resume[objKey]);
  }
}


// for in loop
for(let i in resume){
  console.log(resume[i]);
}

// for of loop
for (const [key, value] of Object.entries(resume)) {
  console.log(`${key}: ${value}`);
}


// for each loop
let array1 = [];
array1.push(resume);
array1.forEach((element) => console.log(element));