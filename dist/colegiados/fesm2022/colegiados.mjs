import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class ColegiadosService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ColegiadosService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ColegiadosService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ColegiadosService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ColegiadosComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ColegiadosComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ColegiadosComponent, selector: "lib-colegiados", ngImport: i0, template: `
    <p>
      colegiados works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ColegiadosComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-colegiados', template: `
    <p>
      colegiados works!
    </p>
  ` }]
        }] });

class ColegiadosModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ColegiadosModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ColegiadosModule, declarations: [ColegiadosComponent], exports: [ColegiadosComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ColegiadosModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ColegiadosModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ColegiadosComponent
                    ],
                    imports: [],
                    exports: [
                        ColegiadosComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of colegiados
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ColegiadosComponent, ColegiadosModule, ColegiadosService };
//# sourceMappingURL=colegiados.mjs.map
