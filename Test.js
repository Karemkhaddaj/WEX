import { useState } from 'react'
import './App.css'

function Test() {
    const [categ, setcateg] = useState('')
    const [res, setres] = useState('')
    async function getdata() {
        console.log('hello')
        setcateg('car')
        const response = await fetch(`http://localhost:3001/getitems?categ=${categ}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (response.ok) {
            console.log('helloagainzz')

            const data = await response.json()

            console.log(data)
            setres(data.message)
        }
    }
    return (
        <>
            hello
            <button onClick={getdata}>Get Data</button>
            {res && (<p style={{ color: 'red' }}>{res}</p>)}
        </>
    )
}
export default Test