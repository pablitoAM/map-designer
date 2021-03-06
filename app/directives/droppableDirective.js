System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var DroppableDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DroppableDirective = (function () {
                function DroppableDirective(element) {
                    this.element = element;
                    this.dropped = new core_1.EventEmitter();
                    console.log(this.element);
                    this.originalClass = this.element.nativeElement.className;
                }
                DroppableDirective.prototype.onDragOver = function (ev) {
                    //console.log(ev);        
                    ev.stopPropagation();
                    ev.preventDefault();
                    return false;
                };
                DroppableDirective.prototype.onDragEnter = function (ev) {
                    // console.log(ev);
                    // ev.stopPropagation();
                    // ev.preventDefault();       
                    this.element.nativeElement.className += ' ' + this.dragClass;
                };
                DroppableDirective.prototype.onDragLeave = function (ev) {
                    // console.log(ev);
                    // ev.stopPropagation();
                    // ev.preventDefault();       
                    // Check if there was drop. Emit event?
                    this.element.nativeElement.className = this.originalClass;
                };
                DroppableDirective.prototype.onDrop = function (ev) {
                    // Emit drop event
                    ev.stopPropagation();
                    ev.preventDefault();
                    var dt = ev.dataTransfer;
                    var files = dt.files;
                    this.dropped.emit(files);
                    this.element.nativeElement.className = this.originalClass += ' ' + this.dropClass;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], DroppableDirective.prototype, "dragClass", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], DroppableDirective.prototype, "dropClass", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], DroppableDirective.prototype, "dropped", void 0);
                DroppableDirective = __decorate([
                    core_1.Directive({
                        selector: '[droppable]',
                        host: {
                            '(dragover)': 'onDragOver($event)',
                            '(dragleave)': 'onDragLeave($event)',
                            '(dragenter)': 'onDragEnter($event)',
                            '(drop)': 'onDrop($event)'
                        }
                    }),
                    core_1.Injectable(),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], DroppableDirective);
                return DroppableDirective;
            }());
            exports_1("DroppableDirective", DroppableDirective);
        }
    }
});
//# sourceMappingURL=droppableDirective.js.map