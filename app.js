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
          $("body table").append("<div class= 'Row'>Last Review Score: " + employees.lastReviewScore+ "</div>");
          $("body table").append("<div class= 'Row'>Salary: " + employees.salary+ "</div>");
          $("body table").append("<input type= 'button' class= 'ejectEmployee' value ='vaporize'></div><br><br>")
        
        
     });
});
