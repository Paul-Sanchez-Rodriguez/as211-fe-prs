import { Component, OnInit } from '@angular/core';
import { Funcionary } from '@soa/funcionary/model/funcionary.model';
import { FuncionaryService } from '@soa/funcionary/services/funcionary.service';

@Component({
  selector: 'app-funcionary-list',
  templateUrl: './funcionary-list.component.html',
  styleUrls: ['./funcionary-list.component.scss'],
})
export class FuncionaryListComponent implements OnInit {
  funcionaryColumns: string[] = ['name', 'surname', 'dni', 'phonenumber'];
  dataSource: Funcionary[] = [];

  constructor(private funcionaryService: FuncionaryService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.funcionaryService
      .findAll()
      .subscribe((res) => (this.dataSource = res));
  }
}
