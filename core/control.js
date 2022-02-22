class Control {
   // size variables
   static large = 3
   static medium = 2
   static small = 1

   // visibility variables
   static visible = true
   static invisible = false

   constructor(size, visible) {
      this.element = document.createElement("div")
      this.element.className = "module panel size" + size + " " + (visible ? "show" : "hide")
      document.getElementById("modulecontainer").appendChild(this.element)
   }
}
