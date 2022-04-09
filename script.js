var horas = document.getElementById('horas');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');
var btn = document.getElementById("start");
var btn_stop = document.getElementById("stop");
var btn_pause = document.getElementById("pause");
var btn_pause_2 = document.getElementById("pause_2");
var display_first = document.getElementById("display-first");
var display_2 = document.getElementById("display_2")
var display_2_h1 = document.querySelector("#display_2 h1")
var dvl = 00;
var  tmp_288 ;
var hvl = 00;
var mvl = 00;
var svl = 00;
var tmp;
var tmp_2;


for(var i = 0; i<=24;i++){
     horas.innerHTML +="<option value ="+i+">"+i+"</option>"
}
for(var i = 0; i<=60;i++){
     minutos.innerHTML +="<option value ="+i+">"+i+"</option>"
}
for(var i = 0; i<=60;i++){
     segundos.innerHTML +="<option value ="+i+">"+i+"</option>"
}
function BtnStop(){
     btn_pause.classList.remove("inactive")
     btn_pause_2.classList.add("inactive")
     clearInterval(tmp);
     clearInterval(tmp_2)
     btn.classList.remove("inactive");
     console.log(tmp)
     btn_stop.classList.add("inactive");
     display_2.classList.remove("inactive");
     //display_2.classList.add("display_2_inactive_2");
     display_first.classList.remove("inactive");
     display_2.classList.add("inactive");
     hvl = horas.value;
     mvl = minutos.value;
     svl =segundos.value;
     tmp_2 = setInterval(()=>{
          clearInterval(tmp)
          svl--;
          if(svl == -2){
               if(mvl > 0){
                    mvl--;
                    svl=59;
               }
          }
          
          if(mvl == 0){
               if(hvl > 0){
                    hvl--;
                    mvl =59;
               }
          }
          display_2_h1.innerHTML = `${hvl}:${mvl}:${svl}`;
          if(svl==0){
               display_2_h1.innerHTML = `${hvl}:${mvl}:0${svl}`;
          }
          
          if(hvl ==0){
               display_2_h1.innerHTML = `0${hvl}:${mvl}:${svl}`;
          }
          
          if(mvl ==0){
               mvl.innerHTML = `0${mvl}`
          }

          if(hvl < 10){
               display_2_h1.innerHTML = `0${hvl}:${mvl}:${svl}`
          }

          if(mvl < 10 && hvl <10 ){
               display_2_h1.innerHTML = `0${hvl}:0${mvl}:${svl}`
          }

          if(mvl > 10 && hvl > 10  && svl < 10){
               display_2_h1.innerHTML = `${hvl}:${mvl}:0${svl}`
          }

          if(mvl < 10 && hvl < 10  && svl < 10){
               display_2_h1.innerHTML = `${hvl}:${mvl}:0${svl}`
          }

          if(mvl > 10 && hvl > 10  && svl == -1){
               display_2_h1.innerHTML = `${hvl}:${mvl}:00`
          }


          if(mvl < 10 && hvl < 10  && svl == -1){
               display_2_h1.innerHTML = `${hvl}:${mvl}:00`
          }
          

          if(mvl < 10 && hvl > 10){
               display_2_h1.innerHTML = `${hvl}:0${mvl}:${svl}`
          }
          if(mvl <10 && hvl < 10 && svl  <10){
               display_2_h1.innerHTML = `0${hvl}:0${mvl}:0${svl}`
          }

          if(hvl==0&&mvl == 0&& svl == 0){
               display_2_h1.innerHTML = `00:00:00`
               clearInterval(tmp_2)
          }
          btn_pause.addEventListener('click',function(){
               btn_pause.classList.add("inactive")
               btn_pause_2.classList.remove("inactive")
               hvl = hvl;
               mvl = mvl;
               svl = svl;
               clearInterval(tmp)
               clearInterval(tmp_2)
               console.log("Horas:"+hvl+" ,Minutos:"+mvl+" ,Segundos:"+svl)
          })
          btn_pause_2.addEventListener("click",function(){
               btn_pause.classList.remove("inactive")
               btn_pause_2.classList.add("inactive")
               tmp_2 = setInterval(() => {
                    clearInterval(tmp);
                    clearInterval(tmp_2)
          
                    var slvgg = svl--;
                    if(svl == -2){
                         if(mvl > 0){
                              mvl--;
                              svl=59;
                         }
                    }
                    
                    if(mvl == 0){
                         if(hvl > 0){
                              hvl--;
                              mvl =59;
                         }
                    }
                    if(svl <= -1 && mvl==0 && hvl==0){
                         clearInterval(tmp)
                    } 
                    display_2_h1.innerHTML = `${hvl}:${mvl}:${svl}`;
                    if(svl==0){
                         display_2_h1.innerHTML = `${hvl}:${mvl}:0${svl}`;
                    }
                    
                    if(hvl ==0){
                         display_2_h1.innerHTML = `0${hvl}:${mvl}:${svl}`;
                    }
                    
                    if(mvl ==0){
                         mvl.innerHTML = `0${mvl}`
                    }
               
                    if(hvl < 10){
                         display_2_h1.innerHTML = `0${hvl}:${mvl}:${svl}`
                    }
               
                    if(mvl < 10 && hvl <10 ){
                         display_2_h1.innerHTML = `0${hvl}:0${mvl}:${svl}`
                    }
               
                    if(mvl > 10 && hvl > 10  && svl < 10){
                         display_2_h1.innerHTML = `${hvl}:${mvl}:0${svl}`
                    }
               
                    if(mvl < 10 && hvl < 10  && svl < 10){
                         display_2_h1.innerHTML = `${hvl}:${mvl}:0${svl}`
                    }
               
                    if(mvl > 10 && hvl > 10  && svl == -1){
                         display_2_h1.innerHTML = `${hvl}:${mvl}:00`
                    }
               
               
                    if(mvl < 10 && hvl < 10  && svl == -1){
                         display_2_h1.innerHTML = `${hvl}:${mvl}:00`
                    }
               
               
                    if(mvl < 10 && hvl > 10){
                         display_2_h1.innerHTML = `${hvl}:0${mvl}:${svl}`
                    }
                    if(mvl <10 && hvl < 10 && svl  <10){
                         display_2_h1.innerHTML = `0${hvl}:0${mvl}:0${svl}`
                    }
               
                    if(hvl==0&&mvl == 0&& svl == 0){
                         display_2_h1.innerHTML = `00:00:00`
                         clearInterval(tmp)
                    }
                    btn_pause.addEventListener('click',function(){
                         btn_pause.classList.add("inactive")
                         btn_pause_2.classList.remove("inactive")
                         hvl = hvl;
                         mvl = mvl;
                         svl = svl;
                    
                         clearInterval(tmp_2)
                         console.log("Horas:"+hvl+" ,Minutos:"+mvl+" ,Segundos:"+svl)
                         clearInterval(tmp_288)
                    })
               },1000);
          })
          
     }
          
     ,1000);
     
}
function BtnStart(){
     hvl = horas.value;
     mvl = minutos.value;
     svl =segundos.value;
     display_first.classList.add("inactive");
     display_2.classList.remove("inactive");
     btn.classList.add("inactive")
     btn_stop.classList.remove("inactive")
     tmp = setInterval(() => {
          
          var slvgg = svl--;
          if(svl == -2){
               if(mvl > 0){
                    mvl--;
                    svl=59;
               }
          }
          
          if(mvl == 0){
               if(hvl > 0){
                    hvl--;
                    mvl =59;
               }
          }
          if(svl <= -1 && mvl==0 && hvl==0){
               clearInterval(tmp)
          } 
          display_2_h1.innerHTML = `${hvl}:${mvl}:${svl}`;
          if(svl==0){
               display_2_h1.innerHTML = `${hvl}:${mvl}:0${svl}`;
          }
          
          if(hvl ==0){
               display_2_h1.innerHTML = `0${hvl}:${mvl}:${svl}`;
          }
          
          if(mvl ==0){
               mvl.innerHTML = `0${mvl}`
          }

          if(hvl < 10){
               display_2_h1.innerHTML = `0${hvl}:${mvl}:${svl}`
          }

          if(mvl < 10 && hvl <10 ){
               display_2_h1.innerHTML = `0${hvl}:0${mvl}:${svl}`
          }

          if(mvl > 10 && hvl > 10  && svl < 10){
               display_2_h1.innerHTML = `${hvl}:${mvl}:0${svl}`
          }

          if(mvl < 10 && hvl < 10  && svl < 10){
               display_2_h1.innerHTML = `${hvl}:${mvl}:0${svl}`
          }

          if(mvl > 10 && hvl > 10  && svl == -1){
               display_2_h1.innerHTML = `${hvl}:${mvl}:00`
          }


          if(mvl < 10 && hvl < 10  && svl == -1){
               display_2_h1.innerHTML = `${hvl}:${mvl}:00`
          }


          if(mvl < 10 && hvl > 10){
               display_2_h1.innerHTML = `${hvl}:0${mvl}:${svl}`
          }
          if(mvl <10 && hvl < 10 && svl  <10){
               display_2_h1.innerHTML = `0${hvl}:0${mvl}:0${svl}`
          }

          if(hvl==0&&mvl == 0&& svl == 0){
               display_2_h1.innerHTML = `00:00:00`
               clearInterval(tmp)
          }
          btn_pause.addEventListener('click',function(){
               btn_pause.classList.add("inactive")
               btn_pause_2.classList.remove("inactive")
               hvl = hvl;
               mvl = mvl;
               svl = svl;
          
               clearInterval(tmp)
               console.log("Horas:"+hvl+" ,Minutos:"+mvl+" ,Segundos:"+svl)
               clearInterval(tmp_288)
          })
          
          
}, 1000);

}


     btn_pause_2.addEventListener("click",function(){
          clearInterval(tmp);
          clearInterval(tmp_2);
          console.log("Horas:"+hvl+" ,Minutos:"+mvl+" ,Segundos:"+svl)
          btn_pause.classList.remove("inactive")
          btn_pause_2.classList.add("inactive")
          tmp_288 = setInterval(() => {
               clearInterval(tmp);
               clearInterval(tmp_2)
     
               var slvgg = svl--;
               if(svl == -2){
                    if(mvl > 0){
                         mvl--;
                         svl=59;
                    }
               }
               
               if(mvl == 0){
                    if(hvl > 0){
                         hvl--;
                         mvl =59;
                    }
               }
               if(svl <= -1 && mvl==0 && hvl==0){
                    clearInterval(tmp)
               } 
               display_2_h1.innerHTML = `${hvl}:${mvl}:${svl}`;
               if(svl==0){
                    display_2_h1.innerHTML = `${hvl}:${mvl}:0${svl}`;
               }
               
               if(hvl ==0){
                    display_2_h1.innerHTML = `0${hvl}:${mvl}:${svl}`;
               }
               
               if(mvl ==0){
                    mvl.innerHTML = `0${mvl}`
               }
          
               if(hvl < 10){
                    display_2_h1.innerHTML = `0${hvl}:${mvl}:${svl}`
               }
          
               if(mvl < 10 && hvl <10 ){
                    display_2_h1.innerHTML = `0${hvl}:0${mvl}:${svl}`
               }
          
               if(mvl > 10 && hvl > 10  && svl < 10){
                    display_2_h1.innerHTML = `${hvl}:${mvl}:0${svl}`
               }
          
               if(mvl < 10 && hvl < 10  && svl < 10){
                    display_2_h1.innerHTML = `${hvl}:${mvl}:0${svl}`
               }
          
               if(mvl > 10 && hvl > 10  && svl == -1){
                    display_2_h1.innerHTML = `${hvl}:${mvl}:00`
               }
          
          
               if(mvl < 10 && hvl < 10  && svl == -1){
                    display_2_h1.innerHTML = `${hvl}:${mvl}:00`
               }
          
          
               if(mvl < 10 && hvl > 10){
                    display_2_h1.innerHTML = `${hvl}:0${mvl}:${svl}`
               }
               if(mvl <10 && hvl < 10 && svl  <10){
                    display_2_h1.innerHTML = `0${hvl}:0${mvl}:0${svl}`
               }
          
               if(hvl==0&&mvl == 0&& svl == 0){
                    display_2_h1.innerHTML = `00:00:00`
                    clearInterval(tmp)
               }
          },1000);
     })



btn.addEventListener('click',BtnStart)

btn_stop.addEventListener('click',BtnStop)

