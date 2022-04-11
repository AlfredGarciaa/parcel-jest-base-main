import multiplicar from "./multiplicador.js";

describe("Multiplicador", () => {
  it("deberia multiplicar dos numeros", () => {
    const resultado = multiplicar(3,2);
    expect(resultado).toEqual(6); // if resultado == 6 then mostrar mensaje de exito (verde)
                                  // else mosrar mensaje de falla (rojo)
  });
  it("deberia multiplicar dos numeros negativos", () => {
    const resultado = multiplicar(-5,-8);
    expect(resultado).toEqual(40)
  });
});
