import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../NavBar/Sidebar';

function SellProduct() {

  const initialFormData = {
    Title: "",
    image: null,
    description: "",
    category: "",
    price: ""
  }
  const navigate = useNavigate();
  const [info, setInfo] = useState(initialFormData)
  const [errormsg, seterrormsg] = useState('')
  function handleChange(event) {
    const { name, value } = event.target;
    const newValue = name === 'image' ? event.target.files[0] : value;

    setInfo(prevInfo => ({
      ...prevInfo,
      [name]: newValue
    }))

  }


  async function handleSubmit(event) {
    event.preventDefault()

    console.log(info)
    var Title = info.Title
    var image = info.image
    var description = info.description
    var category = info.category
    var price = info.price
    var formdata = new FormData()
    formdata.append('Title', Title)
    formdata.append('description', description)
    formdata.append('category', category)
    formdata.append('price', price)
    formdata.append('image', image)
    formdata.append('username', sessionStorage.getItem('username'))

    try {
      const response = await fetch('/api/additem', {
        method: 'POST',

        body: formdata
      })
      const data = await response.json()

      if (!response.ok) {

        seterrormsg(data.error)
        return;
      }
    } catch (error) {
      console.log(error)
      return;
    }
    console.log('meshe l7al')
    navigate('/product')
  }

  return (
    <div className="page-container">
      <Sidebar />
      <div className='content'>
        <div className="register-container">
          <h2>Sell Item</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="image">Product Image</label>
            <input onChange={handleChange} type="file" accept="image/*" placeholder='profile pic' id="image" name="image" />

            <label htmlFor="Title">Title</label>
            <input onChange={handleChange} value={info.Title} type="text" placeholder='Title' id="Title" name="Title" />

            <label htmlFor="Description">Description</label>
            <input onChange={handleChange} value={info.description} type="text" placeholder='Description' id="Description" name="description" />

            <label htmlFor="category">Category</label>
            <input onChange={handleChange} value={info.category} type="text" placeholder='Category' id="Category" name="category" />

            <label htmlFor="price">Price</label>
            <input onChange={handleChange} value={info.price} type="text" placeholder='price' id="price" name="price" />


            <button type="submit">Post Item</button>

          </form>
          {errormsg && <p style={{ color: 'red' }}>{errormsg}</p>}
        </div>
      </div>
    </div>
  )
}

export default SellProduct
