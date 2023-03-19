import React, { useState } from 'react'
import User from './User'

// 자식컴포넌트로 넘겨주기위해 export해 줍시다.
export type UserType = {
  id: number
  name: string
  role: string
}

export default function UserList (): React.ReactElement {
  // userList Array state에 제네릭 타입을 지정해 줍니다.
  const [userList, setUserList] = useState<UserType[]>([
    {
      id: 0,
      name: "이름 - 1",
      role: "역할",
      
    },
    {
      id: 0,
      name: "이름 - 2",
      role: "역할",
    },
  ]);
  
  return (
    <div>
      {userList.map(user => <User key={user.id} user={user}/>)}
    </div>
  )
}