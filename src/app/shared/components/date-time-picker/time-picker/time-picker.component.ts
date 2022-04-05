import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'brc-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {

  @ViewChild('timepicker') timepicker: ElementRef;
  @ViewChild('hourpicker') hourpicker: ElementRef;
  @ViewChild('hidepicker') toggleButton: ElementRef;
  placeholder: string = "HH : mm";
  @Input() times: string ="20 : 11";
  @Output() getHour = new EventEmitter<string>();

  @Output() getMinute = new EventEmitter<string>();

  time : any = [
    {hour : '00'},
    {minute : '00'},
  ]
  showed = false;

  stringTimeNow = '';
  timeNow : any;
  

  addHour(item){
    this.getHour.emit(item)
  }
  addMinute(item){
    this.getMinute.emit(item)
  }
  addTimeNow(){
    this.timeNow= new Date();
    this.stringTimeNow = formatDate(this.timeNow, 'HH:mm', 'en-US', '+7');
    this.getHour.emit(this.stringTimeNow.slice(0,2))
    this.getMinute.emit(this.stringTimeNow.slice(3,5))
  }

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click',(e:Event)=>{
      if(!this.toggleButton.nativeElement.contains(e.target) && !this.timepicker.nativeElement.contains(e.target) && !this.hourpicker.nativeElement.contains(e.target)) {
          this.showed=false;
      }
    });
  }

  hours = [];
  minutes = [];
  ngOnInit(): void {
    for(let i = 0; i <= 23; i++){
      if(i < 10)
        this.hours.push("0"+i)
      else
        this.hours.push(i)
    }
    for(let i = 0; i < 60; i++){
      if(i < 10)
        this.minutes.push("0"+i)
      else
        this.minutes.push(i)
    }
     this.time.hour = '';
     this.time.minute = '';
  }

  getHours(item){
    
    this.time.hour = item+":";
    if(this.time.minute == "" ){
      this.time.minute = "00";
    }

  }
  getMinutes(item){
    console.log(this.time.hour);
    if(this.time.hour == "" ) {
      this.time.hour = "00:";
    }
    this.time.minute = "" +item
  }

  stringTimeNowTest = '';
  timeNowTest : any;
  getTimeNowTest(){
    this.timeNowTest= new Date();
    this.stringTimeNowTest = formatDate(this.timeNowTest, 'HH:mm ', 'en-US', '+7');
    this.time.hour =  this.stringTimeNowTest.slice(0,3)
    this.time.minute =  this.stringTimeNowTest.slice(3,5)
    console.log(this.time);
  }

  strTimeInput : string
  getStringTime(e){

    //format hh:mm 24h
    var regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

    //get value from input
    this.strTimeInput = e.target.value

    //check regex
    if(!regex.test(this.strTimeInput.replace(/\s/g, ''))) {
      alert('Vui lòng nhập lại');
    }
    else{
    //remove space
    this.strTimeInput.replace(/\s/g, '');
    console.log(this.strTimeInput.replace(/\s/g, ''));
    this.time.hour = this.strTimeInput.replace(/\s/g, '').slice(0,2)+":";
    this.time.minute = this.strTimeInput.replace(/\s/g, '').slice(3,5)
    this.getHour.emit(this.time.hour.slice(0,2))
    this.getMinute.emit(this.time.minute)
   }

  }
  toggleMenu() {
    this.showed = !this.showed;
  }


}
