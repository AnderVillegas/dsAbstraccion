// document.addEventListener('DOMContentLoaded', function() { document.getElementById('transferirForm').addEventListener('submit', function(event) { event.preventDefault(); const usuarioDestino = document.getElementById('usuarioDestino').value.trim(); const montoTransferencia = parseFloat(document.getElementById('montoTransferencia').value); const currentUser = JSON.parse(localStorage.getItem('currentUser')); if (currentUser && currentUser.saldo >= montoTransferencia) { let users = JSON.parse(localStorage.getItem('users')) || []; let cuentaDestino = null; let usuarioDestinoObj = null; // Validación del Nombre de Usuario 
//     if (!usuarioDestino) { document.getElementById('transactionResult').innerHTML = `<div class="alert alert-danger">Por favor ingrese un nombre de usuario destino válido.</div>`; return; } // Buscar la cuenta de destino por nombre de usuario 
//     for (let user of users) { if (user.username.toLowerCase() === usuarioDestino.toLowerCase()) { usuarioDestinoObj = user; cuentaDestino = user.cuentas.length > 0 ? user.cuentas[0] : null; break; } } if (cuentaDestino) { // Realizar la transferencia 
//         currentUser.saldo -= montoTransferencia; currentUser.movimientos.push({ descripcion: `Transferencia a ${usuarioDestino}`, monto: -montoTransferencia, fecha: new Date().toLocaleString() }); cuentaDestino.saldo += montoTransferencia; cuentaDestino.movimientos.push({ descripcion: `Transferencia de ${currentUser.username}`, monto: montoTransferencia, fecha: new Date().toLocaleString() }); // Actualizar los datos en localStorage 
//         localStorage.setItem('currentUser', JSON.stringify(currentUser)); users = users.map(user => { if (user.username === currentUser.username) { return currentUser; } else if (user.username === usuarioDestino) { return usuarioDestinoObj; } return user; }); localStorage.setItem('users', JSON.stringify(users)); document.getElementById('transactionResult').innerHTML = `<div class="alert alert-success">Transferencia exitosa. Nuevo saldo: $${currentUser.saldo.toFixed(2)}</div>`; } else { document.getElementById('transactionResult').innerHTML = `<div class="alert alert-danger">Usuario destino no encontrado.</div>`; } } else { document.getElementById('transactionResult').innerHTML = `<div class="alert alert-danger">Saldo insuficiente o usuario no autorizado.</div>`; } }); });




document.addEventListener('DOMContentLoaded', function() { document.getElementById('transferirForm').addEventListener('submit', function(event) { event.preventDefault(); const usuarioDestino = document.getElementById('usuarioDestino').value.trim(); 
    const montoTransferencia = parseFloat(document.getElementById('montoTransferencia').value); 
    const currentUser = JSON.parse(localStorage.getItem('currentUser')); 
    if (currentUser && currentUser.saldo >= montoTransferencia) { let users = JSON.parse(localStorage.getItem('users')) || []; 
        let cuentaDestino = null; let usuarioDestinoObj = null; 
    // Validación del Nombre de Usuario 
    if (!usuarioDestino) { document.getElementById('transactionResult').innerHTML = `<div class="alert alert-danger">Por favor ingrese un nombre de usuario destino válido.</div>`; return; } 
    // Buscar la cuenta de destino por nombre de usuario 
    for (let user of users) { if (user.username.toLowerCase() === usuarioDestino.toLowerCase()) { usuarioDestinoObj = user; if (Array.isArray(user.cuentas) && user.cuentas.length > 0) { cuentaDestino = user.cuentas[0]; 
        // Supongamos que usamos la primera cuenta encontrada 
        } 
        break; } } if (cuentaDestino) { // Realizar la transferencia 
            currentUser.saldo -= montoTransferencia; currentUser.movimientos.push({ descripcion: `Transferencia a ${usuarioDestino}`, monto: -montoTransferencia, fecha: new Date().toLocaleString() }); cuentaDestino.saldo += montoTransferencia; cuentaDestino.movimientos.push({ descripcion: `Transferencia de ${currentUser.username}`, monto: montoTransferencia, fecha: new Date().toLocaleString() }); 
            // Actualizar los datos en localStorage 
            localStorage.setItem('currentUser', JSON.stringify(currentUser)); users = users.map(user => { if (user.username === currentUser.username) { return currentUser; } else if (user.username === usuarioDestino) { return usuarioDestinoObj; } return user; }); localStorage.setItem('users', JSON.stringify(users)); 
            document.getElementById('transactionResult').innerHTML = `<div class="alert alert-success">Transferencia exitosa. Nuevo saldo: $${currentUser.saldo.toFixed(2)}</div>`; } else { 
            document.getElementById('transactionResult').innerHTML = `<div class="alert alert-danger">Usuario destino no encontrado o sin cuentas.</div>`; } } else {
            document.getElementById('transactionResult').innerHTML = `<div class="alert alert-danger">Saldo insuficiente o usuario no autorizado.</div>`; } }); });