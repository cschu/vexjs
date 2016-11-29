function initTooltip(evt) {
      if ( window.svgDocument == null ) {
        svgDocument = evt.target.ownerDocument;
      }
      tooltip = svgDocument.getElementById('tooltip');
      tooltip_bg = svgDocument.getElementById('tooltip_bg');
    }

    function ShowTooltip(evt, mouseovertext, x, y) {

      tooltip.setAttributeNS(null,"x",x+11);
      tooltip.setAttributeNS(null,"y",y+27);
      tooltip.firstChild.data = mouseovertext;
      tooltip.setAttributeNS(null,"visibility","visible");
      tooltip_bg.setAttributeNS(null,"x",x+8);
      tooltip_bg.setAttributeNS(null,"y",y+16);
      tooltip_bg.setAttributeNS(null,"visibility","visible");
      length = tooltip.getComputedTextLength();
      tooltip_bg.setAttributeNS(null,"width",length+8);
    }

    function HideTooltip() {
      tooltip.setAttributeNS(null,"visibility","hidden");
      tooltip_bg.setAttributeNS(null,"visibility","hidden");
    }
