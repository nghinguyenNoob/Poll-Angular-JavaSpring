import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorCustomComponent } from './mat-paginator-custom.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('MatPaginatorCustomComponent', () => {
  let component: MatPaginatorCustomComponent;
  let fixture: ComponentFixture<MatPaginatorCustomComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatPaginatorCustomComponent],
      imports: [MatPaginatorModule, MatFormFieldModule],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(MatPaginatorCustomComponent);
    component = fixture.componentInstance;
    component.pageSize = 10;
    component.total = 3000;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });
  describe('Check output component', () => {
    it('should emit value of onPageChange', () => {
      // arrange
      spyOn(component.onPageChange, 'emit');
      // act
      component.onPageEvent({ data: 'this is fake data' });
      // assert
      expect(component.onPageChange.emit).toHaveBeenCalled();
    });
    it('should return value onPageChange when call func onPageEvent', () => {
      // arrange
      spyOn(component.onPageChange, 'emit').and.returnValue({
        data: 'this is fake data',
      });

      const expected = { data: 'this is fake data' };

      // assertion
      component.onPageChange.subscribe(
        (res) => expect(res).toEqual(expected),
        (err) => fail(err)
      );

      // act
      component.onPageEvent({ data: 'this is fake data' });
    });
  });
  describe('When component OnChanges', () => {
    it(`should return value after onChange`, async () => {
      //act
      component.ngOnChanges();

      const expected = 10;
      //assertion
      expect(component.pageSize).toBe(expected);
      expect(component.total).toBe(3000);
    });
  });
});
