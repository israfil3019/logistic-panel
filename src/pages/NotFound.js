import React from 'react'
import { useParams } from 'react-router'

export default function NotFound() {
    const params = useParams();
    return (
        <div>
            <h1 className='text-center'>"{params.pagename}" page not found</h1>
        </div>
    )
}
