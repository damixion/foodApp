import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bmi-calc',
  templateUrl: './bmi-calc.component.html',
  styleUrls: ['./bmi-calc.component.scss']
})
export class BmiCalcComponent implements OnInit {

  result = 0;
  waga: number;
  wzrost: number;
  diagnostic: Diagnostic = {advcie: '', verdict: ''};

  constructor() { }

  ngOnInit(): void {
  }

  obliczBmi(): void
  {
      this.result = Math.floor(this.waga / Math.pow(this.wzrost, 2));
      this.getResult();

  }

  getResult(): void
  {
    if (this.result < 19 )
    {
      this.diagnostic.advcie = 'Konieczne jest dożywienie organizmu';
      this.diagnostic.verdict = 'niedowaga';
    }
    else if (this.result >= 19 &&  this.result < 25)
    {
      this.diagnostic.advcie = 'Gratulacje !!!';
      this.diagnostic.verdict = 'prawidłowa waga';
    }
    else if (this.result >= 25 &&  this.result < 30)
    {
      this.diagnostic.advcie = 'Nie jest to jeszcze otyłość, ale powinieneś zmniejszyć mase ciała';
      this.diagnostic.verdict = 'nadwaga';
    }
    else if(this.result >= 30 &&  this.result < 35)
    {
      this.diagnostic.advcie = 'Przy tym typie otyłość ryzyko zachorowania na choroby cywyilizacyjne zwiększa sie 2 krotnie';
      this.diagnostic.verdict = 'otyłość 1 stopnia';
    }
    else if(this.result >= 35 &&  this.result < 40)
    {
      this.diagnostic.advcie = 'Przy tym typie otyłość ryzyko zachorowania na choroby cywyilizacyjne zwiększa sie 3 krotnie';
      this.diagnostic.verdict = 'otyłość 2 stopnia';
    }
    else if(this.result > 40)
    {
      this.diagnostic.advcie = 'Zagraża twojemu życiu';
      this.diagnostic.verdict = 'otyłość 3 stopnia';
    }

  }
}
export interface Diagnostic
{
  verdict: string;
  advcie: string;
}
