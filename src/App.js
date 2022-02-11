import React, { useState } from "react";
import { CardGroup, Card, Button, Modal, Form } from "react-bootstrap";
import img1 from "./images/pro-now.png";
import img2 from "./images/gnd.png";
import img3 from "./images/drop.png";
import img4 from "./images/insure.png";
import img5 from "./images/elect.png";
import img6 from "./images/setting.png";
import img7 from "./images/plus.png";
import img8 from "./images/pay1.png";
import img9 from "./images/pay1.png";
import img10 from "./images/pay2.png";
import img11 from "./images/pay3.png";
import img12 from "./images/pay4.png";
import img13 from "./images/pay5.png";
import img14 from "./images/pay7.png";
import img15 from "./images/pay8.png";
import img16 from "./images/transfer.png";
import img17 from "./images/main.png";
import img18 from './images/avatar.png';
import img19 from "./images/wallet1.png";
import img20 from "./images/wallet2.png";
import img21 from "./images/wallet3.png";
import img22 from "./images/wallet4.png";
import img23 from "./images/search-field.png"



import "./index.css";

function App() {
  const [show, setShow] = useState(false);

 
  return (
    <div className="body-container">
      <CardGroup className="mt-5 card-main-container">
        {/* 1st card */}
       
        <div className="left-float">
          <Card  className="card-main-container">
            <Card.Body>
              <div>
                <img className="small ml-5 mb-5" src={img2}></img>
              </div>
              <div className="left-header d-flex"></div>
              <div className="icon-container1 d-flex">
                <div>
                  <div className=" mr-5 left-boxes-btn t ml-5"></div>
                  <p className="ml-5">Dashboard</p>
                </div>

                <div>
                  <div className="left-boxes-btn img-l"></div>
                  <p >Calculator</p>
                </div>
              </div>
              <div className="icon-container1 d-flex">
                <div>
                  <div className=" mr-5 left-boxes-btn ml-5 img-l"></div>
                  <p className="ml-5">Wallets</p>
                </div>

                <div>
                  <div className="left-boxes-btn img-l"></div>
                  <p>Savings</p>
                </div>
              </div>
              <div className="icon-container2 d-flex">
                <div>
                  <div className="left-boxes-btn mr-5 ml-5 img-l"></div>
                  <p className="ml-5 ">Currencies</p>
                </div>

                <div>
                  <div className="left-boxes-btn img-l"></div>
                  <p>Expenses</p>
                </div>
              </div>
              <br/><br/>
              <div className="icon-container1 d-flex">
                <div>
                  <div className="left-boxes-btn mr-5 ml-5 img-l"></div>
                  <p className="ml-5">Upcoming</p>
                </div>

                <div>
                  <div className="left-boxes-btn img-l"></div>
                  <p>Food</p>
                </div>
              </div>
              <div className="icon-container1 d-flex mt-4">
                <div>
                  <div className="left-boxes-btn mr-5 ml-5 img-l"></div>
                  <p className="ml-5">Health</p>
                </div>

                <div>
                  <div className="left-boxes-btn img-l"></div>
                  <p>Account</p>
                </div>
              </div>

              <div className="left-last-img mt-5 ">
                <center>
                  <img className="small" src={img1}></img>
                </center>
              </div>
            </Card.Body>
          </Card>
        </div>
      

        {/* 2nd card */}

        <Card className="card-main-container">
          <div className="mt-3">
          <img className="small ml-5 mb-5" src={img23}></img>
          </div>

          <Card.Body className="mt-5">
          <center className="mt-5">
              <img className="small" src={img17}></img>
            </center>
           
           
            <center className="mt-5">
              <img className="small" src={img3}></img>
            </center>

            <div className="last-activity mt-5">
              <div className="last-activity-left ml-4">
                <p className="last-activity">Last activity</p>
                <span className="updated ">Updated in 12 minutes</span>

                <span className="edit updated">edit</span>
              </div>
              <div className="last-activity-right">
                <img className="small setting" src={img6}></img>
                <Button  className="plus-icon" onClick={() => setShow(true)}>
              <i class="fa fa-plus"></i>
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="modal-size"
      >
        <Modal.Header  className=" bill" >
          <Modal.Title id="example-custom-modal-styling-title bill">
            Bill Payment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
  <div class="mb-3  ">
    <label for="exampleInputEmail1" class="form-label modal-label">Service</label><br/>
    <select class="form-select form-select-lg mb-3 w-5 " aria-label=".form-select-lg example ">
  <option selected>Select Service</option>
  <option value="1">Service One</option>
  <option value="2">Service Two</option>
  <option value="3">Service Three</option>
</select><br/>
<label for="exampleInputEmail1" class="form-label modal-label">Wallet</label><br/>
    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Select Wallet</option>
  <option value="1">  Wallet One</option>
  <option value="2"> Wallet Two</option>
  <option value="3"> Wallet Three</option>
</select><br/>

<label for="exampleInputEmail1" class="form-label modal-label">Amount</label><br/>
<Form.Control type="text" />
  </div>

  
  <div className="d-flex ">
  <button closeButton type="submit" className=" pay-cancel">Cancel</button>
  <button type="submit" className="pay-btn">Pay</button>

  </div>
  
</form>
        </Modal.Body>
      </Modal>
               
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />

            <div className="grid-container">
              <div className="grid-item">
                <img className="small insure" src={img4}></img>
                <div className="activity-list">
                  <p className="title">Insurance</p>
                  <span className="henry">property coverage</span>
                </div>
              </div>
              <div className="grid-item">
                <p className="title">LTC WALLET</p>
                <span className="henry">Personal account</span>
              </div>
              <div className="grid-item">
                <p className="title">7 Jun,21</p>
                <span className="henry">Last payment</span>
              </div>
              <div className="grid-item">
                <p className="title">-10.24 LTC</p>
                <span className="henry">Balance</span>
              </div>

              <div className="grid-item mt-4">
                <img className="small insure" src={img5}></img>
                <div className="activity-list">
                  <p className="title">Electricity</p>
                  <span className="henry">Utility payment</span>
                </div>
              </div>
              <div className="grid-item mt-4">
                <p className="title">ETH WALLET</p>
                <span className="henry">Personal account</span>
              </div>
              <div className="grid-item mt-4">
                <p className="title">9 Jun,21</p>
                <span className="henry">Last payment</span>
              </div>
              <div className="grid-item mt-4">
                <p className="title">-3.543 ETH</p>
                <span className="henry">Balance</span>
              </div>
            </div>
          </Card.Body>
        </Card>

        {/* 3rd caerd */}

        <div className="right-float-div">
          <Card className="card-main-container">
            <Card.Body>
              <Card.Text>
                <div className="profile-header">
                  <span className="quit mt-3">Quit</span>
                  <span className="person ml-5">Personal</span>
                  <img className="small avatar pb-2" src={img18}></img>
                </div>
                <br />
                <br />

                <div className="profile-header mt-3">
                  <span className="payment">Payment</span>

                  <button className="avatar clear-btn">clear</button>
                </div>
                <br />
                <br />
                <div className="profile-card-1">
                  <div className="card-card-1-left">
                    <img className="small-img-left-1" src={img8}></img>
                  </div>
                  <div className="card-card-1-right">
                    <img className="small-img-right-1" src={img10}></img>
                  </div>
                  <br />
                  <br />
                  <div className="card-card-2-left">
                    <img className="small-img-left-2" src={img11}></img>
                  </div>
                  <div className="card-card-2-right">
                    <img className="small-img-right-2" src={img12}></img>
                  </div>
                </div>
                <br />
                <br />

                <div className="profile-card-1">
                  <div className="card-card-1-left">
                    <img className="small-img-left-1" src={img13}></img>
                  </div>
                  <div className="card-card-1-right">
                    <img className="small-img-right-1" src={img10}></img>
                  </div>
                  <br />
                  <br />
                  <div className="card-card-2-left">
                    <img className="small-img-left-2" src={img11}></img>
                  </div>
                  <div className="card-card-2-right">
                    <img className="small-img-right-2" src={img12}></img>
                  </div>
                  <br/><br/>
                
                  <center>
                  <img className="small mt-4" src={img16}></img>
                  </center>
                  <br/>
                 
                  <h2  className="payment">Wallets</h2>
                 
                  
                  <div className="grid-container-2">
                    <div className="grid-items-2 left-class">
                      <img className="small-img-table-img" src={img19}></img>

                      <label>
                        BTE
                        <br />
                        <span className="span-midel-label span">Bitcon</span>
                      </label>
                    </div>

                    <div className="grid-items-2">
                      <label>37%</label>
                      <br />
                      <span className="span-midel-label span-cent">-2.5%</span>
                    </div>

                    <div className="grid-items-2 left-class">
                      <img className="small-img-table-img" src={img20}></img>

                      <label>
                        DAI
                        <br />
                        <span className="span-midel-label span">Bitcon</span>
                      </label>
                    </div>

                    <div className="grid-items-2">
                      <label>23%</label>
                      <br />
                      <span className="span-midel-label ">-7.2%</span>
                    </div>

                    <div className="grid-items-2 left-class">
                      <img className="small-img-table-img" src={img21}></img>

                      <label>
                        XRP
                        <br />
                        <span className="span-midel-label span">Bitcon</span>
                      </label>
                    </div>

                    <div className="grid-items-2">
                      <label>20%</label>
                      <br />
                      <span className="span-midel-label span-cent">-3.1%</span>
                    </div>

                    <div className="grid-items-2 left-class">
                      <img className="small-img-table-img" src={img22}></img>

                      <label>
                        USDT
                        <br />
                        <span className="span-midel-label span">Bitcon</span>
                      </label>
                    </div>

                    <div className="grid-items-2">
                      <label>37%</label>
                      <br />
                      <span className="span-midel-label ">-18%</span>
                    </div>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </CardGroup>
    </div>
  );
}

export default App;
