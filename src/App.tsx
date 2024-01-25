
import { FooterView } from './components/footer/footer_view';
import { FormComponent } from './components/form/form_view';
import { HeaderComponent } from './components/header/header_view';
import './styles/global.scss'

function App() {
  return (
    <>
      <HeaderComponent />
      <FormComponent />
      <FooterView />
    </>
  );
}

export default App;
