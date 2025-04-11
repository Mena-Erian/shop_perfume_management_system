import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeYourPerfumeComponent } from './make-your-perfume.component';

describe('MakeYourPerfumeComponent', () => {
  let component: MakeYourPerfumeComponent;
  let fixture: ComponentFixture<MakeYourPerfumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeYourPerfumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeYourPerfumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
