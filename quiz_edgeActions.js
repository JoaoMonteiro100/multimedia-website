/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group}", "click", function(sym, e) {
         	sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3704, function(sym, e) {
         	sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3894, function(sym, e) {
         	sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${asura-race}", "click", function(sym, e) {
         	sym.play("Q1 right");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${norn-race}", "click", function(sym, e) {
         		sym.play("Q1 wrong");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sylvari-race}", "click", function(sym, e) {
         		sym.play("Q1 wrong");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${human-race}", "click", function(sym, e) {
         		sym.play("Q1 wrong");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${charr-race}", "click", function(sym, e) {
         		sym.play("Q1 wrong");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4087, function(sym, e) {
         	sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${Group2}", "click", function(sym, e) {
         	sym.play("Q2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5421, function(sym, e) {
         	sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text7}", "click", function(sym, e) {
         	sym.play("Q1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group4}", "click", function(sym, e) {
         	sym.play("Q2");

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5611, function(sym, e) {
         	sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5804, function(sym, e) {
         	sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${Text8Copy}", "click", function(sym, e) {
         	sym.play("Q2 right");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text8Copy2}", "click", function(sym, e) {
         	sym.play("Q2 wrong");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text8}", "click", function(sym, e) {
         	sym.play("Q2 wrong");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${correct}", "click", function(sym, e) {
         	sym.play("Begin");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text9}", "click", function(sym, e) {
         	sym.play("Begin");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${incorrect}", "click", function(sym, e) {
         	sym.play("Q22");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text10}", "click", function(sym, e) {
         sym.play("Q22");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text11}", "click", function(sym, e) {
         sym.play("Begin");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bola2}", "click", function(sym, e) {
         sym.play("Begin");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-435226");