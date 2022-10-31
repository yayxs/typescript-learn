const isString: string = 'string';

// ( isString as { handle:()=>{}  } ).handle()

(isString as unknown as { log: () => {} }).log();

// 使用尖括号断言

(<{ log: () => {} }>(<unknown>isString)).log();
