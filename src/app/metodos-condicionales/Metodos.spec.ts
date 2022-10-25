import { MetodosCondicionales } from './Metodos-etc';

describe('Probando metodos', () => {
  let componente: MetodosCondicionales;
  beforeEach(() => {
    componente = new MetodosCondicionales();
  });

  it('Verificar si es par', () => {
    const ver = componente.parImpar(2);
    expect(ver).toEqual('par');
  });

  it('Verificar si es impar', () => {
    const ver = componente.parImpar(3);
    expect(ver).toEqual('impar');
  });

  it('Verifica si es menor de edad', () => {
    const ver = componente.esMayorDeEdad(5);
    expect(ver).toEqual('menor');
  });

  it('Verifica si es mayor edad', () => {
    const ver = componente.esMayorDeEdad(18);
    expect(ver).toEqual('mayor');
  });
});
