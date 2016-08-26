'use strict';

/* global app */

function Chord(name, pitches, nextChords) {
    this.name = name;
    this.pitches = pitches;
    this.nextChords = nextChords;
}

function Generator() {
    this.chords = [];
    this.addChord = function(chordName, pitches, nextChords) {
        this.chords.push(new Chord(chordName, pitches, nextChords));
    };
}

function Model() {
    this.currentGenerator = new Generator();
    this.savedGenerators = [];
};
