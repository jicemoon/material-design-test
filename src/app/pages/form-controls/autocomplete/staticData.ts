export interface StateGroup {
  letter: string;
  names: string[];
}
export class State {
  constructor(public name: string, public population: string, public flag: string) {}
}

const stateGroups: StateGroup[] = [
  {
    letter: 'A',
    names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
  },
  {
    letter: 'C',
    names: ['California', 'Colorado', 'Connecticut']
  },
  {
    letter: 'D',
    names: ['Delaware']
  },
  {
    letter: 'F',
    names: ['Florida']
  },
  {
    letter: 'G',
    names: ['Georgia']
  },
  {
    letter: 'H',
    names: ['Hawaii']
  },
  {
    letter: 'I',
    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
  },
  {
    letter: 'K',
    names: ['Kansas', 'Kentucky']
  },
  {
    letter: 'L',
    names: ['Louisiana']
  },
  {
    letter: 'M',
    names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana']
  },
  {
    letter: 'N',
    names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota']
  },
  {
    letter: 'O',
    names: ['Ohio', 'Oklahoma', 'Oregon']
  },
  {
    letter: 'P',
    names: ['Pennsylvania']
  },
  {
    letter: 'R',
    names: ['Rhode Island']
  },
  {
    letter: 'S',
    names: ['South Carolina', 'South Dakota']
  },
  {
    letter: 'T',
    names: ['Tennessee', 'Texas']
  },
  {
    letter: 'U',
    names: ['Utah']
  },
  {
    letter: 'V',
    names: ['Vermont', 'Virginia']
  },
  {
    letter: 'W',
    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  }
];

const states: State[] = [
  {
    name: 'Arkansas',
    population: '2.978M',
    // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
  },
  {
    name: 'California',
    population: '39.14M',
    // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
  },
  {
    name: 'Florida',
    population: '20.27M',
    // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
  },
  {
    name: 'Texas',
    population: '27.47M',
    // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
  }
];

export { stateGroups, states };
