class FlightSimulator {
  constructor() {
    this.altitude = 0;
    this.velocity = 0;
    this.thrust = 0;
    this.lift = 0;
  }

  applyThrust(thrust) {
    this.thrust = thrust;
    this.velocity += thrust * 0.1;
  }

  updateAltitude() {
    this.lift = this.velocity * 0.05;
    this.altitude += this.lift;
    return this.altitude;
  }
}
