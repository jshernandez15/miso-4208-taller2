module.exports = { // adapted from: https://git.io/vodU0
    'Los estudiantes login success': function(browser) {
      browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('.botonIngresar', 4000)
        .click('.botonIngresar')
        .setValue('.cajaSignUp input[name="nombre"]', 'Juan Sebastian')
        .setValue('.cajaSignUp input[name="apellido"]', 'Hernandez')
        .setValue('.cajaSignUp input[name="correo"]', 'js.hernandez15@uniandes.edu.co')
        .setValue('.cajaSignUp input[name="idDepartamento"]', 'Ingeniería de Sistemas')
        .setValue('.cajaSignUp input[name="password"]', '.mar1ana.')
        .click('.cajaSignUp input[name="acepta"]')
        .click('.cajaSignUp .logInButton')
        .waitForElementVisible('.text-muted lead', 4000)
        .assert.containsText('.text-muted lead', 'Error: Ya existe un usuario registrado con el correo \'js.hernandez15@uniandes.edu.co\'')
      browser.end();
    }
  };