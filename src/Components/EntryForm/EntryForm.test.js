import {render, screen} from "@testing-library/react"
import {EntryForm} from './EntryForm'

test('should show input that shows the date and placeholder "date"', () => {
    render( <EntryForm/>);
    const input = screen.getByPlaceholderText('date')
    expect(input.tagName).toBe('INPUT')
    expect(input).toHaveAttribute('type', 'text')
})


test('should show a text area box for entry and placeholder "content"', ()=> {
    render(<EntryForm/>);
    const input = screen.getByPlaceholderText('content')
    expect(input.tagName).toBe('TEXTAREA')
})


test('should show input for the title and placeholder "title:"', ()=>{
    render(<EntryForm/>);
    const input = screen.getByPlaceholderText('title:')
    expect(input.tagName).toBe('INPUT')
    expect(input).toHaveAttribute('type', 'text')
})


test('should show input for the subject and placeholder "subject:"', ()=>{
    render(<EntryForm/>);
    const input = screen.getByPlaceholderText('subject:')
    expect(input.tagName).toBe('INPUT')
    expect(input).toHaveAttribute('type', 'text')
})


test('should show a button with "Save"', ()=>{
    render(<EntryForm/>);
    const button = screen.getByText('Save')
    expect(button.tagName).toBe('BUTTON')
})