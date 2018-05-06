!function r(a,o,h){function u(e,t){if(!o[e]){if(!a[e]){var i="function"==typeof require&&require;if(!t&&i)return i(e,!0);if(l)return l(e,!0);var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}var n=o[e]={exports:{}};a[e][0].call(n.exports,function(t){return u(a[e][1][t]||t)},n,n.exports,r,a,o,h)}return o[e].exports}for(var l="function"==typeof require&&require,t=0;t<h.length;t++)u(h[t]);return u}({1:[function(t,e,i){"use strict";var s=t("../loader"),n=t("./system");window.demoNum=2;new s(n)},{"../loader":4,"./system":3}],2:[function(t,e,i){"use strict";var s=function(){function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}}();var r=t("../particle-base"),n=function(t){function n(t,e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var s=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t,e,i));return s.alternate=t.alternate,s.noiseScale=.15,s.amplitude=0,s.speed=0,s}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,r),s(n,[{key:"update",value:function(){this.alternate?(this.amplitude=(this.system.size/2-Math.abs(this.mesh.position.x))/(this.system.size/2),this.amplitude*=this.system.osc1Eased,this.speed=this.loader.elapsedMilliseconds/750,this.mesh.position.y=10*this.system.simplex.getRaw2DNoise(this.mesh.position.x*this.noiseScale+this.speed,0)*this.amplitude):(this.amplitude=(this.system.size/2-Math.abs(this.mesh.position.x))/(this.system.size/2),this.amplitude*=1-this.system.osc1Eased,this.speed=this.loader.elapsedMilliseconds/750,this.mesh.position.y=10*this.system.simplex.getRaw2DNoise(this.mesh.position.x*this.noiseScale+this.speed+1e3,1e3)*this.amplitude);var t=(this.size,this.amplitude);this.mesh.material.opacity=.1+.9*this.amplitude,t=.05+.1*this.amplitude,this.mesh.scale.set(t,t,t),this.mesh.position.z=this.alternate?.05+10*this.amplitude:-(.05+10*this.amplitude)}}]),n}();e.exports=n},{"../particle-base":5}],3:[function(t,e,i){"use strict";var s=function(){function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}}(),r=function t(e,i,s){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:t(r,i,s)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(s):void 0};var a=t("../system-base"),o=t("./particle"),h=t("../utils/osc"),n=function(t){function n(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));e.duration=7700,e.simplex=new FastSimplexNoise,e.count=300,e.size=30;for(var i=0;i<e.count;i++){var s=e.calc.map(i,0,e.count,-e.size/2,e.size/2)+e.size/e.count/2;e.particles.push(new o({group:e.particleGroup,x:s,y:0,z:0,size:e.calc.map(Math.abs(s),0,e.size/2,.2,.01),color:i%2==0?16777215:5648670,opacity:1,alternate:i%2==0},e,e.loader))}return e.osc1=new h(.2,.015),e.osc2=new h(0,.015,!0,!1),e.reset(),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,a),s(n,[{key:"reset",value:function(){this.osc1.reset(),this.osc1Eased=0,this.osc2.reset(),this.rotationZTarget=0,this.lastRotationZTarget=this.rotationZTarget,this.rotationZProgress=0}},{key:"replay",value:function(){r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"replay",this).call(this),this.reset()}},{key:"update",value:function(){r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"update",this).call(this),this.osc1.update(this.loader.deltaTimeNormal),this.osc1Eased=this.osc1.val(this.ease.inOutExpo),this.osc2.update(this.loader.deltaTimeNormal),this.osc2.triggerBot&&(this.lastRotationZTarget=this.rotationZTarget,this.rotationZTarget+=Math.PI/-2,this.rotationZProgress=this.rotationZProgress-1),this.rotationZProgress<1&&(this.rotationZProgress+=.025*this.loader.deltaTimeNormal),this.rotationZProgress=this.calc.clamp(this.rotationZProgress,0,1),this.particleGroup.rotation.z=this.calc.map(this.ease.inOutExpo(this.rotationZProgress,0,1,1),0,1,this.lastRotationZTarget,this.rotationZTarget),!this.exiting||this.loader.isOrbit||this.loader.isGrid||(this.loader.camera.position.z=this.loader.cameraBaseZ-this.ease.inExpo(this.exitProgress,0,1,1)*this.loader.cameraBaseZ)}}]),n}();e.exports=n},{"../system-base":6,"../utils/osc":10,"./particle":2}],4:[function(t,e,i){"use strict";var s=function(){function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}}();var n=t("./utils/calc"),r=t("./utils/ease"),a=t("./utils/axis"),o=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.calc=new n,this.ease=new r,this.dom={html:document.documentElement,container:document.querySelector(".loader"),timescaleWrap:document.querySelector(".timescale-wrap"),timescaleRange:document.querySelector(".timescale-range"),timescaleValue:document.querySelector(".timescale-value"),replayButton:document.querySelector(".replay-animation"),debugButton:document.querySelector(".icon--debug")},this.dom.html.classList.add("loading"),this.completed=!1,this.raf=null,this.setupDebug(),this.setupTime(),this.setupScene(),this.setupCamera(),this.setupRenderer(),this.setupControls(),this.setupHelpers(),this.listen(),this.onResize(),this.system=new t(this),this.loop()}return s(e,[{key:"setupDebug",value:function(){var s=this;this.isDebug=0<location.hash.indexOf("debug"),this.isGrid=0<location.hash.indexOf("grid"),this.isOrbit=0<location.hash.indexOf("orbit"),this.debugHash="",this.isDebug?(this.isGrid=!0,this.isOrbit=!0,this.debugHash+="debug",this.dom.html.classList.add("is-debug")):(this.debugHash+=this.isGrid?"grid":"",this.debugHash+=this.isOrbit?"orbit":""),this.debugHash&&[].slice.call(document.querySelectorAll(".demo")).forEach(function(t,e,i){t.setAttribute("href",t.getAttribute("href")+"#"+s.debugHash)})}},{key:"setupTime",value:function(){this.timescale=1,this.clock=new THREE.Clock,this.deltaTimeSeconds=this.clock.getDelta()*this.timescale,this.deltaTimeMilliseconds=1e3*this.deltaTimeSeconds,this.deltaTimeNormal=this.deltaTimeMilliseconds/(1e3/60),this.elapsedMilliseconds=0}},{key:"setupScene",value:function(){this.scene=new THREE.Scene}},{key:"setupCamera",value:function(){this.camera=new THREE.PerspectiveCamera(100,0,1e-4,1e4),this.cameraBaseX=this.isGrid?-20:0,this.cameraBaseY=this.isGrid?15:0,this.cameraBaseZ=this.isGrid?20:30,this.camera.position.x=this.cameraBaseX,this.camera.position.y=this.cameraBaseY,this.camera.position.z=this.cameraBaseZ}},{key:"setupRenderer",value:function(){this.renderer=new THREE.WebGLRenderer({alpha:!0,antialias:!0}),this.dom.container.appendChild(this.renderer.domElement)}},{key:"setupControls",value:function(){this.isOrbit&&(this.controls=new THREE.OrbitControls(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.2,this.controls.enableKeys=!1,this.dom.timescaleWrap.style.visibility="visible")}},{key:"setupHelpers",value:function(){this.isGrid&&(this.gridOpacityMap=[.4,.2,.2,.2,.1,.2,.1,.1],this.gridHelper=new THREE.GridHelper(300,60,16777215,16777215),this.gridHelper.material.transparent=!0,this.gridHelper.material.opacity=this.gridOpacityMap[demoNum-1],this.scene.add(this.gridHelper),this.axisOpacityMap=[1,.6,.6,.6,.3,.6,.3,.3],this.axisHelper=new a(150,this.axisOpacityMap[demoNum-1]),this.scene.add(this.axisHelper),this.camera.lookAt(new THREE.Vector3))}},{key:"update",value:function(){this.deltaTimeSeconds=this.clock.getDelta(),this.diffTime&&(this.deltaTimeSeconds-=this.diffTime,this.diffTime=0),this.deltaTimeSeconds*=this.timescale,this.deltaTimeMilliseconds=1e3*this.deltaTimeSeconds,this.deltaTimeNormal=this.deltaTimeMilliseconds/(1e3/60),this.elapsedMilliseconds+=this.deltaTimeMilliseconds,this.system.update(),this.isOrbit&&this.controls.update()}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"listen",value:function(){var e=this;window.addEventListener("resize",function(t){return e.onResize(t)}),this.dom.replayButton.addEventListener("click",function(t){return e.onReplayButtonClick(t)}),this.dom.debugButton.addEventListener("click",function(t){return e.onDebugButtonClick(t)}),this.isOrbit&&(this.dom.timescaleRange.addEventListener("change",function(t){return e.onTimescaleRangeChange(t)}),this.dom.timescaleRange.addEventListener("mousemove",function(t){return e.onTimescaleRangeChange(t)})),this.hidden=null,this.visibilityChange=null,void 0!==document.hidden?(this.hidden="hidden",this.visibilityChange="visibilitychange"):void 0!==document.msHidden?(this.hidden="msHidden",this.visibilityChange="msvisibilitychange"):void 0!==document.webkitHidden&&(this.hidden="webkitHidden",this.visibilityChange="webkitvisibilitychange"),void 0===document.addEventListener||void 0===document.hidden||window.addEventListener(this.visibilityChange,function(t){return e.onVisibilityChange(t)})}},{key:"replay",value:function(){document.documentElement.classList.remove("completed"),document.documentElement.classList.add("loading"),this.camera.position.x=this.cameraBaseX,this.camera.position.y=this.cameraBaseY,this.camera.position.z=this.cameraBaseZ,this.timescale=1,this.deltaTimeSeconds=1/60,this.deltaTimeMilliseconds=1e3*this.deltaTimeSeconds,this.deltaTimeNormal=this.deltaTimeMilliseconds/(1e3/60),this.elapsedMilliseconds=0,this.blurTime=0,this.diffTime=0,this.focusTime=0,this.system.replay(),this.completed=!1,this.clock.start(),this.loop()}},{key:"complete",value:function(){var t=this;this.isOrbit||this.isGrid||(setTimeout(function(){t.clock.stop(),cancelAnimationFrame(t.raf)},600),this.completed=!0,this.dom.html.classList.remove("loading"),this.dom.html.classList.add("completed"))}},{key:"onResize",value:function(){this.width=window.innerWidth,this.height=window.innerHeight,this.dpr=1<window.devicePixelRatio?2:1,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.width,this.height)}},{key:"onReplayButtonClick",value:function(t){t.preventDefault(),this.replay()}},{key:"onDebugButtonClick",value:function(t){t.preventDefault();var e=window.location.href.split("#")[0];this.isDebug?(history?history.pushState("",document.title,window.location.pathname):location.hash="",location.href=e):location.href=e+"#debug",location.reload()}},{key:"onTimescaleRangeChange",value:function(t){this.timescale=parseFloat(this.dom.timescaleRange.value),this.dom.timescaleValue.innerHTML=this.timescale.toFixed(1)}},{key:"onVisibilityChange",value:function(t){document.hidden?this.blurTime=Date.now():(this.focusTime=Date.now(),this.blurTime&&(this.diffTime=(this.focusTime-this.blurTime)/1e3))}},{key:"loop",value:function(){var t=this;this.update(),this.render(),this.raf=window.requestAnimationFrame(function(){return t.loop()})}}]),e}();e.exports=o},{"./utils/axis":7,"./utils/calc":8,"./utils/ease":9}],5:[function(t,e,i){"use strict";var n=function(){function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}}();var s=function(){function s(t,e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),this.system=e,this.loader=i,this.calc=this.loader.calc,this.ease=this.loader.ease,this.group=t.group,this.x=t.x,this.y=t.y,this.z=t.z,this.size=t.size,this.color=t.color,this.opacity=t.opacity,this.createMesh()}return n(s,[{key:"createMesh",value:function(){this.geometry=this.system.sphereGeometry,this.material=new THREE.MeshBasicMaterial({color:this.color,transparent:!0,opacity:this.opacity,depthTest:!1,precision:"lowp"}),this.mesh=new THREE.Mesh(this.geometry,this.material),this.mesh.position.x=this.x,this.mesh.position.y=this.y,this.mesh.position.z=this.z,this.mesh.scale.set(this.size,this.size,this.size),this.group.add(this.mesh)}},{key:"reset",value:function(){}}]),s}();e.exports=s},{}],6:[function(t,e,i){"use strict";var s=function(){function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}}();var n=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.loader=t,this.calc=this.loader.calc,this.ease=this.loader.ease,this.sphereGeometry=new THREE.SphereBufferGeometry(1,16,16),this.boxGeometry=new THREE.BoxBufferGeometry(1,1,1),this.center=new THREE.Vector3,this.particles=[],this.particleGroup=new THREE.Object3D,this.particleGroup.scale.set(1e-4,1e-4,1e-4),this.loader.scene.add(this.particleGroup),this.entering=!0,this.enterProgress=0,this.enterRate=.015,this.exiting=!1,this.exitProgress=0,this.exitRate=.01,this.duration=1/0}return s(e,[{key:"update",value:function(){for(var t=this.particles.length;t--;)this.particles[t].update();if(this.entering&&this.enterProgress<1){this.enterProgress+=this.enterRate*this.loader.deltaTimeNormal,1<this.enterProgress&&(this.enterProgress=1,this.entering=!1);var e=this.ease.inOutExpo(this.enterProgress,0,1,1);this.particleGroup.scale.set(e,e,e)}!this.exiting&&this.loader.elapsedMilliseconds>this.duration&&(this.exiting=!0),this.exiting&&(this.exitProgress+=this.exitRate*this.loader.deltaTimeNormal,1<=this.exitProgress&&!this.loader.completed&&(this.exitProgress=1,this.loader.complete()))}},{key:"replay",value:function(){this.particleGroup.scale.set(1e-4,1e-4,1e-4);for(var t=this.particles.length;t--;)this.particles[t].reset();this.entering=!0,this.enterProgress=0,this.exiting=!1,this.exitProgress=0}}]),e}();e.exports=n},{}],7:[function(t,e,i){"use strict";var s=function(){function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}}();var n=function(){function i(t,e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.object3d=new THREE.Object3D,this.axisLength=t,this.opacity=e,this.createAxis(new THREE.Vector3(-this.axisLength,0,0),new THREE.Vector3(this.axisLength,0,0),new THREE.Color("hsl(0, 100%, 100%)")),this.createAxis(new THREE.Vector3(0,-this.axisLength,0),new THREE.Vector3(0,this.axisLength,0),new THREE.Color("hsl(120, 100%, 100%)")),this.createAxis(new THREE.Vector3(0,0,-this.axisLength),new THREE.Vector3(0,0,this.axisLength),new THREE.Color("hsl(240, 100%, 100%)")),this.object3d}return s(i,[{key:"createAxis",value:function(t,e,i){var s=new THREE.Geometry,n=new THREE.LineBasicMaterial({color:i,opacity:this.opacity,transparent:!0});s.vertices.push(t,e);var r=new THREE.Line(s,n);this.object3d.add(r)}}]),i}();e.exports=n},{}],8:[function(t,e,i){"use strict";var s=function(){function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}}();var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return s(t,[{key:"rand",value:function(t,e,i){void 0===e&&(e=t,t=0);var s=Math.random();return i&&(s=i(Math.random(),0,1,1)),s*(e-t)+t}},{key:"randInt",value:function(t,e,i){void 0===e&&(e=t,t=0);Math.random();return i&&i(Math.random(),0,1,1),Math.floor(Math.random()*(e-t+1))+t}},{key:"randArr",value:function(t){return t[Math.floor(Math.random()*t.length)]}},{key:"map",value:function(t,e,i,s,n){return(t-e)/(i-e)*(n-s)+s}},{key:"clamp",value:function(t,e,i){return Math.max(Math.min(t,i),e)}},{key:"lerp",value:function(t,e,i){return t+(e-t)*i}},{key:"roundToUpperInterval",value:function(t,e){return t%e==0&&(t+=1e-4),Math.ceil(t/e)*e}},{key:"roundToLowerInterval",value:function(t,e){return t%e==0&&(t-=1e-4),Math.floor(t/e)*e}},{key:"roundToNearestInterval",value:function(t,e){return Math.round(t/e)*e}},{key:"intersectSphere",value:function(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)+(t.z-e.z)*(t.z-e.z))<t.radius+e.radius}},{key:"getIndexFromCoords",value:function(t,e,i){return t+e*i}},{key:"getCoordsFromIndex",value:function(t,e){return{x:t%e,y:Math.floor(t/e)}}},{key:"visibleHeightAtZDepth",value:function(t,e){var i=e.position.z;t<i?t-=i:t+=i;var s=e.fov*Math.PI/180;return 2*Math.tan(s/2)*Math.abs(t)}},{key:"visibleWidthAtZDepth",value:function(t,e){return this.visibleHeightAtZDepth(t,e)*e.aspect}}]),t}();e.exports=n},{}],9:[function(t,e,i){"use strict";var s=function(){function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}}();var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return s(t,[{key:"inQuad",value:function(t,e,i,s){return i*(t/=s)*t+e}},{key:"outQuad",value:function(t,e,i,s){return-i*(t/=s)*(t-2)+e}},{key:"inOutQuad",value:function(t,e,i,s){return(t/=s/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e}},{key:"inCubic",value:function(t,e,i,s){return i*(t/=s)*t*t+e}},{key:"outCubic",value:function(t,e,i,s){return i*((t=t/s-1)*t*t+1)+e}},{key:"inOutCubic",value:function(t,e,i,s){return(t/=s/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e}},{key:"inQuart",value:function(t,e,i,s){return i*(t/=s)*t*t*t+e}},{key:"outQuart",value:function(t,e,i,s){return-i*((t=t/s-1)*t*t*t-1)+e}},{key:"inOutQuart",value:function(t,e,i,s){return(t/=s/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e}},{key:"inQuint",value:function(t,e,i,s){return i*(t/=s)*t*t*t*t+e}},{key:"outQuint",value:function(t,e,i,s){return i*((t=t/s-1)*t*t*t*t+1)+e}},{key:"inOutQuint",value:function(t,e,i,s){return(t/=s/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e}},{key:"inSine",value:function(t,e,i,s){return-i*Math.cos(t/s*(Math.PI/2))+i+e}},{key:"outSine",value:function(t,e,i,s){return i*Math.sin(t/s*(Math.PI/2))+e}},{key:"inOutSine",value:function(t,e,i,s){return-i/2*(Math.cos(Math.PI*t/s)-1)+e}},{key:"inExpo",value:function(t,e,i,s){return 0==t?e:i*Math.pow(2,10*(t/s-1))+e}},{key:"outExpo",value:function(t,e,i,s){return t==s?e+i:i*(1-Math.pow(2,-10*t/s))+e}},{key:"inOutExpo",value:function(t,e,i,s){return 0==t?e:t==s?e+i:(t/=s/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(2-Math.pow(2,-10*--t))+e}},{key:"inCirc",value:function(t,e,i,s){return-i*(Math.sqrt(1-(t/=s)*t)-1)+e}},{key:"outCirc",value:function(t,e,i,s){return i*Math.sqrt(1-(t=t/s-1)*t)+e}},{key:"inOutCirc",value:function(t,e,i,s){return(t/=s/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e}},{key:"inElastic",value:function(t,e,i,s){var n=1.70158,r=0,a=i;if(0==t)return e;if(1==(t/=s))return e+i;if(r||(r=.3*s),a<Math.abs(i)){a=i}else n=r/(2*Math.PI)*Math.asin(i/a);return-a*Math.pow(2,10*(t-=1))*Math.sin((t*s-n)*(2*Math.PI)/r)+e}},{key:"outElastic",value:function(t,e,i,s){var n=1.70158,r=0,a=i;if(0==t)return e;if(1==(t/=s))return e+i;if(r||(r=.3*s),a<Math.abs(i)){a=i}else n=r/(2*Math.PI)*Math.asin(i/a);return a*Math.pow(2,-10*t)*Math.sin((t*s-n)*(2*Math.PI)/r)+i+e}},{key:"inOutElastic",value:function(t,e,i,s){var n=1.70158,r=0,a=i;if(0==t)return e;if(2==(t/=s/2))return e+i;if(r||(r=s*(.3*1.5)),a<Math.abs(i)){a=i}else n=r/(2*Math.PI)*Math.asin(i/a);return t<1?a*Math.pow(2,10*(t-=1))*Math.sin((t*s-n)*(2*Math.PI)/r)*-.5+e:a*Math.pow(2,-10*(t-=1))*Math.sin((t*s-n)*(2*Math.PI)/r)*.5+i+e}},{key:"inBack",value:function(t,e,i,s,n){return null==n&&(n=1.70158),i*(t/=s)*t*((n+1)*t-n)+e}},{key:"outBack",value:function(t,e,i,s,n){return null==n&&(n=1.70158),i*((t=t/s-1)*t*((n+1)*t+n)+1)+e}},{key:"inOutBack",value:function(t,e,i,s,n){return null==n&&(n=1.70158),(t/=s/2)<1?i/2*(t*t*((1+(n*=1.525))*t-n))+e:i/2*((t-=2)*t*((1+(n*=1.525))*t+n)+2)+e}}]),t}();e.exports=n},{}],10:[function(t,e,i){"use strict";var s=function(){function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}}();var n=function(){function n(t,e){var i=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],s=3<arguments.length&&void 0!==arguments[3]&&arguments[3];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._val=t,this._rate=e,this._dir=i,this._flip=s,this._valBase=t,this._rateBase=e,this._dirBase=i,this._flipBase=s,this.trigger=!1,this.triggerTop=!1,this.triggerBot=!1}return s(n,[{key:"reset",value:function(){this._val=this._valBase,this._rate=this._rateBase,this._dir=this._dirBase,this._flip=this._flipBase,this.trigger=!1,this.triggerTop=!1,this.triggerBot=!1}},{key:"update",value:function(t){this.trigger=!1,this.triggerTop=!1,this.triggerBot=!1,this._dir?this._val<1?this._val+=this._rate*t:(this.trigger=!0,this.triggerTop=!0,this._flip?this._val=this._val-1:(this._val=1-(this._val-1),this._dir=!this._dir)):0<this._val?this._val-=this._rate*t:(this.trigger=!0,this.triggerBot=!0,this._flip?this._val=1+this._val:(this._val=-this._val,this._dir=!this._dir))}},{key:"val",value:function(t){return t?t(this._val,0,1,1):this._val}}]),n}();e.exports=n},{}]},{},[1]);