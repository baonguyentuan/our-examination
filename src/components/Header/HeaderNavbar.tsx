import React from 'react'
import { Button } from 'antd';
type Props = {}

export default function HeaderNavbar({ }: Props) {
    return (
        <div>
            <div className=' flex justify-between items-center w-full max-w-screen-2xl m-auto' style={{ height: 50 }}>
            <Button type="link">Home</Button>
            <Button type="link">Training Course</Button>
            <Button type="link">Testing Area</Button>
            <Button type="link">Contact</Button>
            <Button type="link">Blog</Button>
            </div>
        </div>
    )
}