var c = {};
var loc = null;
if (loc == null) {
    loc = new Windows.Devices.Geolocation.Geolocator();
}
if (loc != null) {
    loc.getGeopositionAsync().then(function (pos) {
        //console.log(pos);

        c.lat = pos.coordinate.point.position.latitude;
        c.lng = pos.coordinate.point.position.longitude;
        console.log(c);
        //coordinate.lat = pos.coordinate.point.position.latitude;
        //coordinate.lon = pos.coordinate.point.position.longitude;
    }, function (e) {
        document.getElementById('errormsg').innerHTML = e.message;
        // Display an appropriate error message based on the location status.
    });
}
var Coordinate = WinJS.Class.define(function () {
    this.coordinate = c;
    console.log(c);
});
