import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    this.toastr.success('Welcome to the application', 'Success');
  }
  title = 'multi-layout';
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  showWarning() {
    this.toastr.warning('Hello world!', 'Toastr fun!');
  }
}
