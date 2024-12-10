import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendasFormComponent } from './agendas-form.component';

describe('AgendasFormComponent', () => {
  let component: AgendasFormComponent;
  let fixture: ComponentFixture<AgendasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendasFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
