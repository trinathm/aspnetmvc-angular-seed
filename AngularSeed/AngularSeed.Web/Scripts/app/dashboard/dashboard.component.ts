import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { DashboardService } from './dashboard.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'home/dashboard'
})
export class DashboardComponent implements OnInit {

    constructor(
        private dashboardService: DashboardService,
        private router: Router) { }

    ngOnInit(): void {
    }
}