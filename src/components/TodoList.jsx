import * as React from 'react';
import { useContext, useState } from 'react';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MaterialModal from './MaterialModal';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsThreeDotsVertical } from 'react-icons/bs';

import '../styles/todo.css'
import { DataContext } from '../App';


const messages = [
  {
    id: 1,
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 2,
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 3,
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
  },
  {
    id: 4,
    primary: 'Yes!',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: '/static/images/avatar/3.jpg',
  },
  {
    id: 5,
    primary: "Doctor's Appointment",
    secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 6,
    primary: 'Discussion',
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 7,
    primary: 'Summer BBQ',
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: '/static/images/avatar/1.jpg',
  },
];



export default function TodoList(){ 
  const {open, setOpen} = useContext(DataContext)

  return (
  <div className='to-do-list-container'>
        <div className='to-do-innards'>
        <h1>Tasks</h1>
        <div className='unordered-list'>
          {messages.map(({ id, primary, secondary, person }) => (
              <li className='list-items'>
                <ListItemText primary={primary} secondary={secondary} /> 
                <Divider />
              </li>
               
          ))}
        </div>
        </div>
        <div className='app-bar'>
          <div onClick={(e) => setOpen(true)}><GiHamburgerMenu /></div>
          <div onClick={(e) => setOpen(true)} className='add-btn'>+</div>
          <div onClick={(e) => setOpen(true)} ><BsThreeDotsVertical /></div>
        </div>
        <MaterialModal />
    </div>
    
  );
}