import React from 'react'

const ContactUs = () => {
  return (
    <div>
        {/* <!-- Contact with us --> */}
    <section class="contact">
        <div class="container-fluid pb-5" id="contactid">
            <div class="section_header text-center mb-5 mt-4">
                <h1 className='bg-light bg-light border border-light shadow p-3 mb-5 bg-white rounded'> Contact with Us </h1>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2 col-12">
                        <form action="" method="POST">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="name" class="form-control" name="username" placeholder="Enter your Name" autocomplete="off" required />
                            </div>
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" class="form-control" name="email" placeholder="name@example.com" autocomplete="off" />
                            </div>
                            <div class="form-group">
                                <label>Contact No</label>
                                <input type="number" class="form-control" name="mobile" placeholder="Enter your conatact no" autocomplete="off" required />
                            </div>
                            <div class="form-group">
                                <label>Address</label>
                                <input type="address" class="form-control" name="address" placeholder="Enter your address" autocomplete="off" required />
                            </div>
                            <div class="form-group">
                                <label> Select Symptoms </label> <br/>

                                <div class="custom-control custom-checkbox custom-control-inline text-capitalize">
                                    <input type="checkbox" class="custom-control-input" id="customcheckbox1" name="coronasym[]" value="cold"/>
                                    <label class="custom-control-label" for="customcheckbox1">Cold</label>
                                </div>
                                <div class="custom-control custom-checkbox custom-control-inline text-capitalize">
                                    <input type="checkbox" class="custom-control-input" id="customcheckbox2" name="coronasym[]" value="cough"/>
                                    <label class="custom-control-label" for="customcheckbox2">cough</label>
                                </div>
                                <div class="custom-control custom-checkbox custom-control-inline text-capitalize">
                                    <input type="checkbox" class="custom-control-input" id="customcheckbox3" name="coronasym[]" value="fever"/>
                                    <label class="custom-control-label" for="customcheckbox3">fever</label>
                                </div>
                                <div class="custom-control custom-checkbox custom-control-inline text-capitalize">
                                    <input type="checkbox" class="custom-control-input" id="customcheckbox4" name="coronasym[]" value="breath"/>
                                    <label class="custom-control-label" for="customcheckbox4">breathing problem</label>
                                </div>
                                <div class="custom-control custom-checkbox custom-control-inline text-capitalize">
                                    <input type="checkbox" class="custom-control-input" id="customcheckbox5" name="coronasym[]" value="tird"/>
                                    <label class="custom-control-label" for="customcheckbox5">tierdness</label>
                                </div>
                                <div class="custom-control custom-checkbox custom-control-inline text-capitalize">
                                    <input type="checkbox" class="custom-control-input" id="customcheckbox6" name="coronasym[]" value="no problem"/>
                                    <label class="custom-control-label" for="customcheckbox6">no problem</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Define your Problems</label>
                                <textarea class="form-control" name="message" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-success btn-block" name="submit" value="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default ContactUs