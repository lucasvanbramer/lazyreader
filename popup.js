'use strict';

let activate = document.getElementById('activate');
var currently_on = false;

let settings = document.getElementById("settings");
let settingsfull = document.getElementById("settings-full");
let done = document.getElementById("done");
let upsetting = document.getElementById("up-threshold");
let downsetting = document.getElementById("down-threshold");
let speedsetting = document.getElementById("speed");

var upthresh, downthresh, speed;

activate.onclick = function(e) {
  if(!currently_on){
  chrome.tabs.executeScript(null, { file: "injected.js" });
  currently_on = true;
  activate.innerHTML = "stop being lazy";
  }
  else{
  chrome.tabs.executeScript(null, {file: "uninject.js" });
  console.log("trying to uninject");
  currently_on = false;
  activate.innerHTML = "get lazy";
  }
};

settings.onclick = function(e) {
  try {
    chrome.storage.sync.get(["LR-speed", "LR-upthresh", "LR-downthresh"], function(v){
      speed = v["LR-speed"];
      upthresh = v["LR-upthresh"];
      downthresh = v["LR-downthresh"];
      upsetting.value = upthresh;
      downsetting.value = downthresh;
      speedsetting.value = speed;
    });
  }
  catch(err){
    console.log(err);
    upthresh = 0.03;
    downthresh = 0.15;
    speed = 8;
    upsetting.value = upthresh;
    downsetting.value = downthresh;
    speedsetting.value = speed;
  }
  activate.style.display = "none";
  settings.style.display = "none";
  settingsfull.style.display = "block";
  done.style.display = "block";
}

done.onclick = function(e) {
  upthresh = upsetting.value;
  downthresh = downsetting.value;
  speed = speedsetting.value;
  console.log(speed);
  chrome.storage.sync.set({"LR-upthresh": upthresh});
  chrome.storage.sync.set({"LR-downthresh": downthresh});
  chrome.storage.sync.set({"LR-speed": speed});
  activate.style.display = "block";
  settings.style.display = "block";
  settingsfull.style.display = "none";
}
