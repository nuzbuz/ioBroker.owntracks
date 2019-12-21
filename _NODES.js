module.exports =
{
    "users": {
        "userId": {"node": "users.%id%.userId", "description": "User ID of user %name%", "common": {"type": "string", "role": "text"}},
        "tid": {"node": "users.%id%.userTid", "description": "Tracker ID of user %name%", "common": {"type": "string", "role": "text"}},
        "userName": {"node": "users.%id%.userName", "description": "User name of user %name%", "common": {"type": "string", "role": "text"}},
        "userConnected": {"node": "users.%id%.userConnected", "description": "Connection status of user %name%", "common": {"type": "boolean", "role": "indicator.connected"}},
        "conn": {"node": "users.%id%.connection", "description": "Connection type of user %name%", "common": {"type": "string", "role": "text", "states": {"w": "WiFi", "o": "Offline", "m": "Mobile Data"}}},
		
        "batt": {"node": "users.%id%.battery", "description": "Device battery level for %name%", "common": {"type": "number", "role": "battery", "unit": "%", "min": 0, "max": 100}},
        "alt": {"node": "users.%id%.altitude", "description": "Altitude for %name%", "common": {"type": "number", "role": "gps.altitude"}},
        "lat": {"node": "users.%id%.latitude", "description": "Latitude for %name%", "common": {"type": "number", "role": "gps.latitude"}},
        "lon": {"node": "users.%id%.longitude", "description": "Longitude for %name%", "common": {"type": "number", "role": "gps.longitude"}},
        "acc": {"node": "users.%id%.accuracy", "description": "Accuracy for %name%", "common": {"type": "number", "role": "value", "unit": "m"}},
        "vac": {"node": "users.%id%.alt_accuracy", "description": "Accuracy (of altitude) for %name%", "common": {"type": "number", "role": "value", "unit": "m"}},
        "vel": {"node": "users.%id%.velocity", "description": "Velocity for %name%", "common": {"type": "number", "role": "value", "unit": "m"}},
        "encryption": {"node": "users.%id%.encryption", "description": "Encryption status for %name%", "common": {"type": "boolean", "role": "indicator"}},
        "tst": {"node": "users.%id%.refreshed", "description": "Timestamp of last refresh for %name%", "convert": "datetime", "common": {"type": "number", "role": "value"}},
        "inregions": {"node": "users.%id%.location._currentLocations", "description": "All current locations of %name%", "convert": "string", "common": {"type": "string", "role": "text"}},
		"geofence": {"node": "users.%id%.location.geofence", "description": "Indicator whether geofence is active", "common": {"type": "boolean"}},
	},
	
	"userLocation": {
		"enteredLast": {"node": "users.%id%.location.enteredLocation", "description": "Last location entered by %name%", "common": {"type": "string", "role": "text"}},
		"entered": {"node": "users.%id%.location.enteredTimestamp", "description": "Timestamp the user has entered the last location", "convert": "datetime", "common": {"type": "number"}},
		"leftLast": {"node": "users.%id%.location.leftLocation", "description": "Last location left by %name%", "common": {"type": "string", "role": "text"}},
		"left": {"node": "users.%id%.location.leftTimestamp", "description": "Timestamp the user has left the last location", "convert": "datetime", "common": {"type": "number"}},
		"history": {"node": "users.%id%.location.history", "description": "History of the user entering / leaving locations", "common": {"type": "string", "role": "json"}}
    },
	
    "locations": {
		"geofence": {"node": "locations.%id%.geofence", "description": "Indicator whether geofence is active", "common": {"type": "boolean"}},
        "locationId": {"node": "locations.%id%.locationId", "description": "Location ID of location %name%"},
        "locationName": {"node": "locations.%id%.locationName", "description": "Location name of location %name%"},
        "lat": {"node": "locations.%id%.latitude", "description": "Latitude for %name%", "common": {"type": "number", "role": "gps.latitude"}},
        "lon": {"node": "locations.%id%.longitude", "description": "Longitude for %name%", "common": {"type": "number", "role": "gps.longitude"}},
        "users": {"node": "locations.%id%.users", "description": "Present users in location %name%"},
        "presence": {"node": "locations.%id%.presence", "description": "Indicator whether any user is present in location %name%", "common": {"type": "boolean"}},
        "history": {"node": "locations.%id%.history", "description": "History of users entering / leaving location %name%", "common": {"type": "string", "role": "json"}},
		"acc": {"node": "locations.%id%.accuracy", "description": "Accuracy of the geographical coordinates of location %name%", "common": {"type": "number", "role": "value", "unit": "m"}},
        "wtst": {"node": "locations.%id%.creation", "description": "Timestamp of creation time of location %name%", "convert": "datetime", "common": {"type": "number", "role": "value"}},
        "tst": {"node": "locations.%id%.refreshed", "description": "Timestamp of last change within the location %name%", "convert": "datetime", "common": {"type": "number", "role": "value"}}
    }
}
