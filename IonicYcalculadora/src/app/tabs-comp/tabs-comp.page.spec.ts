import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsCompPage } from './tabs-comp.page';

describe('TabsCompPage', () => {
  let component: TabsCompPage;
  let fixture: ComponentFixture<TabsCompPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsCompPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
