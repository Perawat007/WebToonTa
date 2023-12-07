import React from 'react';

function HTMLContent({ content }) {
    return (
        <div className='font' dangerouslySetInnerHTML={{ __html: content }} />
    );
}

export default HTMLContent;