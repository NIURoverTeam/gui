# Rover GUI System

# Rover GUI (WIP)
Hey there, I rushed through the process of both architecting this system and then writing the documentation for it.  Just send me a Teams message if anything is unclear.

## Testing

### From Your Computer
Y'all have Python installed locally, right?  As long as that base is covered, this is super easy.  We'll run into CORS issues if hosting from file:///, so let's just do a simple hosting of the files for your browser!  Navigate to the root of the repository in a separate tab/window of your shell/command processor, and run:
```
python -m SimpleHTTPServer 8081
```
Then go to your browser and type in:
```
http://localhost:8081
```
And now there won't be any issues with CORS!

### From Shatterdome
Go into your workspace and start any ROS modules/plugins that you need.  That is to say, open as many terminal windows as you need to run the things you want to test, or do a launchscript, or run them all in the same window using `&`.

Then, start rosbridge.  Note, that you need to pick a port number which is not in use already.  If another person is testing GUI stuff and they're using port 8081, use 8082, or 8083, or any number really.  Just as long as it isn't in use.
```
ros2 run rosbridge_server rosbridge_websocket.py --port 8081
```

### Connecting Them Together
Now, type that port number into the textbox in the GUI header and hit enter.  If all is working, you should see that the ROSCON is connected.

## Structure
* Modules: These are the applets which each cover a specific portion of the Rover GUI.
* Core: this shouldn't ever need to be edited during the course of plugin development.

## Modules
This repository and front-end is orchestrated in such a way that there should be no reason to ever edit the core html and js files, except as ways to extend the API.  Every component should be developed as a plugin which is loaded by the core.

### Module Format
A module is contained within a folder that has a unique name.  Let's take our example plugin, `example`, which is located in the `modules` folder, as would be appropriate.  The contents of this folder is as follows:
```
modules/example/thread.js
modules/example/assets/
```

The `thread.js` contains the code which sets up the timers and callbacks for this module.  The `assets` folder contains any pictures, models, or other data files which might be necessary.

After creating a module, the only file that should be edited to enable it in the core is `module_list.json`.
