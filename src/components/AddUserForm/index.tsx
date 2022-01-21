import React, { useEffect, useState } from "react";
import axios from "axios";

export const AddUserForm = () => {
    const [name,setName] = useState('')
    const [img,setImg] = useState('')
    const [description,setDescription] = useState('')
    const addUsers = async ()=>{
        try{
            const users = await axios.post('https://5d36d86c86300e0014b647c7.mockapi.io/users',{
                name: name,
                img:img,
                description:description
            })
        } catch (e){
            console.log("catch",e)
        }
    }
    useEffect(()=>{
        addUsers()
    })
    const updateUsers = async ()=>{
        try{
            const users = await axios.put("https://5d36d86c86300e0014b647c7.mockapi.io/users")
        
        } catch (e){
            console.log("catch",e)
        }
    }
    useEffect(()=>{
        updateUsers()
    })
    return <div>
        <div className="field-input-group">
            <input onChange={(e)=> setImg(e.target.value)} placeholder="Avatar" type="text" className="ant-input"  />
        </div>
        <div className="field-input-group">
            <input onChange={(e)=> setName(e.target.value)} placeholder="Name" type="text" className="ant-input" />
        </div>
        <div className="field-input-group">
            <input onChange={(e)=> setDescription(e.target.value)} placeholder="Name" type="text" className="ant-input" />
        </div>
        <div className="modal-new-user-footer">
            <button onClick={addUsers} className="ant-btn ant-btn-primary">
                Save
            </button>
            <button onClick={updateUsers} className="ant-btn ant-btn-primary">
                Update
            </button>
            <button className="ant-btn" style={{marginLeft: 10}}>
                Cancel
            </button>
        </div>
    </div>
}
