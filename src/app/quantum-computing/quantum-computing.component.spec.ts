import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumComputingComponent } from './quantum-computing.component';

describe('QuantumComputingComponent', () => {
  let component: QuantumComputingComponent;
  let fixture: ComponentFixture<QuantumComputingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantumComputingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantumComputingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
