import React from 'react'
import { useState } from 'react'
import { SearchInput } from 'evergreen-ui'

function Searchbar() {
  const [value, setValue] = useState('')
  return <SearchInput onChange={(e) => setValue(e.target.value)} value={value} />
}

export default Searchbar;