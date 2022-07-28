import {Entry} from "./Entry"
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/react"


test('should show div for previous entry (using traversing)', ()=>{
    const _Entry = () => <div>2</div>
    const entry = {title:1, subject:2, date:3, content:4, rating:5}
    render(<Entry _Entry={_Entry} entry={entry}/>)
    expect(screen.getByText("2")).toBeInTheDocument()
})

test('should show delete button', ()=>{
    render(<Entry/>);
    const button = screen.getByText('Delete')
    expect(button.tagName).toBe('BUTTON')
})

test('should show edit button', ()=>{
    render(<Entry/>);
    const button = screen.getByText('Edit')
    expect(button.tagName).toBe('BUTTON')
})
