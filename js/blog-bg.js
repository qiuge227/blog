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

//WEB页主线程
var worker =new Worker("{{ '/project/worker.js' | prepend: site.baseurl }}"); 
//创建一个Worker对象并向它传递将在新线程中执行的脚本的URL
 worker.postMessage("欢迎来到Beth' World");     
//向worker发送数据
 worker.onmessage =function(evt){     
//接收worker传过来的数据函数
   console.log(evt.data);              
//输出worker发送来的数据
 }

