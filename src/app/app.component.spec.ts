import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ApplicationModule } from '@angular/core';

let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule, 
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ISBN'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ISBN');
  });

  it('ISBN "780470059029" should return true', () =>
  {
    expect(component.checkISBN("9780470059029")).toEqual(true);
  });

  it ('ISBN "978 0 471 48648 0" should return true', () =>
  {
    expect(component.checkISBN("978 0 471 48648 0")).toEqual(true);
  });

  it('ISBN "978-0596809485" should return true', () =>
  {
    expect(component.checkISBN("978-0596809485")).toEqual(true);
  });

  it('ISBN "978-0-13-149505-0" should return true', () =>
  {
    expect(component.checkISBN("978-0-13-149505-0")).toEqual(true);
  });

  it('ISBN "978-0-262-13472-9" should return true', () =>
  {
    expect(component.checkISBN("978-0-262-13472-9")).toEqual(true);
  });

  it('the length of ISBN "" is 0 should return false', () =>
  {
    expect(component.checkISBN("")).toEqual(false);
  });

  it('the length of ISBN "1234567890" is < 13 should return false', () =>
  {
    expect(component.checkISBN("1234567890")).toEqual(false);
  });

  it('the length of ISBN "12345678901234" > 13 should return false', () =>
  {
    expect(component.checkISBN("12345678901234")).toEqual(false);
  });
 
  it('ISBN "111 111 111 111 6" should return true', () =>
  {
    expect(component.checkISBN("111 111 111 111 6")).toEqual(true);
  });

  it('ISBN "111a111 111 111 6" contains character other than number, " ", or "-" should return false', () =>
  {
    expect(component.checkISBN("111a111 111 111 6")).toEqual(false);
  });
});
