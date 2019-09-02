import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/model/model/user.model';

import Swal from 'sweetalert2';

import { ClientService } from 'src/app/model/objects/services/client.service';
@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor(private update: ClientService) { }

  ngOnInit() {
  }

  updateCli(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Wait a second please...'
    });

    Swal.showLoading();

    // envio al servicio para actualizar
  }
}
