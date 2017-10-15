module.exports = { // adapted from: https://git.io/vodU0
    'Los estudiantes login success': function(browser) {
      browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('.botonIngresar', 4000)
        .click('.botonIngresar')
        .setValue('.cajaLogIn input[name="correo"]', 'js.hernandez15@uniandes.edu.co')
        .setValue('.cajaLogIn input[name="password"]', '.mar1ana.')
        .click('.cajaLogIn .logInButton');
      browser.expect.element('#cuenta').to.be.present.after(4000);
      browser.end();
    }
  };