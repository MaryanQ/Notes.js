/*Begreber:

Array methods:
The pop() method removes the last element from an array:
The push() method adds a new element to an array (at the end):
The push() method returns the new array length:
The shift() method removes the first array element and "shifts" all other elements to a lower index.
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
The unshift() method returns the new array length:

Forms: 
In JavaScript a form is an HTML element used to collect user input. 


loops:
//for in
  /*
  for (let object in sortCoursesByDate) {
    const html =  `
    
    <li> ${sortCoursesByDate[object].name} -  ${sortCoursesByDate[object].startDate} -  ${courses[object].ectsPoints} </li>
    
    
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);
  }*/

//forEach
/*
  courses.forEach((course) => {
    const html = `
    
    <li> ${course.name} -  ${course.startDate} -  ${course.ectsPoints} </li>
    
    
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);
  });*/

//for of
/*
  for (const course of courses) {
    const html = `
    
    <li> ${course.name} -  ${course.startDate} -  ${course.ectsPoints} </li>
    
    
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);
  }*/

//for loop
/*
  for (let i = 0; i < courses.length; i++) {
    const html =  `
    
    <li> ${courses[i].name} -  ${courses[i].startDate} -  ${courses[i].ectsPoints} </li>
    
    
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);
  }
  

  //for while

  let i = 0;

  while (i < courses.length) {
    const html = `
    
    <li> ${courses[i].name} -  ${courses[i].startDate} -  ${courses[i].ectsPoints} </li>
    
    
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);

    i++;
  }
}

Module
A module is just a file. One script is one module. As simple as that.














*/
