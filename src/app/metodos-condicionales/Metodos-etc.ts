export class MetodosCondicionales {
  parImpar(numero: number): string {
    if (numero % 2 == 0) {
      return 'par';
    }
    return 'impar';
  }

  esMayorDeEdad(numero: number): string {
    if (numero > 17) {
      return 'mayor';
    } else {
      return 'menor';
    }
  }
}
