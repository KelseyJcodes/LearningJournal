import {EntryForm} from "../EntryForm/EntryForm";
import {useState} from "react";
import {Entry} from "../Entry/Entry"

export function EntryList(poophead){
    const [entryForm, setEntryForm] =useState(false)
    const [entryData, setEntryData] =useState([])

    function onDelete(number){
        setEntryData(entryData.filter((entry)=>entry.id !== number))
    }

    function onEdit(number){

    }
    console.log(poophead.eggs)
    console.log(poophead.entries[0].title)

    function addEntry(obj){
        setEntryData([
            ...entryData,
            obj
        ])

    }
    return <>
        <h1>Journal Entries</h1>
    <button className={'btn btn-secondary'} onClick={() =>{setEntryForm(!entryForm)}}> New Entry</button>
        {entryForm && <EntryForm savedEntry={addEntry}/>}
        {entryData.map(
            (entry) => <Entry entry={entry} delete={onDelete}/>
        )}
    </>
}
