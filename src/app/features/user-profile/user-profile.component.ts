import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeatureService } from '../services/feature.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  queList: any = [];
  tags: any = [];
  userInfo: any = {};
  topTagList: any = [];

  constructor(private activatedRoute: ActivatedRoute, private featureSer: FeatureService) { }

  ngOnInit() {
    this.userInfo = {}
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.getUserData(id)
      this.getTopTags(id)
      this.getQueonUser(id)
    })
  }

  getUserData(userId) {
    this.featureSer.getUserInfo(userId).subscribe((res: any) => {
      if (res.items) {
        this.userInfo = res.items[0];
      }
    })
  }

  getTopTags(userId) {
    this.featureSer.getTopTagsofUser(userId).subscribe((res: any) => {
      if (res.items) {
        this.topTagList = res.items;
      }
    })
  }

  getQueonUser(userId) {
    this.featureSer.getQueonUser(userId).subscribe((res: any) => {
      console.log("quelist=>", res)
      if (res.items) {
        this.queList = res.items;
      }
    })
  }
}
