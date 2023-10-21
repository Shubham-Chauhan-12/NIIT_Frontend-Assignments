// define function calculateWeightedAverage here to calcuate weighted average


function calculateWeightedAverage(assignmentScore,projectScore,quizScore,midTermScore,finalExamScore){

    let assignmentWeight = 10; 
    let projectWeight = 35;
    let quizWeight = 10;
    let midTermWeight = 15;
    let finalExamWeight = 30;

    let assignmentPercentageSCore = (assignmentWeight/100) * assignmentScore;
    let projectPercentageSCore = (projectWeight/100) * projectScore;
    let quizPercentageSCore = (quizWeight/100) * quizScore;
    let midTerPercentageScore  = (midTermWeight/100) * midTermScore;
    let finalExamPercentageScore = (finalExamWeight/100) * finalExamScore;

    overallPercentage = assignmentPercentageSCore + projectPercentageSCore + quizPercentageSCore + midTerPercentageScore + finalExamPercentageScore;
    console.log('Weights      % Value of SCore'); 
    console.log('Assignments = '  + assignmentScore/assignmentWeight);
    console.log('Projects = '  +   projectScore/projectWeight);
    console.log('Quizzes = '   +   quizScore/quizWeight);
    console.log('Mid Term = '  +   midTermScore/midTermWeight);
    console.log('Final Exam = '  + finalExamScore/finalExamWeight);
    return overallPercentage;

}

//calling functions

console.log(`The weighted average score is : ${calculateWeightedAverage(97, 82, 60, 75, 80)}`);
