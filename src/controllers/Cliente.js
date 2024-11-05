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
  
    consultarSaldo(numeroCuenta) {
      const cuenta = this.obtenerCuenta(numeroCuenta);
      if (cuenta) {
        console.log(`Saldo actual de la cuenta ${numeroCuenta}: $${cuenta.consultarSaldo()}`);
      } else {
        console.log("Cuenta no encontrada");
      }
    }
  
    realizarDeposito(numeroCuenta, monto) {
      const cuenta = this.obtenerCuenta(numeroCuenta);
      if (cuenta) {
        cuenta.depositar(monto);
      } else {
        console.log("Cuenta no encontrada");
      }
    }
  
    realizarRetiro(numeroCuenta, monto) {
      const cuenta = this.obtenerCuenta(numeroCuenta);
      if (cuenta) {
        cuenta.retirar(monto);
      } else {
        console.log("Cuenta no encontrada");
      }
    }
  
    obtenerCuenta(numeroCuenta) {
      return this.cuentas.find(cuenta => cuenta.numeroCuenta === numeroCuenta);
    }
  }
  