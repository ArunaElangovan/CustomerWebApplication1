import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




// export class AppComponent {
//   title = 'Customer Web App';

//  showDiv() {
//     document.getElementById('welcomeDiv').style.display = "block";
//  }
// }


export class AppComponent {
  title = 'app';

  constructor() {
    }
}

// start the app
new AppComponent();

class Onclick_Ondblclick  
{  
    Onclick()  
    {  
      // document.getElementById("q1").style.opacity="0.2";
      // document.getElementById("q2").style.opacity="1";  
      // // window.scrollTo(0, document.getElementById("q10").offsetTop);

      // var i = document.getElementById("q2").offsetTop;
      // var int = setInterval(function() {
      //   window.scrollTo(0, i);
      //   i += 1;
      //   if (i >= 20) clearInterval(int);
      // }, 10);

      document.getElementById('footer').style.display = "block";
      // document.getElementById('footer').style.display = "none";
    }  
    edit_click()  
    {  
        alert("Fire Ondblclick event");       
    } 

    Onclick1()  
    {  
      // document.getElementById('footer').style.display = "block";
      document.getElementById('footer').style.display = "none";
      document.getElementById('personal-card').style.display = "block";
    }  

    updateclick()  
    {  
        //Get edited personal details
        var edited_name = (<HTMLInputElement>document.getElementById('name-edit')).value;
        var edited_email = (<HTMLInputElement>document.getElementById('email-edit')).value;
        var edited_number = (<HTMLInputElement>document.getElementById('number-edit')).value;
        //Update personal details with new info
        if (edited_name.length >0){
        document.getElementById('name-in-chat').innerHTML = edited_name; 
        }
        if (edited_email.length >0){
        document.getElementById('email-in-chat').innerHTML = edited_email; 
        }
        if (edited_number.length >0){
        document.getElementById('number-in-chat').innerHTML = edited_number; 
        }
        //Hide edit card and show chat footer
        document.getElementById('personal-card').style.display = "none";
        document.getElementById('footer').style.display = "block";
    }  

    complaintclick()
    {
        document.getElementById('footer').style.display = "none";
      document.getElementById('complaints-list').style.display = "block";
    }
    carouselclickfunc()
    {
      document.getElementById('complaints-list').style.display = "block";
    }
    chatsendclick(){
        var div = document.createElement('div');
        document.body.appendChild(div);
        div.style.left = '15px';
        div.style.top = '70px';
        div.className = 'chat-bubble-wrpr';
        div.innerHTML = div.innerHTML = '<span class="msg">Hello world.</span>';
    }
}  
   
window.onload = () =>  
{  
    var obj = new Onclick_Ondblclick();   
    var bttnclick = <HTMLButtonElement>document.getElementById("chat-img");  
    

    var bttnclick1 = <HTMLButtonElement>document.getElementById("personal_edit");
    var complaintsclick = <HTMLButtonElement>document.getElementById("complaints_edit"); 
    var bttndblclick1 = <HTMLButtonElement>document.getElementById("update");
    // var carouselclick = <HTMLButtonElement>document.getElementById("tr");
    var chatbttnclick = <HTMLButtonElement>document.getElementById("chat-enter");

    
    
    // var chatbttnclick = <HTMLImageElement>document.getElementById("send-img");

    bttnclick.onclick = function ()  
    {  
        obj.Onclick();  
    }  
    // bttndblclick.ondblclick = function ()  
    // {  
    //     obj.Ondblclick();  
    // }  
    bttnclick1.onclick = function ()  
    {  
        obj.Onclick1();  
    }  
    bttndblclick1.onclick = function ()  
    {  
        obj.updateclick();  
    } 
    complaintsclick.onclick = function ()  
    {  
        obj.complaintclick();  
    }  
    // carouselclick.onclick = function ()  
    // {  
    //     obj.carouselclickfunc();  
    // } 
    
    // chatbttnclick.onclick = function ()  
    // {  
    //     obj.onclick_chat();  
    // } 
    chatbttnclick.onclick = function ()  
    {  
        obj.chatsendclick();  
    } 
    
};
