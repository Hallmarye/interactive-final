$(function () {
    var $warmingCenters = $('#warming-centers');
    /* I want to create 117 copies of the house glyphicons.
*/
    var numCopies = 117; // keep the number of duplicates we want
    var numStations = 24;
    var numLibraries = 89;
    var numSeniors = 7;
    var numWalkable = 2;
    var $homeEl;

    for (var i = 0; i < numCopies; i++) {
        $homeEl = $('<span class="glyphicon home glyphicon-home" aria-hidden="true"></span>');

        if (numCopies - i < numStations) {
            $homeEl.addClass('police-stations');
        }
        if (numCopies - i < numLibraries) {
            $homeEl.addClass('libraries');
        }
        if (numCopies - i < numSeniors) {
            $homeEl.addClass('senior-centers');
        }
        if (numCopies - i < numWalkable) {
            $homeEl.addClass('walkable');
        }
        $homeEl.appendTo($warmingCenters);
        console.log("warming")
    }
})

$(function () {
    var $shelters = $('#shelters');
    /* I want to create 9 copies of the bed glyphicons.
*/
    var numCopies = 9; // keep the number of duplicates we want
    var numYouth = 7;
    var numMen = 2;
    var numLottery = 3;
    var $homeEl;

    for (var i = 0; i < numCopies; i++) {
        $homeEl = $('<span class="glyphicon bed glyphicon-bed" aria-hidden="true"></span>');

        if (numCopies - i < numYouth) {
            $homeEl.addClass('youth-shelters');
        }
        if (numCopies - i < numMen) {
            $homeEl.addClass('mens-shelters');
        }
        if (numCopies - i < numLottery) {
            $homeEl.addClass('coed-shelters');
        }
        $homeEl.appendTo($shelters);
        console.log("shelters")
    }
});

// init controller
var height_between_scenes = 480;
var controller = new ScrollMagic.Controller();
var pinArgs = {
    pushFollowers: true
};

var policeStationScene = new ScrollMagic.Scene({triggerElement: '#police-stations', duration: height_between_scenes}).setClassToggle('#warming-centers', 'magic-police').setPin('#warming-centers', pinArgs);

var librariesScene = new ScrollMagic.Scene({triggerElement: '#libraries', duration: height_between_scenes}).setClassToggle('#warming-centers', 'magic-libraries').setPin('#warming-centers', pinArgs);

var seniorCentersScene = new ScrollMagic.Scene({triggerElement: '#senior-centers', duration: height_between_scenes}).setClassToggle('#warming-centers', 'magic-seniors').setPin('#warming-centers', pinArgs);

var walkableScene = new ScrollMagic.Scene({triggerElement: '#walkable', duration: height_between_scenes}).setClassToggle('#warming-centers', 'magic-walkable').setPin('#warming-centers', pinArgs);

var allCentersScene = new ScrollMagic.Scene({triggerElement: '#all-centers', duration: height_between_scenes}).setClassToggle('#warming-centers', 'magic-all').setPin('#warming-centers', pinArgs);

var scenes = [policeStationScene, librariesScene, seniorCentersScene, walkableScene, allCentersScene];

for (var i = 0; i < scenes.length; i++) {
    scenes[i].addTo(controller);
}

//This is what I've added.

var allSheltersScene = new ScrollMagic.Scene({triggerElement: '#all-shelters', duration: height_between_scenes}).setClassToggle('#shelters', 'magic-all').setPin('#shelters', pinArgs);

var youthScene = new ScrollMagic.Scene({triggerElement: '#youth-shelters', duration: height_between_scenes}).setClassToggle('#shelters', 'magic-youth').setPin('#shelters', pinArgs);

var menScene = new ScrollMagic.Scene({triggerElement: '#mens-shelters', duration: height_between_scenes}).setClassToggle('#shelters', 'magic-men').setPin('#shelters', pinArgs);

var coedScene = new ScrollMagic.Scene({triggerElement: '#coed-shelters', duration: height_between_scenes}).setClassToggle('#shelters', 'magic-coed').setPin('#shelters', pinArgs);

var scenes = [allSheltersScene, youthScene, menScene, coedScene];

for (var i = 0; i < scenes.length; i++) {
    scenes[i].addTo(controller);
}
