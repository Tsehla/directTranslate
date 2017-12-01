document.getElementById("mainContainer").style.display="block";
document.getElementById("dataEntryConainerMain").style.display="none";
document.getElementById("help").style.display="none"; 
document.getElementById("startPageIntro").style.display="none";



var menuButtonToggle=0;


var englishToSotho=[
  "name",
  "car",
  "house",
  
];

var sothoToEnglish=[
 "lebitso",
  "koloi",
  "ntlo"
  
  
];

// search DIPUO ENGINE
function dipuoEngine(searchedArray, searchingArray, searcher,addingArray, userInput){
  //dipuo search here
  if(searchedArray!==undefined || searchingArray!==undefined || searcher!==undefined){
    
  return searchedArray[searchingArray.indexOf(searcher)];
  }
 //dipuo add
  if(userInput!==undefined || userInput!==null){
  return addingArray.push(userInput);
  
}
}



//monitor userInputBox 


function keyPressed(){
var typedInput=document.getElementById("userInputBox").value;
  
  
  
if(dipuoEngine(englishToSotho, sothoToEnglish, typedInput,undefined, undefined)===undefined && dipuoEngine(sothoToEnglish, englishToSotho,  typedInput,undefined, undefined)===undefined ){
document.getElementById("language").innerHTML="";
document.getElementById("programOutputText").innerHTML="ERROR code:101 <br /><br />Direct translation un-available for this word or phrase, perhaps you may add new direct translate for this text by clicking here <a href=# onclick='addNewDirectTranslate()' > HERE</a>. Please read help to know how to search properly";  
  
}
  else{
    //search direct translations
    if(dipuoEngine(englishToSotho, sothoToEnglish, typedInput,undefined, undefined)!==undefined){
       document.getElementById("language").innerHTML="Search language detected:<i style='text-decoration:underline'> English</i>";
return document.getElementById("programOutputText").innerHTML=dipuoEngine(englishToSotho, sothoToEnglish, typedInput,undefined, undefined);  }
   //serach direct translations
    if(dipuoEngine(sothoToEnglish, englishToSotho,  typedInput,undefined, undefined)!==undefined){
      document.getElementById("language").innerHTML="Search language detected:<i style='text-decoration:underline'> Sesotho</i>";
return document.getElementById("programOutputText").innerHTML= dipuoEngine(sothoToEnglish, englishToSotho,  typedInput,undefined, undefined); }
  } 
  }

// data entry --------------
document.getElementById('textSubmitBoxButton').onclick=function(){
  

  
var firstTextBox=document.getElementById("firstTextBox").value;
var firstTextBoxSubject=document.getElementById("firstTextBoxSubject").value; 
var firstTextBoxVerb=document.getElementById("firstTextBoxVerb").value; 
  
var secondTextBox=document.getElementById("secondTextBox").value;  
var secondTextBoxSubject=document.getElementById("secondTextBoxSubject").value; 
var secondTextBoxVerb=document.getElementById("secondTextBoxVerb").value;


  if(firstTextBox=="English Text only here"){
   
  return document.getElementById("firstTextBox").style.borderColor = "red";  

  }
   
  
  if(firstTextBoxSubject=="above language Subject"){
    
  return document.getElementById("firstTextBoxSubject").style.borderColor = "red";  

  }
    if(firstTextBoxVerb=="above language Verb"){
    
  return document.getElementById("firstTextBoxVerb").style.borderColor = "red";  
    
  }
    if(secondTextBox=="Language to direct translate here"){
    
  return document.getElementById("secondTextBox").style.borderColor = "red";  

  }
    if(secondTextBoxSubject=="above language Subject"){
    
  return document.getElementById("secondTextBoxSubject").style.borderColor = "red";  

  }
    if(secondTextBoxVerb=="above language Verb"){
    
  return document.getElementById("secondTextBoxVerb").style.borderColor = "red";  

  }
//firts array add
dipuoEngine(undefined, undefined, undefined ,sothoToEnglish, firstTextBox);
dipuoEngine(undefined, undefined, undefined ,englishToSotho, secondTextBox);
 
 //sucess

  alert("data captured, Please verify by searching or add new direct translations. You may add multiple variants of same meaning");
  
  document.getElementById("dataEntryConainerMain").style.display="none"; 
  document.getElementById("mainContainer").style.display="block";
  document.getElementById("fixedButtonButton").innerHTML=" Menu";  
  
  
  
  menuButtonToggle=0;
  
}




//----- menu part



document.getElementById("fixedButtonButton").onclick=function(){



if(menuButtonToggle==0){
document.getElementById("dataEntryConainerMain").style.display="block"; 
document.getElementById("mainContainer").style.display="none";
document.getElementById("help").style.display="none";
document.getElementById("fixedButtonButton").innerHTML=" Cancel";

menuButtonToggle=1

}

else if(menuButtonToggle===1){
document.getElementById("dataEntryConainerMain").style.display="none"; 
document.getElementById("mainContainer").style.display="block";
document.getElementById("help").style.display="none";
document.getElementById("fixedButtonButton").innerHTML=" Menu";  
  
 menuButtonToggle=0;
  
  }
  
 

}

//help button
function helpButton(){

document.getElementById("dataEntryConainerMain").style.display="none"; 
document.getElementById("mainContainer").style.display="none";
document.getElementById("help").style.display="block";


}


//array contents show


function arrayShow(array){
       var resultStore=[ ];

for(var i=0; i<array.length; i++){
     resultStore.push(array[i]);
    
    }
    

  
      return  resultStore.toString();;


}






function email(){
  
 window.location.href = "mailto:Lindelani.Mbatha@umuzi.org?subject=SQL20%database20&body=Hi20%Lindelani20%please20%create20%an20%sql20%link20%scrip20%to20%sql20%database20%for20%translate20%app20%";
}

document.getElementById("dataBase").innerHTML=arrayShow(sothoToEnglish);

function lindelani(){
  
  document.getElementById("mainContainer").style.display="none";
document.getElementById("dataEntryConainerMain").style.display="none";
document.getElementById("help").style.display="none"; 
document.getElementById("startPageIntro").style.display="block";
  
}