
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'space'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",300,function(sym,e){sym.play("fly");});
//Edge binding end
})("space");
//Edge symbol end:'space'
})(jQuery,AdobeEdge,"EDGE-19767612");