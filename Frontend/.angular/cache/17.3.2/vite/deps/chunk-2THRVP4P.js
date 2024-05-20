import {
  DomHandler
} from "./chunk-EK2YCWCT.js";
import {
  CommonModule
} from "./chunk-GR7PAGTY.js";
import {
  Directive,
  ElementRef,
  Input,
  NgModule,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject
} from "./chunk-T7VOUWWB.js";

// node_modules/primeng/fesm2022/primeng-autofocus.mjs
var AutoFocus = class _AutoFocus {
  host;
  constructor(host) {
    this.host = host;
  }
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  focused = false;
  ngAfterContentChecked() {
    if (!this.focused) {
      if (this.autofocus) {
        setTimeout(() => {
          const focusableElements = DomHandler.getFocusableElements(this.host.nativeElement);
          if (focusableElements.length === 0) {
            this.host.nativeElement.focus();
          }
          if (focusableElements.length > 0) {
            focusableElements[0].focus();
          }
          this.focused = true;
        });
      }
    }
  }
  static ɵfac = function AutoFocus_Factory(t) {
    return new (t || _AutoFocus)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _AutoFocus,
    selectors: [["", "pAutoFocus", ""]],
    hostAttrs: [1, "p-element"],
    inputs: {
      autofocus: "autofocus"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocus, [{
    type: Directive,
    args: [{
      selector: "[pAutoFocus]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ElementRef
  }], {
    autofocus: [{
      type: Input
    }]
  });
})();
var AutoFocusModule = class _AutoFocusModule {
  static ɵfac = function AutoFocusModule_Factory(t) {
    return new (t || _AutoFocusModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AutoFocusModule,
    declarations: [AutoFocus],
    imports: [CommonModule],
    exports: [AutoFocus]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocusModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [AutoFocus],
      declarations: [AutoFocus]
    }]
  }], null, null);
})();

export {
  AutoFocus,
  AutoFocusModule
};
//# sourceMappingURL=chunk-2THRVP4P.js.map
