class Root {
  log() {}
}

class SonA extends Root {}

class SonB extends Root {}

type TypeSonB = (args: SonB) => SonB;
