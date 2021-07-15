import React, { useEffect } from 'react';
import { getAllUser } from '../../api/api';

export default function Home() {
    useEffect(async () => {
        console.log(2312321);
        let res = await getAllUser();
        console.log(res);
    })

    return (
        <div>
            Home
        </div>
    )
}
