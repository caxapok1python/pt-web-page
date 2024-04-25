var count = 0;
document.getElementById("myButton").onclick = function () {
    count++;
	if (count % 2 == 0) { 
		var img = document.createElement("img");
        img.src = "image/pedro-raccoon-raccoon.gif";
        document.getElementById("demo").appendChild(img);
	} else {
        document.getElemetnById("demo").innerHTML = "";
    }
}