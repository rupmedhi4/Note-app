import React from 'react'
import Notes from './Notes'
import Modal from '../../Modal/Modal'

export default function AddNotes() {
  return (
    <Modal>
      <h3>Add new notes</h3>
      <Notes/>
    </Modal>
  )
}
