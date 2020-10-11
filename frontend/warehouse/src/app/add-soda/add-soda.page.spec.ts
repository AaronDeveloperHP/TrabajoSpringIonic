import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSodaPage } from './add-soda.page';

describe('AddSodaPage', () => {
  let component: AddSodaPage;
  let fixture: ComponentFixture<AddSodaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSodaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSodaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
