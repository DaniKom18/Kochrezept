import {
  ChevronDownIcon,
  Overlay,
  OverlayModule,
  Scroller,
  ScrollerModule,
  SearchIcon,
  Tooltip,
  TooltipModule
} from "./chunk-QWJIWP4R.js";
import {
  TimesIcon
} from "./chunk-ZTZLEH5A.js";
import {
  Ripple,
  RippleModule
} from "./chunk-7MZQVTDL.js";
import {
  FilterService,
  ObjectUtils,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  UniqueComponentId
} from "./chunk-CHKPHMVK.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-2GFFBTBY.js";
import {
  AutoFocus,
  AutoFocusModule
} from "./chunk-2THRVP4P.js";
import {
  DomHandler
} from "./chunk-EK2YCWCT.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-GR7PAGTY.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  forwardRef,
  setClassMetadata,
  signal,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-T7VOUWWB.js";

// node_modules/primeng/fesm2022/primeng-dropdown.mjs
var _c0 = (a0) => ({
  height: a0
});
var _c1 = (a0, a1, a2) => ({
  "p-dropdown-item": true,
  "p-highlight": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var _c2 = (a0) => ({
  $implicit: a0
});
function DropdownItem_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate((tmp_1_0 = ctx_r0.label) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "empty");
  }
}
function DropdownItem_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c3 = ["container"];
var _c4 = ["filter"];
var _c5 = ["focusInput"];
var _c6 = ["editableInput"];
var _c7 = ["items"];
var _c8 = ["scroller"];
var _c9 = ["overlay"];
var _c10 = ["firstHiddenFocusableEl"];
var _c11 = ["lastHiddenFocusableEl"];
var _c12 = (a0) => ({
  options: a0
});
var _c13 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c14 = () => ({});
function Dropdown_span_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.label() === "p-emptylabel" ? " " : ctx_r2.label());
  }
}
function Dropdown_span_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 25);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.selectedItemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r2.selectedOption));
  }
}
function Dropdown_span_2_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.label() === "p-emptylabel" ? " " : ctx_r2.placeholder());
  }
}
function Dropdown_span_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_span_2_ng_template_4_span_0_Template, 2, 1, "span", 17);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r2.displayPlaceholder());
  }
}
function Dropdown_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 22, 2);
    ɵɵlistener("focus", function Dropdown_span_2_Template_span_focus_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputFocus($event));
    })("blur", function Dropdown_span_2_Template_span_blur_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputBlur($event));
    })("keydown", function Dropdown_span_2_Template_span_keydown_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onKeyDown($event));
    });
    ɵɵtemplate(2, Dropdown_span_2_ng_container_2_Template, 2, 1, "ng-container", 23)(3, Dropdown_span_2_ng_container_3_Template, 1, 4, "ng-container", 24)(4, Dropdown_span_2_ng_template_4_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const defaultPlaceholder_r4 = ɵɵreference(5);
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.inputClass)("pTooltip", ctx_r2.tooltip)("tooltipPosition", ctx_r2.tooltipPosition)("positionStyle", ctx_r2.tooltipPositionStyle)("tooltipStyleClass", ctx_r2.tooltipStyleClass)("autofocus", ctx_r2.autofocus);
    ɵɵattribute("aria-disabled", ctx_r2.disabled)("id", ctx_r2.inputId)("aria-label", ctx_r2.ariaLabel || (ctx_r2.label() === "p-emptylabel" ? void 0 : ctx_r2.label()))("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", (tmp_16_0 = ctx_r2.overlayVisible) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : false)("aria-controls", ctx_r2.overlayVisible ? ctx_r2.id + "_list" : null)("tabindex", !ctx_r2.disabled ? ctx_r2.tabindex : -1)("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0)("aria-required", ctx_r2.required)("required", ctx_r2.required);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.selectedItemTemplate)("ngIfElse", defaultPlaceholder_r4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.selectedItemTemplate && ctx_r2.selectedOption);
  }
}
function Dropdown_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 26, 4);
    ɵɵlistener("input", function Dropdown_input_3_Template_input_input_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onEditableInput($event));
    })("keydown", function Dropdown_input_3_Template_input_keydown_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onKeyDown($event));
    })("focus", function Dropdown_input_3_Template_input_focus_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputFocus($event));
    })("blur", function Dropdown_input_3_Template_input_blur_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputBlur($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.inputClass)("disabled", ctx_r2.disabled);
    ɵɵattribute("maxlength", ctx_r2.maxlength)("placeholder", ctx_r2.modelValue() === void 0 || ctx_r2.modelValue() === null ? ctx_r2.placeholder() : void 0);
  }
}
function Dropdown_ng_container_4_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "TimesIcon", 29);
    ɵɵlistener("click", function Dropdown_ng_container_4_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.clear($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-dropdown-clear-icon");
    ɵɵattribute("data-pc-section", "clearicon");
  }
}
function Dropdown_ng_container_4_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_ng_container_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_ng_container_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 30);
    ɵɵlistener("click", function Dropdown_ng_container_4_span_2_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.clear($event));
    });
    ɵɵtemplate(1, Dropdown_ng_container_4_span_2_1_Template, 1, 0, null, 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "clearicon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.clearIconTemplate);
  }
}
function Dropdown_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dropdown_ng_container_4_TimesIcon_1_Template, 1, 2, "TimesIcon", 27)(2, Dropdown_ng_container_4_span_2_Template, 2, 2, "span", 28);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.clearIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.clearIconTemplate);
  }
}
function Dropdown_ng_container_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 34);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r2.dropdownIcon);
  }
}
function Dropdown_ng_container_6_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon", 35);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-dropdown-trigger-icon");
  }
}
function Dropdown_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dropdown_ng_container_6_span_1_Template, 1, 1, "span", 32)(2, Dropdown_ng_container_6_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 33);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.dropdownIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.dropdownIcon);
  }
}
function Dropdown_span_7_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_span_7_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_span_7_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 36);
    ɵɵtemplate(1, Dropdown_span_7_1_Template, 1, 0, null, 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.dropdownIconTemplate);
  }
}
function Dropdown_ng_template_10_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_10_div_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_10_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dropdown_ng_template_10_div_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 43);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.filterTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c12, ctx_r2.filterOptions));
  }
}
function Dropdown_ng_template_10_div_4_ng_template_2_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SearchIcon", 35);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-dropdown-filter-icon");
  }
}
function Dropdown_ng_template_10_div_4_ng_template_2_span_4_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_ng_template_10_div_4_ng_template_2_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_ng_template_10_div_4_ng_template_2_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_template_10_div_4_ng_template_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 47);
    ɵɵtemplate(1, Dropdown_ng_template_10_div_4_ng_template_2_span_4_1_Template, 1, 0, null, 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.filterIconTemplate);
  }
}
function Dropdown_ng_template_10_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 44)(1, "input", 45, 9);
    ɵɵlistener("input", function Dropdown_ng_template_10_div_4_ng_template_2_Template_input_input_1_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onFilterInputChange($event));
    })("keydown", function Dropdown_ng_template_10_div_4_ng_template_2_Template_input_keydown_1_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onFilterKeyDown($event));
    })("blur", function Dropdown_ng_template_10_div_4_ng_template_2_Template_input_blur_1_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onFilterBlur($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(3, Dropdown_ng_template_10_div_4_ng_template_2_SearchIcon_3_Template, 1, 1, "SearchIcon", 33)(4, Dropdown_ng_template_10_div_4_ng_template_2_span_4_Template, 2, 1, "span", 46);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("value", ctx_r2._filterValue() || "");
    ɵɵattribute("placeholder", ctx_r2.filterPlaceholder)("aria-owns", ctx_r2.id + "_list")("aria-label", ctx_r2.ariaFilterLabel)("aria-activedescendant", ctx_r2.focusedOptionId);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.filterIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.filterIconTemplate);
  }
}
function Dropdown_ng_template_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 42);
    ɵɵlistener("click", function Dropdown_ng_template_10_div_4_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r9);
      return ɵɵresetView($event.stopPropagation());
    });
    ɵɵtemplate(1, Dropdown_ng_template_10_div_4_ng_container_1_Template, 2, 4, "ng-container", 23)(2, Dropdown_ng_template_10_div_4_ng_template_2_Template, 5, 7, "ng-template", null, 8, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const builtInFilterElement_r11 = ɵɵreference(3);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.filterTemplate)("ngIfElse", builtInFilterElement_r11);
  }
}
function Dropdown_ng_template_10_p_scroller_6_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_10_p_scroller_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_ng_template_10_p_scroller_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 43);
  }
  if (rf & 2) {
    const items_r13 = ctx.$implicit;
    const scrollerOptions_r14 = ctx.options;
    ɵɵnextContext(2);
    const buildInItems_r15 = ɵɵreference(9);
    ɵɵproperty("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c13, items_r13, scrollerOptions_r14));
  }
}
function Dropdown_ng_template_10_p_scroller_6_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_10_p_scroller_6_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_ng_template_10_p_scroller_6_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 43);
  }
  if (rf & 2) {
    const scrollerOptions_r16 = ctx.options;
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.loaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c12, scrollerOptions_r16));
  }
}
function Dropdown_ng_template_10_p_scroller_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dropdown_ng_template_10_p_scroller_6_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 49);
    ɵɵelementContainerEnd();
  }
}
function Dropdown_ng_template_10_p_scroller_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-scroller", 48, 10);
    ɵɵlistener("onLazyLoad", function Dropdown_ng_template_10_p_scroller_6_Template_p_scroller_onLazyLoad_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onLazyLoad.emit($event));
    });
    ɵɵtemplate(2, Dropdown_ng_template_10_p_scroller_6_ng_template_2_Template, 1, 5, "ng-template", 21)(3, Dropdown_ng_template_10_p_scroller_6_ng_container_3_Template, 2, 0, "ng-container", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleMap(ɵɵpureFunction1(8, _c0, ctx_r2.scrollHeight));
    ɵɵproperty("items", ctx_r2.visibleOptions())("itemSize", ctx_r2.virtualScrollItemSize || ctx_r2._itemSize)("autoSize", true)("lazy", ctx_r2.lazy)("options", ctx_r2.virtualScrollOptions);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.loaderTemplate);
  }
}
function Dropdown_ng_template_10_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_10_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dropdown_ng_template_10_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 43);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const buildInItems_r15 = ɵɵreference(9);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c13, ctx_r2.visibleOptions(), ɵɵpureFunction0(2, _c14)));
  }
}
function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r17 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getOptionGroupLabel(option_r17.optionGroup));
  }
}
function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 53);
    ɵɵtemplate(2, Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 17)(3, Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 43);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = ɵɵnextContext().options;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c0, scrollerOptions_r20.itemSize + "px"));
    ɵɵattribute("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.groupTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.groupTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c2, option_r17.optionGroup));
  }
}
function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "p-dropdownItem", 54);
    ɵɵlistener("onClick", function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_1_Template_p_dropdownItem_onClick_1_listener($event) {
      ɵɵrestoreView(_r21);
      const option_r17 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onOptionSelect($event, option_r17));
    })("onMouseEnter", function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_1_Template_p_dropdownItem_onMouseEnter_1_listener($event) {
      ɵɵrestoreView(_r21);
      const i_r19 = ɵɵnextContext().index;
      const scrollerOptions_r20 = ɵɵnextContext().options;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onOptionMouseEnter($event, ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)));
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = ɵɵnextContext().options;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("option", option_r17)("selected", ctx_r2.isSelected(option_r17))("label", ctx_r2.getOptionLabel(option_r17))("disabled", ctx_r2.isOptionDisabled(option_r17))("template", ctx_r2.itemTemplate)("focused", ctx_r2.focusedOptionIndex() === ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("ariaPosInset", ctx_r2.getAriaPosInset(ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)))("ariaSetSize", ctx_r2.ariaSetSize);
  }
}
function Dropdown_ng_template_10_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 17)(1, Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_1_Template, 2, 9, "ng-container", 17);
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r2.isOptionGroup(option_r17));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isOptionGroup(option_r17));
  }
}
function Dropdown_ng_template_10_ng_template_8_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.emptyFilterMessageLabel, " ");
  }
}
function Dropdown_ng_template_10_ng_template_8_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, null, 12);
  }
}
function Dropdown_ng_template_10_ng_template_8_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 55);
    ɵɵtemplate(1, Dropdown_ng_template_10_ng_template_8_li_3_ng_container_1_Template, 2, 1, "ng-container", 23)(2, Dropdown_ng_template_10_ng_template_8_li_3_ng_container_2_Template, 2, 0, "ng-container", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = ɵɵnextContext().options;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c0, scrollerOptions_r20.itemSize + "px"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.emptyFilterTemplate && !ctx_r2.emptyTemplate)("ngIfElse", ctx_r2.emptyFilter);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.emptyFilterTemplate || ctx_r2.emptyTemplate);
  }
}
function Dropdown_ng_template_10_ng_template_8_li_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.emptyMessageLabel, " ");
  }
}
function Dropdown_ng_template_10_ng_template_8_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, null, 13);
  }
}
function Dropdown_ng_template_10_ng_template_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 55);
    ɵɵtemplate(1, Dropdown_ng_template_10_ng_template_8_li_4_ng_container_1_Template, 2, 1, "ng-container", 23)(2, Dropdown_ng_template_10_ng_template_8_li_4_ng_container_2_Template, 2, 0, "ng-container", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = ɵɵnextContext().options;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c0, scrollerOptions_r20.itemSize + "px"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.emptyTemplate)("ngIfElse", ctx_r2.empty);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.emptyTemplate);
  }
}
function Dropdown_ng_template_10_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 50, 11);
    ɵɵtemplate(2, Dropdown_ng_template_10_ng_template_8_ng_template_2_Template, 2, 2, "ng-template", 51)(3, Dropdown_ng_template_10_ng_template_8_li_3_Template, 3, 6, "li", 52)(4, Dropdown_ng_template_10_ng_template_8_li_4_Template, 3, 6, "li", 52);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const items_r22 = ctx.$implicit;
    const scrollerOptions_r20 = ctx.options;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleMap(scrollerOptions_r20.contentStyle);
    ɵɵproperty("ngClass", scrollerOptions_r20.contentStyleClass);
    ɵɵattribute("id", ctx_r2.id + "_list")("aria-label", ctx_r2.listLabel);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", items_r22);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.filterValue && ctx_r2.isEmpty());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.filterValue && ctx_r2.isEmpty());
  }
}
function Dropdown_ng_template_10_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 37)(1, "span", 38, 5);
    ɵɵlistener("focus", function Dropdown_ng_template_10_Template_span_focus_1_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onFirstHiddenFocus($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(3, Dropdown_ng_template_10_ng_container_3_Template, 1, 0, "ng-container", 31)(4, Dropdown_ng_template_10_div_4_Template, 4, 2, "div", 39);
    ɵɵelementStart(5, "div", 40);
    ɵɵtemplate(6, Dropdown_ng_template_10_p_scroller_6_Template, 4, 10, "p-scroller", 41)(7, Dropdown_ng_template_10_ng_container_7_Template, 2, 6, "ng-container", 17)(8, Dropdown_ng_template_10_ng_template_8_Template, 5, 8, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵtemplate(10, Dropdown_ng_template_10_ng_container_10_Template, 1, 0, "ng-container", 31);
    ɵɵelementStart(11, "span", 38, 7);
    ɵɵlistener("focus", function Dropdown_ng_template_10_Template_span_focus_11_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onLastHiddenFocus($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.panelStyleClass);
    ɵɵproperty("ngClass", "p-dropdown-panel p-component")("ngStyle", ctx_r2.panelStyle);
    ɵɵadvance();
    ɵɵattribute("aria-hidden", true)("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.filter);
    ɵɵadvance();
    ɵɵstyleProp("max-height", ctx_r2.virtualScroll ? "auto" : ctx_r2.scrollHeight || "auto");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.virtualScroll);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.virtualScroll);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.footerTemplate);
    ɵɵadvance();
    ɵɵattribute("aria-hidden", true)("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
var DROPDOWN_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Dropdown),
  multi: true
};
var DropdownItem = class _DropdownItem {
  id;
  option;
  selected;
  focused;
  label;
  disabled;
  visible;
  itemSize;
  ariaPosInset;
  ariaSetSize;
  template;
  onClick = new EventEmitter();
  onMouseEnter = new EventEmitter();
  ngOnInit() {
  }
  onOptionClick(event) {
    this.onClick.emit(event);
  }
  onOptionMouseEnter(event) {
    this.onMouseEnter.emit(event);
  }
  static ɵfac = function DropdownItem_Factory(t) {
    return new (t || _DropdownItem)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DropdownItem,
    selectors: [["p-dropdownItem"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      id: "id",
      option: "option",
      selected: "selected",
      focused: "focused",
      label: "label",
      disabled: "disabled",
      visible: "visible",
      itemSize: "itemSize",
      ariaPosInset: "ariaPosInset",
      ariaSetSize: "ariaSetSize",
      template: "template"
    },
    outputs: {
      onClick: "onClick",
      onMouseEnter: "onMouseEnter"
    },
    decls: 3,
    vars: 21,
    consts: [["role", "option", "pRipple", "", 3, "click", "mouseenter", "id", "ngStyle", "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function DropdownItem_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "li", 0);
        ɵɵlistener("click", function DropdownItem_Template_li_click_0_listener($event) {
          return ctx.onOptionClick($event);
        })("mouseenter", function DropdownItem_Template_li_mouseenter_0_listener($event) {
          return ctx.onOptionMouseEnter($event);
        });
        ɵɵtemplate(1, DropdownItem_span_1_Template, 2, 1, "span", 1)(2, DropdownItem_ng_container_2_Template, 1, 0, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("id", ctx.id)("ngStyle", ɵɵpureFunction1(13, _c0, ctx.itemSize + "px"))("ngClass", ɵɵpureFunction3(15, _c1, ctx.selected, ctx.disabled, ctx.focused));
        ɵɵattribute("aria-label", ctx.label)("aria-setsize", ctx.ariaSetSize)("aria-posinset", ctx.ariaPosInset)("aria-selected", ctx.selected)("data-p-focused", ctx.focused)("data-p-highlight", ctx.selected)("data-p-disabled", ctx.disabled);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.template);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", ɵɵpureFunction1(19, _c2, ctx.option));
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownItem, [{
    type: Component,
    args: [{
      selector: "p-dropdownItem",
      template: `
        <li
            [id]="id"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
            role="option"
            pRipple
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            [ngStyle]="{ height: itemSize + 'px' }"
            [ngClass]="{ 'p-dropdown-item': true, 'p-highlight': selected, 'p-disabled': disabled, 'p-focus': focused }"
        >
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `,
      host: {
        class: "p-element"
      }
    }]
  }], null, {
    id: [{
      type: Input
    }],
    option: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    focused: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    ariaPosInset: [{
      type: Input
    }],
    ariaSetSize: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }],
    onMouseEnter: [{
      type: Output
    }]
  });
})();
var Dropdown = class _Dropdown {
  el;
  renderer;
  cd;
  zone;
  filterService;
  config;
  /**
   * Unique identifier of the component
   * @group Props
   */
  id;
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "200px";
  /**
   * When specified, displays an input field to filter the items on keyup.
   * @group Props
   */
  filter;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Inline style of the overlay panel element.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the overlay panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * When present, it specifies that an input field must be filled out before submitting the form.
   * @group Props
   */
  required;
  /**
   * When present, custom value instead of predefined options can be entered using the editable input field.
   * @group Props
   */
  editable;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Default text to display when no option is selected.
   * @group Props
   */
  set placeholder(val) {
    this._placeholder.set(val);
  }
  get placeholder() {
    return this._placeholder.asReadonly();
  }
  /**
   * Placeholder text to show when filter input is empty.
   * @group Props
   */
  filterPlaceholder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Identifier of the accessible input element.
   * @group Props
   */
  inputId;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  filterFields;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Clears the filter value when hiding the dropdown.
   * @group Props
   */
  resetFilterOnHide = false;
  /**
   * Icon class of the dropdown icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = "label";
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = "items";
  /**
   * Whether to display the first item as the label if no placeholder is defined and value is null.
   * @deprecated since v17.3.0, set initial value by model instead.
   * @group Props
   */
  autoDisplayFirst = true;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear;
  /**
   * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyFilterMessage = "";
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = "";
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
   * @group Props
   */
  overlayOptions;
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Used to define a aria label attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = "contains";
  /**
   * Maximum number of character allows in the editable input field.
   * @group Props
   */
  maxlength;
  /**
   * Advisory information to display in a tooltip on hover.
   * @group Props
   */
  tooltip = "";
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition = "right";
  /**
   * Type of CSS position.
   * @group Props
   */
  tooltipPositionStyle = "absolute";
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  focusOnHover = false;
  /**
   * Determines if the option will be selected on focus.
   * @group Props
   */
  selectOnFocus = false;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = true;
  /**
   * Applies focus to the filter element when the overlay is shown.
   * @group Props
   */
  autofocusFilter = true;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(_disabled) {
    if (_disabled) {
      this.focused = false;
      if (this.overlayVisible)
        this.hide();
    }
    this._disabled = _disabled;
    if (!this.cd.destroyed) {
      this.cd.detectChanges();
    }
  }
  /**
   * Item size of item to be virtual scrolled.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
    console.warn("The itemSize property is deprecated, use virtualScrollItemSize property instead.");
  }
  _itemSize;
  /**
   * Whether to automatically manage layering.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get autoZIndex() {
    return this._autoZIndex;
  }
  set autoZIndex(val) {
    this._autoZIndex = val;
    console.warn("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _autoZIndex;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get baseZIndex() {
    return this._baseZIndex;
  }
  set baseZIndex(val) {
    this._baseZIndex = val;
    console.warn("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _baseZIndex;
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get showTransitionOptions() {
    return this._showTransitionOptions;
  }
  set showTransitionOptions(val) {
    this._showTransitionOptions = val;
    console.warn("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _showTransitionOptions;
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get hideTransitionOptions() {
    return this._hideTransitionOptions;
  }
  set hideTransitionOptions(val) {
    this._hideTransitionOptions = val;
    console.warn("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _hideTransitionOptions;
  /**
   * When specified, filter displays with this value.
   * @group Props
   */
  get filterValue() {
    return this._filterValue();
  }
  set filterValue(val) {
    setTimeout(() => {
      this._filterValue.set(val);
    });
  }
  /**
   * An array of objects to display as the available options.
   * @group Props
   */
  get options() {
    const options = this._options();
    return options;
  }
  set options(val) {
    if (!ObjectUtils.deepEquals(val, this._options())) {
      this._options.set(val);
    }
  }
  /**
   * Callback to invoke when value of dropdown changes.
   * @param {DropdownChangeEvent} event - custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {DropdownFilterEvent} event - custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when dropdown gets focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when dropdown loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when component is clicked.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when dropdown overlay gets visible.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when dropdown overlay gets hidden.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when dropdown clears the value.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {DropdownLazyLoadEvent} event - Lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  containerViewChild;
  filterViewChild;
  focusInputViewChild;
  editableInputViewChild;
  itemsViewChild;
  scroller;
  overlayViewChild;
  firstHiddenFocusableElementOnOverlay;
  lastHiddenFocusableElementOnOverlay;
  templates;
  _disabled;
  itemsWrapper;
  itemTemplate;
  groupTemplate;
  loaderTemplate;
  selectedItemTemplate;
  headerTemplate;
  filterTemplate;
  footerTemplate;
  emptyFilterTemplate;
  emptyTemplate;
  dropdownIconTemplate;
  clearIconTemplate;
  filterIconTemplate;
  filterOptions;
  _options = signal(null);
  _placeholder = signal(void 0);
  modelValue = signal(null);
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  hover;
  focused;
  overlayVisible;
  optionsChanged;
  panel;
  dimensionsUpdated;
  hoveredItem;
  selectedOptionUpdated;
  _filterValue = signal(null);
  searchValue;
  searchIndex;
  searchTimeout;
  previousSearchChar;
  currentSearchChar;
  preventModelTouched;
  focusedOptionIndex = signal(-1);
  labelId;
  listId;
  clicked = signal(false);
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(TranslationKeys.EMPTY_FILTER_MESSAGE);
  }
  get isVisibleClearIcon() {
    return this.modelValue() != null && this.hasSelectedOption() && this.showClear && !this.disabled;
  }
  get listLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["listLabel"];
  }
  get containerClass() {
    return {
      "p-dropdown p-component p-inputwrapper": true,
      "p-disabled": this.disabled,
      "p-dropdown-clearable": this.showClear && !this.disabled,
      "p-focus": this.focused,
      "p-inputwrapper-filled": this.modelValue() !== void 0 && this.modelValue() !== null && !this.modelValue().length,
      "p-inputwrapper-focus": this.focused || this.overlayVisible
    };
  }
  get inputClass() {
    const label = this.label();
    return {
      "p-dropdown-label p-inputtext": true,
      "p-placeholder": this.placeholder() && label === this.placeholder(),
      "p-dropdown-label-empty": !this.editable && !this.selectedItemTemplate && (label === void 0 || label === null || label === "p-emptylabel" || label.length === 0)
    };
  }
  get panelClass() {
    return {
      "p-dropdown-panel p-component": true,
      "p-input-filled": this.config.inputStyle === "filled",
      "p-ripple-disabled": this.config.ripple === false
    };
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  visibleOptions = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    if (this._filterValue()) {
      const _filterBy = this.filterBy || this.optionLabel;
      const filteredOptions = !_filterBy && !this.filterFields && !this.optionValue ? this.options.filter((option) => {
        if (option.label) {
          return option.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
        }
        return option.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
      }) : this.filterService.filter(options, this.searchFields(), this._filterValue().trim(), this.filterMatchMode, this.filterLocale);
      if (this.group) {
        const optionGroups = this.options || [];
        const filtered = [];
        optionGroups.forEach((group) => {
          const groupChildren = this.getOptionGroupChildren(group);
          const filteredItems = groupChildren.filter((item) => filteredOptions.includes(item));
          if (filteredItems.length > 0)
            filtered.push(__spreadProps(__spreadValues({}, group), {
              [typeof this.optionGroupChildren === "string" ? this.optionGroupChildren : "items"]: [...filteredItems]
            }));
        });
        return this.flatOptions(filtered);
      }
      return filteredOptions;
    }
    return options;
  });
  label = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    const selectedOptionIndex = options.findIndex((option) => this.isOptionValueEqualsModelValue(option));
    return selectedOptionIndex !== -1 ? this.getOptionLabel(options[selectedOptionIndex]) : this.placeholder() || "p-emptylabel";
  });
  filled = computed(() => {
    if (typeof this.modelValue() === "string")
      return !!this.modelValue();
    return this.label() !== "p-emptylabel" && this.modelValue() !== void 0 && this.modelValue() !== null;
  });
  selectedOption;
  editableInputValue = computed(() => this.getOptionLabel(this.selectedOption) || this.modelValue() || "");
  constructor(el, renderer, cd, zone, filterService, config) {
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
    this.filterService = filterService;
    this.config = config;
    effect(() => {
      const modelValue = this.modelValue();
      const visibleOptions = this.visibleOptions();
      if (visibleOptions && ObjectUtils.isNotEmpty(visibleOptions)) {
        const selectedOptionIndex = this.findSelectedOptionIndex();
        if (selectedOptionIndex !== -1 || modelValue === void 0 || typeof modelValue === "string" && modelValue.length === 0 || this.isModelValueNotSet() || this.editable) {
          this.selectedOption = visibleOptions[selectedOptionIndex];
        }
      }
      if (ObjectUtils.isEmpty(visibleOptions) && (modelValue === void 0 || this.isModelValueNotSet()) && ObjectUtils.isNotEmpty(this.selectedOption)) {
        this.selectedOption = null;
      }
      if (modelValue !== void 0 && this.editable) {
        this.updateEditableLabel();
      }
      this.cd.markForCheck();
    });
  }
  isModelValueNotSet() {
    return this.modelValue() === null && !this.isOptionValueEqualsModelValue(this.selectedOption);
  }
  displayPlaceholder() {
    return ObjectUtils.isEmpty(this.selectedOption) && this.label() === this.placeholder();
  }
  getAllVisibleAndNonVisibleOptions() {
    return this.group ? this.flatOptions(this.options) : this.options || [];
  }
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
    this.autoUpdateModel();
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterInputChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  ngAfterViewChecked() {
    if (this.optionsChanged && this.overlayVisible) {
      this.optionsChanged = false;
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.overlayViewChild) {
            this.overlayViewChild.alignOverlay();
          }
        }, 1);
      });
    }
    if (this.selectedOptionUpdated && this.itemsWrapper) {
      let selectedItem = DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, "li.p-highlight");
      if (selectedItem) {
        DomHandler.scrollInView(this.itemsWrapper, selectedItem);
      }
      this.selectedOptionUpdated = false;
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "selectedItem":
          this.selectedItemTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "filter":
          this.filterTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "emptyfilter":
          this.emptyFilterTemplate = item.template;
          break;
        case "empty":
          this.emptyTemplate = item.template;
          break;
        case "group":
          this.groupTemplate = item.template;
          break;
        case "loader":
          this.loaderTemplate = item.template;
          break;
        case "dropdownicon":
          this.dropdownIconTemplate = item.template;
          break;
        case "clearicon":
          this.clearIconTemplate = item.template;
          break;
        case "filtericon":
          this.filterIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
      return result;
    }, []);
  }
  autoUpdateModel() {
    if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
      this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
      this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
    }
    if (this.autoDisplayFirst && (this.modelValue() === null || this.modelValue() === void 0)) {
      if (!this.placeholder()) {
        const ind = this.findFirstOptionIndex();
        this.onOptionSelect(null, this.visibleOptions()[ind], false, true);
      }
    }
  }
  onOptionSelect(event, option, isHide = true, preventChange = false) {
    if (!this.isSelected(option)) {
      const value = this.getOptionValue(option);
      this.updateModel(value, event);
      this.focusedOptionIndex.set(this.findSelectedOptionIndex());
      preventChange === false && this.onChange.emit({
        originalEvent: event,
        value
      });
    }
    if (isHide) {
      this.hide(true);
    }
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  updateModel(value, event) {
    this.value = value;
    this.onModelChange(value);
    this.modelValue.set(value);
    this.selectedOptionUpdated = true;
  }
  writeValue(value) {
    if (this.filter) {
      this.resetFilter();
    }
    this.value = value;
    this.allowModelChange() && this.onModelChange(value);
    this.modelValue.set(this.value);
    this.updateEditableLabel();
    this.cd.markForCheck();
  }
  allowModelChange() {
    return this.autoDisplayFirst && !this.placeholder() && (this.modelValue() === void 0 || this.modelValue() === null) && !this.editable && this.options && this.options.length;
  }
  isSelected(option) {
    return this.isValidOption(option) && this.isOptionValueEqualsModelValue(option);
  }
  isOptionValueEqualsModelValue(option) {
    return ObjectUtils.equals(this.modelValue(), this.getOptionValue(option), this.equalityKey());
  }
  ngAfterViewInit() {
    if (this.editable) {
      this.updateEditableLabel();
    }
  }
  updateEditableLabel() {
    if (this.editableInputViewChild) {
      this.editableInputViewChild.nativeElement.value = this.getOptionLabel(this.selectedOption) || this.modelValue() || "";
    }
  }
  clearEditableLabel() {
    if (this.editableInputViewChild) {
      this.editableInputViewChild.nativeElement.value = "";
    }
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getOptionLabel(option) {
    return this.optionLabel !== void 0 && this.optionLabel !== null ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option && option.label !== void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue && this.optionValue !== null ? ObjectUtils.resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== void 0 ? option.value : option;
  }
  isOptionDisabled(option) {
    if (this.getOptionValue(this.modelValue()) === this.getOptionValue(option) || this.getOptionLabel(this.modelValue() === this.getOptionLabel(option)) && option.disabled === false) {
      return false;
    } else {
      return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false;
    }
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== void 0 ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren !== void 0 && this.optionGroupChildren !== null ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  /**
   * Callback to invoke on filter reset.
   * @group Method
   */
  resetFilter() {
    this._filterValue.set(null);
    if (this.filterViewChild && this.filterViewChild.nativeElement) {
      this.filterViewChild.nativeElement.value = "";
    }
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
  onContainerClick(event) {
    if (this.disabled || this.readonly) {
      return;
    }
    this.focusInputViewChild?.nativeElement.focus({
      preventScroll: true
    });
    if (event.target.tagName === "INPUT" || event.target.getAttribute("data-pc-section") === "clearicon" || event.target.closest('[data-pc-section="clearicon"]')) {
      return;
    } else if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
      this.overlayVisible ? this.hide(true) : this.show(true);
    }
    this.onClick.emit(event);
    this.clicked.set(true);
    this.cd.detectChanges();
  }
  isEmpty() {
    return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
  }
  onEditableInput(event) {
    const value = event.target.value;
    this.searchValue = "";
    const matched = this.searchOptions(event, value);
    !matched && this.focusedOptionIndex.set(-1);
    this.onModelChange(value);
    this.updateModel(value, event);
    setTimeout(() => {
      this.onChange.emit({
        originalEvent: event,
        value
      });
    }, 1);
    !this.overlayVisible && ObjectUtils.isNotEmpty(value) && this.show();
  }
  /**
   * Displays the panel.
   * @group Method
   */
  show(isFocus) {
    this.overlayVisible = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex();
    this.focusedOptionIndex.set(focusedOptionIndex);
    if (isFocus) {
      DomHandler.focus(this.focusInputViewChild?.nativeElement);
    }
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    if (event.toState === "visible") {
      this.itemsWrapper = DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? ".p-scroller" : ".p-dropdown-items-wrapper");
      this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
      if (this.options && this.options.length) {
        if (this.virtualScroll) {
          const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
          if (selectedIndex !== -1) {
            this.scroller?.scrollToIndex(selectedIndex);
          }
        } else {
          let selectedListItem = DomHandler.findSingle(this.itemsWrapper, ".p-dropdown-item.p-highlight");
          if (selectedListItem) {
            selectedListItem.scrollIntoView({
              block: "nearest",
              inline: "nearest"
            });
          }
        }
      }
      if (this.filterViewChild && this.filterViewChild.nativeElement) {
        this.preventModelTouched = true;
        if (this.autofocusFilter && !this.editable) {
          this.filterViewChild.nativeElement.focus();
        }
      }
      this.onShow.emit(event);
    }
    if (event.toState === "void") {
      this.itemsWrapper = null;
      this.onModelTouched();
      this.onHide.emit(event);
    }
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide(isFocus) {
    this.overlayVisible = false;
    this.focusedOptionIndex.set(-1);
    this.clicked.set(false);
    this.searchValue = "";
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
    if (isFocus) {
      if (this.focusInputViewChild) {
        DomHandler.focus(this.focusInputViewChild?.nativeElement);
      }
      if (this.editable && this.editableInputViewChild) {
        DomHandler.focus(this.editableInputViewChild?.nativeElement);
      }
    }
    this.cd.markForCheck();
  }
  onInputFocus(event) {
    if (this.disabled) {
      return;
    }
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    if (!this.preventModelTouched) {
      this.onModelTouched();
    }
    this.preventModelTouched = false;
  }
  onKeyDown(event, search) {
    if (this.disabled || this.readonly) {
      return;
    }
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event, this.editable);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, this.editable);
        break;
      case "Delete":
        this.onDeleteKey(event);
        break;
      case "Home":
        this.onHomeKey(event, this.editable);
        break;
      case "End":
        this.onEndKey(event, this.editable);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      case "Space":
        this.onSpaceKey(event, search);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "Backspace":
        this.onBackspaceKey(event, this.editable);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!event.metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
          !this.overlayVisible && this.show();
          !this.editable && this.searchOptions(event, event.key);
        }
        break;
    }
    this.clicked.set(false);
  }
  onFilterKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event, true);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, true);
        break;
      case "Home":
        this.onHomeKey(event, true);
        break;
      case "End":
        this.onEndKey(event, true);
        break;
      case "Enter":
        this.onEnterKey(event, true);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event, true);
        break;
      default:
        break;
    }
  }
  onFilterBlur(event) {
    this.focusedOptionIndex.set(-1);
  }
  onArrowDownKey(event) {
    if (!this.overlayVisible) {
      this.show();
      this.editable && this.changeFocusedOptionIndex(event, this.findSelectedOptionIndex());
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    event.preventDefault();
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
      if (this.selectOnFocus) {
        const option = this.visibleOptions()[index];
        this.onOptionSelect(event, option, false);
      }
    }
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = DomHandler.findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }, 0);
      }
    }
  }
  hasSelectedOption() {
    return this.modelValue() !== void 0;
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findLastOptionIndex() {
    return ObjectUtils.findLastIndex(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  isValidOption(option) {
    return option !== void 0 && option !== null && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionGroup(option) {
    return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null && option.optionGroup !== void 0 && option.optionGroup !== null && option.group;
  }
  onArrowUpKey(event, pressedInInputText = false) {
    if (event.altKey && !pressedInInputText) {
      if (this.focusedOptionIndex() !== -1) {
        const option = this.visibleOptions()[this.focusedOptionIndex()];
        this.onOptionSelect(event, option);
      }
      this.overlayVisible && this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
      event.preventDefault();
    }
  }
  onArrowLeftKey(event, pressedInInputText = false) {
    pressedInInputText && this.focusedOptionIndex.set(-1);
  }
  onDeleteKey(event) {
    if (this.showClear) {
      this.clear(event);
      event.preventDefault();
    }
  }
  onHomeKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      const target = event.currentTarget;
      if (event.shiftKey) {
        target.setSelectionRange(0, target.value.length);
      } else {
        target.setSelectionRange(0, 0);
        this.focusedOptionIndex.set(-1);
      }
    } else {
      this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onEndKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      const target = event.currentTarget;
      if (event.shiftKey) {
        target.setSelectionRange(0, target.value.length);
      } else {
        const len = target.value.length;
        target.setSelectionRange(len, len);
        this.focusedOptionIndex.set(-1);
      }
    } else {
      this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onSpaceKey(event, pressedInInputText = false) {
    !this.editable && !pressedInInputText && this.onEnterKey(event);
  }
  onEnterKey(event, pressedInInput = false) {
    if (!this.overlayVisible) {
      this.focusedOptionIndex.set(-1);
      this.onArrowDownKey(event);
    } else {
      if (this.focusedOptionIndex() !== -1) {
        const option = this.visibleOptions()[this.focusedOptionIndex()];
        this.onOptionSelect(event, option);
      }
      !pressedInInput && this.hide();
    }
    event.preventDefault();
  }
  onEscapeKey(event) {
    this.overlayVisible && this.hide(true);
    event.preventDefault();
  }
  onTabKey(event, pressedInInputText = false) {
    if (!pressedInInputText) {
      if (this.overlayVisible && this.hasFocusableElements()) {
        DomHandler.focus(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
        event.preventDefault();
      } else {
        if (this.focusedOptionIndex() !== -1 && this.overlayVisible) {
          const option = this.visibleOptions()[this.focusedOptionIndex()];
          this.onOptionSelect(event, option);
        }
        this.overlayVisible && this.hide(this.filter);
      }
    }
  }
  onFirstHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? DomHandler.getFirstFocusableElement(this.overlayViewChild.el?.nativeElement, ":not(.p-hidden-focusable)") : this.focusInputViewChild?.nativeElement;
    DomHandler.focus(focusableEl);
  }
  onLastHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? DomHandler.getLastFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    DomHandler.focus(focusableEl);
  }
  hasFocusableElements() {
    return DomHandler.getFocusableElements(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
  }
  onBackspaceKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      !this.overlayVisible && this.show();
    }
  }
  searchFields() {
    return this.filterBy?.split(",") || this.filterFields || [this.optionLabel];
  }
  searchOptions(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let optionIndex = -1;
    let matched = false;
    if (this.focusedOptionIndex() !== -1) {
      optionIndex = this.visibleOptions().slice(this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option));
      optionIndex = optionIndex === -1 ? this.visibleOptions().slice(0, this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex();
    } else {
      optionIndex = this.visibleOptions().findIndex((option) => this.isOptionMatched(option));
    }
    if (optionIndex !== -1) {
      matched = true;
    }
    if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
      optionIndex = this.findFirstFocusedOptionIndex();
    }
    if (optionIndex !== -1) {
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  isOptionMatched(option) {
    return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
  }
  onFilterInputChange(event) {
    let value = event.target.value;
    this._filterValue.set(value);
    this.focusedOptionIndex.set(-1);
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue()
    });
    !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
    setTimeout(() => {
      this.overlayViewChild.alignOverlay();
    });
    this.cd.markForCheck();
  }
  applyFocus() {
    if (this.editable)
      DomHandler.findSingle(this.el.nativeElement, ".p-dropdown-label.p-inputtext").focus();
    else
      DomHandler.focus(this.focusInputViewChild?.nativeElement);
  }
  /**
   * Applies focus.
   * @group Method
   */
  focus() {
    this.applyFocus();
  }
  /**
   * Clears the model.
   * @group Method
   */
  clear(event) {
    this.updateModel(null, event);
    this.clearEditableLabel();
    this.onModelTouched();
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.onClear.emit(event);
    this.resetFilter();
  }
  static ɵfac = function Dropdown_Factory(t) {
    return new (t || _Dropdown)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(FilterService), ɵɵdirectiveInject(PrimeNGConfig));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Dropdown,
    selectors: [["p-dropdown"]],
    contentQueries: function Dropdown_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Dropdown_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c3, 5);
        ɵɵviewQuery(_c4, 5);
        ɵɵviewQuery(_c5, 5);
        ɵɵviewQuery(_c6, 5);
        ɵɵviewQuery(_c7, 5);
        ɵɵviewQuery(_c8, 5);
        ɵɵviewQuery(_c9, 5);
        ɵɵviewQuery(_c10, 5);
        ɵɵviewQuery(_c11, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.focusInputViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editableInputViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemsViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scroller = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlayViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
      }
    },
    hostAttrs: [1, "p-element", "p-inputwrapper"],
    hostVars: 4,
    hostBindings: function Dropdown_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("p-inputwrapper-filled", ctx.filled())("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible);
      }
    },
    inputs: {
      id: "id",
      scrollHeight: "scrollHeight",
      filter: "filter",
      name: "name",
      style: "style",
      panelStyle: "panelStyle",
      styleClass: "styleClass",
      panelStyleClass: "panelStyleClass",
      readonly: "readonly",
      required: "required",
      editable: "editable",
      appendTo: "appendTo",
      tabindex: "tabindex",
      placeholder: "placeholder",
      filterPlaceholder: "filterPlaceholder",
      filterLocale: "filterLocale",
      inputId: "inputId",
      dataKey: "dataKey",
      filterBy: "filterBy",
      filterFields: "filterFields",
      autofocus: "autofocus",
      resetFilterOnHide: "resetFilterOnHide",
      dropdownIcon: "dropdownIcon",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      optionGroupLabel: "optionGroupLabel",
      optionGroupChildren: "optionGroupChildren",
      autoDisplayFirst: "autoDisplayFirst",
      group: "group",
      showClear: "showClear",
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      lazy: "lazy",
      virtualScroll: "virtualScroll",
      virtualScrollItemSize: "virtualScrollItemSize",
      virtualScrollOptions: "virtualScrollOptions",
      overlayOptions: "overlayOptions",
      ariaFilterLabel: "ariaFilterLabel",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      filterMatchMode: "filterMatchMode",
      maxlength: "maxlength",
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      focusOnHover: "focusOnHover",
      selectOnFocus: "selectOnFocus",
      autoOptionFocus: "autoOptionFocus",
      autofocusFilter: "autofocusFilter",
      disabled: "disabled",
      itemSize: "itemSize",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      filterValue: "filterValue",
      options: "options"
    },
    outputs: {
      onChange: "onChange",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClick: "onClick",
      onShow: "onShow",
      onHide: "onHide",
      onClear: "onClear",
      onLazyLoad: "onLazyLoad"
    },
    features: [ɵɵProvidersFeature([DROPDOWN_VALUE_ACCESSOR])],
    decls: 11,
    vars: 20,
    consts: [["container", ""], ["overlay", ""], ["focusInput", ""], ["defaultPlaceholder", ""], ["editableInput", ""], ["firstHiddenFocusableEl", ""], ["buildInItems", ""], ["lastHiddenFocusableEl", ""], ["builtInFilterElement", ""], ["filter", ""], ["scroller", ""], ["items", ""], ["emptyFilter", ""], ["empty", ""], [3, "click", "ngClass", "ngStyle"], ["role", "combobox", "pAutoFocus", "", 3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "autofocus", "focus", "blur", "keydown", 4, "ngIf"], ["type", "text", "aria-haspopup", "listbox", 3, "ngClass", "disabled", "input", "keydown", "focus", "blur", 4, "ngIf"], [4, "ngIf"], ["role", "button", "aria-label", "dropdown trigger", "aria-haspopup", "listbox", 1, "p-dropdown-trigger"], ["class", "p-dropdown-trigger-icon", 4, "ngIf"], [3, "visibleChange", "onAnimationStart", "onHide", "visible", "options", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions"], ["pTemplate", "content"], ["role", "combobox", "pAutoFocus", "", 3, "focus", "blur", "keydown", "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "autofocus"], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "text", "aria-haspopup", "listbox", 3, "input", "keydown", "focus", "blur", "ngClass", "disabled"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-dropdown-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "styleClass"], [1, "p-dropdown-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], ["class", "p-dropdown-trigger-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-dropdown-trigger-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-dropdown-trigger-icon"], [3, "ngClass", "ngStyle"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus"], ["class", "p-dropdown-header", 3, "click", 4, "ngIf"], [1, "p-dropdown-items-wrapper"], [3, "items", "style", "itemSize", "autoSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], [1, "p-dropdown-header", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-dropdown-filter-container"], ["type", "text", "autocomplete", "off", 1, "p-dropdown-filter", "p-inputtext", "p-component", 3, "input", "keydown", "blur", "value"], ["class", "p-dropdown-filter-icon", 4, "ngIf"], [1, "p-dropdown-filter-icon"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "lazy", "options"], ["pTemplate", "loader"], ["role", "listbox", 1, "p-dropdown-items", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-dropdown-empty-message", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-dropdown-item-group", 3, "ngStyle"], [3, "onClick", "onMouseEnter", "id", "option", "selected", "label", "disabled", "template", "focused", "ariaPosInset", "ariaSetSize"], [1, "p-dropdown-empty-message", 3, "ngStyle"]],
    template: function Dropdown_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 14, 0);
        ɵɵlistener("click", function Dropdown_Template_div_click_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onContainerClick($event));
        });
        ɵɵtemplate(2, Dropdown_span_2_Template, 6, 20, "span", 15)(3, Dropdown_input_3_Template, 2, 4, "input", 16)(4, Dropdown_ng_container_4_Template, 3, 2, "ng-container", 17);
        ɵɵelementStart(5, "div", 18);
        ɵɵtemplate(6, Dropdown_ng_container_6_Template, 3, 2, "ng-container", 17)(7, Dropdown_span_7_Template, 2, 1, "span", 19);
        ɵɵelementEnd();
        ɵɵelementStart(8, "p-overlay", 20, 1);
        ɵɵtwoWayListener("visibleChange", function Dropdown_Template_p_overlay_visibleChange_8_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("onAnimationStart", function Dropdown_Template_p_overlay_onAnimationStart_8_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onOverlayAnimationStart($event));
        })("onHide", function Dropdown_Template_p_overlay_onHide_8_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.hide());
        });
        ɵɵtemplate(10, Dropdown_ng_template_10_Template, 13, 19, "ng-template", 21);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        let tmp_9_0;
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ctx.containerClass)("ngStyle", ctx.style);
        ɵɵattribute("id", ctx.id);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.editable);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.editable);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.isVisibleClearIcon);
        ɵɵadvance();
        ɵɵattribute("aria-expanded", (tmp_9_0 = ctx.overlayVisible) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : false)("data-pc-section", "trigger");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.dropdownIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.dropdownIconTemplate);
        ɵɵadvance();
        ɵɵtwoWayProperty("visible", ctx.overlayVisible);
        ɵɵproperty("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("autoZIndex", ctx.autoZIndex)("baseZIndex", ctx.baseZIndex)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Overlay, PrimeTemplate, Tooltip, Scroller, AutoFocus, TimesIcon, ChevronDownIcon, SearchIcon, DropdownItem],
    styles: ["@layer primeng{.p-dropdown{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-dropdown-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-dropdown-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-dropdown-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-dropdown-label-empty{overflow:hidden;opacity:0}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-dropdown-item-group{cursor:auto}.p-dropdown-items{margin:0;padding:0;list-style-type:none}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dropdown, [{
    type: Component,
    args: [{
      selector: "p-dropdown",
      template: `
        <div #container [attr.id]="id" [ngClass]="containerClass" (click)="onContainerClick($event)" [ngStyle]="style" [class]="styleClass">
            <span
                #focusInput
                [ngClass]="inputClass"
                *ngIf="!editable"
                [pTooltip]="tooltip"
                [tooltipPosition]="tooltipPosition"
                [positionStyle]="tooltipPositionStyle"
                [tooltipStyleClass]="tooltipStyleClass"
                [attr.aria-disabled]="disabled"
                [attr.id]="inputId"
                role="combobox"
                [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-haspopup]="'listbox'"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                [attr.tabindex]="!disabled ? tabindex : -1"
                pAutoFocus
                [autofocus]="autofocus"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keydown)="onKeyDown($event)"
                [attr.aria-required]="required"
                [attr.required]="required"
            >
                <ng-container *ngIf="!selectedItemTemplate; else defaultPlaceholder">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</ng-container>
                <ng-container *ngIf="selectedItemTemplate && selectedOption" [ngTemplateOutlet]="selectedItemTemplate" [ngTemplateOutletContext]="{ $implicit: selectedOption }"></ng-container>
                <ng-template #defaultPlaceholder>
                    <span *ngIf="displayPlaceholder()">{{ label() === 'p-emptylabel' ? '&nbsp;' : placeholder() }}</span>
                </ng-template>
            </span>
            <input
                *ngIf="editable"
                #editableInput
                type="text"
                [attr.maxlength]="maxlength"
                [ngClass]="inputClass"
                [disabled]="disabled"
                aria-haspopup="listbox"
                [attr.placeholder]="modelValue() === undefined || modelValue() === null ? placeholder() : undefined"
                (input)="onEditableInput($event)"
                (keydown)="onKeyDown($event)"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
            />
            <ng-container *ngIf="isVisibleClearIcon">
                <TimesIcon [styleClass]="'p-dropdown-clear-icon'" (click)="clear($event)" *ngIf="!clearIconTemplate" [attr.data-pc-section]="'clearicon'" />
                <span class="p-dropdown-clear-icon" (click)="clear($event)" *ngIf="clearIconTemplate" [attr.data-pc-section]="'clearicon'">
                    <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                </span>
            </ng-container>

            <div class="p-dropdown-trigger" role="button" aria-label="dropdown trigger" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible ?? false" [attr.data-pc-section]="'trigger'">
                <ng-container *ngIf="!dropdownIconTemplate">
                    <span class="p-dropdown-trigger-icon" *ngIf="dropdownIcon" [ngClass]="dropdownIcon"></span>
                    <ChevronDownIcon *ngIf="!dropdownIcon" [styleClass]="'p-dropdown-trigger-icon'" />
                </ng-container>
                <span *ngIf="dropdownIconTemplate" class="p-dropdown-trigger-icon">
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate"></ng-template>
                </span>
            </div>

            <p-overlay
                #overlay
                [(visible)]="overlayVisible"
                [options]="overlayOptions"
                [target]="'@parent'"
                [appendTo]="appendTo"
                [autoZIndex]="autoZIndex"
                [baseZIndex]="baseZIndex"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
                (onAnimationStart)="onOverlayAnimationStart($event)"
                (onHide)="hide()"
            >
                <ng-template pTemplate="content">
                    <div [ngClass]="'p-dropdown-panel p-component'" [ngStyle]="panelStyle" [class]="panelStyleClass">
                        <span
                            #firstHiddenFocusableEl
                            role="presentation"
                            [attr.aria-hidden]="true"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onFirstHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        >
                        </span>
                        <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                        <div class="p-dropdown-header" *ngIf="filter" (click)="$event.stopPropagation()">
                            <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                                <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                            </ng-container>
                            <ng-template #builtInFilterElement>
                                <div class="p-dropdown-filter-container">
                                    <input
                                        #filter
                                        type="text"
                                        autocomplete="off"
                                        [value]="_filterValue() || ''"
                                        class="p-dropdown-filter p-inputtext p-component"
                                        [attr.placeholder]="filterPlaceholder"
                                        [attr.aria-owns]="id + '_list'"
                                        (input)="onFilterInputChange($event)"
                                        [attr.aria-label]="ariaFilterLabel"
                                        [attr.aria-activedescendant]="focusedOptionId"
                                        (keydown)="onFilterKeyDown($event)"
                                        (blur)="onFilterBlur($event)"
                                    />
                                    <SearchIcon *ngIf="!filterIconTemplate" [styleClass]="'p-dropdown-filter-icon'" />
                                    <span *ngIf="filterIconTemplate" class="p-dropdown-filter-icon">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                                    </span>
                                </div>
                            </ng-template>
                        </div>
                        <div class="p-dropdown-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                            <p-scroller
                                *ngIf="virtualScroll"
                                #scroller
                                [items]="visibleOptions()"
                                [style]="{ height: scrollHeight }"
                                [itemSize]="virtualScrollItemSize || _itemSize"
                                [autoSize]="true"
                                [lazy]="lazy"
                                (onLazyLoad)="onLazyLoad.emit($event)"
                                [options]="virtualScrollOptions"
                            >
                                <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                                </ng-template>
                                <ng-container *ngIf="loaderTemplate">
                                    <ng-template pTemplate="loader" let-scrollerOptions="options">
                                        <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                    </ng-template>
                                </ng-container>
                            </p-scroller>
                            <ng-container *ngIf="!virtualScroll">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                            </ng-container>

                            <ng-template #buildInItems let-items let-scrollerOptions="options">
                                <ul #items [attr.id]="id + '_list'" [attr.aria-label]="listLabel" class="p-dropdown-items" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox">
                                    <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                        <ng-container *ngIf="isOptionGroup(option)">
                                            <li class="p-dropdown-item-group" [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                                <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                                <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                            </li>
                                        </ng-container>
                                        <ng-container *ngIf="!isOptionGroup(option)">
                                            <p-dropdownItem
                                                [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                                [option]="option"
                                                [selected]="isSelected(option)"
                                                [label]="getOptionLabel(option)"
                                                [disabled]="isOptionDisabled(option)"
                                                [template]="itemTemplate"
                                                [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                                [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                                [ariaSetSize]="ariaSetSize"
                                                (onClick)="onOptionSelect($event, option)"
                                                (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                            ></p-dropdownItem>
                                        </ng-container>
                                    </ng-template>

                                    <li *ngIf="filterValue && isEmpty()" class="p-dropdown-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                        <ng-container *ngIf="!emptyFilterTemplate && !emptyTemplate; else emptyFilter">
                                            {{ emptyFilterMessageLabel }}
                                        </ng-container>
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                                    </li>
                                    <li *ngIf="!filterValue && isEmpty()" class="p-dropdown-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                        <ng-container *ngIf="!emptyTemplate; else empty">
                                            {{ emptyMessageLabel }}
                                        </ng-container>
                                        <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                                    </li>
                                </ul>
                            </ng-template>
                        </div>
                        <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                        <span
                            #lastHiddenFocusableEl
                            role="presentation"
                            [attr.aria-hidden]="true"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onLastHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        ></span>
                    </div>
                </ng-template>
            </p-overlay>
        </div>
    `,
      host: {
        class: "p-element p-inputwrapper",
        "[class.p-inputwrapper-filled]": "filled()",
        "[class.p-inputwrapper-focus]": "focused || overlayVisible"
      },
      providers: [DROPDOWN_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: ["@layer primeng{.p-dropdown{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-dropdown-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-dropdown-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-dropdown-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-dropdown-label-empty{overflow:hidden;opacity:0}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-dropdown-item-group{cursor:auto}.p-dropdown-items{margin:0;padding:0;list-style-type:none}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: FilterService
  }, {
    type: PrimeNGConfig
  }], {
    id: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    filter: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    editable: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    filterPlaceholder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    filterBy: [{
      type: Input
    }],
    filterFields: [{
      type: Input
    }],
    autofocus: [{
      type: Input
    }],
    resetFilterOnHide: [{
      type: Input
    }],
    dropdownIcon: [{
      type: Input
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    optionGroupLabel: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    autoDisplayFirst: [{
      type: Input
    }],
    group: [{
      type: Input
    }],
    showClear: [{
      type: Input
    }],
    emptyFilterMessage: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    lazy: [{
      type: Input
    }],
    virtualScroll: [{
      type: Input
    }],
    virtualScrollItemSize: [{
      type: Input
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    maxlength: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    tooltipPosition: [{
      type: Input
    }],
    tooltipPositionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    focusOnHover: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input
    }],
    autoOptionFocus: [{
      type: Input
    }],
    autofocusFilter: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    filterValue: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    focusInputViewChild: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    editableInputViewChild: [{
      type: ViewChild,
      args: ["editableInput"]
    }],
    itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    firstHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["firstHiddenFocusableEl"]
    }],
    lastHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["lastHiddenFocusableEl"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var DropdownModule = class _DropdownModule {
  static ɵfac = function DropdownModule_Factory(t) {
    return new (t || _DropdownModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DropdownModule,
    declarations: [Dropdown, DropdownItem],
    imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon],
    exports: [Dropdown, OverlayModule, SharedModule, ScrollerModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon, OverlayModule, SharedModule, ScrollerModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon],
      exports: [Dropdown, OverlayModule, SharedModule, ScrollerModule],
      declarations: [Dropdown, DropdownItem]
    }]
  }], null, null);
})();

export {
  DROPDOWN_VALUE_ACCESSOR,
  DropdownItem,
  Dropdown,
  DropdownModule
};
//# sourceMappingURL=chunk-I5QQ5O53.js.map
