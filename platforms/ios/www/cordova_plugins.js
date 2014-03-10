cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.coronalabs.coronacards.cordova/www/coronaview.js",
        "id": "com.coronalabs.coronacards.cordova.CoronaView",
        "clobbers": [
            "CoronaView"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/console-via-logger.js",
        "id": "org.apache.cordova.console.console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/logger.js",
        "id": "org.apache.cordova.console.logger",
        "clobbers": [
            "cordova.logger"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.coronalabs.coronacards.cordova": "0.0.1",
    "org.apache.cordova.console": "0.2.7"
}
// BOTTOM OF METADATA
});