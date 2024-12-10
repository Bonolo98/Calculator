import { NgStyle, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgStyle, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator';
  currentValue: string = '';
  previousValue: string = '';
  operator: string = '';
  result: string = '';

  // Handle the number and operator input
  pressKey(value: string): void {
    if (['+', '-', '*', '/'].includes(value)) {
      // Set the operator if it's an operator
      if (this.currentValue !== '') {
        this.previousValue = this.currentValue;
        this.operator = value;
        this.currentValue = '';
      }
    } else if (value === '=') {
      // Calculate the result if '=' is pressed
      this.calculate();
    } else if (value === 'C') {
      // Clear the calculator if 'C' is pressed
      this.clear();
    } else {
      // Append the number to the current value
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
