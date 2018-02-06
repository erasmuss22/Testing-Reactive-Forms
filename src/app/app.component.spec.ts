import { TestBed, async } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should require a username', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component: AppComponent = fixture.componentInstance;
    component.ngOnInit();
    
    expect(component.username.errors['required']).toBeDefined();

    component.username.setValue('a');

    expect(component.username.errors['required']).toBeUndefined();
  }));

  it('should have an error with fewer than 4 characters in a username', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component: AppComponent = fixture.componentInstance;
    component.ngOnInit();
    
    component.username.setValue('aaa');
    expect(component.username.errors.minlength).toBeDefined();
  }));

  it('should have an error with more than 10 characters in a username', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component: AppComponent = fixture.componentInstance;
    component.ngOnInit();
    
    component.username.setValue('aaaaaaaaaaa');
    expect(component.username.errors.maxlength).toBeDefined();
  }));
});
