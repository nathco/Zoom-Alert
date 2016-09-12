// Plugin: Zoom Alert
// Source: github.com/nathco/Zoom-Alert
// Author: Nathan Rutzky
// Update: 2.0

function onRun(context) {
    
    var doc = context.document
    var val = doc.zoomValue()
    var pct = Math.round(val * 100) / 100
    
    doc.displayMessage_timeout(pct * 100 + '%', 0.7);
};
