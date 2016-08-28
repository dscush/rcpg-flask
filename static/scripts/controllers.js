'use strict';

/* global $ */
function Controller(model) {
    this.model = model;
    this.addChord = function () {
        var chordName = $('#chord-name').val();
        var pitches = $('#pitch-select').val();
        var nextChords = $('#next-chords').val();
        this.model.currentGenerator.addChord(chordName, pitches, nextChords);
        $('#chord-name').val('');
        $('#pitch-select').selectpicker('deselectAll');
        $('#next-chords').val('');
        // TODO: update chord list
        // TODO: check generator validity and update view
    };
};
