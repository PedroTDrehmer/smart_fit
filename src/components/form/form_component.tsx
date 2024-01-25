import './form.scss'
import { ReactElement } from 'react';


export function FormComponent(): ReactElement {
return (
<form className="form-group">
    <div className="form-icon"></div>
    <h3>Qual horário você pretende dizer que irá?</h3>
    <div className="radio-wrapper">
    <input type="radio" name="hour" value="morning"/>
    <label htmlFor="morning">Manhã</label>
    <span>06:00 às 12h</span>
    </div>
    <div className="radio-wrapper">
    <input type="radio" name="hour" value="afternoon"/>
    <label htmlFor="afternoon">Tarde</label>
    <span>12:01 às 18h</span>
    </div>
    <div className="radio-wrapper">
    <input type="radio" name="hour" value="night"/>
    <label htmlFor="night">Noite</label>
    <span>18:01 às 23h</span>
    </div>
    <div className="checkbox-wrapper">
    </div>
    <div className="btn-wrapper">
    <button type="submit" className="btn btn-primary">Encontrar unidade</button>
    <button type="button" className="btn btn-secondary">Limpar</button>
    </div>
</form>
);
}

export default (FormComponent);
