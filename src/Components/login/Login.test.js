import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {Login} from "./Login"

test('should show an input with type text and placeholder "username"', () => {
    render(<Login/>);
    const input = screen.getByPlaceholderText('username')
    expect(input.tagName).toBe('INPUT')
    expect(input).toHaveAttribute('type','text')
})

test('should show an input with type password and placeholder "password"', () => {
    render(<Login/>);
    const input = screen.getByPlaceholderText('password')
    expect(input.tagName).toBe('INPUT')
    expect(input).toHaveAttribute('type', 'password')
})

test('should show a button with text "login"', () => {
    render(<Login/>);
    const button = screen.getByText('login')
    expect(button.tagName).toBe('BUTTON')
})

test('should run onSubmit prop with the user input when login button is clicked',() => {
    const _onSubmit = jest.fn();
    render(<Login parentSubmitLogin={_onSubmit}/>)
    const username = screen.getByPlaceholderText('username');
    const password = screen.getByPlaceholderText('password');
    const button = screen.getByText('login');
    userEvent.type(username, 'user')
    userEvent.type(password, 'pass')
    userEvent.click(button);

    expect(_onSubmit).toHaveBeenCalledWith({username: 'user', password: 'pass'})

})
