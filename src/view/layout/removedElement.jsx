import React from 'react';
import featureBg_2 from "../../assets/images/background-shape/feature-bg-2.png";
import seoBall_1 from "../../assets/images/background-shape/seo-ball-1.png";
import seoHalfCycle from "../../assets/images/background-shape/seo-half-cycle.png";
import serviceHalfCycle from "../../assets/images/background-shape/service-half-cycle.png";
import teamBgTriangle from "../../assets/images/background-shape/team-bg-triangle.png";
import marketing from "../../assets/images/marketing/marketing.png";
import seoBg from "../../assets/images/backgrounds/seo-bg.png";
import seoBall_2 from "../../assets/images/background-shape/seo-ball-2.png";
import service from "../../assets/images/service/service.png";
import clientLogo_1 from "../../assets/images/clients-logo/client-logo-1.png";
import clientLogo_2 from "../../assets/images/clients-logo/client-logo-2.png";
import clientLogo_3 from "../../assets/images/clients-logo/client-logo-3.png";
import clientLogo_4 from "../../assets/images/clients-logo/client-logo-4.png";
import clientLogo_5 from "../../assets/images/clients-logo/client-logo-5.png";
import serviceBg from "../../assets/images/backgrounds/service-bg.png";
import team_1 from "../../assets/images/team/team-1.jpg";
import team_2 from "../../assets/images/team/team-2.jpg";
import team_3 from "../../assets/images/team/team-3.jpg";
import teamBg from "../../assets/images/backgrounds/team-bg.png";
import teamBgDots from "../../assets/images/background-shape/team-bg-dots.png";
function RemovedElement() {
    return <>
        <section className="section-lg seo">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="seo-image">
                            <img className="img-fluid" src={marketing} alt="form-img" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h2 className="section-title">A Complete Range Of SEO Marketing Services!</h2>
                        <p>Far far away, behind the word mountains, far
                            from the countries Vokalia and Consonantia.<br />
                            There live the blind texts. Separated they
                            live in Bookmarksgrove right at the coast of
                            the Semantics, a large language ocean.
                        </p>
                    </div>
                </div>
            </div>
            <img className="img-fluid seo-bg" src={seoBg} alt="seo-bg" />
            <img className="seo-bg-shape-1 left-right-animation" src={seoBall_1} alt="bg-shape" />
            <img className="seo-bg-shape-2 up-down-animation" src={seoHalfCycle} alt="bg-shape" />
            <img className="seo-bg-shape-3 left-right-animation" src={seoBall_2} alt="bg-shape" />
        </section>
        <section className="section-lg service">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-5 order-2 order-md-1">
                        <h2 className="section-title">Powerful Layout From Top To Bottom</h2>
                        <p className="mb-4">Far far away, behind the word mountains,
                            far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they
                            live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean.</p>
                        <ul className="pl-0 service-list">
                            <li><i className="ti-layout-tab-window text-purple"></i>Responsive on any device</li>
                            <li><i className="ti-layout-placeholder text-purple"></i>Very easy to customize</li>
                            <li><i className="ti-support text-purple"></i>Effective support</li>
                        </ul>
                    </div>
                    <div className="col-md-7 order-1 order-md-2">
                        <img className="img-fluid layer-3" src={service} alt="service" />
                    </div>
                </div>
            </div>
            <img className="img-fluid service-bg" src={serviceBg} alt="service-bg" />
            <img className="service-bg-shape-1 up-down-animation" src={serviceHalfCycle} alt="background-shape" />
            <img className="service-bg-shape-2 left-right-animation" src={featureBg_2} alt="background-shape" />
        </section>
        <section className="section-lg team" id="team">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-title">Our Team</h2>
                        <p className="mb-100">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu<br />
                            fugiat nulla pariatur. Excepteur sint occaecat </p>
                    </div>
                </div>
                <div className="col-10 mx-auto">
                    <div className="team-slider">
                        <div className="team-member">
                            <div className="d-flex mb-4">
                                <div className="mr-3">
                                    <img className="rounded-circle img-fluid" src={team_1} alt="team-member" />
                                </div>
                                <div className="align-self-center">
                                    <h4>Becroft</h4>
                                    <h6 className="text-color">web designer</h6>
                                </div>
                            </div>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. S eparated they</p>
                        </div>
                        <div className="team-member">
                            <div className="d-flex mb-4">
                                <div className="mr-3">
                                    <img className="rounded-circle img-fluid" src={team_2} alt="team-member" />
                                </div>
                                <div className="align-self-center">
                                    <h4>John Doe</h4>
                                    <h6 className="text-color">web developer</h6>
                                </div>
                            </div>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. S eparated they</p>
                        </div>
                        <div className="team-member">
                            <div className="d-flex mb-4">
                                <div className="mr-3">
                                    <img className="rounded-circle img-fluid" src={team_3} alt="team-member" />
                                </div>
                                <div className="align-self-center">
                                    <h4>Erik Ligas</h4>
                                    <h6 className="text-color">Programmer</h6>
                                </div>
                            </div>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                                the blind texts. S eparated they</p>
                        </div>
                        <div className="team-member">
                            <div className="d-flex mb-4">
                                <div className="mr-3">
                                    <img className="rounded-circle img-fluid" src={team_1} alt="team-member" />
                                </div>
                                <div className="align-self-center">
                                    <h4>Erik Ligas</h4>
                                    <h6 className="text-color">Programmer</h6>
                                </div>
                            </div>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                                the blind texts. S eparated they</p>
                        </div>
                        <div className="team-member">
                            <div className="d-flex mb-4">
                                <div className="mr-3">
                                    <img className="rounded-circle img-fluid" src={team_2} alt="team-member" />
                                </div>
                                <div className="align-self-center">
                                    <h4>John Doe</h4>
                                    <h6 className="text-color">web developer</h6>
                                </div>
                            </div>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. S eparated they</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={teamBg} alt="team-bg" className="img-fluid team-bg" />
            <img className="team-bg-shape-1 up-down-animation" src={seoBall_1} alt="background-shape" />
            <img className="team-bg-shape-2 left-right-animation" src={seoBall_1} alt="background-shape" />
            <img className="team-bg-shape-3 left-right-animation" src={teamBgTriangle} alt="background-shape" />
            <img className="team-bg-shape-4 up-down-animation img-fluid" src={teamBgDots} alt="background-shape" />
        </section>
        <section className="section-lg pb-0 pricing" id="pricing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-title">Our Pricing</h2>
                        <p className="mb-50">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br />
                            fugiat nulla pariatur. Excepteur sint occaecat </p>
                    </div>
                    <div className="col-lg-10 mx-auto">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                                <div className="rounded text-center pricing-table table-1">
                                    <h3>Free</h3>
                                    <h1><span>$</span>00</h1>
                                    <p>Far far away, behind the
                                        wordmountains, far from the
                                        countries Vokalia and
                                    </p>
                                    <a href="#" className="btn pricing-btn px-2">Get Started</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                                <div className="rounded text-center pricing-table table-2">
                                    <h3>Standard</h3>
                                    <h1><span>$</span>75</h1>
                                    <p>Far far away, behind the
                                        wordmountains, far from the
                                        countries Vokalia and
                                    </p>
                                    <a href="#" className="btn pricing-btn px-2">Buy Now</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                                <div className="rounded text-center pricing-table table-3">
                                    <h3>Premium</h3>
                                    <h1><span>$</span>99</h1>
                                    <p>Far far away, behind the
                                        wordmountains, far from the
                                        countries Vokalia and
                                    </p>
                                    <a href="#" className="btn pricing-btn px-2">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="pricing-bg-shape-1 up-down-animation" src={seoBall_1} alt="background-shape" />
            <img className="pricing-bg-shape-2 up-down-animation" src={seoHalfCycle} alt="background-shape" />
            <img className="pricing-bg-shape-3 left-right-animation" src={teamBgTriangle} alt="background-shape" />
        </section>
        <section className="section">
            <div className="container">
                <div className="client-logo-slider align-self-center">
                    <a href="#" className="text-center d-block outline-0 p-5"><img className="d-unset img-fluid" src={clientLogo_1} alt="client-logo" /></a>
                    <a href="#" className="text-center d-block outline-0 p-5"><img className="d-unset img-fluid" src={clientLogo_2} alt="client-logo" /></a>
                    <a href="#" className="text-center d-block outline-0 p-5"><img className="d-unset img-fluid" src={clientLogo_3} alt="client-logo" /></a>
                    <a href="#" className="text-center d-block outline-0 p-5"><img className="d-unset img-fluid" src={clientLogo_4} alt="client-logo" /></a>
                    <a href="#" className="text-center d-block outline-0 p-5"><img className="d-unset img-fluid" src={clientLogo_5} alt="client-logo" /></a>
                    <a href="#" className="text-center d-block outline-0 p-5"><img className="d-unset img-fluid" src={clientLogo_1} alt="client-logo" /></a>
                    <a href="#" className="text-center d-block outline-0 p-5"><img className="d-unset img-fluid" src={clientLogo_2} alt="client-logo" /></a>
                    <a href="#" className="text-center d-block outline-0 p-5"><img className="d-unset img-fluid" src={clientLogo_3} alt="client-logo" /></a>
                    <a href="#" className="text-center d-block outline-0 p-5"><img className="d-unset img-fluid" src={clientLogo_4} alt="client-logo" /></a>
                    <a href="#" className="text-center d-block outline-0 p-5"><img className="d-unset img-fluid" src={clientLogo_5} alt="client-logo" /></a>
                </div>
            </div>
        </section>
    </>
}

export default RemovedElement