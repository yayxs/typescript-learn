/**
 * 定义Person 接口
 */
interface IPerson {
  firstName: string
  lastName: string
}
class Beauty {
  fullName: string
  constructor(public firstName: string, public lastName: string) {
    this.fullName = `${firstName}--${lastName}`
  }
}

function genGirl(person: IPerson): string {
  return `hi ${person.firstName}${person.lastName}`
}
const beautyGirl: Beauty = new Beauty('赵', '铁柱子')
document.body.textContent = genGirl(beautyGirl)
