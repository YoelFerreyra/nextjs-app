import { render } from '@testing-library/react';
import Home from './page';

test('Render del componente Home', () => {
  const { getByAltText, getByRole } = render(<Home />);

  const titulo = getByRole('heading', { level: 1 });
  expect(titulo).toBeInTheDocument();

  const imagen = getByAltText('Next.js Logo');
  expect(imagen).toHaveAttribute('src', '/next.svg');
  expect(imagen).toHaveAttribute('width', '180');
  expect(imagen).toHaveAttribute('height', '37');
});
