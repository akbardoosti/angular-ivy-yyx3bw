import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
/**
 * @package YasinOsintDashboard
 * @author Akbar Doosti<wpx93.ir@gmail.com>
 * @since 1.0.0
 */
@Component({
  selector: 'app-wpx-modal',
  templateUrl: './wpx-modal.component.html',
  styleUrls: ['./wpx-modal.component.css'],
})
/**
 * Designed for create modal in the page
 * @author Akbar Doosti<wpx93.ir@gmail.com>
 * @since 1.0.0
 */
export class WpxModalComponent implements OnInit {
  MODAL_ID: any = uuidv4();
  CLOSE_SVG_ICON: string =
    '<?xml version="1.0" encoding="iso-8859-1"?><!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256 "/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
  constructor() {}

  ngOnInit() {}

  closeModal() {
    const EL = document.getElementById(this.MODAL_ID);

    if (EL != null) {
      if (EL.style.display === 'none') {
        // ✅ Shows element if hidden
        EL.style.display = 'block';
      } else {
        // ✅ Hides element if shown
        EL.style.display = 'none';
      }
    }
  }
}
