'use strict';

class FlyingVehicle {
    constructor(name, flight) {
        this.name = name;
        this.flight = flight;
    }

    flying() {
        return 'a little bit of pixie dust';
    }

    crashing() {
        return 'AHHHHHHHHHHHHHHHH!!!!!!!!! BOOM!!';
    }
}

class Airplane extends FlyingVehicle{
    constructor(name) {
        super(name, 'wings');
    }
}

class Helicopter extends FlyingVehicle {
    constructor(name) {
        super(name, 'rotors');
    }

    hover() {
        return 'I am Floating!';
    }
}



module.exports = {Airplane, Helicopter};



