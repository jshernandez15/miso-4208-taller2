describe('Los estudiantes page', function () {

    beforeEach(function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
    });

    describe('Login and account creation', function () {
        it('should visit LosEstudiantes and create an account and success/fail', function () {
            cy.contains('Ingresar').click();

            cy.get('.cajaSignUp').find('input[name="nombre"]').click().type('Juan Sebastian');
            cy.get('.cajaSignUp').find('input[name="apellido"]').click().type('Hernandez');
            cy.get('.cajaSignUp').find('input[name="correo"]').click().type('js.hernandez15@uniandes.edu.co');
            cy.get('.cajaSignUp').find('select[name="idDepartamento"]').select("Ingeniería de Sistemas");
            cy.get('.cajaSignUp').find('input[name="password"]').click().type('.mar1ana.');
            cy.get('.cajaSignUp').find('input[name="acepta"]').check();
            cy.get('.cajaSignUp').contains('Registrarse').click();

            // This should work just in case the account doesn't exist
            // cy.contains('Verifica tu correo y activa tu cuenta Con esto ya podrás calificar profesores')

            // This should work just in case the account already exists
            cy.contains('Error: Ya existe un usuario registrado con el correo \'js.hernandez15@uniandes.edu.co\'');
        });

        it('should login successfully', function () {
            cy.contains('Ingresar').click()
            cy.get('.cajaLogIn').find('input[name="correo"]').click().type("js.hernandez15@uniandes.edu.co")
            cy.get('.cajaLogIn').find('input[name="password"]').click().type(".mar1ana.")
            cy.get('.cajaLogIn').contains('Ingresar').click()
            cy.get('button#cuenta').should('be.visible');
        });
    });

    describe('Searching', function () { 
        it('should search successfully a teacher', function () {            
            cy.contains('Buscar un profesor...').click();
            cy.get('input[role="combobox"]').type('mario linares');
            cy.get('.Select-option.is-focused').should('be.visible');
        });

        it('should not found any teacher', function () {
            cy.contains('Buscar un profesor...').click();
            cy.get('input[role="combobox"]').type('juan hernandez');
            cy.get('.Select-option.is-focused').should('not.be.visible');
        });
    }); 

    describe('Navigate to teachers page', function () {
        it('should open the teacher page using the searching functionality', function () {
            cy.contains('Buscar un profesor...').click();
            cy.get('input[role="combobox"]').type('mario linares');
            cy.get('.Select-option.is-focused').click();
            cy.contains('Mario Linares Vasquez');
            cy.contains('Ingeniería de Sistemas');
            cy.contains('Universidad de los Andes');
            cy.url().should('eq', 'https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez');
        });

        it('should open the teacher page searching him in alpha order', function () {
            cy.contains('Alfabético').click();
            cy.contains('Alvaro Andres Gomez D`Alleman').click();
            cy.contains('Alvaro Andres Gomez D`Alleman');
            cy.contains('Ingeniería de Sistemas');
            cy.contains('Universidad de los Andes');
            cy.url().should('eq', 'https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/alvaro-andres-gomez-d%60alleman');
        });
    });

    describe('Filter by course in teachers page', function () {
        it('should filter each course', function () {
           cy.contains('Buscar un profesor...').click();
           cy.get('input[role="combobox"]').type('mario linares');
           cy.get('.Select-option.is-focused').click(); 

           // Activate Estructuras de datos filter and deactivate it
           cy.get('li.statsProfesorDropdownItemChecked label.labelHover').contains('Estructuras De Datos').click();
           cy.wait(1500);
           cy.get('li.post label').contains('Constr. Aplicaciones Móviles').should('not.be.visible');
           cy.get('li.post label').contains('Progr Con Tecnologias Web').should('not.be.visible');
           cy.get('li.statsProfesorDropdownItemChecked label.labelHover').contains('Estructuras De Datos').click();
           cy.wait(1500);

           // Activate Constr. Aplicaciones Móviles filter and deactivate it
           cy.get('li.statsProfesorDropdownItemChecked label.labelHover').contains('Constr. Aplicaciones Móvile...').click();
           cy.wait(1500);
           cy.get('li.post label').contains('Estructuras De Datos').should('not.be.visible');
           cy.get('li.post label').contains('Progr Con Tecnologias Web').should('not.be.visible');
           cy.get('li.statsProfesorDropdownItemChecked label.labelHover').contains('Constr. Aplicaciones Móvile...').click();
           cy.wait(1500);

           // Activate Constr. Aplicaciones Móviles filter and deactivate it
           cy.get('li.statsProfesorDropdownItemChecked label.labelHover').contains('Progr Con Tecnologias Web').click();
           cy.wait(1500);
           cy.get('li.post label').contains('Estructuras De Datos').should('not.be.visible');
           cy.get('li.post label').contains('Constr. Aplicaciones Móviles').should('not.be.visible');
           cy.get('li.statsProfesorDropdownItemChecked label.labelHover').contains('Progr Con Tecnologias Web').click();
        });
    });
});
