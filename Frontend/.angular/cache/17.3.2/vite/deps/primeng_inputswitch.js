import {
  NG_VALUE_ACCESSOR
} from "./chunk-2GFFBTBY.js";
import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-GR7PAGTY.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵviewQuery
} from "./chunk-T7VOUWWB.js";

// node_modules/primeng/fesm2022/primeng-inputswitch.mjs
var _c0 = ["input"];
var _c1 = (a0, a1, a2) => ({
  "p-inputswitch p-component": true,
  "p-inputswitch-checked": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var INPUTSWITCH_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputSwitch),
  multi: true
};
var InputSwitch = class _InputSwitch {
  cd;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the input element.
   * @group Props
   */
  inputId;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * Value in checked state.
   * @group Props
   */
  trueValue = true;
  /**
   * Value in unchecked state.
   * @group Props
   */
  falseValue = false;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Callback to invoke when the on value change.
   * @param {InputSwitchChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  input;
  modelValue = false;
  focused = false;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  constructor(cd) {
    this.cd = cd;
  }
  onClick(event) {
    if (!this.disabled && !this.readonly) {
      this.modelValue = this.checked() ? this.falseValue : this.trueValue;
      this.onModelChange(this.modelValue);
      this.onChange.emit({
        originalEvent: event,
        checked: this.modelValue
      });
      event.preventDefault();
      this.input.nativeElement.focus();
    }
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
    this.onModelTouched();
  }
  writeValue(value) {
    this.modelValue = value;
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  checked() {
    return this.modelValue === this.trueValue;
  }
  static ɵfac = function InputSwitch_Factory(t) {
    return new (t || _InputSwitch)(ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _InputSwitch,
    selectors: [["p-inputSwitch"]],
    viewQuery: function InputSwitch_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass",
      tabindex: "tabindex",
      inputId: "inputId",
      name: "name",
      disabled: "disabled",
      readonly: "readonly",
      trueValue: "trueValue",
      falseValue: "falseValue",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      onChange: "onChange"
    },
    features: [ɵɵProvidersFeature([INPUTSWITCH_VALUE_ACCESSOR])],
    decls: 5,
    vars: 22,
    consts: [["input", ""], [3, "click", "ngClass", "ngStyle"], [1, "p-hidden-accessible"], ["type", "checkbox", "role", "switch", 3, "focus", "blur", "checked", "disabled"], [1, "p-inputswitch-slider"]],
    template: function InputSwitch_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 1);
        ɵɵlistener("click", function InputSwitch_Template_div_click_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onClick($event));
        });
        ɵɵelementStart(1, "div", 2)(2, "input", 3, 0);
        ɵɵlistener("focus", function InputSwitch_Template_input_focus_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFocus());
        })("blur", function InputSwitch_Template_input_blur_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onBlur());
        });
        ɵɵelementEnd()();
        ɵɵelement(4, "span", 4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ɵɵpureFunction3(18, _c1, ctx.checked(), ctx.disabled, ctx.focused))("ngStyle", ctx.style);
        ɵɵattribute("data-pc-name", "inputswitch")("data-pc-section", "root");
        ɵɵadvance();
        ɵɵattribute("data-pc-section", "hiddenInputWrapper")("data-p-hidden-accessible", true);
        ɵɵadvance();
        ɵɵproperty("checked", ctx.checked())("disabled", ctx.disabled);
        ɵɵattribute("id", ctx.inputId)("aria-checked", ctx.checked())("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("name", ctx.name)("tabindex", ctx.tabindex)("data-pc-section", "hiddenInput");
        ɵɵadvance(2);
        ɵɵattribute("data-pc-section", "slider");
      }
    },
    dependencies: [NgClass, NgStyle],
    styles: ['@layer primeng{.p-inputswitch{position:relative;display:inline-block;-webkit-user-select:none;user-select:none}.p-inputswitch-slider{position:absolute;cursor:pointer;inset:0;border:1px solid transparent}.p-inputswitch-slider:before{position:absolute;content:"";top:50%}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputSwitch, [{
    type: Component,
    args: [{
      selector: "p-inputSwitch",
      template: `
        <div
            [ngClass]="{ 'p-inputswitch p-component': true, 'p-inputswitch-checked': checked(), 'p-disabled': disabled, 'p-focus': focused }"
            [ngStyle]="style"
            [class]="styleClass"
            (click)="onClick($event)"
            [attr.data-pc-name]="'inputswitch'"
            [attr.data-pc-section]="'root'"
        >
            <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'" [attr.data-p-hidden-accessible]="true">
                <input
                    #input
                    [attr.id]="inputId"
                    type="checkbox"
                    role="switch"
                    [checked]="checked()"
                    [disabled]="disabled"
                    [attr.aria-checked]="checked()"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [attr.name]="name"
                    [attr.tabindex]="tabindex"
                    (focus)="onFocus()"
                    (blur)="onBlur()"
                    [attr.data-pc-section]="'hiddenInput'"
                />
            </div>
            <span class="p-inputswitch-slider" [attr.data-pc-section]="'slider'"></span>
        </div>
    `,
      providers: [INPUTSWITCH_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ['@layer primeng{.p-inputswitch{position:relative;display:inline-block;-webkit-user-select:none;user-select:none}.p-inputswitch-slider{position:absolute;cursor:pointer;inset:0;border:1px solid transparent}.p-inputswitch-slider:before{position:absolute;content:"";top:50%}}\n']
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    trueValue: [{
      type: Input
    }],
    falseValue: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }]
  });
})();
var InputSwitchModule = class _InputSwitchModule {
  static ɵfac = function InputSwitchModule_Factory(t) {
    return new (t || _InputSwitchModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _InputSwitchModule,
    declarations: [InputSwitch],
    imports: [CommonModule],
    exports: [InputSwitch]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputSwitchModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [InputSwitch],
      declarations: [InputSwitch]
    }]
  }], null, null);
})();
export {
  INPUTSWITCH_VALUE_ACCESSOR,
  InputSwitch,
  InputSwitchModule
};
//# sourceMappingURL=primeng_inputswitch.js.map
