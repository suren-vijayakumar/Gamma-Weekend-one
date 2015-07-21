$(document).ready(function(){
     $("#employeeForm").submit(function(event){
          event.preventDefault(); //keeps from refreshing
          var $inputs = $("#employeeForm :input");
          var employees = {};
          
          $inputs.each(function(){
               employees[this.name]= $(this).val();
          });
          
          
          var array = $.makeArray(employees);
          console.log(employees.lastReviewScore);
          var empColor= lastReviewColor(employees.lastReviewScore);

          console.log("empColor: ", empColor);
          $("body table").append("<div class= 'employeeCard col-sm-3'><div class= 'Rows'>First Name: " + employees.firstname+ "</div><div class= 'Rows'>Last Name: "+ employees.lastname+ "</div><div class= 'Rows'>Employee Number: " + employees.employeeNumber+ "</div><div class= 'Rows'>Title: " + employees.title+ "</div><div class= 'Rows'>Last Review Score:  <span style = 'color:" + empColor +"'>" + employees.lastReviewScore + "</span> </div><div class= 'Rows'>Salary: " + employees.salary+ "</div><input type= 'button' class= 'ejectEmployee' value ='vaporize'></div></div>")


     });


     $("table").on('click', '.ejectEmployee', function(){
          $(this).parent().remove();
          
     });

     $("#newEmployeeButton").on('click', function(event){
          var employeesRand = new RandEmployee();
          console.log("Random Employee");
          $("body table").append(
               "<div class= 'employeeCard col-sm-3'>"+
                    "<div class= 'Rows'>First Name: " + employeesRand.firstname+ "</div>"+
                    "<div class= 'Rows'>Last Name: "+ employeesRand.lastname+ "</div>"+
                    "<div class= 'Rows'>Employee Number: " + employeesRand.employeeNumber+ "</div>"+
                    "<div class= 'Rows'>Title: " + employeesRand.title+ "</div>"+
                    "<div class= 'Rows'>Last Review Score:  "+
                         "<span style = 'color:" + lastReviewColor(employeesRand.lastReviewScore) +"'>" + employeesRand.lastReviewScore + "</span> "+
                    "</div>"+
                    "<div class= 'Rows'>Salary: " + employeesRand.salary+ "</div>"+
                    "<input type= 'button' class= 'ejectEmployee' value ='vaporize'></div>"+
               "</div>");
          
     });
});




function lastReviewColor(rating) {
     rating = parseInt(rating);//type coersion
     
     var color;
     switch(rating){
          case 1:
          color = "red";
          break;
          case 2:
          color = "yellow";
          break;
          case 3:
          color = "green";
          break;
          case 4:
          color = "blue";
          break;
          default:
          color = "orange";
          break;
     }
     return color;
}

function randomNumber(min, max) {
     return Math.floor(Math.random() * (1 + max - min) + min);
}   

var someFirstName = ["James", "John", "Andrew", "Paul", "Pete", "Jack", "Nathan", "Scott", "Joel", "Eric","Beth", "Jen", "Samantha", "Steff", "Mary", "Liz", "Carol", "Michelle", "Jess", "Amy"];
          var someLastName = ["Browsn", "Smith", "Johnson", "Miller", "Anderson", "Harris", "Mcckinley", "Lincoln", "Kennedy", "Martin"];
          var someTitleandsalary = [["Manager", 100000],[ "Programmer",500000],["Engineer", 200000],["Minion",5],["Master of their Domain", 400000],
          ["Cowboy", 300000], ["Ninja",250000], ["CEO",450000], ["CTO",300000], ["Emperor",1000000]];
     var employeeArray = [];    
        function RandEmployee() {
          
          this.firstname = someFirstName[randomNumber(0,19)];
          this.lastname = someLastName[randomNumber(0,9)];
          this.employeeNumber = randomNumber(1000,20000);
          var k= randomNumber(0,9);
          this.title = someTitleandsalary[k][0];
          this.lastReviewScore = randomNumber(1,5);
          this.salary = someTitleandsalary[k][1]; 

     }; 



/*function totalRunningSalary (employeeArray) {
          var sum = 0;
          for (var i = 0; i < employeeArray.length; i++) {
               sum+ = employeeArray[i].salary;        
          }

          $("h5").remove();
          $("header").append("<h5>" + "Current Total Running Salary: $" + total + "</h5");
     }*/