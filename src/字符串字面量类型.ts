type EventNames = 'click' | 'scroll';

function handleEvent(ele: Element, event: EventNames) {}

handleEvent(document.getElementById('app'), 'click');
