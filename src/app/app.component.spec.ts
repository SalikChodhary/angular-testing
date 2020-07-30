import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core'
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser'


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement
  let htmlElement: HTMLElement
  beforeEach(async(() => { 
    TestBed.configureTestingModule({
      declarations: [AppComponent], 

    }).compileComponents()
  }))

  beforeEach(() => { 
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance;

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('.likes'))
    htmlElement = debugElement.nativeElement;
  })

  it('should increment the likes by 1', () => { 
    const initialValue = component.likesCount
    component.newLike()
    fixture.detectChanges()
    const newValue = component.likesCount

    expect(newValue).toBeGreaterThan(initialValue);
  })

  it('should decrement the likes by 1', () => { 
    const initialValue = component.likesCount
    component.newDislike()
    fixture.detectChanges()
    const newValue = component.likesCount

    expect(newValue).toBeLessThan(initialValue);
  })

  it('should display the current number of likes', () => { 
    //assert that the text on screen is of number 0
    expect(htmlElement.textContent).toEqual('Total Likes: 0')
  })
});
