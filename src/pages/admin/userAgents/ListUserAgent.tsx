// import { Modal, Space, Table } from 'antd'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom'
// import { removeUserAgent } from '../../../api/userAgent';
// import { AppDispatch } from '../../../app/store';
// import { getListUserAgent, removeUserAgentSlide } from '../../../features/Slide/userAgentSlide/UserAgentSlide';

// interface DataType {
//     key: React.Key;
//     _id?: string,
//     username: string,
//     email: string,
//     password: string,
//     img: number,
//     role: number,
//     sex: number,
//     createdAt: number,
//     updatedAt: number,
//   }

//   type Props = {}

//   type DataIndex = keyof DataType;

// const ListUserAgent = (props: Props) => {
    
//     const users =  useSelector<any, any>(data => data.user.value);
//     const dispath = useDispatch<AppDispatch>();

//     useEffect( () => {
//       dispath(getListUserAgent())
//   }, []);

//   const onRemoveUser = (id:any) => {
//     Modal.confirm({
//         title:"You want to delete this user ?",
//         onOk:() => {
//             alert("muon xoa")
//             // dispath(removeUserAgent(id))
//         }
        
//     })
    
// }
//    // title 
//    const headings = [
//     {title: 'STT', dataIndex: 'stt', key:'stt'},
//     {title: 'Username', dataIndex: 'username', key:'username'},
//     {title: 'Email', dataIndex: 'email', key:'email'},
//     {title: 'Gender', dataIndex: 'sex', key:'sex'},
//     {title: 'Phone Number', dataIndex: 'phone', key:'phone'},
//     {title: 'Address', dataIndex: 'address', key:'address'},
//     {title: 'Image', dataIndex: 'image', key:'image'},
//     {title: 'Email', dataIndex: 'email', key:'email'},
   
//     {title: 'Role', dataIndex: 'role', key:'role'},
//     {
//       title: 'Action',
//       key:'action',
//       render: (recore:any) => (
//         <Space size="middle">
//             <NavLink to={'/admin/user-agent/edit/'+recore.id}>Edit</NavLink>
//             <button  onClick={() => onRemoveUser(recore.id)}>Delete</button>
//         </Space>
//       )
//     }

//   ]

//   // data
//   const dataSourd = users.map((item:any, index:any) => {
//     return {
//       key: index + 1,
//       stt: index + 1,
//       phone: item.phone,
//       address: item.address,
//       img: item.img,
//       role: item.role,
//       sex: item.sex ? "Male" : "Female",
//       id: item._id 
//     }
//   })
//   return (
    
//     <div>
//       <h1>User Agent</h1>
//         <button className='btnAdmin border px-4 py-1 bg-green-600 my-4 '><NavLink to="/admin/user-agent/add" className="text-white">Add User</NavLink></button>
        
//         <Table columns={headings} dataSource={dataSourd}></Table>
//     </div>
//   )
// }

// export default ListUserAgent
import React from 'react'

type Props = {}

const ListUserAgent = (props: Props) => {
  return (
    <div>ListUserAgent</div>
  )
}

export default ListUserAgent