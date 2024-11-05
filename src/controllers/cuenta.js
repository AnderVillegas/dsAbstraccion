class Cuenta {
    constructor(numeroCuenta, saldo = 0) {
      this.numeroCuenta = numeroCuenta;
      this.saldo = saldo;
      this.movimientos = [];
    }
  
    consultarSaldo() {
      return this.saldo;
    }
  
    depositar(monto) {
      this.saldo += monto;
      this.movimientos.push(`Depósito: $${monto}`);
    }
  
    retirar(monto) {
      if (monto <= this.saldo) {
        this.saldo -= monto;
        this.movimientos.push(`Retiro: $${monto}`);
      } else {
        console.log("Saldo insuficiente");
      }
    }
  
    consultarMovimientos() {
      return this.movimientos;
    }
  }
  