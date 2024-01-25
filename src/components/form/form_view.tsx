// FormComponent.tsx

import React, { useState, FormEvent } from 'react';
import './form.scss';

interface FormData {
  selectedHour: string | null;
}

export function FormComponent(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    selectedHour: null,
  });

  const handleRadioChange = (value: string) => {
    setFormData({
      ...formData,
      selectedHour: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Aqui você pode enviar os dados para a API usando formData.selectedHour
    console.log('Hora selecionada:', formData.selectedHour);
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <div className="form-icon"></div>
      <h3>Qual horário você pretende dizer que irá?</h3>
      <div className="radio-wrapper">
        <input
          type="radio"
          name="hour"
          value="morning"
          onChange={() => handleRadioChange('morning')}
          checked={formData.selectedHour === 'morning'}
        />
        <label htmlFor="morning">Manhã</label>
        <span>06:00 às 12h</span>
      </div>
      <div className="radio-wrapper">
        <input
          type="radio"
          name="hour"
          value="afternoon"
          onChange={() => handleRadioChange('afternoon')}
          checked={formData.selectedHour === 'afternoon'}
        />
        <label htmlFor="afternoon">Tarde</label>
        <span>12:01 às 18h</span>
      </div>
      <div className="radio-wrapper">
        <input
          type="radio"
          name="hour"
          value="night"
          onChange={() => handleRadioChange('night')}
          checked={formData.selectedHour === 'night'}
        />
        <label htmlFor="night">Noite</label>
        <span>18:01 às 23h</span>
      </div>
      <div className="checkbox-wrapper"></div>
      <div className="btn-wrapper">
        <button type="submit" className="btn btn-primary">
          Encontrar unidade
        </button>
        <button type="button" className="btn btn-secondary">
          Limpar
        </button>
      </div>
    </form>
  );
}

export default FormComponent;
