import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button>test</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
