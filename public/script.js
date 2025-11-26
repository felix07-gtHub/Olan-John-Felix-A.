window.addEventListener("scroll", function() {
    if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + document.querySelector("#skills").offsetHeight && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2) + ((document.querySelector("#projects").offsetHeight / 5) * 5)) {
        document.querySelector("#content").style.background = "black";
    } else {
        document.querySelector("#content").style.background = "white";
    }
    if(window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2)) {
        document.querySelector("#navigation").style.background = "rgba(0, 0, 0, 0.25)";    
        document.querySelector("#navigation > h1").style.color = "black";   
        document.querySelector("#navigation > button:nth-child(2)").style.color = "black";   
        document.querySelector("#navigation > button:nth-child(3)").style.color = "black";   
        document.querySelector("#navigation > button:nth-child(4)").style.color = "black";   
        document.querySelector("#navigation > button:nth-child(5)").style.color = "black";   
        document.querySelector("#navigation > button:nth-child(6)").style.color = "black";   
        document.querySelector("#navigation > button:nth-child(7)").style.color = "black";   
        document.querySelector("#rounded-corner-rectangle").style.background = "black";   
        if(window.scrollY < document.querySelector("#home").offsetHeight * 2) {
            document.querySelector("#navigation > button:nth-child(2)").style.color = "white";   
            document.querySelector("#navigation > button:nth-child(3)").style.color = "black";   
            document.querySelector("#navigation > button:nth-child(4)").style.color = "black";   
            document.querySelector("#navigation > button:nth-child(5)").style.color = "black";   
            document.querySelector("#navigation > button:nth-child(6)").style.color = "black";   
            document.querySelector("#navigation > button:nth-child(7)").style.color = "black";   
            document.querySelector("#rounded-corner-rectangle").style.transform = "translate(0%, 0%)";
        } else if(window.scrollY >= document.querySelector("#home").offsetHeight * 2 && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2)) {
            document.querySelector("#navigation > button:nth-child(2)").style.color = "black";   
            document.querySelector("#navigation > button:nth-child(3)").style.color = "white";   
            document.querySelector("#navigation > button:nth-child(4)").style.color = "black";   
            document.querySelector("#navigation > button:nth-child(5)").style.color = "black";   
            document.querySelector("#navigation > button:nth-child(6)").style.color = "black";   
            document.querySelector("#navigation > button:nth-child(7)").style.color = "black";   
            document.querySelector("#rounded-corner-rectangle").style.transform = "translate(100%, 0%)";
        }
    } else if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) && Math.ceil(window.scrollY + window.innerHeight) < document.documentElement.scrollHeight) { 
        document.querySelector("#navigation").style.background = "rgba(255, 255, 255, 0.25)";  
        document.querySelector("#navigation > h1").style.color = "white";     
        document.querySelector("#navigation > button:nth-child(2)").style.color = "white";   
        document.querySelector("#navigation > button:nth-child(3)").style.color = "white";   
        document.querySelector("#navigation > button:nth-child(4)").style.color = "white";   
        document.querySelector("#navigation > button:nth-child(5)").style.color = "white";   
        document.querySelector("#navigation > button:nth-child(6)").style.color = "white";   
        document.querySelector("#navigation > button:nth-child(7)").style.color = "white";   
        document.querySelector("#rounded-corner-rectangle").style.background = "white";   
        if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2)) {
            document.querySelector("#navigation > button:nth-child(2)").style.color = "white";   
            document.querySelector("#navigation > button:nth-child(3)").style.color = "white";   
            document.querySelector("#navigation > button:nth-child(4)").style.color = "black";   
            document.querySelector("#navigation > button:nth-child(5)").style.color = "white";   
            document.querySelector("#navigation > button:nth-child(6)").style.color = "white";   
            document.querySelector("#navigation > button:nth-child(7)").style.color = "white";       
            document.querySelector("#rounded-corner-rectangle").style.transform = "translate(200%, 0%)";
        } else if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2)) {    
            document.querySelector("#navigation > button:nth-child(2)").style.color = "white";   
            document.querySelector("#navigation > button:nth-child(3)").style.color = "white";   
            document.querySelector("#navigation > button:nth-child(4)").style.color = "white";   
            document.querySelector("#navigation > button:nth-child(5)").style.color = "black";   
            document.querySelector("#navigation > button:nth-child(6)").style.color = "white";   
            document.querySelector("#navigation > button:nth-child(7)").style.color = "white";       
            document.querySelector("#rounded-corner-rectangle").style.transform = "translate(300%, 0%)";
        } else if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2) + (document.querySelector("#projects").offsetHeight * 2)) {
            document.querySelector("#navigation > button:nth-child(2)").style.color = "white";   
            document.querySelector("#navigation > button:nth-child(3)").style.color = "white";   
            document.querySelector("#navigation > button:nth-child(4)").style.color = "white";   
            document.querySelector("#navigation > button:nth-child(5)").style.color = "white";   
            document.querySelector("#navigation > button:nth-child(6)").style.color = "black";   
            document.querySelector("#navigation > button:nth-child(7)").style.color = "white";       
            document.querySelector("#rounded-corner-rectangle").style.transform = "translate(400%, 0%)";
        }
    } else {
        document.querySelector("#navigation").style.background = "rgba(0, 0, 0, 0.25)"; 
        document.querySelector("#navigation > h1").style.color = "black";   
        document.querySelector("#navigation > button:nth-child(2)").style.color = "black";   
        document.querySelector("#navigation > button:nth-child(3)").style.color = "black";   
        document.querySelector("#navigation > button:nth-child(4)").style.color = "black";   
        document.querySelector("#navigation > button:nth-child(5)").style.color = "black";   
        document.querySelector("#navigation > button:nth-child(6)").style.color = "black";   
        document.querySelector("#navigation > button:nth-child(7)").style.color = "white";   
        document.querySelector("#rounded-corner-rectangle").style.background = "black";   
        document.querySelector("#rounded-corner-rectangle").style.transform = "translate(500%, 0%)";
    }
    if(window.scrollY < document.querySelector("#home").offsetHeight) {
        document.querySelector("#content").style.transform = "translate(0px, " + window.scrollY + "px)";
        if(window.scrollY > document.querySelector("#home").offsetHeight / 3 && window.scrollY < (document.querySelector("#home").offsetHeight / 3) * 2) {
            document.querySelector("#home .background-image").style.opacity = "1";
            document.querySelector("#name").style.opacity = "1";
            document.querySelector("#background-image-name-introduction > p").style.opacity = "1";
        } else {
            document.querySelector("#home .background-image").style.opacity = "0";
            document.querySelector("#name").style.opacity = "0";
            document.querySelector("#background-image-name-introduction > p").style.opacity = "0";
        }
    }
    if(window.scrollY >= document.querySelector("#home").offsetHeight * 2 && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + ((document.querySelector("#about-me").offsetHeight / 7) * 7)) {
        if(window.scrollY >= document.querySelector("#home").offsetHeight * 2 && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + ((document.querySelector("#about-me").offsetHeight / 7) * 1)) {
            document.querySelector("#list > .item:nth-child(1)").style.height = "100%";
            document.querySelector("#list > .item:nth-child(1) > .image").style.height = "100%";
            document.querySelector("#list > .item:nth-child(2)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(2) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(3)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(3) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(4)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(4) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(5)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(5) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(6)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(6) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(7)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(7) > .image").style.height = "0%";
            document.querySelector("#mask").style.height = document.querySelector("#list").offsetHeight - ((document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2)) * 6) + "px";
            document.querySelector("#mask").style.transform = "translate(0px, " + ((document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2)) * 0) + "px)";
            document.querySelector("#items .item:nth-child(1)").style.transform = "translate(0%, 0%)";
            document.querySelector("#items .item:nth-child(2)").style.transform = "translate(0%, 0%)";
            document.querySelector("#items .item:nth-child(3)").style.transform = "translate(0%, 0%)";
            document.querySelector("#items .item:nth-child(4)").style.transform = "translate(0%, 0%)";
            document.querySelector("#items .item:nth-child(5)").style.transform = "translate(0%, 0%)";
            document.querySelector("#items .item:nth-child(6)").style.transform = "translate(0%, 0%)";
            document.querySelector("#items .item:nth-child(7)").style.transform = "translate(0%, 0%)";
        } else if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + ((document.querySelector("#about-me").offsetHeight / 7) * 1) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + ((document.querySelector("#about-me").offsetHeight / 7) * 2)) {
            document.querySelector("#list > .item:nth-child(1)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(1) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(2)").style.height = "100%";
            document.querySelector("#list > .item:nth-child(2) > .image").style.height = "100%";
            document.querySelector("#list > .item:nth-child(3)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(3) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(4)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(4) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(5)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(5) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(6)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(6) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(7)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(7) > .image").style.height = "0%";
            document.querySelector("#mask").style.height = document.querySelector("#list").offsetHeight - ((document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2)) * 6) + "px";
            document.querySelector("#mask").style.transform = "translate(0px, " + ((document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2)) * 1) + "px)";  
            document.querySelector("#items .item:nth-child(1)").style.transform = "translate(0%, -100%)";
            document.querySelector("#items .item:nth-child(2)").style.transform = "translate(0%, -100%)";
            document.querySelector("#items .item:nth-child(3)").style.transform = "translate(0%, -100%)";
            document.querySelector("#items .item:nth-child(4)").style.transform = "translate(0%, -100%)";
            document.querySelector("#items .item:nth-child(5)").style.transform = "translate(0%, -100%)";
            document.querySelector("#items .item:nth-child(6)").style.transform = "translate(0%, -100%)";
            document.querySelector("#items .item:nth-child(7)").style.transform = "translate(0%, -100%)";      
        } else if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + ((document.querySelector("#about-me").offsetHeight / 7) * 2) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + ((document.querySelector("#about-me").offsetHeight / 7) * 3)) {
            document.querySelector("#list > .item:nth-child(1)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(1) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(2)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(2) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(3)").style.height = "100%";
            document.querySelector("#list > .item:nth-child(3) > .image").style.height = "100%";
            document.querySelector("#list > .item:nth-child(4)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(4) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(5)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(5) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(6)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(6) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(7)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(7) > .image").style.height = "0%";
            document.querySelector("#mask").style.height = document.querySelector("#list").offsetHeight - ((document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2)) * 6) + "px";    
            document.querySelector("#mask").style.transform = "translate(0px, " + ((document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2)) * 2) + "px)";    
            document.querySelector("#items .item:nth-child(1)").style.transform = "translate(0%, -200%)";
            document.querySelector("#items .item:nth-child(2)").style.transform = "translate(0%, -200%)";
            document.querySelector("#items .item:nth-child(3)").style.transform = "translate(0%, -200%)";
            document.querySelector("#items .item:nth-child(4)").style.transform = "translate(0%, -200%)";
            document.querySelector("#items .item:nth-child(5)").style.transform = "translate(0%, -200%)";
            document.querySelector("#items .item:nth-child(6)").style.transform = "translate(0%, -200%)";
            document.querySelector("#items .item:nth-child(7)").style.transform = "translate(0%, -200%)";      
        } else if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + ((document.querySelector("#about-me").offsetHeight / 7) * 3) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + ((document.querySelector("#about-me").offsetHeight / 7) * 4)) {
            document.querySelector("#list > .item:nth-child(1)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(1) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(2)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(2) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(3)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(3) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(4)").style.height = "100%";
            document.querySelector("#list > .item:nth-child(4) > .image").style.height = "100%";
            document.querySelector("#list > .item:nth-child(5)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(5) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(6)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(6) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(7)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(7) > .image").style.height = "0%";
            document.querySelector("#mask").style.height = document.querySelector("#list").offsetHeight - ((document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2)) * 6) + "px";    
            document.querySelector("#mask").style.transform = "translate(0px, " + ((document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2)) * 3) + "px)";    
            document.querySelector("#items .item:nth-child(1)").style.transform = "translate(0%, -300%)";
            document.querySelector("#items .item:nth-child(2)").style.transform = "translate(0%, -300%)";
            document.querySelector("#items .item:nth-child(3)").style.transform = "translate(0%, -300%)";
            document.querySelector("#items .item:nth-child(4)").style.transform = "translate(0%, -300%)";
            document.querySelector("#items .item:nth-child(5)").style.transform = "translate(0%, -300%)";
            document.querySelector("#items .item:nth-child(6)").style.transform = "translate(0%, -300%)";
            document.querySelector("#items .item:nth-child(7)").style.transform = "translate(0%, -300%)";      
        } else if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + ((document.querySelector("#about-me").offsetHeight / 7) * 4) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + ((document.querySelector("#about-me").offsetHeight / 7) * 5)) {
            document.querySelector("#list > .item:nth-child(1)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(1) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(2)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(2) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(3)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(3) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(4)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(4) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(5)").style.height = "100%";
            document.querySelector("#list > .item:nth-child(5) > .image").style.height = "100%";
            document.querySelector("#list > .item:nth-child(6)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(6) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(7)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(7) > .image").style.height = "0%";
            document.querySelector("#mask").style.height = document.querySelector("#list").offsetHeight - ((document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2)) * 6) + "px";    
            document.querySelector("#mask").style.transform = "translate(0px, " + ((document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2)) * 4) + "px)";  
            document.querySelector("#items .item:nth-child(1)").style.transform = "translate(0%, -400%)";
            document.querySelector("#items .item:nth-child(2)").style.transform = "translate(0%, -400%)";
            document.querySelector("#items .item:nth-child(3)").style.transform = "translate(0%, -400%)";
            document.querySelector("#items .item:nth-child(4)").style.transform = "translate(0%, -400%)";
            document.querySelector("#items .item:nth-child(5)").style.transform = "translate(0%, -400%)";
            document.querySelector("#items .item:nth-child(6)").style.transform = "translate(0%, -400%)";
            document.querySelector("#items .item:nth-child(7)").style.transform = "translate(0%, -400%)";        
        } else if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + ((document.querySelector("#about-me").offsetHeight / 7) * 5) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + ((document.querySelector("#about-me").offsetHeight / 7) * 6)) {
            document.querySelector("#list > .item:nth-child(1)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(1) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(2)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(2) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(3)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(3) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(4)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(4) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(5)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(5) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(6)").style.height = "100%";
            document.querySelector("#list > .item:nth-child(6) > .image").style.height = "100%";
            document.querySelector("#list > .item:nth-child(7)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(7) > .image").style.height = "0%";
            document.querySelector("#mask").style.height = document.querySelector("#list").offsetHeight - ((document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2)) * 6) + "px";   
            document.querySelector("#mask").style.transform = "translate(0px, " + ((document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2)) * 5) + "px)"; 
            document.querySelector("#items .item:nth-child(1)").style.transform = "translate(0%, -500%)";
            document.querySelector("#items .item:nth-child(2)").style.transform = "translate(0%, -500%)";
            document.querySelector("#items .item:nth-child(3)").style.transform = "translate(0%, -500%)";
            document.querySelector("#items .item:nth-child(4)").style.transform = "translate(0%, -500%)";
            document.querySelector("#items .item:nth-child(5)").style.transform = "translate(0%, -500%)";
            document.querySelector("#items .item:nth-child(6)").style.transform = "translate(0%, -500%)";
            document.querySelector("#items .item:nth-child(7)").style.transform = "translate(0%, -500%)";          
        } else if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + ((document.querySelector("#about-me").offsetHeight / 7) * 6) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + ((document.querySelector("#about-me").offsetHeight / 7) * 7)) {
            document.querySelector("#list > .item:nth-child(1)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(1) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(2)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(2) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(3)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(3) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(4)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(5) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(5)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(5) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(6)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
            document.querySelector("#list > .item:nth-child(6) > .image").style.height = "0%";
            document.querySelector("#list > .item:nth-child(7)").style.height = "100%";
            document.querySelector("#list > .item:nth-child(7) > .image").style.height = "100%";
            document.querySelector("#mask").style.height = document.querySelector("#list").offsetHeight - ((document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2)) * 6) + "px";   
            document.querySelector("#mask").style.transform = "translate(0px, " + ((document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2)) * 6) + "px)";      
            document.querySelector("#items .item:nth-child(1)").style.transform = "translate(0%, -600%)";
            document.querySelector("#items .item:nth-child(2)").style.transform = "translate(0%, -600%)";
            document.querySelector("#items .item:nth-child(3)").style.transform = "translate(0%, -600%)";
            document.querySelector("#items .item:nth-child(4)").style.transform = "translate(0%, -600%)";
            document.querySelector("#items .item:nth-child(5)").style.transform = "translate(0%, -600%)";
            document.querySelector("#items .item:nth-child(6)").style.transform = "translate(0%, -600%)";
            document.querySelector("#items .item:nth-child(7)").style.transform = "translate(0%, -600%)";      
        }
        if(window.scrollY >= document.querySelector("#home").offsetHeight * 2 && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + ((document.querySelector("#about-me").offsetHeight / 7) * 7)) {
            document.querySelector("#content").style.transform = "translate(0px, " + (window.scrollY - document.querySelector("#home").offsetHeight) + "px)";
        }
    } else if(window.scrollY < document.querySelector("#home").offsetHeight * 2) {
        document.querySelector("#list > .item:nth-child(1)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
        document.querySelector("#list > .item:nth-child(1) > .image").style.height = "0%";
        document.querySelector("#list > .item:nth-child(2)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
        document.querySelector("#list > .item:nth-child(2) > .image").style.height = "0%";
        document.querySelector("#list > .item:nth-child(3)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
        document.querySelector("#list > .item:nth-child(3) > .image").style.height = "0%";
        document.querySelector("#list > .item:nth-child(4)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
        document.querySelector("#list > .item:nth-child(4) > .image").style.height = "0%";
        document.querySelector("#list > .item:nth-child(5)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
        document.querySelector("#list > .item:nth-child(5) > .image").style.height = "0%";
        document.querySelector("#list > .item:nth-child(6)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
        document.querySelector("#list > .item:nth-child(6) > .image").style.height = "0%";
        document.querySelector("#list > .item:nth-child(7)").style.height = document.querySelector("#list p").offsetHeight + (parseFloat(window.getComputedStyle(document.querySelector("#list p")).margin.split(" ")[0].replace(/\D/g, "")) * 2) + "px";
        document.querySelector("#list > .item:nth-child(7) > .image").style.height = "0%";
        document.querySelector("#mask").style.height = "0px";
        document.querySelector("#mask").style.transform = "translate(0px, 0px)";
        document.querySelector("#items .item:nth-child(1)").style.transform = "translate(0%, 0%)";
        document.querySelector("#items .item:nth-child(2)").style.transform = "translate(0%, 0%)";
        document.querySelector("#items .item:nth-child(3)").style.transform = "translate(0%, 0%)";
        document.querySelector("#items .item:nth-child(4)").style.transform = "translate(0%, 0%)";
        document.querySelector("#items .item:nth-child(5)").style.transform = "translate(0%, 0%)";
        document.querySelector("#items .item:nth-child(6)").style.transform = "translate(0%, 0%)";
        document.querySelector("#items .item:nth-child(7)").style.transform = "translate(0%, 0%)";
    }
    if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + document.querySelector("#skills").offsetHeight) {    
        document.querySelector("#background-color").style.width = "100%";
        document.querySelector("#background-color").style.height = "100%";
        document.querySelector("#skills-techincal-soft").style.top = "50%";
        document.querySelector("#skills-techincal-soft").style.transform = "translate(-50%, -50%)";  
        document.querySelector("#content").style.transform = "translate(0px, " + (window.scrollY - (document.querySelector("#home").offsetHeight * 2)) + "px)";
    } else if(window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) && window.scrollY > (document.querySelector("#home").offsetHeight * 2) + ((document.querySelector("#about-me").offsetHeight / 7) * 7)) {    
        document.querySelector("#background-color").style.width = "0%";
        document.querySelector("#background-color").style.height = "0%";
        document.querySelector("#skills-techincal-soft").style.top = "100%";
        document.querySelector("#skills-techincal-soft").style.transform = "translate(-50%, 0%)";
    }
    if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + document.querySelector("#skills").offsetHeight && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2)) {
        document.querySelector("#skills #background-color").style .overflow = "visible";
        document.querySelector("#skills .background-image").style.transform = "translate(" + (0 - (document.querySelector("#skills .background-image").offsetWidth / 2)) + "px, " + (((0 - (document.querySelector("#skills .background-image").offsetHeight / 2))) + (window.scrollY - ((document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + document.querySelector("#skills").offsetHeight))) + "px)";
    } else if(window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + document.querySelector("#skills").offsetHeight) {
        document.querySelector("#skills #background-color").style .overflow = "hidden";
    }
    if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + document.querySelector("#testimonials").offsetHeight) {    
        document.querySelector(".testimonial:nth-child(1)").style.transform = "translate(0%, 0%)";
        document.querySelector(".testimonial:nth-child(1)").style.opacity = "1";
        document.querySelector("#testimonials-gradient > h1").style.transform = "translate(0%, 0%)";
        document.querySelector("#testimonials-gradient > h1").style.opacity = "1";
        document.querySelector("#gradient").style.transform = "translate(0%, 0%)";
        document.querySelector("#gradient").style.opacity = "1";
        document.querySelector("#content").style.transform = "translate(0px, " + (window.scrollY - ((document.querySelector("#home").offsetHeight * 2) + document.querySelector("#about-me").offsetHeight)) + "px)";
    } else if(window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + document.querySelector("#testimonials").offsetHeight) {    
       document.querySelector(".testimonial:nth-child(1)").style.transform = "translate(0%, 100%)";
        document.querySelector(".testimonial:nth-child(1)").style.opacity = "0";
        document.querySelector("#testimonials-gradient > h1").style.transform = "translate(-10%, 0%)";
        document.querySelector("#testimonials-gradient > h1").style.opacity = "0";
        document.querySelector("#gradient").style.transform = "translate(-100%, 0%)";
        document.querySelector("#gradient").style.opacity = "0";
    }
    if(window.scrollY > (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + document.querySelector("#testimonials").offsetHeight && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2)) {    
        document.querySelector("#skills .background-image").style.transform = "translate(" + (0 - (document.querySelector("#skills .background-image").offsetWidth / 2)) + "px, " + (((0 - (document.querySelector("#skills .background-image").offsetHeight / 2))) + (window.scrollY - ((document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2)))) + "px)";
    }
    if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + document.querySelector("#testimonials").offsetHeight && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2) + ((document.querySelector("#projects").offsetHeight / 5) * 5)) {
        if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + document.querySelector("#testimonials").offsetHeight && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2) + ((document.querySelector("#projects").offsetHeight / 4) * 1)) {
            document.querySelector("#title > h1:nth-child(1)").style.transform = "translate(0%, 200%) scale(1)";
            document.querySelector("#title > h1:nth-child(1)").style.opacity = "1";
            document.querySelector("#title > h1:nth-child(2)").style.transform = "translate(0%, 200%) scale(0.5)";
            document.querySelector("#title > h1:nth-child(2)").style.opacity = "0";
            document.querySelector("#title > h1:nth-child(3)").style.transform = "translate(0%, 200%) scale(0.5)";
            document.querySelector("#title > h1:nth-child(3)").style.opacity = "0";
            document.querySelector("#title > h1:nth-child(4)").style.transform = "translate(0%, 200%) scale(0.5)";
            document.querySelector("#title > h1:nth-child(4)").style.opacity = "0";
            document.querySelector("#image-icon-description-tools > .project:nth-child(1)").style.transform = "translate(0%, 0%)";
            document.querySelector("#image-icon-description-tools > .project:nth-child(2)").style.transform = "translate(0%, 0%)";
            document.querySelector("#image-icon-description-tools > .project:nth-child(3)").style.transform = "translate(0%, 0%)";
            document.querySelector("#image-icon-description-tools > .project:nth-child(4)").style.transform = "translate(0%, 0%)";
            document.querySelector("#icon-description-tools > .project:nth-child(1)").style.transform = "translate(0%, 0%)";
            document.querySelector("#icon-description-tools > .project:nth-child(2)").style.transform = "translate(0%, 0%)";
            document.querySelector("#icon-description-tools > .project:nth-child(3)").style.transform = "translate(0%, 0%)";
            document.querySelector("#icon-description-tools > .project:nth-child(4)").style.transform = "translate(0%, 0%)";
        } else if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2) + ((document.querySelector("#projects").offsetHeight / 4) * 1) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2) + ((document.querySelector("#projects").offsetHeight / 4) * 2)) {
            document.querySelector("#title > h1:nth-child(1)").style.transform = "translate(0%, 100%) scale(0.5)";
            document.querySelector("#title > h1:nth-child(1)").style.opacity = "0.5";
            document.querySelector("#title > h1:nth-child(2)").style.transform = "translate(0%, 100%) scale(1)";
            document.querySelector("#title > h1:nth-child(2)").style.opacity = "1";
            document.querySelector("#title > h1:nth-child(3)").style.transform = "translate(0%, 100%) scale(0.5)";
            document.querySelector("#title > h1:nth-child(3)").style.opacity = "0";
            document.querySelector("#title > h1:nth-child(4)").style.transform = "translate(0%, 100%) scale(0.5)";
            document.querySelector("#title > h1:nth-child(4)").style.opacity = "0";
            document.querySelector("#image-icon-description-tools > .project:nth-child(1)").style.transform = "translate(0%, -100%)";
            document.querySelector("#image-icon-description-tools > .project:nth-child(2)").style.transform = "translate(0%, -100%)";
            document.querySelector("#image-icon-description-tools > .project:nth-child(3)").style.transform = "translate(0%, -100%)";
            document.querySelector("#image-icon-description-tools > .project:nth-child(4)").style.transform = "translate(0%, -100%)";
            document.querySelector("#icon-description-tools > .project:nth-child(1)").style.transform = "translate(0%, -100%)";
            document.querySelector("#icon-description-tools > .project:nth-child(2)").style.transform = "translate(0%, -100%)";
            document.querySelector("#icon-description-tools > .project:nth-child(3)").style.transform = "translate(0%, -100%)";
            document.querySelector("#icon-description-tools > .project:nth-child(4)").style.transform = "translate(0%, -100%)";
        } else if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2) + ((document.querySelector("#projects").offsetHeight / 4) * 2) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2) + ((document.querySelector("#projects").offsetHeight / 4) * 3)) {
            document.querySelector("#title > h1:nth-child(1)").style.transform = "translate(0%, 0%) scale(0.5)";
            document.querySelector("#title > h1:nth-child(1)").style.opacity = "0";
            document.querySelector("#title > h1:nth-child(2)").style.transform = "translate(0%, 0%) scale(0.5)";
            document.querySelector("#title > h1:nth-child(2)").style.opacity = "0.5";
            document.querySelector("#title > h1:nth-child(3)").style.transform = "translate(0%, 0%) scale(1)";
            document.querySelector("#title > h1:nth-child(3)").style.opacity = "1";
            document.querySelector("#title > h1:nth-child(4)").style.transform = "translate(0%, 0%) scale(0.5)";
            document.querySelector("#title > h1:nth-child(4)").style.opacity = "0";
            document.querySelector("#image-icon-description-tools > .project:nth-child(1)").style.transform = "translate(0%, -200%)";
            document.querySelector("#image-icon-description-tools > .project:nth-child(2)").style.transform = "translate(0%, -200%)";
            document.querySelector("#image-icon-description-tools > .project:nth-child(3)").style.transform = "translate(0%, -200%)";
            document.querySelector("#image-icon-description-tools > .project:nth-child(4)").style.transform = "translate(0%, -200%)";
            document.querySelector("#icon-description-tools > .project:nth-child(1)").style.transform = "translate(0%, -200%)";
            document.querySelector("#icon-description-tools > .project:nth-child(2)").style.transform = "translate(0%, -200%)";
            document.querySelector("#icon-description-tools > .project:nth-child(3)").style.transform = "translate(0%, -200%)";
            document.querySelector("#icon-description-tools > .project:nth-child(4)").style.transform = "translate(0%, -200%)";
        } else if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2) + ((document.querySelector("#projects").offsetHeight / 4) * 3) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2) + ((document.querySelector("#projects").offsetHeight / 4) * 4)) {
            document.querySelector("#title > h1:nth-child(1)").style.transform = "translate(0%, -100%) scale(0.5)";
            document.querySelector("#title > h1:nth-child(1)").style.opacity = "0";
            document.querySelector("#title > h1:nth-child(2)").style.transform = "translate(0%, -100%) scale(0.5)";
            document.querySelector("#title > h1:nth-child(2)").style.opacity = "0";
            document.querySelector("#title > h1:nth-child(3)").style.transform = "translate(0%, -100%) scale(0.5)";
            document.querySelector("#title > h1:nth-child(3)").style.opacity = "0.5";
            document.querySelector("#title > h1:nth-child(4)").style.transform = "translate(0%, -100%) scale(1)";
            document.querySelector("#title > h1:nth-child(4)").style.opacity = "1";
            document.querySelector("#image-icon-description-tools > .project:nth-child(1)").style.transform = "translate(0%, -300%)";
            document.querySelector("#image-icon-description-tools > .project:nth-child(2)").style.transform = "translate(0%, -300%)";
            document.querySelector("#image-icon-description-tools > .project:nth-child(3)").style.transform = "translate(0%, -300%)";
            document.querySelector("#image-icon-description-tools > .project:nth-child(4)").style.transform = "translate(0%, -300%)";
            document.querySelector("#icon-description-tools > .project:nth-child(1)").style.transform = "translate(0%, -300%)";
            document.querySelector("#icon-description-tools > .project:nth-child(2)").style.transform = "translate(0%, -300%)";
            document.querySelector("#icon-description-tools > .project:nth-child(3)").style.transform = "translate(0%, -300%)";
            document.querySelector("#icon-description-tools > .project:nth-child(4)").style.transform = "translate(0%, -300%)";
        }
        if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2) + ((document.querySelector("#projects").offsetHeight / 4) * 4)) {
            document.querySelector("#content").style.transform = "translate(0px, " + (window.scrollY - ((document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2))) + "px)";
        }
    }
    if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2) + document.querySelector("#projects").offsetHeight && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2) + (document.querySelector("#projects").offsetHeight * 2)) {    
        document.querySelector("#skills .background-image").style.transform = "translate(" + (0 - (document.querySelector("#skills .background-image").offsetWidth / 2)) + "px, " + (((0 - (document.querySelector("#skills .background-image").offsetHeight / 2))) + (window.scrollY - ((document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + document.querySelector("#testimonials").offsetHeight))) + "px)";
    }
    if(Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight) { 
        document.querySelector("#contact > .background-image").style.opacity = "1";
        document.querySelector("#social-links").style.opacity = "1";
        document.querySelector("#contact > form").style.opacity = "1";
    } else {
        document.querySelector("#contact > .background-image").style.opacity = "0";
        document.querySelector("#social-links").style.opacity = "0";
        document.querySelector("#contact > form").style.opacity = "0";
    }
    document.querySelector("#open-education").style.boxShadow = "2.5px 2.5px 5px black";
    document.querySelector("#open-education").style.transform = "none";
    document.querySelector("#open-relevant-experiences").style.boxShadow = "2.5px 2.5px 5px black";
    document.querySelector("#open-relevant-experiences").style.transform = "none";
    document.querySelector("#open-introduction-video").style.boxShadow = "2.5px 2.5px 5px black";
    document.querySelector("#open-introduction-video").style.transform = "none";
    document.querySelector("#open-certifications").style.boxShadow = "2.5px 2.5px 5px black";
    document.querySelector("#open-certifications").style.transform = "none";
    document.querySelector("#modals").style.display = "none";
    document.querySelector(".modal:nth-child(1)").style.display = "none";
    document.querySelector(".modal:nth-child(2)").style.display = "none";
    document.querySelector(".modal:nth-child(3)").style.display = "none";
    document.querySelector(".modal:nth-child(3) > iframe").src = document.querySelector(".modal:nth-child(3) > iframe").src;
    document.querySelector(".modal:nth-child(4)").style.display = "none";
    if(window.scrollY < document.querySelector("#home").offsetHeight) {
        document.querySelector("#action").style.background = "rgba(0, 0, 0, 0.25)";
        document.querySelector("#action").style.opacity = "1";
        document.querySelector("#scroll-down").style.display = "flex";
        document.querySelector("#download-resume").style.display = "none";
        document.querySelector("#flip-the-card").style.display = "none";
    } else if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + document.querySelector("#testimonials").offsetHeight) {
        document.querySelector("#action").style.background = "rgba(255, 255, 255, 0.25)";
        document.querySelector("#action").style.opacity = "1";
        if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2)) {
            document.querySelector("#scroll-down").style.display = "none";
            document.querySelector("#download-resume").style.display = "flex";
            document.querySelector("#flip-the-card").style.display = "none";
        } else if(window.scrollY >= (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) && window.scrollY < (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + document.querySelector("#testimonials").offsetHeight) {
            document.querySelector("#scroll-down").style.display = "none";
            document.querySelector("#download-resume").style.display = "none";
            document.querySelector("#flip-the-card").style.display = "flex";
        }
    } else {
        document.querySelector("#action").style.opacity = "0";
    }
});
document.querySelector("#navigation > button:nth-child(2)").addEventListener("click", function() {
    window.scrollTo({
        top: document.querySelector("#home").offsetHeight / 3,
        left: 0,
        behavior: "smooth"
    });
});
document.querySelector("#navigation > button:nth-child(3)").addEventListener("click", function() {
    window.scrollTo({
        top: (document.querySelector("#home").offsetHeight * 2),
        left: 0,
        behavior: "smooth"
    });
});
document.querySelector("#navigation > button:nth-child(4)").addEventListener("click", function() {
    window.scrollTo({
        top: (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2),
        left: 0,
        behavior: "smooth"
    });
});
document.querySelector("#navigation > button:nth-child(5)").addEventListener("click", function() {
    window.scrollTo({
        top: (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2),
        left: 0,
        behavior: "smooth"
    });
});
document.querySelector("#navigation > button:nth-child(6)").addEventListener("click", function() {
    window.scrollTo({
        top: (document.querySelector("#home").offsetHeight * 2) + (document.querySelector("#about-me").offsetHeight * 2) + (document.querySelector("#skills").offsetHeight * 2) + (document.querySelector("#testimonials").offsetHeight * 2),
        left: 0,
        behavior: "smooth"
    });
});
document.querySelector("#navigation > button:nth-child(7)").addEventListener("click", function() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        left: 0,
        behavior: "smooth"
    });
});
function cardFlip180Deg(card) {
    card.style.background = "white";
    card.style.transform = "rotateY(180deg)";
    card.querySelector(".testimonial-icon").style.transform = "rotateY(180deg)";
    card.querySelector(".testimonial-icon > p").style.color = "black";
    card.querySelector(".name").style.opacity = "0";
    card.querySelector(".feedback").style.opacity = "1";
}
document.querySelector(".testimonial:nth-child(1)").addEventListener("mouseenter", function() {
    cardFlip180Deg(this);
});
function cardflip0Deg(card) {
    card.style.background = "rgb(0, 0, 0, 0.25)";
    card.style.transform = "rotateY(0deg)";
    card.querySelector(".testimonial-icon").style.transform = "rotateY(0deg)";
    card.querySelector(".testimonial-icon > p").style.color = "white";
    card.querySelector(".name").style.opacity = "1";
    card.querySelector(".feedback").style.opacity = "0";
}
document.querySelector(".testimonial:nth-child(1)").addEventListener("mouseleave", function() {
    cardflip0Deg(this);
});
document.querySelector("#open-education").addEventListener("click", function() {
    document.querySelector("#open-education").style.boxShadow = "none";
    document.querySelector("#open-education").style.transform = "translate(2.5px, 2.5px) scale(0.975)";
    document.querySelector("#modals").style.display = "block";
    document.querySelector(".modal:nth-child(1)").style.display = "block";
});
document.querySelector("#open-relevant-experiences").addEventListener("click", function() {
    document.querySelector("#open-relevant-experiences").style.boxShadow = "none";
    document.querySelector("#open-relevant-experiences").style.transform = "translate(2.5px, 2.5px) scale(0.975)";
    document.querySelector("#modals").style.display = "block";
    document.querySelector(".modal:nth-child(2)").style.display = "block";
});
document.querySelector("#open-introduction-video").addEventListener("click", function() {
    document.querySelector("#open-introduction-video").style.boxShadow = "none";
    document.querySelector("#open-introduction-video").style.transform = "translate(2.5px, 2.5px) scale(0.975)";
    document.querySelector("#modals").style.display = "block";
    document.querySelector(".modal:nth-child(3)").style.display = "block";
});
document.querySelector("#open-certifications").addEventListener("click", function() {
    document.querySelector("#open-certifications").style.boxShadow = "none";
    document.querySelector("#open-certifications").style.transform = "translate(2.5px, 2.5px) scale(0.975)";
    document.querySelector("#modals").style.display = "block";
    document.querySelector(".modal:nth-child(4)").style.display = "block";
});
document.querySelector("#modals").addEventListener("click", function(event) {
    if(event.target == document.querySelector("#modals")) {
        document.querySelector("#open-education").style.boxShadow = "2.5px 2.5px 5px black";
        document.querySelector("#open-education").style.transform = "none";
        document.querySelector("#open-relevant-experiences").style.boxShadow = "2.5px 2.5px 5px black";
        document.querySelector("#open-relevant-experiences").style.transform = "none";
        document.querySelector("#open-introduction-video").style.boxShadow = "2.5px 2.5px 5px black";
        document.querySelector("#open-introduction-video").style.transform = "none";
        document.querySelector("#open-certifications").style.boxShadow = "2.5px 2.5px 5px black";
        document.querySelector("#open-certifications").style.transform = "none";
        document.querySelector("#modals").style.display = "none";
        document.querySelector(".modal:nth-child(1)").style.display = "none";
        document.querySelector(".modal:nth-child(2)").style.display = "none";
        document.querySelector(".modal:nth-child(3)").style.display = "none";
        document.querySelector(".modal:nth-child(3) > iframe").src = document.querySelector(".modal:nth-child(3) > iframe").src;
        document.querySelector(".modal:nth-child(4)").style.display = "none";
    }
});
window.addEventListener('wheel', function(event) {
    event.preventDefault();
    window.scrollBy({
        top: event.deltaY * 0.25,
        left: 0,
        behavior: 'auto'
    });
}, { passive: false });