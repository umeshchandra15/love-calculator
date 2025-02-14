function calculateLove(){
   const name1 = document.getElementById("name1").value.trim();
   const name2 = document.getElementById("name2").value.trim();

   if(name1==="" || name2 ===""){
      alert('please enter your name');
   }
    const  lovePercentage = Math.floor(Math.random()*101);

    const result= document.getElementById("result");
    result.innerHTML= `${name1} and ${name2}  love Percentage is:  ${lovePercentage}%`;
   
      if( lovePercentage <30){
        result.innerHTML += '<br> not great match, kepping looking!';

      }
        else if(lovePercentage <=70){
            result.innerHTML += "<br> you both are good match";
    
        }
        else{
            result.innerHTML += "<br> great match";
        }
   
}