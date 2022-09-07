import React from 'react';
import './Ethics_Policies.css';
import jsPDF from "jspdf"
import download from './../assets/download.gif';
import Navbar from './Navbar';
import Footer from './Footer';

function Ethics_policy() {
    var paragraph ="Founded in 2011, MLE specialises in IT consulting and software development services. We focus on improving customer experience and building organisations lean, flexible, efficient and competitive.We are a software services company specializing in user experience design and cutting-edge technologies.We partner with global startups and business of all sizes to build, enhance and scale products across platforms leveraging disruptive technologies like Full-stack, ServiceNow, PEGA, Blockchain (NFT/FT/Metaverse), MS Dynamics 365 Business Central, CRM, Mulesoft, AI/ML, Hybris, RPA, Cloud, Azure, Power BI, Salesforce and Data analytics platforms.MLE has delivered large and complex solutions in banking, insurance, pharma and telco sector helping organisations to significantly reduce operational cost, improve customer satisfaction, grow market share and flexible operations.Our developers believe in blending latest technology with methods of engagement and system integration to build business value that lasts beyond a organization cycles." 
    var lMargin=15; //left margin in mm
    var rMargin=15; //right margin in mm
    var pdfInMM=410;    
    const pdfGenerate = () => {
        var doc = new jsPDF('potrait', 'px', 'a4', 'false');
        
        // doc.addPage()
        var lines =doc.splitTextToSize(paragraph, (pdfInMM-lMargin-rMargin));
        doc.text(lMargin,20,lines)
        doc.setFont("arial");
        doc.save('a.pdf')
    }
    return (
    <>
        <Navbar/>
        <div class="main">
            <div class="head col-9">
                <p>Company Ethics And Policies</p>
            </div>
            <div class="box">
                <div class="text1 col-9">
                    <p class="para">
                        {paragraph}
                    </p>
                </div>
                
                <div class="dwnd col-3 btn_text">
                   
                    <p class="para">Download Company Ethics and Policies</p>
                    <button class="eth-btn"onClick={pdfGenerate}>Download PDF 
                        <span>
                        <img class="manImg" src={download}></img>
                        </span>
                        
                    </button>
                  
                </div>

            </div>

        </div>
        <Footer/>
        </>
    )
}

export default Ethics_policy



