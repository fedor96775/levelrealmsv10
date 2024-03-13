// Скрипт для прокрутки рандомайзера с играми
$(function(){
   
  var rendertime = 0;
  $('#btn1l').on('click',function(){
    
    var right = 0;    
    render();
    var count=0;
    var speed=50;

    var timer = setInterval(function(){
       
          right+=speed;
          count++;
          $('.lootbox-wrapper').css('right',right+'px');
      
          if(count>=150 ){
              speed=30;
          }
          if(count>=200){
              speed=20;
          }
          if(count>=250){
              speed=10;
          }
          if(count>=300){
              speed=5;
          }
          if(count>=320){
              speed=4;
          }
          if(count>=340){
              speed=3;
          }
          if(count>=360){
              speed=2;
          }
          if(count>=380){
              speed=1;
          }
          if(count>=419){
              clearInterval(timer);
              rendertime++;
              var copy= $.clone($('.loot-item')[50]);
              $('.rewards').append(copy);
          }
      },20)
  })

})

 
var gold1l = '<div class="loot-item"><span class="gold1l">GOLD</span></div>';
var purple1l = '<div class="loot-item"><span class="purple1l">PURPLE</span></div>'; 
var blue1l = '<div class="loot-item"><span class="blue1l">BLUE</span></div>';
var green1l = '<div class="loot-item"><span class="green1l">GREEN</span></div>';


function render(){
  console.log('start render');
  $('.lootbox-wrapper').empty();

  for(var i=0;i<100;i++){
      var num = parseInt((Math.random()*100)+1);
    
      if(num >=1 && num <=5){ // 5%
          $('.lootbox-wrapper').append(gold1l);
      }else if(num >=6 && num <=15){ // 10%
          $('.lootbox-wrapper').append(purple1l);
      }else if(num >=16 && num <=35){ // 20%
          $('.lootbox-wrapper').append(blue1l);
      }else if(num >=36 && num <=100){ // 65%
          $('.lootbox-wrapper').append(green1l);
      }
  }
  console.log('finish');
}