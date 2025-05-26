$(function(){//비동기로 실행

 $("button.typoB").click(function(){
    let sec = $("section.typo");
    sec.animate({left:'100px', width:'+=100px'}, "fast");
    sec.animate({fontSize:'3rem'}, "slow");
 })

   $("button.timeB").click(function(){
    //비동기로 실행될 박스에 대해 변수설정
    var d = $("div.time"); //변수 div는 time이라는 클래스를 가진 div
    //아래부터가 큐
d.animate({height:'300px', opacity:'0.4'}, "slow");//1
d.animate({width:'300px', opacity:'0.8'}, "slow");//2
d.animate({height:'+=100px', opacity:'0.4'}, "slow");//3
d.animate({width:'+=100px', opacity:'0.8'}, "slow");//4
d.animate({borderRadius:'50%', opacity:'.9'}, "fast");
   })






    $("button.sh").click(function(){
        $("div.sh").animate({
            height:'toggle'
        })
    })



    //문서가 실행되기전에 로드되는것을 방지
    $("button.rectt").click(function(){//버튼을 누를때 기능은
        $("div.rect").animate({
            left:'+=250px', //버튼을 클릭할때 마다 증가한다
            opacity:'+=0.5',//-=는을 사용하면 감소된다
            height:'+=150px',
            width:'+=150px',
        });
    //rect라는 클래스를 가진 div에 왼쪽으로 250px씩 이동    
    })

});