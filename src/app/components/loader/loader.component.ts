import { Component, inject } from '@angular/core';
import { LoaderService } from '../../services/loader/loader.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [AsyncPipe],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  public loaderService = inject(LoaderService)

  activateLoader$ = this.loaderService.isLoading$
}
