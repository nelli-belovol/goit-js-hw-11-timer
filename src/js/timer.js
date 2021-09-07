import { refs } from './refs.js';

import { getTimeComponents } from './convertTime.js';
// console.log(getTimeComponents);

const { days, hours, mins, secs } = refs;

class Timer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    const timerId = setInterval(() => {
      const currentTime = Date.now();
      const time = Date.parse(this.targetDate) - currentTime;
      const { daysMath, hoursMath, minsMath, secsMath } = getTimeComponents(time);
      days.textContent = daysMath;
      hours.textContent = hoursMath;
      mins.textContent = minsMath;
      secs.textContent = secsMath;
    }, 1000);
  }
}

const CountdownTimer = new Timer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});

window.addEventListener('onload', CountdownTimer.start());
