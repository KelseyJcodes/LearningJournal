import { render, screen } from '@testing-library/react';
import App from './App';


test('Should display the login component', () => {
  const _Login = () => <div>mock</div>
  render(<App _isLoggedIn={false} _Login={_Login}/>)
  expect(screen.getByText("mock")).toBeInTheDocument()
});

test('should show entry list component', () => {
  const _EntryList = () => <div>mock</div>
    render(<App _isLoggedIn={true} _EntryList = {_EntryList}/>)
    expect(screen.getByText('mock')).toBeInTheDocument()


      })