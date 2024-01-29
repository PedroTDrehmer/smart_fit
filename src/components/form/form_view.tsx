import './form.scss'
import { ReactElement } from 'react';
import horario from '../../assets/images/png/icon-hour.png'
import valueModel from './form_view_model';


export function FormComponent(): ReactElement {
  const {valor, setValor} = valueModel(); 

  return (
    <form className="form-group">

      <div className="form-icon">
        <img src={horario} alt="Icon"/>
        Horário
      </div>

      <h3>Qual período você pretende não ir?</h3>

      <div className="radio-wrapper">
        <input type="radio" name="hour" value={valor} onChange={e => setValor(e.target.value)} />
        <label htmlFor="morning" >Matutino</label>
        <span>06:00 às 12h</span>
      </div>

      <div className="radio-wrapper">
        <input type="radio" name="hour" value={valor} onChange={e => setValor(e.target.value)} />
        <label htmlFor="afternoon">Vespertino</label>
        <span>12:01 às 18h</span>
      </div>

      <div className="radio-wrapper">
        <input type="radio" name="hour" value={valor} onChange={e => setValor(e.target.value)} />
        <label htmlFor="night">Noturno</label>
        <span>18:01 às 23h</span>
      </div>

      <div className="btn btn-wrapper">
        <div className="btn-wrapper">
          <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
        <div className="btn-wrapper">
          <button type="submit" className="btn btn-primary">Limpar</button>
        </div>
      </div>

    </form>

  );
}

export default (FormComponent);
