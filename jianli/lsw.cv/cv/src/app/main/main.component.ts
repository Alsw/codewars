import { Component, OnInit } from '@angular/core';
import { MySkillModel } from './model/mySkill.model';
import { MyProductModel } from './model/myProduct.model';
import { MainService } from './mian.serve';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MainService]
})
export class MainComponent implements OnInit {
  public mySkillModels: Array<MySkillModel>;
  public myProductList: Array<MyProductModel>;
  constructor(private mainService: MainService) {
    this.mySkillModels = [
      new MySkillModel('HTML/HTML5', 85),
      new MySkillModel('CSS/CSS3', 85),
      new MySkillModel('JavaScript', 78),
      new MySkillModel('Angular1/2/4', 67),
      new MySkillModel('Jquery/Http/Ajax', 65),
      new MySkillModel('Php/Java', 30),
      new MySkillModel('RxJs', 55),
      new MySkillModel('TypeScript/ES6', 65),
      new MySkillModel('Bootstrap/Layer/Swiper/...', 65),
    ];
  }

  ngOnInit() {
    this.mainService.productList.map(res => res = res.json()).subscribe(res => {
      this.myProductList = res.productList;
    });

  }

}
