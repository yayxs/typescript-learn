/**
 *
 * @param this 指向Window
 * @param name
 */
function sayHi(this: Window, name: string): void {
  console.log(this.name)
}
window.sayHi = sayHi

window.sayHi('vast')
