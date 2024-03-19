import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SassComponent } from './sass.component';

describe('SassComponent', () => {
  let component: SassComponent;
  let fixture: ComponentFixture<SassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
