// Clase Cliente 
class Cliente { 
    constructor(nombre, apellido, direccion, numeroIdentificacion, username) { 
        this.nombre = nombre; this.apellido = apellido; 
        this.direccion = direccion; this.numeroIdentificacion = numeroIdentificacion; 
        this.username = username; 
        this.cuentas = [];
     } 
    agregarCuenta(cuenta) { 
        this.cuentas.push(cuenta); } 
    consultarSaldo() { 
        this.cuentas.forEach(cuenta => { console.log(`Cuenta ${cuenta.numeroCuenta}: Saldo ${cuenta.consultarSaldo()}`); }); } 
        realizarDeposito(numeroCuenta, monto) { 
            const cuenta = this.obtenerCuenta(numeroCuenta); 
            if (cuenta) { cuenta.depositar(monto); } } 
            realizarRetiro(numeroCuenta, monto) { 
            const cuenta = this.obtenerCuenta(numeroCuenta); if (cuenta) { cuenta.retirar(monto); } } 
            obtenerCuenta(numeroCuenta) { return this.cuentas.find(cuenta => cuenta.numeroCuenta === numeroCuenta); } } 

// Clase Cuenta 
let contadorDeCuentas = 1; class Cuenta { constructor(saldo = 0) { 
    this.numeroCuenta = Cuenta.generarNumeroCuenta(); 
    this.saldo = saldo; 
    this.movimientos = []; } 
    static generarNumeroCuenta() { return String(contadorDeCuentas++).padStart(4, '0'); } consultarSaldo() 
    {   return 
        this.saldo; } 
    depositar(monto) { 
        this.saldo += monto; 
        this.movimientos.push(`Depósito: $${monto}`); } 
        retirar(monto) { 
    if (monto <= this.saldo) { this.saldo -= monto; 
        this.movimientos.push(`Retiro: $${monto}`); } 
        else { console.log("Saldo insuficiente"); } } 
    consultarMovimientos() { this.movimientos.forEach(movimiento => { console.log(movimiento); }); } } 
// Clase CuentaCorriente 
class CuentaCorriente extends Cuenta { constructor(saldo = 0) { super(saldo); this.sobregiroMaximo = 500000; } retirar(monto) { 
    if (monto <= this.saldo + this.sobregiroMaximo) { this.saldo -= monto; this.movimientos.push(`Retiro: $${monto}`); } else { console.log("Saldo insuficiente, incluso considerando el sobregiro permitido"); } } } 
// Clase CuentaAhorros 
class CuentaAhorros extends Cuenta { constructor(saldo = 0) { super(saldo); } consultarMovimientos() 
{ this.movimientos.forEach(movimiento => { console.log(movimiento); }); } }