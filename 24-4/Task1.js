function finddesignation(experience){
   if(experience >= 0 && experience <=2){
    console.log("Jr engineer");
   }
   else if(experience > 2 && experience <= 5){
    console.log("SR eng");
   }
   else if(experience > 5 && experience <= 7){
    console.log("Team lead");
   }
   else if(experience > 7 && experience <= 10){
    console.log("Project manager");
   }
   else{
    console.log("SW architect");
   }
}

finddesignation(1.8);