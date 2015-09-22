$(document).ready(function(){
  $(document).scroll(function(){
    var top = $(document).scrollTop();
    if(top>50){
      $(".page-scroll img").attr("src","/blog/img/logo1.png");
    }else{
      $(".page-scroll img").attr("src","/blog/img/logo.png");
    }
  });
});
