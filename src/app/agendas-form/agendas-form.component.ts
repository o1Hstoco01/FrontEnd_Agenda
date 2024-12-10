import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgendasService } from '../agendas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agendas-form',
  templateUrl: './agendas-form.component.html',
  styleUrl: './agendas-form.component.css'
})
export class AgendasFormComponent implements OnInit{

isEditing: boolean = false;
formGroupAgendas: FormGroup;
  constructor(private FormBuilder: FormBuilder, private activeRoute: ActivatedRoute, private service: AgendasService, private router: Router){

    this.formGroupAgendas = FormBuilder.group({
      id:             [''],
      compromisso:    [''],
      data:           [''],
      horario:        [''],
      local:          ['']
    })
  }

    save(){
      this.service.save(this.formGroupAgendas.value).subscribe({
        next:()=> this.router.navigate(['agendas'])
      })
    }

    update(){
      this.service.update(this.formGroupAgendas.value).subscribe({
        next:()=> this.router.navigate(['agendas'])
      })
    }

    ngOnInit(): void{
      const id = Number(this.activeRoute.snapshot.paramMap.get("id"));
      if(id != 0){
        this.isEditing=true;
        this.loadAgenda(id);
      }
    }

    loadAgenda(id: number){
      this.service.getAgendasById(id).subscribe({
        next: data=> this.formGroupAgendas.setValue(data)
      });
    }


}
