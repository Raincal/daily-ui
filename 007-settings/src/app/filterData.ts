export class Setting {
  name: string;
  value: string;
}

export class Filter {
  id: number;
  name: string;
  settings: Setting[];
}

export class Data {
  image: string;
  settings: Setting[];
  filters: Filter[];
}

export const FILTER_DATA: Data = {
  image: '../assets/13.jpg',
  settings: [
    {
      name: 'contrast',
      value: '100',
    },
    {
      name: 'hue',
      value: '0'
    },
    {
      name: 'brightness',
      value: '100'
    },
    {
      name: 'saturate',
      value: '100'
    },
    {
      name: 'sepia',
      value: '0'
    }
  ],
  filters: [
    {
      id: 0,
      name: 'Noir',
      settings: [
        {
          name: 'contrast',
          value: '138',
        },
        {
          name: 'hue',
          value: '0'
        },
        {
          name: 'brightness',
          value: '122'
        },
        {
          name: 'saturate',
          value: '0'
        },
        {
          name: 'sepia',
          value: '0'
        }
      ]
    },
    {
      id: 1,
      name: 'Aged',
      settings: [
        {
          name: 'contrast',
          value: '94',
        },
        {
          name: 'hue',
          value: '-54'
        },
        {
          name: 'brightness',
          value: '92'
        },
        {
          name: 'saturate',
          value: '100'
        },
        {
          name: 'sepia',
          value: '44'
        }
      ]
    },
    {
      id: 2,
      name: 'Whiteout',
      settings: [
        {
          name: 'contrast',
          value: '32',
        },
        {
          name: 'hue',
          value: '0'
        },
        {
          name: 'brightness',
          value: '173'
        },
        {
          name: 'saturate',
          value: '0'
        },
        {
          name: 'sepia',
          value: '0'
        }
      ]
    },
    {
      id: 3,
      name: 'Vintage',
      settings: [
        {
          name: 'contrast',
          value: '164',
        },
        {
          name: 'hue',
          value: '0'
        },
        {
          name: 'brightness',
          value: '47'
        },
        {
          name: 'saturate',
          value: '0'
        },
        {
          name: 'sepia',
          value: '100'
        }
      ]
    }
  ]
};
