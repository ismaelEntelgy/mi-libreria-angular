import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class VolantesicamService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesicamService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesicamService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesicamService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class VolantesicamComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesicamComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: VolantesicamComponent, selector: "lib-volantesicam", ngImport: i0, template: "<!DOCTYPE html>\r\n<html lang=\"es\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Landing Zone</title>\r\n    <link href=\"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css\" rel=\"stylesheet\">\r\n</head>\r\n<body>\r\n    <div class=\"min-h-screen bg-gray-100 flex flex-col items-center justify-center\">\r\n        <header class=\"w-full bg-blue-600 text-white text-center py-6\">\r\n            <h1 class=\"text-4xl font-bold\">Bienvenido a la Landing Zone</h1>\r\n        </header>\r\n\r\n        <section class=\"w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 mt-6\">\r\n            <h2 class=\"text-2xl font-semibold text-gray-800 mb-4\">Explora nuestras soluciones</h2>\r\n            <p class=\"text-gray-600\">Descubre c\u00F3mo podemos ayudarte a optimizar tu infraestructura en la nube con nuestras herramientas especializadas.</p>\r\n            <button class=\"mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700\">M\u00E1s Informaci\u00F3n</button>\r\n        </section>\r\n\r\n        <footer class=\"w-full text-center py-4 mt-6 text-gray-700\">\r\n            &copy; 2025 Landing Zone Solutions - Todos los derechos reservados.\r\n        </footer>\r\n    </div>\r\n</body>\r\n</html>\r\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesicamComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-volantesicam', template: "<!DOCTYPE html>\r\n<html lang=\"es\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Landing Zone</title>\r\n    <link href=\"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css\" rel=\"stylesheet\">\r\n</head>\r\n<body>\r\n    <div class=\"min-h-screen bg-gray-100 flex flex-col items-center justify-center\">\r\n        <header class=\"w-full bg-blue-600 text-white text-center py-6\">\r\n            <h1 class=\"text-4xl font-bold\">Bienvenido a la Landing Zone</h1>\r\n        </header>\r\n\r\n        <section class=\"w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 mt-6\">\r\n            <h2 class=\"text-2xl font-semibold text-gray-800 mb-4\">Explora nuestras soluciones</h2>\r\n            <p class=\"text-gray-600\">Descubre c\u00F3mo podemos ayudarte a optimizar tu infraestructura en la nube con nuestras herramientas especializadas.</p>\r\n            <button class=\"mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700\">M\u00E1s Informaci\u00F3n</button>\r\n        </section>\r\n\r\n        <footer class=\"w-full text-center py-4 mt-6 text-gray-700\">\r\n            &copy; 2025 Landing Zone Solutions - Todos los derechos reservados.\r\n        </footer>\r\n    </div>\r\n</body>\r\n</html>\r\n" }]
        }] });

class VolantesicamModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesicamModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: VolantesicamModule, declarations: [VolantesicamComponent], exports: [VolantesicamComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesicamModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VolantesicamModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VolantesicamComponent
                    ],
                    imports: [],
                    exports: [
                        VolantesicamComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of volantesicam
 */

/**
 * Generated bundle index. Do not edit.
 */

export { VolantesicamComponent, VolantesicamModule, VolantesicamService };
//# sourceMappingURL=volantesicam.mjs.map
