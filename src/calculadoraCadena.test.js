import calcularCadena from "./CalculadoraCadena.js";

describe("Calculadora de cadenas", () => {
  it("Si recibe una cadena vacia deberia retornar 0", () => {
    expect(calcularCadena("")).toEqual(0);
  });
  it("Si recibe una cadena con valor 2 deberia retornar el mismo valor", () => {
    const result= calcularCadena("2")
    expect(result).toEqual(2);
  });
  it("Si recibe una cadena con valor 2,3 deberia retornar 5", () => {
    const result= calcularCadena("2,3")
    expect(result).toEqual(5);
  });
  it("Si recibe una cadena con valor 7,8 deberia retornar 15", () => {
    const result= calcularCadena("7,8")
    expect(result).toEqual(15);
  });
  it("Si recibe una cadena con valor 2,3,4 deberia retornar 9", () => {
    const result= calcularCadena("2,3,4")
    expect(result).toEqual(9);
  });
  it("Si recibe una cadena con valor 10,12,12 deberia retornar 34", () => {
    const result= calcularCadena("10,12,12")
    expect(result).toEqual(34);
  });
});
