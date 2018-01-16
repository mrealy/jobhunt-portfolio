import React from 'react';

class Resume extends React.Component {
    render() {
        return (
            <div>
                <a href="/Resume.pdf" id="download-resume"> Download <span className="glyphicon glyphicon-download-alt" /></a>                        
                <div className="embed-responsive">
                    <embed id="pdf" src="/Resume.pdf" type="application/pdf"></embed>
                </div>
            </div>
        )
    }
}

export default Resume