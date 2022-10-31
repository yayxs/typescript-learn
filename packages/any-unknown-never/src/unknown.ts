// unknown 和 any 有些类似
let unknownVar: unknown = 'van';

unknownVar = false;
unknownVar = 'string';
unknownVar = {
  name: 'obj',
};
unknownVar = () => {};

// const ukString:string =unknownVar
