class Control {
   // size variables
   static large = 3
   static medium = 2
   static small = 1

   // visibility variables
   static visible = true
   static invisible = false

   constructor(size, visible, title) {
      this.element = document.createElement("div")
      this.element.className = "module panel size" + size + " " + (visible ? "show" : "hide")
      this.contents = document.createElement('container')
      this.element.appendChild(document.createElement('nav'))
      this.element.appendChild(this.contents)
      this.changeTitle(title)
      document.getElementById("modulecontainer").appendChild(this.element)
   }

   changeTitle(newTitle) {
      this.element.getElementsByTagName('nav')[0].innerText = newTitle
   }

}
