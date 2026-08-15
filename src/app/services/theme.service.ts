import { Injectable } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
import { usePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Nora from '@primeuix/themes/nora';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme$ = new BehaviorSubject<string>('Aura')
  public currentTheme$ = this.theme$.asObservable()

  private isDarkMode$ = new BehaviorSubject<boolean>(false)
  public currentDarkMode$ = this.isDarkMode$.asObservable()

  constructor() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      this.setTheme(savedTheme)
    }

    const saveDarkMode = localStorage.getItem('darkMode')
    if (saveDarkMode !== null) {
      const isDark = saveDarkMode === 'true'
      this.isDarkMode$.next(isDark)
      document.documentElement.classList.toggle('my-app-dark', isDark)
    }
  }

  public setTheme(theme: string): void {
    let selectedPreset = Aura;

    if (theme === 'Lara') selectedPreset = Lara;
    if (theme === 'Nora') selectedPreset = Nora;

    usePreset(selectedPreset)

    this.theme$.next(theme)
    localStorage.setItem('theme', theme)
  }

  public toggleDarkMode(): void {
    const newMode = !this.isDarkMode$.value;
    this.isDarkMode$.next(newMode)
    localStorage.setItem('darkMode', String(newMode))

    document.documentElement.classList.toggle('my-app-dark', newMode)
  }
}
