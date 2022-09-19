import calcularCadena from "./CalculadoraCadena.js";

describe("Calculadora de cadenas", () => {
  it("Si recibe una cadena vacia deberia retornar 0", () => {
    expect(calcularCadena("")).toEqual(0);
  });
  it("Si recibe una cadena con valor 2 deberia retornar el mismo valor", () => {
    const result= calcularCadena("2")
    expect(result).toEqual(2);
  });
});
