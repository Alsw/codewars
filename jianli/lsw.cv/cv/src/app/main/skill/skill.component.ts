import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { SkillCircleCanvas } from './skill.circle.canvas';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() public skillName: string;
  @Input() public skillGradeNumber: number;
  private skillGradeMapKeys = [0, 30, 50, 70, 95, 100];
  private skillGradeMapValues = ['知道', '了解', '熟悉', '掌握', '精通', '全能'];
  private circleCanvasData = new SkillCircleCanvas();
  public skillGrade: string;
  constructor(public elementRef: ElementRef
  ) {
    this.circleCanvasData.bgColor = 'gray';
    this.circleCanvasData.innerColor = '#EB5425';
    this.circleCanvasData.lineWidth = 8;
    this.circleCanvasData.x = 76;
    this.circleCanvasData.y = 76;
    this.circleCanvasData.r = 68;
    this.circleCanvasData.sAngle = Math.PI * 1.5;
  }

  ngOnInit() {
    this.circleCanvasData.eAngle = (this.skillGradeNumber / 100 - 0.25) * 2 * Math.PI;
    this.skillGrade = this.skillGradeMapValues[this.findValue(this.skillGradeMapKeys, this.skillGradeNumber)];
    console.log(this.circleCanvasData.sAngle, this.circleCanvasData.eAngle, (this.skillGradeNumber / 100 - 0.25) * 2 * Math.PI);
    console.log(this.elementRef.nativeElement.querySelectorAll('canvas'));
    const canvas = this.elementRef.nativeElement.querySelectorAll('canvas')[0];
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = this.circleCanvasData.lineWidth;
    ctx.beginPath();
    ctx.arc(
      this.circleCanvasData.x,
      this.circleCanvasData.y,
      this.circleCanvasData.r,
      0,
      Math.PI * 2);
    ctx.strokeStyle = this.circleCanvasData.bgColor;
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(
      this.circleCanvasData.x,
      this.circleCanvasData.y,
      this.circleCanvasData.r,
      this.circleCanvasData.sAngle,
      this.circleCanvasData.eAngle);
    ctx.strokeStyle = this.circleCanvasData.innerColor;
    ctx.stroke();
    ctx.closePath();
  }

  public findValue(array, value): number {
    for (let i = array.length; i--;) {
      if (value >= array[i - 1] && value < array[i]) {
        return i - 1;
      }
    }
  }
}
