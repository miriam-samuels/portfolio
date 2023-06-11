import React, {useEffect} from 'react'
import "./css/style.css"
import "./lib/bootstrap/css/bootstrap.min.css"

function Calm() {

    return (
        <main>
            <div className='cover'>
            {/* <!--/ Nav Star /--> */}
            <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll" href="#page-top"><br/></a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                        aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link js-scroll active" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#experience">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#book">Books</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#service">Hobbies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#contact">Contact</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!--/ Nav End /--> */}

            {/* <!--/ Intro Skew Star /--> */}
            <div className="hero  wow pulse" data-wow-delay="0.1s" id="home">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <div className="hero-content" style={{color:"#4e4e4e"}}>
                                <div>
                                    <div className="hero-text">
                                        <p  style={{color:"#4e4e4e"}}>I'm</p>
                                        <h1  style={{color:"#4e4e4e"}}>Olumide Osunyomi</h1>
                                        <p  style={{color:"#4e4e4e"}} className="intro-subtitle">I am a Financial Coach. I love helping people build a
                                            Healthy Relationship with money, in order to create or maximize wealth
                                        </p>
                                        <p  style={{color:"#4e4e4e"}} className="intro-subtitle">You really can be Financially Secured</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-none d-md-block">
                            <div className="hero-image">
                                {/* <!-- <img src="img/blur_edges.png" alt="Hero Image"> --> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>

            {/* <!--/ Intro Skew End /--> */}

            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-10">
                                                {/* <div className="about-img" style="text-align: center;">
                                                    <img src="img/Olumide.jpg" className="img-fluid rounded b-shadow-a" style="margin-left: 0;" alt="" />
                                                </div> */}
                                            </div>
                                        </div>
                                        {/* <!-- <div className="skill-mf">
                                            <p className="title-s">Skill</p>
                                            <span>HTML</span> <span className="pull-right">85%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <span>CSS3</span> <span className="pull-right">75%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <span>PHP</span> <span className="pull-right">50%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </div> --> */}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-me pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                    About me
                                                </h5>
                                            </div>
                                            <p className="lead">
                                                I'm a Financial Advisor and a Certified John Maxwell Coach, Teacher, Trainer and
                                                Speaker.
                                                I have passion for developing people. my primary goal as a Financial Consultant is
                                                to empower my clients to make better financial decisions and being proficient in both English & French
                                                enables me to work with clients from diverse backgrounds..
                                            </p>
                                            <a className="btn" href="./about.html">Read More</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- Experience Start --> */}
            <div className="experience" id="experience">
                <div className="container">
                    <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <p>My Resume</p>
                        <h2>Working Experience</h2><br />
                    </header>

                    <div className="timeline">

                        <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">February 2015 - January 2017</div>
                                <h2>HEAD, SELF-EMPLOYED SEGMENT BANKING</h2>
                                <h4>United Bank for Africa Plc. Lagos State</h4>
                                <p>
                                    •Managed a N20bn portfolio across 15 pilot branches of the business segment, in leading the Bank-wide
                                    strategy for the self-employed segment of the consumer market. <br />
                                    •Supervised extensive market researches and analysis of the Self-Employed Segment to generate insights
                                    towards the creation and improvement of the Bank's value proposition. <a data-bs-toggle="collapse"
                                        href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">•••</a> <br />
                                    <span className="collapse" id="collapseExample">
                                        •Initiated and drove the training of the segment sales team, equipped the team with a sales kit for a
                                        systematic, improved and impactful sales approach/performance, increased account acquisition,
                                        product cross-sell (min 3 products per customer) and account re-activations. <br />
                                        •Championed all marketing activities and promotion campaigns targeted at the segment, supervised all
                                        activities e.g. weekly advisory radio show for entrepreneurs and an Entrepreneurs’ Clinic by trade
                                        groups, creating a business segment that grew by a deposit volume of N2bn (15 pilot branches only) <br />
                                        •Actively directed optimal acceptance and usage of designated products for the customer segment.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">March 2012 - February 2015</div>
                                <h2>HEAD, RETAIL PRODUCTS DIVISION (Group)</h2>
                                <h4>United Bank for Africa Plc. Lagos State</h4>
                                <p>
                                    •Supervised the management of the Bank's retail products across the Group (Nigeria & Africa), with the
                                    responsibility for the group-wide budget for Savings (new accounts and deposit), retail current
                                    &domiciliary deposits and income from remittance products- Grew retail deposit(Nigeria)from N363bn
                                    (US$1BN) to N528bn (US$1.5bn); Group-wide Western Union money transfer market share from 8% to
                                    20% (due to the activation of negotiated Group pricing and introduction of new variant)<a
                                        data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false"
                                        aria-controls="collapseExample1">•••</a> <br />
                                    <span className="collapse" id="collapseExample1">
                                        •Directed product development activities, strategies, and roadmaps based on customer requirements and
                                        competitive market analysis, from research to the market stage, to make sure all retail products are
                                        profitable.<br />
                                        •Created and executed product sales strategies tailored to achieving pre-defined sales targets across
                                        the
                                        group. <br />
                                        •Managed multiple cross-functional teams from solution concept through to the successful launch of
                                        products across Nigeria and 18 African Countries.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">July 2009 – March 2012</div>
                                <h2>HEAD, RETAIL PRODUCTS SALES</h2>
                                <h4>United Bank for Africa Plc. Lagos State</h4>
                                <p>
                                    • Served as liaison between the Group Product Management Team and UBA Africa Subsidiaries on all
                                    matters involving product development, deployment, marketing, and promotion.<br />
                                    • Launched a group-wide savings deposit promo across the 18 African countries, it resulted in the deposit
                                    growth of over US$2M in three (3) months. <a data-bs-toggle="collapse" href="#collapseExample2"
                                        role="button" aria-expanded="false" aria-controls="collapseExample2">•••</a> <br />
                                    {/* <span className="collapse" id="collapseExample2"> */}
                                    • Spearheaded market penetration and sales of all retail products across the UBA Group; led Country
                                    Products Sales Managers across 18 African Countries.<br />
                                    • Coached the Sales Team for product awareness and to improve the performance of products in the
                                    market. <br />
                                    • Coordinated new product development and managed existing products, evaluated products to determine
                                    the return on investment, market acceptance, areas of improvement, and profitability. <br />
                                    • Implemented product sales strategies tailored towards achieving pre-defined sales targets in the 18
                                    Countries and collaborated with the Product Marketing Units to execute marketing plans tailored to the
                                    market segments of each Country. <br />
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">October 2007 – June 2009</div>
                                <h2>HEAD, PRODUCT RESEARCH &DEVELOPMENT (Cross-border Product Management& Coordination)</h2>
                                <h4>Access Bank Plc. Lagos State</h4>
                                <p>
                                    • Served as a Member of Access Bank Rest of Africa Integration team. Took charge of product management
                                    – harmonisation and deployment of products to the acquired banks in 4 African Countries (Cote d’Ivoire,
                                    Burundi, Democratic Republic of Congo, and Rwanda). <a data-bs-toggle="collapse" href="#collapseExample3"
                                        role="button" aria-expanded="false" aria-controls="collapseExample3">•••</a><br />
                                    <span className="collapse" id="collapseExample3">
                                        • Provided mentorship and guidance to employees, acted as an expert providing direction and guidance to
                                        product development, improvement, and deployment. Produced the Country Toolkit for CEOs and
                                        Compendium of products (retail, commercial, and treasury). <br />
                                        • Supervised the roll-out and deployment of identified quick-win products to all the Subsidiaries and
                                        ensured continuous performance of all products for profitability.<br />
                                        • Successfully negotiated the Access Group Master Agreement with Western Union International resulting
                                        in direct agent pricing for every subsidiary regardless of the branch network thereby improving the
                                        subsidiary’s WUI income by 50%.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">January 2007 - October 2007</div>
                                <h2>PRODUCT MANAGER (Retail Banking Group)</h2>
                                <h4>Ecobank Nigeria Plc Lagos State</h4>
                                <p>
                                    •Developed and re-launched Ecobank Rapid Transfer, a regional money transfer product, created
                                    positioning and messaging to successfully market it, which resulted in the #1 position amongst other
                                    banks’ proprietary transfer products. Rapid Transfer is the trailblazer amongst the regional money
                                    transfer products.<br />
                                    •Designed and commissioned market researches that created data used to manage retail liability products
                                    for Group profitability.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">August 2001 – December 2006</div>
                                <h2>DIRECTRICE DES OPERATIONS </h2>
                                <h4>Diamond Bank Benin S.A., Cotonou, Republic of Benin</h4>
                                <p>
                                    •Served as a Member of various Committees such as the Asset and Liability Management Committee,
                                    Bank’s Credit Committee, Expense Control Committee, Staff Recruitment Committee, and Staff
                                    Disciplinary Committee.<br />
                                    •Administered Bank-wide operational activities and sustained operational improvement (domestic &
                                    International), developed and ensured implementation of the Bank policies and procedures. <a
                                        data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false"
                                        aria-controls="collapseExample4">•••</a><br />
                                    <span className="collapse" id="collapseExample4">
                                        •Developed new products, analysed business performance, enforced high-quality customer service
                                        delivery, monitored compliance and managed a cross-cultural team while ensuring competence.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">February 1993 – August 2001</div>
                                <h2>ASSISTANT MANAGER (Consumer & Commercial Banking Group)</h2>
                                <h4>Ecobank Nigeria Plc Lagos State</h4>
                                <p>
                                    •Operated in the Customer Service, Cash & Teller, and Funds Transfer Units before becoming an Assistant
                                    Manager in the Consumer & Commercial Banking Group.<br />
                                    •Processed Customers’ transactions, supervised and performed various bk-office tasks.<br />
                                    •Mobilised deposits, generated fees and interest income through transactions and risk assets.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hero-btn">
                        <a className="btn" href="./img/MS OSUNYOMI'S CV- revised v2-1.docx">Download Resume</a>
                    </div>
                </div>
            </div>

            {/* <!-- Job Experience End --> */}
            <div className="section-counter paralax-mf bg-image" >
            {/* style="background-image: url(img/Olumide3.jpg)" */}
                <div className="overlay-mf"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-lg-3">
                            <div className="counter-box">
                                <div className="counter-ico">
                                    <span className="ico-circle"><i className="ion-checkmark-round"></i></span>
                                </div>
                                <div className="counter-num">
                                    <p className="counter">100</p>
                                    <span className="counter-text">WORKS COMPLETED</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-lg-3">
                            <div className="counter-box pt-4 pt-md-0">
                                <div className="counter-ico">
                                    <span className="ico-circle"><i className="ion-ios-calendar-outline"></i></span>
                                </div>
                                <div className="counter-num">
                                    <p className="counter">29</p>
                                    <span className="counter-text">YEARS OF EXPERIENCE</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-lg-3">
                            <div className="counter-box pt-4 pt-md-0">
                                <div className="counter-ico">
                                    <span className="ico-circle"><i className="ion-ios-people"></i></span>
                                </div>
                                <div className="counter-num">
                                    <p className="counter">500</p>
                                    <span className="counter-text">TOTAL CLIENTS</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-lg-3">
                            <div className="counter-box pt-4 pt-md-0">
                                <div className="counter-ico">
                                    <span className="ico-circle"><i className="ion-ribbon-a"></i></span>
                                </div>
                                <div className="counter-num">
                                    <p className="counter">10</p>
                                    <span className="counter-text">CERTIFICATION</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--/ Section Services Star /--> */}
            <section id="service" className="services-mf route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">
                                    Hobbies
                                </h3>
                                <p className="subtitle-a">
                                    What interests me in my free time
                                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="ion-android-document"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Reading Books</h2>
                                    <p className="s-description text-center">
                                        When you have read a book for the first time, you get to know a friend; read it for a second time and
                                        you meet an old friend
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="ion-ios-volume-high"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Speaking</h2>
                                    <p className="s-description text-center">
                                        The best way to express yourself is by speaking and by doing that you can impact others into being the
                                        best.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="ion-android-plane"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Traveling</h2>
                                    <p className="s-description text-center" >
                                        I love travelling and adventure. Travelling sure opens the mind....
                                    </p>
                                    {/* style="margin: 0;"> */}
                                    <p className="s-description text-center">
                                        "The world is a book and those who do not travel read only one page."
                                        ~ Saint Augustine
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/ Section Services End /--> */}

            {/* <!--/ Section Contact-Footer Star /--> */}
            <section className="paralax-mf footer-paralax bg-image sect-mt4 route">
            {/* style="background-image: url(img/overlay-bg.jpg)" */}
                <div className="overlay-mf"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="contact-mf">
                                <div id="contact" className="box-shadow-full">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                    Send A Message
                                                </h5>
                                            </div>
                                            <div>
                                                <form role="form" className="contactForm" id="submit-btn">
                                                    {/* <div id="sendmessage" style="display: none;">Your message has been sent. Thank you!</div> */}
                                                    <div className="row">
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input type="text" defaultValue="" name="name" className="form-control" id="nam"
                                                                    placeholder="Your Name" required />

                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input type="email" defaultValue="" className="form-control" name="email" id="email"
                                                                    placeholder="Your Email" required />

                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input type="text" defaultValue="" className="form-control" name="subject" id="subj"
                                                                    placeholder="Subject" required />

                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <textarea className="form-control" name="message" id="msg" rows="5" placeholder="Message"
                                                                    required></textarea>

                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <button type="submit" className="  button button-a button-big button-rouded">Send Message</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="title-box-2 pt-4 pt-md-0">
                                                <h5 className="title-left">
                                                    Get in Touch
                                                </h5>
                                            </div>
                                            <div className="more-info">
                                                <p className="lead">
                                                    Want to know more? Do you have questions you would like to ask me, please contact...
                                                </p>
                                                <ul className="list-ico">
                                                    <li><span className="ion-ios-telephone"></span>08020523497, 07034125822</li>
                                                    <li><span className="ion-email"></span> oosunyomi@yahoo.com</li>
                                                </ul>
                                            </div>
                                            <div className="socials">
                                                <ul>
                                                    <li><a href="https://web.facebook.com/olumide.osunyomi"><span className="ico-circle"><i
                                                        className="ion-social-facebook"></i></span></a></li>
                                                    <li><a href="https://www.instagram.com/mideosunyomi/"><span className="ico-circle"><i
                                                        className="ion-social-instagram"></i></span></a></li>
                                                    <li><a target="_blank" href="https://twitter.com/mideosunyomi"><span className="ico-circle"><i
                                                        className="ion-social-twitter"></i></span></a></li>
                                                    <li><a target="_blank" href="https://www.linkedin.com/in/olumideyetundeosunyomi"><span
                                                        className="ico-circle"><i className="ion-social-linkedin"></i></span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="copyright-box">
                                    <p className="copyright">&copy; Copyright <strong>Mide Osunyomi</strong>. All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>

            {/* <!--/ Section Contact-footer End /--> */}

            <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
            {/* <div id="preloader"></div> */}
{/* 
            <div id="toast" className="toas"
                style="position: fixed;top: 10%;right: 0%;background-color: white;z-index: 10000000000000000000000;padding: 10px;">
                <div className="toast-header">
                    <b style="width: 20px; height: 20px;border-radius: 50%;background-color: skyblue; margin-right: 10px;"></b>
                    <strong className="me-auto" id="toastHeading"></strong>
                    <small>now</small>
                </div>
                <div className="toast-body" id="toastBody" style="padding-left: 10px;">

                </div>
            </div> */}
            </div>
        </main>
    )
}

export default Calm