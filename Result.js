// function to get reslut



const Result = function(){



    this.gpaGrade = (marks) => {

        let gpa;
        let grade;

        if( marks >= 0 && marks < 33 ){
            gpa     = 0;
            grade   = 'F';
        }else if( marks >= 33 && marks < 40 ){
            gpa     = 1;
            grade   = 'D';
        }else if( marks >= 40 && marks < 50 ){
            gpa     = 2;
            grade   = 'C';
        }else if( marks >= 50 && marks < 60 ){
            gpa     = 3;
            grade   = 'B';
        }else if( marks >= 60 && marks < 70 ){
            gpa     = 3.5;
            grade   = 'A-';
        }else if( marks >= 70 && marks < 80 ){
            gpa     = 4;
            grade   = 'A';
        }else if( marks >= 80 && marks <= 100 ){
            gpa     = 5;
            grade   = 'A+';
        }else {
            gpa     = 'Invalid';
            grade   = 'Invalid';
        }

        return {
            resultGpa    : gpa,
            resultGrade  : grade,
        }
    }


    this.finalResult = function(bn, en, math, social, rel, scince){
        
        let cgpa;
        let finalGrade;

        let totalGpa = this.gpaGrade(bn).resultGpa + this.gpaGrade(en).resultGpa + this.gpaGrade(math).resultGpa + this.gpaGrade(social).resultGpa + this.gpaGrade(rel).resultGpa + this.gpaGrade(scince).resultGpa;

        cgpa =  totalGpa / 6;

        if( bn < 33 || en < 33 || math < 33 || social < 33 || scince < 33 || rel < 33 ){
            finalGrade = 'F';
        }else if( cgpa >= 0 && cgpa < 1 ){
            finalGrade = 'F';
        }else if( cgpa >= 1 && cgpa < 2 ){
            finalGrade = 'D';
        }else if( cgpa >= 2 && cgpa < 3 ){
            finalGrade = 'C';
        }else if( cgpa >= 3 && cgpa < 3.5 ){
            finalGrade = 'B';
        }else if( cgpa >= 3.5 && cgpa < 4 ){
            finalGrade = 'A-';
        }else if( cgpa >= 4 && cgpa < 5 ){
            finalGrade = 'A';
        }else if( cgpa == 5 ){
            finalGrade = 'A+';
        }


        return {
            finalCgpa   : (finalGrade =="F") ? '\'Failed\'': cgpa.toFixed(2),
            finalResult : finalGrade,
        }
        
    }

    this.output = () => {

        StudentData.map((data, index) =>{


            console.log(`
        
                ID                 : ${ data.ID }
                Name               : ${ data.name }
                Father Name        : ${ data.fatherName }
                Mother Name        : ${ data.motherName }
                Class              : ${ data.class }
                Gender             : ${ data.gender }
                Location           : ${ data.location }
        
                Subject     Marks               GPA                 GRADE    
        
        
                Bangla      ${ data.bn }                   ${ res.gpaGrade(data.bn).resultGpa }                    ${ res.gpaGrade(data.bn).resultGrade } 
                English     ${ data.en }                   ${ res.gpaGrade(data.en).resultGpa }                    ${ res.gpaGrade(data.en).resultGrade } 
                Math        ${ data.math}                   ${ res.gpaGrade(data.math).resultGpa }                    ${ res.gpaGrade(data.math).resultGrade } 
                Social      ${ data.social }                   ${ res.gpaGrade(data.social).resultGpa }                    ${ res.gpaGrade(data.social).resultGrade } 
                Religion    ${ data.rel }                   ${ res.gpaGrade(data.rel).resultGpa }                  ${ res.gpaGrade(data.rel).resultGrade } 
                Scince      ${ data.scince }                   ${ res.gpaGrade(data.scince).resultGpa }                    ${ res.gpaGrade(data.scince).resultGrade } 
                -----------------------------------------------------------------------------------------------------------------------------------------------------------------
                Result                         ${res.finalResult(data.bn,data.en,data.math,data.social,data.rel,data.rel).finalCgpa}                 ${res.finalResult(data.bn,data.en,data.math,data.social,data.rel,data.rel).finalResult}                             
        
                showing ${ index + 1 } out of ${StudentData.length} 
        
              
            
        
        
        
        
        
        
        
        
        
            
            `)
    
        })
    }

}
