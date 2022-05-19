import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import {useSelector} from 'react-redux'


const ContactList = () => {

    // const contactList = useSelector(state => state.contactList)
    const resultList = useSelector(state => state.searchList)
    

  return (
    <div>
        <SearchBox />
        {resultList.map(item => <ContactItem item={item} />)}
        {/* {keyword} */}

    </div>
  )
}

export default ContactList