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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50, function(sym, e) {
         	sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${DR}", "mouseover", function(sym, e) {
         	sym.play("DR");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${DR}", "mouseout", function(sym, e) {
         		sym.play("Tyria");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 325, function(sym, e) {
         	sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 635, function(sym, e) {
         	sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RS}", "mouseover", function(sym, e) {
         	sym.play("RS");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RS}", "mouseout", function(sym, e) {
         	sym.play("Tyria");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         	sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PT}", "mouseover", function(sym, e) {
         	sym.play("PT");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PT}", "mouseout", function(sym, e) {
         	sym.play("Tyria");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1295, function(sym, e) {
         	sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${H}", "mouseover", function(sym, e) {
         	sym.play("H");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${H}", "mouseout", function(sym, e) {
         	sym.play("Tyria");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1645, function(sym, e) {
         	sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BC}", "mouseover", function(sym, e) {
         	sym.play("BC");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BC}", "mouseout", function(sym, e) {
         	sym.play("Tyria");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${LA}", "mouseover", function(sym, e) {
         	sym.play("LA");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${LA}", "mouseout", function(sym, e) {
         	sym.play("Tyria");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4986414");