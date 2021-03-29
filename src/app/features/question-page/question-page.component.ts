import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureService } from '../services/feature.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {

  queList: any = [];

  constructor(private router: Router, private featureSer: FeatureService) { }

  ngOnInit() {
    this.getQueList()
  }

  getQueList() {
    this.featureSer.getFeaturedQueList().subscribe((res: any) => {
      console.log("res=>", res)
      if (res.items) {
        this.queList = res.items;
      }
    })
  }

  userProfile(userId) {
    this.router.navigate(['/user/' + userId])
  }

  getTimeString(timestamp) {
    console.log(timestamp)
    timestamp = +new Date(timestamp * 1000)
    let currentTime = +new Date()
    let string = ''
    let diff = currentTime - timestamp
    console.log("diff=>", diff / 1000)
    if (((diff) / 1000) <= 60) {
      string = "asked " + diff + "secs ago"
    } else if (((diff) / 1000 / 60) <= 60) {
      string = "asked " + diff + "mins ago"
    } else {
      string = new Date(timestamp).getDate() + "/" + new Date(timestamp).getMonth() + " at " + new Date(timestamp).getHours() + ":" + new Date(timestamp).getMinutes()
    }
    return string;
  }
}
