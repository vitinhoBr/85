canvas=document.getElementById('myCanvas');
Ctx=canvas.getContext("2d");

greecar_width=75;
greecar_height=100;

greencar_x=5;
greencar_y=225;

function add(){
    background_imgTag=new image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    background_imgTag=new image();
    background_imgTag.onload=uploadgreecar;
    background_imgTag.src=greecar_image

}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadgreecar(){
    ctx.drawImage(greecar_imgTag,greecar_x,greecar_y,greecar.width,greecar.height);
}

function up(){
    if (greecar_y >=0) {
        greecar_y=greecar_y-10;
        console.log("When up arrow is pressed,x="+greecar_x+"| y="+greecar_y);
        uploadBackground();
        uploadgreecar();
    }


}


