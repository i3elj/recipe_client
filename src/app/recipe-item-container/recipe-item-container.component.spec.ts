import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemContainerComponent } from './recipe-item-container.component';

describe('RecipeItemContainerComponent', () => {
  let component: RecipeItemContainerComponent;
  let fixture: ComponentFixture<RecipeItemContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeItemContainerComponent]
    });
    fixture = TestBed.createComponent(RecipeItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
