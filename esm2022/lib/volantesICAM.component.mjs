import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "primeng/button";
import * as i2 from "primeng/api";
import * as i3 from "primeng/ripple";
import * as i4 from "primeng/inputtext";
import * as i5 from "primeng/menu";
import * as i6 from "primeng/menubar";
import * as i7 from "primeng/steps";
export class VolantesICAMComponent {
    constructor() {
        this.plainMenuItems = [];
        this.megaMenuItemsH = [];
        this.routeItems = [];
        this.items = [];
    }
    ngOnInit() {
        this.plainMenuItems = [
            {
                label: 'Colegiados',
                items: [
                    {
                        label: 'Ver datos colegiados',
                        icon: 'pi pi-fw pi-user'
                    },
                    {
                        label: 'Histórico de volantes de colegiado',
                        icon: 'pi pi-fw pi-book'
                    }
                ]
            },
            {
                label: 'Volantes',
                items: [
                    {
                        label: 'Búsqueda de volantes',
                        icon: 'pi pi-fw pi-search'
                    }
                ]
            }
        ];
        this.routeItems = [
            { label: 'Colegiado', routerLink: 'colegiado' },
            { label: 'Designación', routerLink: 'designacion' },
            { label: 'Datos visita prisión', routerLink: 'datosvisita' },
            { label: 'Acciones finales', routerLink: 'acciones' },
        ];
        this.items = [
            {
                label: 'Volantes de prisión',
                icon: 'pi pi-fw pi-tag'
            },
            {
                label: 'Volantes Web',
                icon: 'pi pi-fw pi-desktop'
            },
            {
                label: 'Consultas',
                icon: 'pi pi-fw pi-search',
                items: [
                    {
                        label: 'Consulta de volantes',
                        icon: 'pi pi-fw pi-eye'
                    }
                ]
            }
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesICAMComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: VolantesICAMComponent, selector: " ", ngImport: i0, template: "<div class=\"grid\" style=\"padding: 20px;\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card p-4 border-1 surface-border shadow-2\">\r\n\r\n           \r\n            \r\n            <div class=\"col-12 md:col-12\">\r\n                <p-menubar [model]=\"items\">\r\n                    <ng-template pTemplate=\"end\">\r\n                        <span class=\"p-input-icon-right\">\r\n                            <input type=\"text\" pInputText placeholder=\"Search\">\r\n                            <i class=\"pi pi-search\"></i>\r\n                        </span>\r\n                    </ng-template>\r\n                </p-menubar>\r\n            </div>\r\n\r\n            <div class=\"grid\">\r\n            <!-- Men\u00FA a la izquierda-->\r\n            <div class=\"col-12 md:col-2\" style=\"margin-top: 5%;\">\r\n                <p-menu [model]=\"plainMenuItems\"></p-menu>\r\n            </div>\r\n\r\n            <!-- Contenedor del formulario a la derecha -->\r\n            <div class=\"col-12 md:col-10\">\r\n                <div class=\"col-12\">\r\n                    <p-steps [model]=\"routeItems\" styleClass=\"mt-5\" [readonly]=\"false\"></p-steps>\r\n                </div>\r\n                <div class=\"card mt-5\">\r\n                    <h5>Datos del colegiado</h5>\r\n                    <div class=\"p-fluid p-formgrid grid\">\r\n                        <div class=\"field col-12 md:col-3\">\r\n                            <label htmlFor=\"Cronologico\">Cronol\u00F3gico</label>\r\n                            <input pInputText id=\"Cronologico\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"field col-12 md:col-3\">\r\n                            <label htmlFor=\"Colegiado\">Colegiado</label>\r\n                            <input pInputText id=\"Colegiado\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"field col-12 md:col-3\">\r\n                            <label htmlFor=\"DNI\">DNI</label>\r\n                            <input pInputText id=\"DNI\" type=\"text\" />\r\n                        </div>\r\n\r\n                        <div class=\"field col-12 md:col-3\">\r\n                            <div class=\"flex\">\r\n                                <button pButton pRipple type=\"button\" label=\"Buscar\" class=\"p-button-secondary\" style=\"margin-right: 10px;\"></button>\r\n                                <button pButton pRipple type=\"button\" label=\"Limpiar\"></button>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"field col-12 md:col-4\">\r\n                            <label htmlFor=\"primerApellido\">Primer Apellido</label>\r\n                            <input pInputText id=\"primerApellido\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"field col-12 md:col-4\">\r\n                            <label htmlFor=\"segundoApellido\">Segundo Apellido</label>\r\n                            <input pInputText id=\"segundoApellido\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"field col-12 md:col-4\">\r\n                            <label htmlFor=\"nombre\">Nombre Apellido</label>\r\n                            <input pInputText id=\"nombre\" type=\"text\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [""], dependencies: [{ kind: "directive", type: i1.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading"] }, { kind: "directive", type: i2.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i3.Ripple, selector: "[pRipple]" }, { kind: "directive", type: i4.InputText, selector: "[pInputText]" }, { kind: "component", type: i5.Menu, selector: "p-menu", inputs: ["model", "popup", "style", "styleClass", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions"], outputs: ["onShow", "onHide"] }, { kind: "component", type: i6.Menubar, selector: "p-menubar", inputs: ["model", "style", "styleClass", "autoZIndex", "baseZIndex", "autoDisplay", "autoHide", "autoHideDelay"] }, { kind: "component", type: i7.Steps, selector: "p-steps", inputs: ["activeIndex", "model", "readonly", "style", "styleClass"], outputs: ["activeIndexChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesICAMComponent, decorators: [{
            type: Component,
            args: [{ selector: ' ', template: "<div class=\"grid\" style=\"padding: 20px;\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card p-4 border-1 surface-border shadow-2\">\r\n\r\n           \r\n            \r\n            <div class=\"col-12 md:col-12\">\r\n                <p-menubar [model]=\"items\">\r\n                    <ng-template pTemplate=\"end\">\r\n                        <span class=\"p-input-icon-right\">\r\n                            <input type=\"text\" pInputText placeholder=\"Search\">\r\n                            <i class=\"pi pi-search\"></i>\r\n                        </span>\r\n                    </ng-template>\r\n                </p-menubar>\r\n            </div>\r\n\r\n            <div class=\"grid\">\r\n            <!-- Men\u00FA a la izquierda-->\r\n            <div class=\"col-12 md:col-2\" style=\"margin-top: 5%;\">\r\n                <p-menu [model]=\"plainMenuItems\"></p-menu>\r\n            </div>\r\n\r\n            <!-- Contenedor del formulario a la derecha -->\r\n            <div class=\"col-12 md:col-10\">\r\n                <div class=\"col-12\">\r\n                    <p-steps [model]=\"routeItems\" styleClass=\"mt-5\" [readonly]=\"false\"></p-steps>\r\n                </div>\r\n                <div class=\"card mt-5\">\r\n                    <h5>Datos del colegiado</h5>\r\n                    <div class=\"p-fluid p-formgrid grid\">\r\n                        <div class=\"field col-12 md:col-3\">\r\n                            <label htmlFor=\"Cronologico\">Cronol\u00F3gico</label>\r\n                            <input pInputText id=\"Cronologico\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"field col-12 md:col-3\">\r\n                            <label htmlFor=\"Colegiado\">Colegiado</label>\r\n                            <input pInputText id=\"Colegiado\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"field col-12 md:col-3\">\r\n                            <label htmlFor=\"DNI\">DNI</label>\r\n                            <input pInputText id=\"DNI\" type=\"text\" />\r\n                        </div>\r\n\r\n                        <div class=\"field col-12 md:col-3\">\r\n                            <div class=\"flex\">\r\n                                <button pButton pRipple type=\"button\" label=\"Buscar\" class=\"p-button-secondary\" style=\"margin-right: 10px;\"></button>\r\n                                <button pButton pRipple type=\"button\" label=\"Limpiar\"></button>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"field col-12 md:col-4\">\r\n                            <label htmlFor=\"primerApellido\">Primer Apellido</label>\r\n                            <input pInputText id=\"primerApellido\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"field col-12 md:col-4\">\r\n                            <label htmlFor=\"segundoApellido\">Segundo Apellido</label>\r\n                            <input pInputText id=\"segundoApellido\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"field col-12 md:col-4\">\r\n                            <label htmlFor=\"nombre\">Nombre Apellido</label>\r\n                            <input pInputText id=\"nombre\" type=\"text\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm9sYW50ZXNJQ0FNLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3ZvbGFudGVzLWljYW0vc3JjL2xpYi92b2xhbnRlc0lDQU0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvdm9sYW50ZXMtaWNhbS9zcmMvbGliL3ZvbGFudGVzSUNBTS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7QUFTbEQsTUFBTSxPQUFPLHFCQUFxQjtJQUxsQztRQVFJLG1CQUFjLEdBQWUsRUFBRSxDQUFDO1FBQ2hDLG1CQUFjLEdBQW1CLEVBQUUsQ0FBQztRQUNwQyxlQUFVLEdBQWUsRUFBRSxDQUFDO1FBQzVCLFVBQUssR0FBZSxFQUFFLENBQUM7S0EwRDFCO0lBeERHLFFBQVE7UUFFSixJQUFJLENBQUMsY0FBYyxHQUFHO1lBQ2xCO2dCQUNJLEtBQUssRUFBRSxZQUFZO2dCQUNuQixLQUFLLEVBQUU7b0JBQ0g7d0JBQ0ksS0FBSyxFQUFFLHNCQUFzQjt3QkFDN0IsSUFBSSxFQUFFLGtCQUFrQjtxQkFDM0I7b0JBQ0Q7d0JBQ0ksS0FBSyxFQUFFLG9DQUFvQzt3QkFDM0MsSUFBSSxFQUFFLGtCQUFrQjtxQkFDM0I7aUJBQ0o7YUFDSjtZQUNEO2dCQUNJLEtBQUssRUFBRSxVQUFVO2dCQUNqQixLQUFLLEVBQUU7b0JBQ0g7d0JBQ0ksS0FBSyxFQUFFLHNCQUFzQjt3QkFDN0IsSUFBSSxFQUFFLG9CQUFvQjtxQkFDN0I7aUJBQ0o7YUFDSjtTQUNKLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2QsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUU7WUFDL0MsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUU7WUFDbkQsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRTtZQUM1RCxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO1NBQ3hELENBQUM7UUFFRixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1Q7Z0JBQ0ksS0FBSyxFQUFFLHFCQUFxQjtnQkFDNUIsSUFBSSxFQUFFLGlCQUFpQjthQUMxQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxjQUFjO2dCQUNyQixJQUFJLEVBQUUscUJBQXFCO2FBQzlCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLEtBQUssRUFBRTtvQkFDSDt3QkFDSSxLQUFLLEVBQUUsc0JBQXNCO3dCQUM3QixJQUFJLEVBQUUsaUJBQWlCO3FCQUMxQjtpQkFDSjthQUNKO1NBQ0osQ0FBQztJQUVOLENBQUM7K0dBOURRLHFCQUFxQjttR0FBckIscUJBQXFCLHlDQ1RsQyw0K0dBc0VBOzs0RkQ3RGEscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNJLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNZWdhTWVudUl0ZW0sIE1lbnVJdGVtIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICcgJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi92b2xhbnRlc0lDQU0uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdm9sYW50ZXNJQ0FNLmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWb2xhbnRlc0lDQU1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gXHJcblxyXG4gICAgcGxhaW5NZW51SXRlbXM6IE1lbnVJdGVtW10gPSBbXTtcclxuICAgIG1lZ2FNZW51SXRlbXNIOiBNZWdhTWVudUl0ZW1bXSA9IFtdO1xyXG4gICAgcm91dGVJdGVtczogTWVudUl0ZW1bXSA9IFtdO1xyXG4gICAgaXRlbXM6IE1lbnVJdGVtW10gPSBbXTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnBsYWluTWVudUl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0NvbGVnaWFkb3MnLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVmVyIGRhdG9zIGNvbGVnaWFkb3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktdXNlcidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdIaXN0w7NyaWNvIGRlIHZvbGFudGVzIGRlIGNvbGVnaWFkbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1ib29rJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdWb2xhbnRlcycsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdCw7pzcXVlZGEgZGUgdm9sYW50ZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktc2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5yb3V0ZUl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7IGxhYmVsOiAnQ29sZWdpYWRvJywgcm91dGVyTGluazogJ2NvbGVnaWFkbycgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogJ0Rlc2lnbmFjacOzbicsIHJvdXRlckxpbms6ICdkZXNpZ25hY2lvbicgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogJ0RhdG9zIHZpc2l0YSBwcmlzacOzbicsIHJvdXRlckxpbms6ICdkYXRvc3Zpc2l0YScgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogJ0FjY2lvbmVzIGZpbmFsZXMnLCByb3V0ZXJMaW5rOiAnYWNjaW9uZXMnIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLml0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1ZvbGFudGVzIGRlIHByaXNpw7NuJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS10YWcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnVm9sYW50ZXMgV2ViJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1kZXNrdG9wJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0NvbnN1bHRhcycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktc2VhcmNoJyxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NvbnN1bHRhIGRlIHZvbGFudGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLWV5ZSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImdyaWRcIiBzdHlsZT1cInBhZGRpbmc6IDIwcHg7XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgcC00IGJvcmRlci0xIHN1cmZhY2UtYm9yZGVyIHNoYWRvdy0yXCI+XHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBtZDpjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxwLW1lbnViYXIgW21vZGVsXT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtaW5wdXQtaWNvbi1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcElucHV0VGV4dCBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1zZWFyY2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC9wLW1lbnViYXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cclxuICAgICAgICAgICAgPCEtLSBNZW7DuiBhIGxhIGl6cXVpZXJkYS0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIG1kOmNvbC0yXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiA1JTtcIj5cclxuICAgICAgICAgICAgICAgIDxwLW1lbnUgW21vZGVsXT1cInBsYWluTWVudUl0ZW1zXCI+PC9wLW1lbnU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBDb250ZW5lZG9yIGRlbCBmb3JtdWxhcmlvIGEgbGEgZGVyZWNoYSAtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBtZDpjb2wtMTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cC1zdGVwcyBbbW9kZWxdPVwicm91dGVJdGVtc1wiIHN0eWxlQ2xhc3M9XCJtdC01XCIgW3JlYWRvbmx5XT1cImZhbHNlXCI+PC9wLXN0ZXBzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PkRhdG9zIGRlbCBjb2xlZ2lhZG88L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWZsdWlkIHAtZm9ybWdyaWQgZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgY29sLTEyIG1kOmNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkNyb25vbG9naWNvXCI+Q3Jvbm9sw7NnaWNvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwSW5wdXRUZXh0IGlkPVwiQ3Jvbm9sb2dpY29cIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgY29sLTEyIG1kOmNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkNvbGVnaWFkb1wiPkNvbGVnaWFkbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcElucHV0VGV4dCBpZD1cIkNvbGVnaWFkb1wiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiRE5JXCI+RE5JPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwSW5wdXRUZXh0IGlkPVwiRE5JXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBjb2wtMTIgbWQ6Y29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBwQnV0dG9uIHBSaXBwbGUgdHlwZT1cImJ1dHRvblwiIGxhYmVsPVwiQnVzY2FyXCIgY2xhc3M9XCJwLWJ1dHRvbi1zZWNvbmRhcnlcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTBweDtcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHBCdXR0b24gcFJpcHBsZSB0eXBlPVwiYnV0dG9uXCIgbGFiZWw9XCJMaW1waWFyXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgY29sLTEyIG1kOmNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaW1lckFwZWxsaWRvXCI+UHJpbWVyIEFwZWxsaWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwSW5wdXRUZXh0IGlkPVwicHJpbWVyQXBlbGxpZG9cIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgY29sLTEyIG1kOmNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlZ3VuZG9BcGVsbGlkb1wiPlNlZ3VuZG8gQXBlbGxpZG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBJbnB1dFRleHQgaWQ9XCJzZWd1bmRvQXBlbGxpZG9cIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgY29sLTEyIG1kOmNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vbWJyZVwiPk5vbWJyZSBBcGVsbGlkbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcElucHV0VGV4dCBpZD1cIm5vbWJyZVwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=