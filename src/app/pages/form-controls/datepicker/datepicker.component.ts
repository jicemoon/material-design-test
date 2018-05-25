import { Component, OnInit } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats} from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';

export const MY_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'YYYY年MM月DD日',
  },
  display: {
    dateInput: 'YYYY年MM月DD日',
    monthYearLabel: 'YYYY年MM月',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY年MM月',
  },
};

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'zh-cn'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class DatepickerComponent implements OnInit {
  startDate = new Date(1990, 0, 1);

  dateFC = new FormControl(new Date());
  serializedDateFC = new FormControl((new Date()).toISOString());

  minDate = new Date(2018, 4, 20);
  maxDate = new Date(2018, 4, 30);

  eventsStr: string[] = [];

  local = 'zh-cn';

  constructor(private adapter: DateAdapter<any>) {
  }

  ngOnInit() {
  }
  myFilter(d: Date | any): boolean {
    if (!(d instanceof Date)) {
      d = d._d;
    }
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.eventsStr.push(`${type}: ${(new Date(event.value))}`);
  }
  isCheinese() {
    return this.local === 'zh-cn';
  }
  switchFrenchOrChinese() {
    this.local = this.local === 'zh-cn' ? 'us-en' : 'zh-cn';
    this.adapter.setLocale(this.local);
  }
}
