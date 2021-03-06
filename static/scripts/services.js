'use strict';

/*global angular*/
angular.module('RcpgApp')
    .service('SavedGenerators', function(){
        // TODO: use ajax requests to save to and load from database
        var that = this;
        this.generators = [];
        this.Generator = function(name) {
            that.generators.push(this);
            this.name = name;
            this.chords = [];
        };
        this.Chord = function(name, pitches, nextChords) {
            this.name = name;
            this.pitches = pitches;
            this.nextChords = nextChords;
        };
        this.Generator.prototype.addChord = function(chordName, pitches, nextChords) {
            this.chords.push(new that.Chord(chordName, pitches, nextChords));
        };
    })
    .service('NoteNames', function() {
        this.allNotes = [
            'C -1',
            'C#/Db -1',
            'D -1',
            'D#/Eb -1',
            'E -1',
            'F -1',
            'F#/Gb -1',
            'G -1',
            'G#/Ab -1',
            'A -1',
            'A#/Bb -1',
            'B -1',
            'C 0',
            'C#/Db 0',
            'D 0',
            'D#/Eb 0',
            'E 0',
            'F 0',
            'F#/Gb 0',
            'G 0',
            'G#/Ab 0',
            'A 0',
            'A#/Bb 0',
            'B 0',
            'C 1',
            'C#/Db 1',
            'D 1',
            'D#/Eb 1',
            'E 1',
            'F 1',
            'F#/Gb 1',
            'G 1',
            'G#/Ab 1',
            'A 1',
            'A#/Bb 1',
            'B 1',
            'C 2',
            'C#/Db 2',
            'D 2',
            'D#/Eb 2',
            'E 2',
            'F 2',
            'F#/Gb 2',
            'G 2',
            'G#/Ab 2',
            'A 2',
            'A#/Bb 2',
            'B 2',
            'C 3',
            'C#/Db 3',
            'D 3',
            'D#/Eb 3',
            'E 3',
            'F 3',
            'F#/Gb 3',
            'G 3',
            'G#/Ab 3',
            'A 3',
            'A#/Bb 3',
            'B 3',
            'C 4',
            'C#/Db 4',
            'D 4',
            'D#/Eb 4',
            'E 4',
            'F 4',
            'F#/Gb 4',
            'G 4',
            'G#/Ab 4',
            'A 4',
            'A#/Bb 4',
            'B 4',
            'C 5',
            'C#/Db 5',
            'D 5',
            'D#/Eb 5',
            'E 5',
            'F 5',
            'F#/Gb 5',
            'G 5',
            'G#/Ab 5',
            'A 5',
            'A#/Bb 5',
            'B 5',
            'C 6',
            'C#/Db 6',
            'D 6',
            'D#/Eb 6',
            'E 6',
            'F 6',
            'F#/Gb 6',
            'G 6',
            'G#/Ab 6',
            'A 6',
            'A#/Bb 6',
            'B 6',
            'C 7',
            'C#/Db 7',
            'D 7',
            'D#/Eb 7',
            'E 7',
            'F 7',
            'F#/Gb 7',
            'G 7',
            'G#/Ab 7',
            'A 7',
            'A#/Bb 7',
            'B 7',
            'C 8',
            'C#/Db 8',
            'D 8',
            'D#/Eb 8',
            'E 8',
            'F 8',
            'F#/Gb 8',
            'G 8',
            'G#/Ab 8',
            'A 8',
            'A#/Bb 8',
            'B 8'
        ];
        this.noteNameToNum = function(noteName) {
            return this.allNotes.indexOf(noteName);
        };
        this.noteNumToName = function(noteNum) {
            return this.allNotes[noteNum];
        };
    })
;
