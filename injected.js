var v = document.createElement('video');
v.id = "_webcam";
v.setAttribute('webkit-playsinline', 'webkit-playsinline');
v.style.display = "none";
document.body.appendChild(v);

var c = document.createElement('canvas');
c.id = "_imageData";
c.style.display = "none";
document.body.appendChild(c);

var u = document.createElement('p');
var s = document.createElement('p');
var d = document.createElement('p');
u.style.display = "none";
s.style.display = "none";
d.style.display = "none";
u.innerHTML = 0.03;
s.innerHTML = 8;
d.innerHTML = 0.15;
u.id = "_lr_upthresh";
s.id = "_lr_speed";
d.id = "_lr_dthresh";
document.body.appendChild(u);
document.body.appendChild(s);
document.body.appendChild(d);

try {
  chrome.storage.sync.get(["LR-speed", "LR-upthresh", "LR-downthresh"], function(v){
    speed = v["LR-speed"];
    if(speed){
      upthresh = v["LR-upthresh"];
      downthresh = v["LR-downthresh"];
      u.innerHTML = upthresh;
      d.innerHTML = downthresh;
      s.innerHTML = speed;
    }
    var sc2  = document.createElement('script');
    sc2.src  = chrome.extension.getURL('webcam_injector.js');
    document.head.appendChild(sc2);
  });
}
catch(err){
  console.log(err);
  var sc2  = document.createElement('script');
  sc2.src  = chrome.extension.getURL('webcam_injector.js');
  document.head.appendChild(sc2);
}
