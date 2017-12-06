import React from 'react';

class Resume extends React.Component {
    render() {
        return (
            <div className="embed-responsive">
                <embed id="pdf" src="/Resume.pdf" type="application/pdf"></embed>
            </div>
        )
    }
}

export default Resume