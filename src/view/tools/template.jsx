import React from 'react';
import HomeLayout from '../layout/homeLayout';
function ToolTemplate(props) {
    const { title, about = [], children } = props;
    return <HomeLayout {...props}>
        <section className="section-ml tool">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-title">{title}</h2>
                    </div>
                </div>
                {children}
                {!!about && about.length !== 0 &&
                    <div class="text-justify">
                        <h4>About {title} Tool</h4>
                        {about.map(point => <p className="mb-2">{point}</p>)}
                    </div>
                }
            </div>
        </section>
    </HomeLayout>
}
export default ToolTemplate;