import React from 'react';

class Resume extends React.Component {
    render() {
        return (
            <div className="embed-responsive">
                <object data="Resume.pdf" type='application/pdf' width='100%' height='100%'></object>
            </div>
        )
    }
}

export default Resume