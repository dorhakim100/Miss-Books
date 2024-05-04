const { useState, useEffect } = React

import { utilService } from '../services/util.service.js'
import { asyncStorageServer } from '../services/async-storage.service.js'

export function Home() {
  return (
    <React.Fragment>
      <h2>Home</h2>
      <h3>This is a book management app</h3>
      <h4>Thank you for using it</h4>
    </React.Fragment>
  )
}
