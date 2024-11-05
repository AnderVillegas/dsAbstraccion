// Clase Cliente
class Cliente {
    constructor(nombre, apellido, direccion, numeroIdentificacion) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.direccion = direccion;
      this.numeroIdentificacion = numeroIdentificacion;
      this.cuentas = [];
    }
  
    agregarCuenta(cuenta) {
      this.cuentas.push(cuenta);
    }
  
    consultarSaldo() {
      this.cuentas.forEach(cuenta => {
        console.log(`Cuenta ${cuenta.numeroCuenta}: Saldo ${cuenta.consultarSaldo()}`);
      });
    }
  
    realizarDeposito(numeroCuenta, monto) {
      const cuenta = this.obtenerCuenta(numeroCuenta);
      if (cuenta) {
        cuenta.depositar(monto);
      }
    }
  
    realizarRetiro(numeroCuenta, monto) {
      const cuenta = this.obtenerCuenta(numeroCuenta);
      if (cuenta) {
        cuenta.retirar(monto);
      }
    }
  
    obtenerCuenta(numeroCuenta) {
      return this.cuentas.find(cuenta => cuenta.numeroCuenta === numeroCuenta);
    }
  }
  
  // Clase Cuenta
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
      this.movimientos.forEach(movimiento => {
        console.log(movimiento);
      });
    }
  }
  
  // Clase CuentaCorriente
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
  
  // Clase CuentaAhorros
  class CuentaAhorros extends Cuenta {
    consultarMovimientos() {
      this.movimientos.forEach(movimiento => {
        console.log(movimiento);
      });
    }
  }
  
  // Ejemplo de uso
  // Crear clientes
  const cliente1 = new Cliente("Juan", "Pérez", "Calle Falsa 123", "12345678");
  const cliente2 = new Cliente("Ana", "Gómez", "Avenida Siempre Viva 742", "87654321");
  
  // Crear cuentas
  const cuentaCorriente = new CuentaCorriente("0001");
  const cuentaAhorros = new CuentaAhorros("0002");
  
  // Asociar cuentas a clientes
  cliente1.agregarCuenta(cuentaCorriente);
  cliente2.agregarCuenta(cuentaAhorros);
  
  // Realizar operaciones
  cliente1.realizarDeposito("0001", 100000);
  cliente1.realizarRetiro("0001", 150000);
  cliente1.consultarSaldo();
  
  cliente2.realizarDeposito("0002", 200000);
  cliente2.realizarRetiro("0002", 50000);
  cliente2.consultarSaldo();
  cliente2.obtenerCuenta("0002").consultarMovimientos();
  