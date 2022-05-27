import { HttpClient } from '@angular/common/http';
import { Component, OnInit,NgModule } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  totalMessages: string 
  constructor(private httpClient: HttpClient) {
    this.totalMessages = "No Messages yet";
    loadMessageCount(this);
  }

  ngOnInit(): void {
  }

  addInfo(item:any,form:any){
  console.log(item);
    this.httpClient
    .post('https://portfolio-e787c-default-rtdb.firebaseio.com/contact.json',
    item
    )
    .subscribe((response) => {console.log(response),loadMessageCount(this),alert("Message Sent!!"),form.reset()})
  }

}
function loadMessageCount(it: any) {
  it.httpClient.get('https://portfolio-e787c-default-rtdb.firebaseio.com/contact.json?shallow=true')
    .subscribe((items: {}) => it.totalMessages= "Total Messages Received: "+ (Object.keys(items).length))
}

