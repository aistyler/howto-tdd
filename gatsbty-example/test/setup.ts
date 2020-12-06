
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

require('./loader-shim');

// disable waning message
console.warn = jest.fn();
