import {useState} from "react";
import { v4 as uuidv4} from 'uuid';

export function EntryForm(props){
    const emptyForm = {
        id:uuidv4(),
        title:'',
        subject:'',
        date:'',
        content:'',
        rating:''}
    const [formData, setFormData] = useState(emptyForm)

    function changeDate(event){
        setFormData({
            ...formData,
            date:event.target.value
        })
        // console.log(event)
    }

    function changeTitle(event){
        setFormData({
            ...formData,
            title: event.target.value
        })
    }

    function changeSubject(event){
        setFormData({
            ...formData,
            subject: event.target.value
        })
    }

    function changeContent(event){
        setFormData({
            ...formData,
            content: event.target.value
        })
    }

    function onSave(event){
        event.preventDefault()
        props.savedEntry(formData)


    }
    console.log(formData)
    return (
        <form onSubmit = {(event)=>{onSave(event)}}>
            <input className={'form-control'} value={formData.date} onChange={(event) => {changeDate(event)}} placeholder={'date'} type={'text'}/>
            <br/>
            <input className={'form-control'} value={formData.title} onChange={(event) => {changeTitle(event)}} placeholder={'title:'} type={'text'}/>
            <br/>
            <input className={'form-control'} value={formData.subject} onChange={(event) => {changeSubject(event)}} placeholder={'subject:'} type={'text'}/>
            <br/>
            <textarea className={'form-control'} value={formData.content} onChange={(event) => {changeContent(event)}} placeholder={'content'}></textarea>
            <br/>
            <button className={'btn btn-primary'}>Save</button>
        </form>
    )
}
//this is being called in {EntryList}