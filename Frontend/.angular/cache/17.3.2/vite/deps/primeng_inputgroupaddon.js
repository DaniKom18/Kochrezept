import {
  SharedModule
} from "./chunk-CHKPHMVK.js";
import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-GR7PAGTY.js";
import {
  Component,
  Input,
  NgModule,
  setClassMetadata,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty
} from "./chunk-T7VOUWWB.js";

// node_modules/primeng/fesm2022/primeng-inputgroupaddon.mjs
var _c0 = ["*"];
var InputGroupAddon = class _InputGroupAddon {
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  static ɵfac = function InputGroupAddon_Factory(t) {
    return new (t || _InputGroupAddon)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _InputGroupAddon,
    selectors: [["p-inputGroupAddon"]],
    hostAttrs: [1, "p-element", "p-inputgroup-addon"],
    inputs: {
      style: "style",
      styleClass: "styleClass"
    },
    ngContentSelectors: _c0,
    decls: 2,
    vars: 3,
    consts: [[3, "ngClass", "ngStyle"]],
    template: function InputGroupAddon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ctx.styleClass)("ngStyle", ctx.style);
        ɵɵattribute("data-pc-name", "inputgroupaddon");
      }
    },
    dependencies: [NgClass, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddon, [{
    type: Component,
    args: [{
      selector: "p-inputGroupAddon",
      template: `
        <div [attr.data-pc-name]="'inputgroupaddon'" [ngClass]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
        </div>
    `,
      host: {
        class: "p-element p-inputgroup-addon"
      }
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }]
  });
})();
var InputGroupAddonModule = class _InputGroupAddonModule {
  static ɵfac = function InputGroupAddonModule_Factory(t) {
    return new (t || _InputGroupAddonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _InputGroupAddonModule,
    declarations: [InputGroupAddon],
    imports: [CommonModule],
    exports: [InputGroupAddon, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [InputGroupAddon, SharedModule],
      declarations: [InputGroupAddon]
    }]
  }], null, null);
})();
export {
  InputGroupAddon,
  InputGroupAddonModule
};
//# sourceMappingURL=primeng_inputgroupaddon.js.map
