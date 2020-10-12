(function(designWidth, maxWidth) {
    var doc = document,
    win = window,
    docEl = doc.documentElement,
    remStyle = document.createElement("style"),
    tid;
	 function refreshRem() {
	        var width = docEl.getBoundingClientRect().width;
	        maxWidth = maxWidth || 540;
	        width>maxWidth && (width=maxWidth);
	        var rem = width * 100 / designWidth;
	        remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
	    }
    if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(remStyle);
    } else {
        var wrap = doc.createElement("div");
        wrap.appendChild(remStyle);
        doc.write(wrap.innerHTML);
        wrap = null;
    }
    //要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
    refreshRem();

    win.addEventListener("resize", function() {
        clearTimeout(tid); //防止执行两次
        tid = setTimeout(refreshRem, 300);
    }, false);

    win.addEventListener("pageshow", function(e) {
        if (e.persisted) { // 浏览器后退的时候重新计算
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === "complete") {
        doc.body.style.fontSize = "16px";
    } else {
        doc.addEventListener("DOMContentLoaded", function(e) {
            doc.body.style.fontSize = "16px";
        }, false);
    }
})(750,2000);
// 获取token和id
export function getUrl(){
	// var url = url_search;
	let url='?_token=5d9e70500fedf0eca4654c7ae44222ec&_userid=16990114482261';
	if(url.indexOf('?')!=-1){
		let url_obj=new Object;
		const str=url.substr(1);
		const arr=str.split('&');
		for(let i=0;i<arr.length;i++){
			let array=arr[i].split('=');
			url_obj[array[0]]=array[1];
			array=null;
		}
	  sessionStorage.setItem("userid",url_obj['_userid']);
	  sessionStorage.setItem("token", url_obj['_token']);
		return url_obj
	}else{
		return false
	}
	url=null;
}