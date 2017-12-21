import { Injectable } from '@angular/core';
@Injectable()
export class MySkillModel {
    skillName: string;
    skillGradeNumber: number;
    constructor(a, b) {
        this.skillName = a;
        this.skillGradeNumber = b;
    }
}
