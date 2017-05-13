function bbin_music($dom, $src){
    this.dom = $dom;
    this.music_src = $src;
    this.init();
    this.render();
    this.bind();
}
bbin_music.prototype.init = function(){
}
bbin_music.prototype.render = function(){
    this.dom.setAttribute('class','bbin_music play');
    this.dom.innerHTML = '<div><audio id="bbin_audio" autoplay="true"><source src="' + this.music_src + '" type="audio/mpeg"></audio></div>'
}
bbin_music.prototype.bind = function(){
    var dom = this.dom;
    var audio = document.getElementById('bbin_audio');
    this.dom.addEventListener('touchstart',touch,false);
    this.dom.addEventListener('click',click,false);
    var temp = false;//为了解决点击穿透问题
    function click(){
        if(temp === audio.paused){
            if(audio.paused){
                audio.play();
                dom.setAttribute('class','bbin_music play');
            } else {
                audio.pause();
                dom.setAttribute('class','bbin_music');
            }
            temp = audio.paused
        } else {
            temp = audio.paused
        }
    }
    function touch(){
        if(audio.paused){
            audio.play();
            dom.setAttribute('class','bbin_music play');
        } else {
            audio.pause();
            dom.setAttribute('class','bbin_music');
        }
    }
}