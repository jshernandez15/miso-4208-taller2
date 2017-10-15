var assert = require('assert');

describe('los estudiantes login', function() {
	
    // it('should visit los estudiantes and failed at log in', function () {
		
    //     browser.url('https://losestudiantes.co');
    //     browser.click('button=Cerrar');
    //     browser.waitForVisible('button=Ingresar', 10000);
    //     browser.click('button=Ingresar');

    //     var cajaLogIn = browser.element('.cajaLogIn');
    //     var mailInput = cajaLogIn.element('input[name="correo"]');

    //     mailInput.click();
    //     mailInput.keys('wrongemail@example.com');

    //     var passwordInput = cajaLogIn.element('input[name="password"]');

    //     passwordInput.click();
    //     passwordInput.keys('1234');

    //     cajaLogIn.element('button=Ingresar').click()
    //     browser.waitForVisible('.aviso.alert.alert-danger', 5000);

    //     var alertText = browser.element('.aviso.alert.alert-danger').getText();
    //     expect(alertText).toBe('Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
		
    // });

    it('should not found any teacher', function() {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('.Select.Select--single', 5000);


        var elementoAccionable = browser.element('.Select-placeholder');
        elementoAccionable.click();

        var cajaBuscar = browser.element('input[role="combobox"]');
        cajaBuscar.setValue('juan hernandez');

        browser.waitForVisible('.Select.Select--single', 5000);
        var elementoEnLista = browser.element('.Select-option.is-focused');
        expect(!elementoEnLista);
    });
	
});

describe('buscando profesores', function() {
    it('Navigate to teachers page', function() {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('.Select.Select--single', 5000);

        var elementoAccionable = browser.element('.Select-placeholder');
        elementoAccionable.click();

        var cajaBuscar = browser.element('input[role="combobox"]');
        cajaBuscar.setValue('Mario Linares Vasquez');

        browser.waitForVisible('.Select-option.is-focused', 5000);
        var elementoEnLista = browser.element('.Select-option.is-focused');
        elementoEnLista.click();

        browser.getUrl().should.be.equal('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez');
    });
});