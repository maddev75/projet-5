class Blabla {
    constructor(begin, middle, end) {
        this.begin = begin;
        this.middle = middle;
        this.end = end;
        }
        generateCitation() {
            const start = this.begin[Math.floor(Math.random() * this.begin.length)];
            const middle = this.middle[Math.floor(Math.random() * this.middle.length)];
            const end = this.end[Math.floor(Math.random() * this.end.length)];
            const citation = start + " " + middle + " " + end;
            let mesCitations = document.createElement('div');
            divMesCitations.append(mesCitations);
            mesCitations.textContent = citation;
            mesCitations.classList.add('div-citation');
            return (citation);
        }
    }
    //essai