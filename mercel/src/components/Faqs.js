import React from 'react';
import { Collapse } from 'bootstrap';
function Faqs() {
  var accordionElement = document.getElementById('accordionFlushExample');
  return (
    <div className="row accordionstyle">
        
    <div className="accordion accordion-flush" id="accordionFlushExample">
    <h2 className="text-center">Frequently asked questions</h2>
<div className="accordion-item mt-3">
  <h2 className="accordion-header" id="flush-headingOne">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
    How do I track my sair order?
    </button>
  </h2>
  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
    Go to My track orders in your sair account to track your package.
      
      </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="flush-headingTwo">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
    What if I miss my sair order delivery?
    </button>
  </h2>
  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
    Do not worry,the delivery agent will try to deliver again as soon as possible. You can also call the delivery agent to get the latest delivery update.        </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="flush-headingThree">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
    Do I need to verify my mobile number or email address every time I log in?


    </button>
  </h2>
  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
    As the verification step is a one time process, you won't have to do it again once your account is verified.

</div>
  </div>
</div> 
 <div className="accordion-item">
  <h2 className="accordion-header" id="flush-headingFour">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
    I lost my warranty card. How can I get warranty?


    </button>
  </h2>
  <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
    You can get warranty for your product even without a warranty card. Please use the invoice which will serve as your warranty claim at any authorized service center of the brand.        </div>
  </div>
</div>
</div>
    </div>
  );
}

export default Faqs;