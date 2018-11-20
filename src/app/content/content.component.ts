import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentUiService } from '../services/component-ui.service';
import { UiComponent } from '../shared/ui-component';
import { IconUiService } from '../services/icon-ui.service';
import { UiIcon } from '../shared/ui-icon';
import { fadeAnimation } from '../shared/animations';

@Component({
  selector: 'sbb-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class ContentComponent implements OnInit {

  id: string;

  uiComponent: UiComponent;
  uiIcon: UiIcon;
  isSourceTabClicked: boolean;
  options = { theme: 'default', language: 'typescript', readOnly: true, automaticLayout: true };
  componentDocLoaded: boolean;

  constructor(private componentUiService: ComponentUiService,
    private iconUiService: IconUiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.componentDocLoaded = false;
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.uiComponent = this.componentUiService.getUiComponentByRouterLink(this.id);

      if (!this.uiComponent) {
        this.uiIcon = this.iconUiService.getUiIconByRouterLink(this.id);
      }
      this.componentDocLoaded = true;

    });
  }

}