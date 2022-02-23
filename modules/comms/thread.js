
/*
 * Module: XBox Controller
 *
 * Hi, Raven/Violet here.
 * Yes, I know my Javascript style guide goes against everything anyone has ever said in a tutorial.
 * The 1999 spec of Javascript says semicolons are optional, and I love to take advantage of that.
 * I also use 3 spaces for indentation.  I'm a monster.
 */

// Add our panel to the screen
let panel = new Control(Control.small, Control.visible, "COMMs Debug")

// Temporary silly solution which isn't accurate at all.
status_comms.className = "connected"

panel.contents.className = "mpadded"

panel.contents.innerText = "Connected from 10.156.209.2 over ROSBRIDGE to 127.0.0.1"
