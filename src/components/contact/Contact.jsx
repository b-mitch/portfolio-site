import React from 'react';

export default function Contact() {
    return (
        <div className='contact'>
            <div className='body'>
                <h1>Let's Chat!</h1>
                <div class="logo-container" id="contact-logos">
                    <i class="fa-solid fa-mobile fa-2x"> 7 0 3. 6 2 5. 9 5 9 5</i><br/><br/>
                    <i class="fa-solid fa-envelope fa-2x"> b m i t c h u m. d e v @ g m a i l. c o m</i>
                </div>
                <div class="logo-container" id="small-logos">
                    <i class="fa-solid fa-mobile fa-lg"> 7 0 3. 6 2 5. 9 5 9 5</i><br/><br/>
                    <i class="fa-solid fa-envelope fa-lg"> b m i t c h u m. d e v @ g m a i l. c o m</i>
                </div>
                <div class="logo-container" id="tiny-logos">
                    <i class="fa-solid fa-mobile"> 703.625.9595</i><br/><br/>
                    <i class="fa-solid fa-envelope"> bmitchum.dev@gmail.com</i>
                </div>
            </div>
            <div className="contact-footer">
                <h6>&copy; Copyright. All Rights Reserved.</h6>
            </div>
        </div>
    )
}