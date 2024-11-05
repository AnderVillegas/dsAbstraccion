class CuentaCorriente extends Cuenta {
    constructor(numeroCuenta, saldo = 0) {
      super(numeroCuenta, saldo);
      this.sobregiroMaximo = 500000;
    }
  
    retirar(monto) {
      if (monto <= this.saldo + this.sobregiroMaximo) {
        this.saldo -= monto;
        this.movimientos.push(`Retiro: $${monto}`);
      } else {
        console.log("Saldo insuficiente, incluso considerando el sobregiro permitido");
      }
    }
  }
  