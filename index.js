for(var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var button=this.innerHTML;
        switch(button){
            case "A":   var sa=new Audio("./audio/key09.mp3");
                        sa.play();
            case "B":   var re=new Audio("./audio/key10.mp3");
                        re.play();
            case "C":   var ga=new Audio("./audio/key11.mp3");
                        ga.play();
            case "D":   var ma=new Audio("./audio/key12.mp3");
                        ma.play();
            case "E":   var pa=new Audio("./audio/key13.mp3");
                        pa.play();
            case "F":   var da=new Audio("./audio/key14.mp3");
                        da.play();
            case "G":   var ne=new Audio("./audio/key15.mp3");
                        ne.play();
            case "H":   var saa=new Audio("./audio/key16.mp3");
                        saa.play();
            case "I":   var audio=new Audio("./audio/key17.mp3");
                        audio.play();
            case "J":   var audi=new Audio("./audio/key18.mp3");
                        audi.play();
            case "K":   var aud=new Audio("./audio/key19.mp3");
                        aud.play();
            case "L":   var au=new Audio("./audio/key20.mp3");
                        au.play();
            case "M":   var a=new Audio("./audio/key23.mp3");
                        a.play();
            case "N":   var b=new Audio("./audio/key24.mp3");
                        b.play();
        }
    });
}