/**
 * OpenLayers 3 Layer Pinpoint Control.
 * @constructor
 * @extends {ol.control.Control}
 */
ol.control.PinPoint = function(opt_options) {

    var options = opt_options || {};

    var anchor = document.createElement('span');
    anchor.className = 'icon ion-pinpoint';

    var element = document.createElement('div');
    element.className = 'ol-pinpoint ol-unselectable';
    element.appendChild(anchor);

    ol.control.Control.call(this, {
        element: element,
        target: options.target
    });

};

ol.inherits(ol.control.PinPoint, ol.control.Control);


