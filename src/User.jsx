import React, { useEffect, useState } from "react";
import UserData from './UserData'

const User = () => {
      const [data,setData]=useState( [
        {
          id: 1,
          username: "user1",
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "123-456-7890",
          website: "johndoe.com",
          address: {
            street: "123 ",
            suite: "Apt 4B",
            city: "New",
            zipcode: "10001",
          },
          company: {
            name: "ABC Inc.",
          },
        },
        {
          id: 2,
          username: "user1",
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "123-456-7890",
          website: "johndoe.com",
          address: {
            street: "123 ",
            suite: "Apt 4B",
            city: "New ",
            zipcode: "101",
          },
          company: {
            name: "ABC Inc.",
          },
        },
        {
          id: 3,
          username: "user1",
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "123-456-7890",
          website: "johndoe.com",
          address: {
            street: "123",
            suite: "Apt",
            city: "New York",
            zipcode: "1001",
          },
          company: {
            name: "ABC Inc.",
          },
        },
        {
          id: 4,
          username: "user1",
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "123-456-7890",
          website: "johndoe.com",
          address: {
            street: "123",
            suite: "Apt",
            city: "New York",
            zipcode: "101",
          },
          company: {
            name: "ABC Inc.",
          },
        },
        {
          id: 5,
          username: "user1",
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "123-456-7890",
          website: "johndoe.com",
          address: {
            street: "123",
            suite: "Apt",
            city: "New York",
            zipcode: "101",
          },
          company: {
            name: "ABC Inc.",
          },
        },
        {
          id: 6,
          username: "user1",
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "123-456-7890",
          website: "johndoe.com",
          address: {
            street: "123 ",
            suite: "Apt",
            city: "New York",
            zipcode: "101",
          },
          company: {
            name: "ABC Inc.",
          },
        },
        {
          id: 7,
          username: "user2",
          name: "Jane Smith",
          email: "jane.smith@example.com",
          phone: "987-654-3210",
          website: "janesmith.com",
          address: {
            street: "456",
            suite: "Unit 7",
            city: "Los ",
            zipcode: "901",
          },
          company: {
          name: "XYZ Corp.",
          },
          },
          {
          id: 8,
          username: "user10",
          name: "Alex Johnson",
          email: "alex.johnson@example.com",
          phone: "555-555-5555",
          website: "alexjohnson.com",
          address: {
            street: "789 ",
            suite: "Suite 3",
            city: "USA",
            zipcode: "601",
          },
          company: {
            name: "123 Industries",
          },
        },
        {
          id: 9,
          username: "user10",
          name: "Alex Johnson",
          email: "alex.johnson@example.com",
          phone: "555-555-5555",
          website: "alexjohnson.com",
          address: {
            street: "789",
            suite: "Suite 3",
            city: "USA",
            zipcode: "601",
          },
          company: {
            name: "123 Industries",
          },
        },
        {
          id: 10,
          username: "user10",
          name: "Alex Johnson",
          email: "alex.johnson@example.com",
          phone: "555-555-5555",
          website: "alexjohnson.com",
          address: {
            street: "789",
            suite: "Suite 3",
            city: "USA",
            zipcode: "601",
          },
          company: {
            name: "123 Industries",
          },
        },
      ])
      useEffect(()=>{

      })
      function deleteObjectById(idToDelete) {
        console.log('object',idToDelete)
        console.log(data)
        setData(data?.filter((item) => item.id !== idToDelete))
      }
  return (
    <div className="grid-container">
      {data.map((user) => (
        <div className="" key={user.id}>
        <UserData
          keys={user.id}
          name={user.name}
          email={user.email}
          website={user.website}
          address={user.address}
         onDelete={() => deleteObjectById(user.id)}
         setData={setData}
         data={data}
        />
        </div>
       
        
      ))}
    </div>
  );
};

export default User;
