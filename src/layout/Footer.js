import React     from 'react';
import instagram from '../icons/instagram.svg';
import skype     from '../icons/skype.svg';
import phone     from '../icons/phone.svg';
import gmail     from '../icons/gmail.svg';

import './Footer.scss';


export default function() {
    return (
        <footer>
            <div className='copyright'>
                © 2020 David Tkachenko
            </div>
            <div className='contacts'>
                <a href='https://www.instagram.com/koroldavid08/'><img src={instagram} alt='instagram' /></a>
                <a href="skype:newkoroldavid?call"><img src={skype} alt='skype' /></a>
                <a href="tel:+380958402011"><img src={phone} alt='phone' /></a>
                <a href="mailto:koroldavid08@gmail.com"><img src={gmail} alt='gmail' /></a>
            </div>
        </footer>
    );
}
