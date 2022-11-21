import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogbreedComponent } from './dogbreed.component';

describe('DogbreedComponent', () => {
  let component: DogbreedComponent;
  let fixture: ComponentFixture<DogbreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogbreedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogbreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
