import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexusLibComponent } from './nexus-lib.component';

describe('NexusLibComponent', () => {
  let component: NexusLibComponent;
  let fixture: ComponentFixture<NexusLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NexusLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NexusLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
