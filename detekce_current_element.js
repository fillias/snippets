(function () {

    var pos = '%%POS%%';

    const _sasic = window._sasic || parent.window._sasic;
    const _sashec = window._sashec || parent.window._sashec;


    // elementNode vraci bud undefined pokud neco selze, nebo wrapper teto reklamy pokud ma size mediumrectangle a ma pos 1, 2 nebo undefined. 
    // proc je to vyfiltrovane i na pos=2 a pos=undefined nevim, ale nechavam to tam, nejaky duvod to asi melo...
    // po odstraneni podpory _sashec mozno prepsat jen na _sasic
    const elementNode = _sasic ? getSasicElementNode() : getSashecElementNode();
    console.log(elementNode);



    function getSashecElementNode() {

        if (!_sashec) {
            return undefined;
        }

        var pozice = _sashec.getGroupById("default").positions;
        var myElement = (Object.keys(pozice) || []).filter(function (id) {
            myPos = pozice[id].options.targets.pos;
            if (pozice[id].options.size) {
                return (
                    ([].indexOf || String.prototype.indexOf).call(
                        pozice[id].options.size,
                        "mediumrectangle"
                    ) != -1 &&
                    (myPos == 1 || myPos == 2 || myPos == undefined)
                );
            }
        });

        if (myElement[pos - 1]) {
            return pozice[myElement[pos - 1]].options.element;
        } else {
            return false;
        }
    }


    function getSasicElementNode() {
        if (!_sasic) {
            return undefined;
        }

        const positions = Object.keys(_sasic.get(['groups', 'default', 'positions']));

        const findParentWithElementId = (element, positions) => {
            const parent = element.parentElement;

            if (!parent) {
                return undefined;
            }

            const match = positions.find(adId => adId === parent.id);

            if (!match) {
                return findParentWithElementId(parent, positions);
            }

            const positionOptions = _sasic.get(['groups', 'default', 'positions', match]).options;
            console.log('positionOptions');
            console.log(positionOptions);

            if (positionOptions.size.indexOf('mediumrectangle') != -1 && (positionOptions.pos == 1 || positionOptions.pos == 2 || positionOptions.pos == undefined)) {
                return parent;
            } else {
                return undefined;
            }
        };

        return findParentWithElementId(document.currentScript, positions);

    }

})();