class Beauty {
    firstName;
    lastName;
    fullName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName}--${lastName}`;
    }
}
function genGirl(person) {
    return `hi ${person.firstName}${person.lastName}`;
}
const beautyGirl = new Beauty('赵', '铁柱子');
document.body.textContent = genGirl(beautyGirl);
class BadGreeter {
    name;
}
