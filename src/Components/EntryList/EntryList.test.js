import {render, screen} from "@testing-library/react"
import {EntryList} from './EntryList'

test('should show a list of entries', () => {
    const entries = [{id:''}]
        render(<EntryList entries={entries}/>);
    const list = screen.getAllByText('Title:')
    expect(list.length).toBe(entries.length)
})

test('should show a button with "New Entry"', () => {
    const entries = [{id:1}]

    render(<EntryList entries={entries}/>)

    const button = screen.getByText('New Entry')
    expect(button.tagName).toBe('BUTTON')

})

