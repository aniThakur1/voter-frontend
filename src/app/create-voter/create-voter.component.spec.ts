import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVoterComponent } from './create-voter.component';

describe('CreateVoterComponent', () => {
  let component: CreateVoterComponent;
  let fixture: ComponentFixture<CreateVoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVoterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
