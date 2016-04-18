$(function(){      
 //banner轮播图
  var links=$("a",$(".banner-tu")[0]);
  //console.log(links);
  var lis=$("li",$(".btn")[0]);
  //console.log(lis);
  var index=0;
  var t=setInterval(wheel,2000);
  function wheel(){
   index++;
   //console.log(index)
   if(index==links.length){
      index=0;
   }
   for (var i = 0; i < links.length; i++) {
    	animate(links[i],{opacity:0});
    	lis[i].className="";
   };
        animate(links[index],{opacity:1});
        lis[index].className="btn1";
  };

  var bannerBox=$(".ban-right-a")[0];
  //console.log(bannerBox);
  bannerBox.onmouseover=function(){
     clearInterval(t);
     leftBtn.style.display="block";
     rightBtn.style.display="block"

  };
  bannerBox.onmouseout=function(){
     t=setInterval(wheel,2000);
     leftBtn.style.display="none";
     rightBtn.style.display="none"
  };
  var rightBtn=$(".rightbtn")[0];
  //console.log(rightBtn);
  rightBtn.onclick=function(){
     wheel();
  };
  var leftBtn=$(".leftbtn")[0];
  leftBtn.onclick=function(){
  	index--;
   //console.log(index)
   if(index==-1){
      index=links.length-1;
   }
   for (var i = 0; i < links.length; i++) {
    	animate(links[i],{opacity:0});
    	lis[i].className="";
   };
        animate(links[index],{opacity:1});
        lis[index].className="btn1";
  };
  for (var i = 0; i < lis.length; i++) {
  	lis[i].index=i;
  	lis[i].onclick=function(){
      //alert(this.index)
      for (var j = 0; j < links.length; j++) {
      	animate(links[j],{opacity:0});
      	lis[j].className="";
      };
        animate(links[this.index],{opacity:1});
        this.className="btn1";
        index=this.index;
  	}
  };


//选项卡
var floor1LisBox=$(".floor1-top-r");
//var floor1Lis=$("li",floor1LisBox);
//console.log(floor1Lis);
var floor1ImgsBox=$(".floor1-xuan");
var floor1Lis,floor1Imgs,a,span;
  for (var i = 0; i < floor1LisBox.length; i++) {
       floor1Lis=$("li",floor1LisBox[i]);
        //console.log(floor1Lis.length);
      floor1Imgs=$(".floor3-r",floor1ImgsBox[i]);
      // console.log(floor1Imgs.length);
      floor1Imgs[0].style.zIndex=2;
      span=$("span",floor1LisBox[i]);
      //console.log(span)
      a=$("a",floor1LisBox[i]);
      floor1Lis[0].style.cssText="border-left:solid 1px #c81623;border-right: solid 1px #c81623;border-top:solid 3px #c81623;border-bottom: 2px solid #fff;height:33px;line-height:30px;"
       a[0].style.cssText="color:#c81623";
       span[0].style.display="none"
      selector(floor1Lis,floor1Imgs,a,span);  
  }; //console.log($("li",floor1LisBox[0]).length)
   //console.log($(".floor3-r",floor1ImgsBox[0]).length)

  function selector(lists,imgs,a,span){

      for (var i = 0; i < imgs.length; i++) {
      lists[i].aa=i;
     lists[i].onmouseover=function(){
  //console.log(this.aa);
  for (var j = 0; j < lists.length; j++) {
    imgs[j].style.display="none";
    lists[j].style.cssText="";
    a[j].style.color="#666";
    span[j].style.display="block";
    

  };
      imgs[this.aa].style.display="block";
      this.style.cssText="border-left:solid 1px #c81623;border-right: solid 1px #c81623;border-top:solid 3px #c81623;border-bottom: 2px solid #fff;height:33px;color:#c81623;line-height:30px;";
      a[this.aa].style.cssText="color:#c81623";
      span[this.aa].style.display="none";
      span[this.aa-1].style.display="none";


    
  }
};
  }


  // //1楼轮播图
  var f1Box=$(".f1-w-box");
  //console.log(f1Box);
  var f1boxBox=$(".fl-box");
  //var as=$("a",$(".f1-w-box")[0]);
  //console.log(as);
  //var aw=parseInt(getStyle(as[0],"width"));
  //console.log(aw);
  var btnsBox=$(".fl-btn")
  //var btns=$("li",$(".fl-btn")[0])
  //console.log(f1boxBox)
  var LrtBtn=$(".floor1-btn")
var as,btns,f1LeftBtn,f1RightBtn,aw,f1Box;
for (var i = 0; i < f1Box.length; i++) {
    //console.log(f1boxBox[i])
    //console.log(f1Box.length)
    as=$("a",f1Box[i]);
    //console.log(as);
    btns=$("li",btnsBox[i]);
    //console.log(btns);
    f1LeftBtn=$(".floor1-btn-left",LrtBtn[i]);
    //console.log(f1LeftBtn);
    f1RightBtn=$(".floor1-btn-right",LrtBtn[i]);
    //console.log(f1RightBtn[i]);
    aw=parseInt(getStyle(as[0],"width"));
    //console.log(aw)
    wheel1(as,btns,f1LeftBtn[0],f1RightBtn[0],aw,f1Box[i],f1boxBox[i]);
}; 

//图片，按钮，左按钮，右按钮，第一组筐子的宽度，对象（长盒子），大框子（添加鼠标移上停止动画）
function wheel1(as,btns,f1LeftBtn,f1RightBtn,aw,f1Box,f1boxBox){
   
    var t1=setInterval(move,3000)
    var index1=0;
    var flag=true;
     function move(){
      if(!flag){
       return
      }
      flag=false;
     animate(f1Box,{marginLeft:-aw},function(){
     index1++;
     f1Box.appendChild(getFirst(f1Box));
      f1Box.style.marginLeft=0+"px";
       if(index1==btns.length){
        index1=0;
        
      }
      //console.log(index1)
      for (var i = 0; i < btns.length; i++) {
        btns[i].className="";

      };
         btns[index1].className="fl-btn-1";
         flag=true;
     })
  }
  //鼠标移上 停止动画，显示按钮
  f1boxBox.onmouseover=function(){
   clearInterval(t1);
   f1LeftBtn.style.display="block";
   f1RightBtn.style.display="block";
   f1LeftBtn.style.zIndex=15;
  }
  //鼠标 离开 继续动画，隐藏按钮
  f1boxBox.onmouseout=function(){
   t1=setInterval(move,2000);
    f1LeftBtn.style.display="none";

   f1RightBtn.style.display="none";
   }
   //右按钮
   f1RightBtn.onclick=function(){
      move();
    }
   
  //给每个小按钮添加鼠标移上事件 
    for (var i = 0; i < btns.length; i++) {
      btns[i].index1=i;
      btns[i].onmouseover=function(){
      //console.log(this.index1)
         for (var j = 0; j < btns.length; j++) {   
           btns[j].className="";
         }; 
            this.className="fl-btn-1";
            animate(f1Box,{marginLeft:-this.index1*aw})
      }

    };
   // 左按钮
    f1LeftBtn.onclick=function(){
        f1Box.insertBefore(getLast(f1Box),getFirst(f1Box));
        f1Box.style.marginLeft=-aw+"px";
        animate(f1Box,{marginLeft:0},function(){
        index1--;
        
        
        if(index1==-1){
         index1=btns.length-1;
          }
        for (var i = 0; i < btns.length; i++) {
        btns[i].className="";

         };
         btns[index1].className="fl-btn-1";
        })
    }

}

//今日推荐
var xhBox=$(".xh-box")[0];
//console.log(xhBox);
var top3box1=$(".top3box1",xhBox);
//console.log(xhs);
var xhsW=parseInt(getStyle(top3box1[0],"width"));
//console.log(xhsW)
var top3Box=$(".top3box")[0];
//console.log(top3Box);
var index2=0;


var top3LeftBtn=$(".top3-leftbtn",$(".top3-btn")[0])[0];
//console.log(top3LeftBtn);
var top3RightBtn=$(".top3-rightbtn",$(".top3-btn")[0])[0];
//console.log(top3RightBtn)
//鼠标移上按钮出现
top3Box.onmouseover=function(){

   top3LeftBtn.style.display="block";
   top3RightBtn.style.display="block";

;}
//鼠标离开按钮消失
top3Box.onmouseout=function(){
  top3RightBtn.style.display="none";
  top3LeftBtn.style.display="none"
}
  var flag1=true;
function wheel3(){

  if(!flag1){
   return;
  }
    flag1=false;
  animate(xhBox,{marginLeft:-xhsW},function(){
     index2++;
     xhBox.appendChild(getFirst(xhBox));
     xhBox.style.marginLeft=0+"px";
       if(index2>=top3box1.length){
       index2=0;
      }
       flag1=true;
  })
}

top3RightBtn.onclick=function(){
   wheel3();
}
top3LeftBtn.onclick=function(){
  xhBox.insertBefore(getLast(xhBox),getFirst(xhBox));
  xhBox.style.marginLeft=-xhsW+"px";
  animate(xhBox,{marginLeft:0},function(){
     index2--;
     if(index2==-1){
      index2=top3box1.length-1;
    }

  })
}

//固定定位

var fxspBox=getClass("fx-spBox")[0];
//console.log(fxspBox)
//var b1=getClass("cardown",fxspBox);
//console.log(cardown)
var t1=getClass("fx-sp",over);
//console.log(fxSp)
var over=getClass("over");
//console.log(over)

for (var i = 0; i < over.length;i++) {
  var cardown=getClass("cardown",over[i])[0];
//console.log(cardown)
  //console.log(t1[i])
  //console.log(b1[i])
    mRight(over[i],cardown,t1[i])

};
function mRight(over,cardown,t1){
     over.onmouseover=function(){
       cardown.style.background="#c81623";
       t1.style.background="#c81623";


   animate(cardown,{right:32},Tween.Quad.easeIn);
  
    }
 over.onmouseout=function(){
   cardown.style.background="#7a6e6e"
  animate(cardown,{right:-62},300);
   t1.style.background="#7a6e6e";
 
   
 }

}

//  京东品质生活 动图
var faxianTu=getClass("faxian-tu");
//console.log(faxianTu)
//var imgs=faxianTu.getElementsByTagName('img');
//console.log(imgs)
for (var i = 0; i < faxianTu.length; i++) { 
  moveLeft(faxianTu[i].getElementsByTagName("img")[0])
};

function moveLeft(imgs){
  imgs.onmouseover=function(){
   animate(imgs,{marginLeft:-8})
 }

imgs.onmouseout=function(){
   animate(imgs,{marginLeft:0})
}

}
//天天低价动图
var faxianTu1=getClass("faxian-tu1");
for (var i = 0; i < faxianTu1.length; i++) { 
  moveLeft1(faxianTu1[i].getElementsByTagName("img")[0])
};

function moveLeft1(imgs){
  imgs.onmouseover=function(){
   animate(imgs,{marginLeft:-10})
 }

imgs.onmouseout=function(){
   animate(imgs,{marginLeft:0})
}

}
//晒单
var sdBox=getClass("sd-box")[0];
//console.log(sdBox);
 var li=$("li",sdBox);
//console.log(li)
var sdLi=$("li",sdBox);
//console.log(sdLi)
var sdLih=parseInt(getStyle(sdLi[0],"height"));
//console.log(sdLih);
var bb=0;
sdBox.style.height=li.length*sdLih+"px";
setInterval(function(){
sdBox.insertBefore(getLast(sdBox),getFirst(sdBox));
sdBox.style.marginTop=-sdLih+"px";
  animate(sdBox,{marginTop:0},function(){
     bb++;
  if(bb>li.length-1){
     bb=0;
  } 
  
  })
},3000)
//楼层  开始
var floor=$(".floor")[0];
//console.log(floor);
var floor1Lis=$("li",floor);
var floor1=$(".floor1",floor);
//console.log(floor1);
var floor1Zi=$(".floor1-zi",floor);
//console.log(floor1Zi);
var floorTu=$(".floor-tu",floor);
console.log(floorTu);

//给 楼层 每楼添加鼠标事件
/*for (var i = 0; i < floor1Lis.length;i++) {
  floor1Lis[i].index1=i;
 // 添加鼠标移上 楼层变为楼层信息事件

  floor1Lis[i].onmouseover=function(){
     //console.log(this.index1);
      floor1[this.index1].style.display="none"; 
      floor1Zi[this.index1].style.display="block";    
  } ;
  // 添加鼠标离开 楼层信息又变回楼层事件
  floor1Lis[i].onmouseout=function(){

      floor1Zi[this.index1].style.display="none";  
      floor1[this.index1].style.display="block"; 
  } 
}*/
  //返回顶部
  var back=$(".back")[0];
  //console.log(back);
  var top=[];
  var floors=$(".floor1-top");
  //console.log(floors)
  for (var i = 0; i < floors.length; i++) {
     top.push(floors[i].offsetTop);
  };
  console.log(top)
  back.onclick=function(){
    var st=document.body.scrollTop?document.body:document.documentElement;
     animate(st,{scrollTop:0});
  }
 //给每个楼层  添加点击跳转到对应楼层  
 window.onscroll=function(){
  var st1=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
   //console.log(st1);
   for (var i = 0; i < top.length; i++) {
      if(st1+450>top[i]){
          for(var j=0;j<floor1Lis.length;j++){
             floor1Zi[j].style.display="none";
             floor1[j].style.display="block";
              
          };
             floor1[i].style.display="none";
             floor1Zi[i].style.display="block";
             
      };
      if(st1<1280||st1>9050){
        floor.style.display="none";

      }else if(st1>1280){
         floor.style.display="block";
      }
   };

   for (var i = 0; i < floor1Lis.length; i++) {
   floor1Lis[i].index3=i;
   floor1Lis[i].onclick=function(){
     var st3=document.body.scrollTop?document.body:document.documentElement;
     //scrollTop=top[this.index3]
      animate(st3,{scrollTop:top[this.index3]})
    }
   };
 }
//顶部  下拉框
var listDown=$(".list-down");
for (var i = 0; i < listDown.length; i++) {
  hover(listDown[i],function(){
    lists=$(".lists",this)[0];
    lists.style.display="block";
  },function(){
    lists.style.display="none";
  })
};

//关闭广告图
var datuClose=$(".datu-close")[0];
var datuClose2=$(".datu-close2")[0];
var datuOut=$(".datu-out")[0];
datuClose2.onclick=function(){
  datuOut.style.display="none"
};

//懒加载
var windowH=document.documentElement.clientHeight;
var anxu=$(".anxu");
//console.log(anxu.length)
var tops=[];
for (var i = 0; i < anxu.length; i++) {
  tops.push(anxu[i].offsetTop);
};
// console.log(tops)

window.onscroll=function(){
    scrolls=document.body.scrollTop||document.documentElement.scrollTop;
   // console.log(scrolls)
   for (var i = 0; i < tops.length; i++) {
       if(tops[i]<=scrolls+windowH){
        tupian=$("img",anxu[i]);
        //console.log(tupian)
        for (var j = 0; j < tupian.length; j++) {
          tupian[j].src=tupian[j].getAttribute("asrc");
        };
       };
   };
};
window.onscroll();


  


 })