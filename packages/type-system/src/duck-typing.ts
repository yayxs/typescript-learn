// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#structural-type-system
interface You {
  name: string;
  age: number;
}

function Pera(per: You) {
  console.log(`${per.name}-${per.age}`);
}

const u = { name: 'van', age: 12 };
Pera(u);
