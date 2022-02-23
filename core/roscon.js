// Create a client for Rosbridge
let ros = new ROSLIB.Ros()

// Set error handler
ros.on('error', error => {
   document.getElementById('connecting').style.display = 'none'
   document.getElementById('connected').style.display = 'none'
   document.getElementById('closed').style.display = 'none'
   document.getElementById('error').style.display = 'inline'
   console.log(error)
})

// Set connected handler
ros.on('connection', () => {
   document.getElementById('status_roscon').className = "connected"
})

// set closed handler
ros.on('close', () => {
   document.getElementById('status_roscon').className = "closed"
})

// Connect to Shatterdome
ros.connect('ws://10.156.209.2:8081')
