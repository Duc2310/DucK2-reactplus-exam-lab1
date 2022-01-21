import { useEffect, useState } from 'react';
import './ListUser.css'
import axios from "axios";
export const ListUser = () => {

    const [user, setUsers]= useState([])
    const listUsers = async ()=>{
        try{
            const users = await axios.get("https://5d36d86c86300e0014b647c7.mockapi.io/users")
            console.log(users.data)
            setUsers(users.data)
        } catch (e){
            console.log("catch",e)
        }
    }
    useEffect(()=>{
        listUsers()
    })

    const delUsers = async ()=>{
        try{
            const users = await axios.delete("https://5d36d86c86300e0014b647c7.mockapi.io/users")
            console.log(users)
 
        } catch (e){
            console.log("catch",e)
        }
    }
    useEffect(()=>{
        delUsers()
    })
    return <div className="ant-list-items">
        <div className="ant-list-item">
            <div className="ant-list-item-meta">
                <div className="ant-list-item-meta-avatar">
                    <span className="ant-avatar ant-avatar-circle ant-avatar-image">
                        <img src="https://randomuser.me/api/portraits/men/90.jpg"/>
                    </span>
                </div>
                <div className="ant-list-item-meta-content">
                    <h4 className="ant-list-item-meta-title">
                        <a>Rhodes</a>
                    </h4>
                    <div className="ant-list-item-meta-description">
                        Ant Design, a design language for background applications, is refined by Ant UED Team
                    </div>
                </div>
                <ul className="ant-list-item-action">
                    <li>
                        <a onClick={listUsers}>View</a>
                    </li>
                    <li>
                        <a onClick={delUsers}>Remove</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

function useParams() {
    throw new Error('Function not implemented.');
}
