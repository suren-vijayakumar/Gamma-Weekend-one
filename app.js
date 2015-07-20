$(document).ready(function(){
     $("#employeeForm").submit(function(event){
          event.preventDefault(); //keeps from refreshing
          var $inputs = $("#employeeForm :input");
          var employees = {};
          
          $inputs.each(function(){
               employees[this.name]= $(this).val();
               });


          $("body table").append("<div class= 'Row'>First Name: " + employees.firstname+ "</div>");
          $("body table").append("<div class= 'Row'>Last Name: " + employees.lastname+ "</div>");
          $("body table").append("<div class= 'Row'>Employee Number: " + employees.employeeNumber+ "</div>");
          $("body table").append("<div class= 'Row'>Title: " + employees.title+ "</div>");
          $("body table").append("<div class= 'Row'>Last Review Score:  <span style = 'color:" + lastReviewColor(employees.lastReviewScore) +"'>" + employees.lastReviewScore + "</span> </div>");
          $("body table").append("<div class= 'Row'>Salary: " + employees.salary+ "</div>");
          $("body table").append("<input type= 'button' class= 'ejectEmployee' value ='vaporize'></div><br><br>")
        
        
     });
});


     $("body table").on('click', '.ejectEmployee', function(){
          (this).closest("div").remove();
          $(this).closest;
     })

function lastReviewColor (rating) {
          var color ="";
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



     var employeeArray = [];                                          
    $("#randomEmployee").on('click', function(event){

     var someFirstName = ["James", "John", "Andrew", "Paul", "Pete", "Jack", "Nathan", "Scott", "Joel", "Eric","Beth", "Jen", "Samantha", "Steff", "Mary", "Liz", "Carol", "Michelle", "Jess", "Amy"];
    var someLastName = ["Brown", "Smith", "Johnson", "Miller", "Anderson", "Harris", "Mcckinley", "Lincoln", "Kennedy", "Martin"];
     var someTitleandsalary = [["Manager", 100000],[ "Programmer",500000],["Engineer", 200000],["Minion",5],["Master of their Domain", 400000],
          ["Cowboy", 300000], ["Ninja",250000], ["CEO",450000], ["CTO",300000], ["Emperor",1000000]];
     
     function randomNumber(min, max) {
          return Math.floor(Math.random() * (1 + max - min) + min);
     }    

     function Employee () {
          this.firstname = someFirstName[randomNumber(0,19)];
          this.lastname = someLastName[randomNumber(0,9)];
          this.employeeid = randomNumber(1000,20000);
          var k= randomNumber(0,9);
          this.title = someTitleandsalary[k][0];
          this.rating = randomNumber(1,5);
          this.salary = someTitleandsalary[k][1]; 
     }
});

/*function totalRunningSalary (employeeArray) {
          var sum = 0;
          for (var i = 0; i < employeeArray.length; i++) {
               sum+ = employeeArray[i].salary;        
          }

          $("h5").remove();
          $("header").append("<h5>" + "Current Total Running Salary: $" + total + "</h5");
     }*/