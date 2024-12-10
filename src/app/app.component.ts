import { NgStyle, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgStyle, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Calculator';
  currentValue: string = '';
  previousValue: string = '';
  operator: string = '';
  result: string = '';

  pressKey(value: string): void {
    if (['+', '-', '*', '/'].includes(value)) {
      if (this.currentValue !== '') {
        this.previousValue = this.currentValue;
        this.operator = value;
        this.currentValue = '';
      }
    } else if (value === '=') {
      this.calculate();
    } else if (value === 'C') {
      this.clear();
    } else {
      this.currentValue += value;
    }
  }

  // Perform calculation based on the operator
  calculate(): void {
    let num1 = parseFloat(this.previousValue);
    let num2 = parseFloat(this.currentValue);

    switch (this.operator) {
      case '+':
        this.result = (num1 + num2).toString();
        break;
      case '-':
        this.result = (num1 - num2).toString();
        break;
      case '*':
        this.result = (num1 * num2).toString();
        break;
      case '/':
        this.result = (num1 / num2).toString();
        break;
      default:
        this.result = 'Error';
    }

    this.previousValue = this.result;
    this.currentValue = '';
    this.operator = '';
  }

  // Clear the calculator
  clear(): void {
    this.currentValue = '';
    this.previousValue = '';
    this.operator = '';
    this.result = '';
  }
}
