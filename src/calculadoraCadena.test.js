import calcularCadena from "./CalculadoraCadena.js";

describe("Calculadora de cadenas", () => {
  it("Si recibe una cadena vacia deberia retornar 0", () => {
    expect(calcularCadena("")).toEqual(0);
  });
});
