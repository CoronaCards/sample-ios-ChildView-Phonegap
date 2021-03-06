<!---
# The MIT License (MIT)
# 
# Copyright (c) 2014 Corona Labs
# 
# Permission is hereby granted, free of charge, to any person obtaining a copy of
# this software and associated documentation files (the "Software"), to deal in
# the Software without restriction, including without limitation the rights to
# use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies # of
# the Software, and to permit persons to whom the Software is furnished to do so,
# subject to the following conditions:
# 
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, # FITNESS
# FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
# COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
# IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
# CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

# com.coronalabs.coronacards.cordova

This plugin provides the ability to create CoronaView instances from JavaScript.

## Installation

    cordova plugin add com.coronalabs.coronacards.cordova

## Supported Platforms

- iOS

## Media

    var view = new CoronaView( x, y, w, h );

### Parameters

- __x__: 

- __y__: 

- __w__: The width

- __h__: The height


### Constants

### Methods

- `view.run`: Loads the `main.lua` in the specific folder and executes it.

- `view.suspend`: Suspends the CoronaView instance.

- `view.resume`: Resumes the CoronaView instance.

- `view.close`: Shuts down the CoronaView instance.

- `view.sendEvent`: Sends an event from JavaScript to Lua.

## view.run

Loads the `main.lua` in the specific folder and executes it.

    view.run(path, params);

### Parameters

- __path__: A path to a folder containing the Corona resource files (e.g. `main.lua`).

- __params__: 

### Quick Example

    var view = new CoronaView( 0, 0, 100, 100 );


## view.suspend

    view.suspend();

### Quick Example

    var view = new CoronaView( 0, 0, 100, 100 );


## view.resume

    view.resume();

### Quick Example

    var view = new CoronaView( 0, 0, 100, 100 );


## view.close

    view.close();

### Quick Example

    var view = new CoronaView( 0, 0, 100, 100 );


## view.sendEvent

    view.sendEvent(eventParams);

### Parameters

- __eventParams__: An associative array (key-value pairs).

### Quick Example

    var view = new CoronaView( 0, 0, 100, 100 );



### Quick Example

    // Play audio
    //
    function playAudio(url) {
        // Play the audio file at url
        var my_media = new Media(url,
            // success callback
            function () {
                console.log("playAudio():Audio Success");
            },
            // error callback
            function (err) {
                console.log("playAudio():Audio Error: " + err);
            }
        );
        // Play audio
        my_media.play();
    }

