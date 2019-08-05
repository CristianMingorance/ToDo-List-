import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-contain',
  templateUrl: './contain.component.html',
  styleUrls: ['./contain.component.css']
})
export class ContainComponent implements OnInit {


  tareas: string[] = ["JavaScript", "Python", "Angular", "React", "Vue.js"]

  deleteTask(deletar: number) {


    this.tareas.splice(deletar, 1)
  }

  addElement(): void {

    let flag = true;

    let nuevoElemento: string = ( < HTMLInputElement > document.querySelectorAll("#texto")[0]).value;


    ( < HTMLInputElement > document.querySelectorAll("#texto")[0]).value = "";

    if (nuevoElemento == "") {

      flag = false;
      alert("Necesitar añadir un nombre")

    } else {

      this.tareas.push(nuevoElemento);

    }
  }


  constructor() {}

  ngOnInit() {}
}
