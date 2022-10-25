import { FormBuilder } from "@angular/forms";
import { unFormulario } from "./Formulario";


describe('Probando formulario', () => {
    const component = new unFormulario(new FormBuilder());

    it('primera prueba formulario', () => {
        expect(component.form.contains('email')).toBeTruthy();
        expect(component.form.contains('password')).toBeTruthy();
    });

    it('probando validador email es requerido', () => {
        const control = component.form.get('email');
        control?.setValue('');
        expect(control?.valid).toBeFalsy();
    });

    it('probando validador email es tipo email', () => {
        const control = component.form.get('email');
        control?.setValue('sofka@sofka.com.co');
        expect(control?.valid).toBeTruthy();
    });
});

