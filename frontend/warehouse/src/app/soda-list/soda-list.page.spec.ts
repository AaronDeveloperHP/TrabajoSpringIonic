import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SodaListPage } from './soda-list.page';

describe('SodaListPage', () => {
  let component: SodaListPage;
  let fixture: ComponentFixture<SodaListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SodaListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SodaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
