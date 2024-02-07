import React, { useState } from 'react';
import { render } from 'react-dom';
import { Redirect } from 'react-router-dom'
import Button from '@mui/material/Button';

export default function Images(props) {
    const [Picture, setPicture] = useState(0);
    const imageCount = React.Children.count(props.children);

    function returenPicture(index) {
        const imageChild = React.Children.toArray(props.children)[index];
        return React.cloneElement(imageChild);
    }

    return (
        <>
            <Button disabled={Picture === 0} variant="text" onClick={(e) => setPicture(v => v - 1)} style={{ color: "black" }}  >&lt; Previous Page</Button>
            <Button  disabled={Picture >= imageCount - 1} variant="text" onClick={(e) => setPicture(v => v + 1)} style={{ color: "black" }}  >Next Page &gt;</Button>
            <br></br>
            {returenPicture(Picture)}
        </>
    )
}
