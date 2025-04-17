import React from 'react'
import logo from '../src/logob2.png'

function Footer() {
    return (
        <div className="footerMain">
            <div className='container'>
                <div className='row pt-5'>
                    <div className="col-md-3">
                        <div className="footerLogo mt-4 ">
                            <h2 className='text-danger'><img src={logo} alt="" width="60" height="60" />CinemaSwift</h2>
                            <p>Book Your Seat Just By One Click</p>
                            <div className="line mt-4"></div>
                        </div>
                        <div className="contact">
                            <h4>Contact Us</h4>
                            <div className="main">
                                <div className="Phone mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                                    <a href="/">9999999999</a>
                                </div>
                                <div className="whatsapp mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0,0,256,256">
                                        <g fill-opacity="0.78824" fill="#ff0303" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.69047,0 -23,10.30953 -23,23c0,4.0791 1.11869,7.88588 2.98438,11.20898l-2.94727,10.52148c-0.09582,0.34262 -0.00241,0.71035 0.24531,0.96571c0.24772,0.25536 0.61244,0.35989 0.95781,0.27452l10.9707,-2.71875c3.22369,1.72098 6.88165,2.74805 10.78906,2.74805c12.69047,0 23,-10.30953 23,-23c0,-12.69047 -10.30953,-23 -23,-23zM25,4c11.60953,0 21,9.39047 21,21c0,11.60953 -9.39047,21 -21,21c-3.72198,0 -7.20788,-0.97037 -10.23828,-2.66602c-0.22164,-0.12385 -0.48208,-0.15876 -0.72852,-0.09766l-9.60742,2.38086l2.57617,-9.19141c0.07449,-0.26248 0.03851,-0.54399 -0.09961,-0.7793c-1.84166,-3.12289 -2.90234,-6.75638 -2.90234,-10.64648c0,-11.60953 9.39047,-21 21,-21zM16.64258,13c-0.64104,0 -1.55653,0.23849 -2.30859,1.04883c-0.45172,0.48672 -2.33398,2.32068 -2.33398,5.54492c0,3.36152 2.33139,6.2621 2.61328,6.63477h0.00195v0.00195c-0.02674,-0.03514 0.3578,0.52172 0.87109,1.18945c0.5133,0.66773 1.23108,1.54472 2.13281,2.49414c1.80347,1.89885 4.33914,4.09336 7.48633,5.43555c1.44932,0.61717 2.59271,0.98981 3.45898,1.26172c1.60539,0.5041 3.06762,0.42747 4.16602,0.26563c0.82216,-0.12108 1.72641,-0.51584 2.62109,-1.08203c0.89469,-0.56619 1.77153,-1.2702 2.1582,-2.33984c0.27701,-0.76683 0.41783,-1.47548 0.46875,-2.05859c0.02546,-0.29156 0.02869,-0.54888 0.00977,-0.78711c-0.01897,-0.23823 0.0013,-0.42071 -0.2207,-0.78516c-0.46557,-0.76441 -0.99283,-0.78437 -1.54297,-1.05664c-0.30567,-0.15128 -1.17595,-0.57625 -2.04883,-0.99219c-0.8719,-0.41547 -1.62686,-0.78344 -2.0918,-0.94922c-0.29375,-0.10568 -0.65243,-0.25782 -1.16992,-0.19922c-0.51749,0.0586 -1.0286,0.43198 -1.32617,0.87305c-0.28205,0.41807 -1.4175,1.75835 -1.76367,2.15234c-0.0046,-0.0028 0.02544,0.01104 -0.11133,-0.05664c-0.42813,-0.21189 -0.95173,-0.39205 -1.72656,-0.80078c-0.77483,-0.40873 -1.74407,-1.01229 -2.80469,-1.94727v-0.00195c-1.57861,-1.38975 -2.68437,-3.1346 -3.0332,-3.7207c0.0235,-0.02796 -0.00279,0.0059 0.04687,-0.04297l0.00195,-0.00195c0.35652,-0.35115 0.67247,-0.77056 0.93945,-1.07812c0.37854,-0.43609 0.54559,-0.82052 0.72656,-1.17969c0.36067,-0.71583 0.15985,-1.50352 -0.04883,-1.91797v-0.00195c0.01441,0.02867 -0.11288,-0.25219 -0.25,-0.57617c-0.13751,-0.32491 -0.31279,-0.74613 -0.5,-1.19531c-0.37442,-0.89836 -0.79243,-1.90595 -1.04102,-2.49609v-0.00195c-0.29285,-0.69513 -0.68904,-1.1959 -1.20703,-1.4375c-0.51799,-0.2416 -0.97563,-0.17291 -0.99414,-0.17383h-0.00195c-0.36964,-0.01705 -0.77527,-0.02148 -1.17773,-0.02148zM16.64258,15c0.38554,0 0.76564,0.0047 1.08398,0.01953c0.32749,0.01632 0.30712,0.01766 0.24414,-0.01172c-0.06399,-0.02984 0.02283,-0.03953 0.20898,0.40234c0.24341,0.57785 0.66348,1.58909 1.03906,2.49023c0.18779,0.45057 0.36354,0.87343 0.50391,1.20508c0.14036,0.33165 0.21642,0.51683 0.30469,0.69336v0.00195l0.00195,0.00195c0.08654,0.17075 0.07889,0.06143 0.04883,0.12109c-0.21103,0.41883 -0.23966,0.52166 -0.45312,0.76758c-0.32502,0.37443 -0.65655,0.792 -0.83203,0.96484c-0.15353,0.15082 -0.43055,0.38578 -0.60352,0.8457c-0.17323,0.46063 -0.09238,1.09262 0.18555,1.56445c0.37003,0.62819 1.58941,2.6129 3.48438,4.28125c1.19338,1.05202 2.30519,1.74828 3.19336,2.2168c0.88817,0.46852 1.61157,0.74215 1.77344,0.82227c0.38438,0.19023 0.80448,0.33795 1.29297,0.2793c0.48849,-0.05865 0.90964,-0.35504 1.17773,-0.6582l0.00195,-0.00195c0.3568,-0.40451 1.41702,-1.61513 1.92578,-2.36133c0.02156,0.0076 0.0145,0.0017 0.18359,0.0625v0.00195h0.00195c0.0772,0.02749 1.04413,0.46028 1.90625,0.87109c0.86212,0.41081 1.73716,0.8378 2.02148,0.97852c0.41033,0.20308 0.60422,0.33529 0.6543,0.33594c0.00338,0.08798 0.0068,0.18333 -0.00586,0.32813c-0.03507,0.40164 -0.14243,0.95757 -0.35742,1.55273c-0.10532,0.29136 -0.65389,0.89227 -1.3457,1.33008c-0.69181,0.43781 -1.53386,0.74705 -1.8457,0.79297c-0.9376,0.13815 -2.05083,0.18859 -3.27344,-0.19531c-0.84773,-0.26609 -1.90476,-0.61053 -3.27344,-1.19336c-2.77581,-1.18381 -5.13503,-3.19825 -6.82031,-4.97266c-0.84264,-0.8872 -1.51775,-1.71309 -1.99805,-2.33789c-0.4794,-0.62364 -0.68874,-0.94816 -0.86328,-1.17773l-0.00195,-0.00195c-0.30983,-0.40973 -2.20703,-3.04868 -2.20703,-5.42578c0,-2.51576 1.1685,-3.50231 1.80078,-4.18359c0.33194,-0.35766 0.69484,-0.41016 0.8418,-0.41016z"></path></g></g>
                                    </svg>
                                    <a href="/">9999999999</a>
                                </div>
                                <div className="skype mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0,0,256,256">
                                        <g fill-opacity="0.92941" fill="#ff0303" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M14.28125,0c-7.86328,0 -14.28125,6.32031 -14.28125,14.09375c0,2.45703 0.6875,4.73438 1.8125,6.75c-0.27344,1.42969 -0.4375,2.90234 -0.4375,4.40625c0,13.01953 10.69922,23.5625 23.875,23.5625c1.375,0 2.71484,-0.12109 4.03125,-0.34375c1.93359,0.97266 4.12109,1.53125 6.4375,1.53125c7.86328,0 14.28125,-6.31641 14.28125,-14.09375c0,-2.11719 -0.51953,-4.10156 -1.375,-5.90625c0.32422,-1.54297 0.53125,-3.12109 0.53125,-4.75c0,-13.01172 -10.72656,-23.5625 -23.90625,-23.5625c-1.26172,0 -2.50391,0.125 -3.71875,0.3125c-2.12891,-1.24609 -4.59375,-2 -7.25,-2zM14.28125,2c2.41016,0 4.64063,0.66797 6.53125,1.84375c0.20313,0.13281 0.44531,0.1875 0.6875,0.15625c1.22266,-0.20703 2.47266,-0.3125 3.75,-0.3125c12.11328,0 21.90625,9.64844 21.90625,21.5625c0,1.58984 -0.16406,3.13281 -0.5,4.625c-0.0625,0.23047 -0.03906,0.47266 0.0625,0.6875c0.82031,1.61328 1.28125,3.41016 1.28125,5.34375c0,6.68359 -5.48047,12.09375 -12.28125,12.09375c-2.10547,0 -4.08984,-0.52344 -5.8125,-1.4375c-0.19141,-0.09766 -0.41016,-0.13281 -0.625,-0.09375c-1.30469,0.23828 -2.66016,0.34375 -4.03125,0.34375c-12.11328,0 -21.875,-9.63672 -21.875,-21.5625c0,-1.48437 0.14844,-2.94141 0.4375,-4.34375c0.05078,-0.24609 0.00391,-0.50391 -0.125,-0.71875c-1.07422,-1.79687 -1.6875,-3.85937 -1.6875,-6.09375c0,-6.67578 5.48438,-12.09375 12.28125,-12.09375zM25.09375,8.375c-2.63281,0 -5,0.35547 -7.03125,1.09375c-0.00781,0.00391 -0.02344,-0.00391 -0.03125,0c-2.05078,0.75 -3.72266,1.89063 -4.875,3.375c-1.16406,1.49219 -1.78125,3.27734 -1.78125,5.1875c0,1.97656 0.58203,3.75391 1.71875,5.15625c1.08594,1.33594 2.53906,2.38281 4.3125,3.125c1.6875,0.70703 3.76953,1.30078 6.1875,1.8125c1.73047,0.35938 3.13281,0.69531 4.125,1c0.87891,0.26953 1.57031,0.67188 2.0625,1.125c0.39844,0.36719 0.5625,0.73047 0.5625,1.40625c0,0.79688 -0.32422,1.32422 -1.28125,1.96875c-0.95312,0.64453 -2.27734,1.03125 -4.03125,1.03125c-1.28516,0 -2.27344,-0.20312 -2.90625,-0.5c-0.70703,-0.32812 -1.23437,-0.72656 -1.5625,-1.15625c-0.41016,-0.53125 -0.80469,-1.23047 -1.1875,-2.09375c-0.40625,-0.94141 -0.93359,-1.73828 -1.625,-2.3125c-0.73437,-0.60937 -1.67578,-0.90625 -2.65625,-0.90625c-1.16016,0 -2.24609,0.37109 -3.0625,1.125c-0.80469,0.75 -1.28125,1.78906 -1.28125,2.875c0,1.57422 0.58984,3.15234 1.65625,4.65625c1.05078,1.5 2.45703,2.70703 4.125,3.59375c2.33984,1.22656 5.25,1.8125 8.65625,1.8125c2.83984,0 5.375,-0.42969 7.53125,-1.3125c2.16797,-0.88672 3.90625,-2.15625 5.09375,-3.8125c1.17969,-1.64844 1.77734,-3.57422 1.78125,-5.625c0,-1.69141 -0.33984,-3.20312 -1.0625,-4.46875c-0.69922,-1.22266 -1.6875,-2.24609 -2.90625,-3.03125c-1.16797,-0.75 -2.56641,-1.37109 -4.15625,-1.875c-1.53516,-0.48437 -3.25781,-0.94531 -5.125,-1.34375c-0.01562,-0.00391 -0.01562,0.00391 -0.03125,0c-1.4375,-0.32812 -2.49219,-0.58594 -3.09375,-0.75c-0.55078,-0.15234 -1.13672,-0.35547 -1.6875,-0.625c-0.48047,-0.23828 -0.80859,-0.51953 -1.03125,-0.78125c-0.16797,-0.20312 -0.21875,-0.33594 -0.21875,-0.65625c0,-0.47266 0.17969,-0.83594 0.96875,-1.34375c0.77344,-0.50391 1.89453,-0.78125 3.40625,-0.78125c1.65234,0 2.75,0.30469 3.21875,0.65625c0.65234,0.48438 1.26563,1.21875 1.78125,2.1875c0.01172,0.01172 0.01953,0.01953 0.03125,0.03125c0.52344,0.88672 1.00391,1.54297 1.5625,2.03125c0.69531,0.60156 1.61719,0.84375 2.625,0.84375c1.16406,0 2.25781,-0.42578 3.0625,-1.25c0.77734,-0.79297 1.25,-1.80859 1.25,-2.875c0,-1.02734 -0.30469,-2.07422 -0.84375,-3.0625c-0.55469,-1.01562 -1.40625,-1.9375 -2.5,-2.78125c-1.11719,-0.86328 -2.49609,-1.54297 -4.09375,-2.03125c-1.62891,-0.5 -3.53516,-0.71875 -5.65625,-0.71875zM25.09375,10.375c1.97266,0 3.6875,0.23047 5.0625,0.65625c1.41406,0.43359 2.58984,1.00781 3.46875,1.6875c0.92578,0.71484 1.57813,1.44531 1.96875,2.15625c0.41016,0.75 0.59375,1.44922 0.59375,2.09375c0,0.54688 -0.18359,0.98438 -0.65625,1.46875c-0.44531,0.46094 -0.95703,0.65625 -1.65625,0.65625c-0.6875,0 -1.08594,-0.14844 -1.3125,-0.34375c-0.28906,-0.25 -0.68359,-0.76172 -1.125,-1.5c-0.01172,-0.02344 -0.01953,-0.03906 -0.03125,-0.0625c-0.62109,-1.14453 -1.39453,-2.09766 -2.3125,-2.78125c-1.06641,-0.80078 -2.5625,-1.0625 -4.4375,-1.0625c-1.77344,0 -3.29297,0.34375 -4.5,1.125c-1.125,0.72656 -1.875,1.78906 -1.875,3c0,0.70703 0.24219,1.39844 0.6875,1.9375c0.4375,0.51563 1.00781,0.94531 1.6875,1.28125c0.65625,0.32422 1.34375,0.59375 2.03125,0.78125c0.66406,0.17969 1.74609,0.44531 3.21875,0.78125c1.82813,0.38672 3.5,0.82031 4.96875,1.28125c1.45703,0.46484 2.70703,1.02734 3.6875,1.65625c0.96875,0.625 1.71484,1.40625 2.25,2.34375c0.51172,0.89844 0.78125,2.04297 0.78125,3.46875c0,1.66797 -0.46094,3.14844 -1.40625,4.46875c-0.93359,1.30469 -2.32812,2.35156 -4.21875,3.125c-1.85547,0.76172 -4.14453,1.15625 -6.78125,1.15625c-3.17187,0 -5.75781,-0.53516 -7.71875,-1.5625c-1.41016,-0.75 -2.53906,-1.76172 -3.40625,-3c-0.01172,0 -0.01953,0 -0.03125,0c-0.88672,-1.25391 -1.28125,-2.42187 -1.28125,-3.5c0,-0.56641 0.19922,-0.98047 0.65625,-1.40625c0.44141,-0.40625 0.93359,-0.59375 1.6875,-0.59375c0.58984,0 1.00781,0.12891 1.375,0.4375c0.36719,0.30469 0.74609,0.82422 1.0625,1.5625c0.01172,0.01172 0.01953,0.01953 0.03125,0.03125c0.42969,0.97266 0.90234,1.80469 1.4375,2.5c0.5625,0.73438 1.33594,1.3125 2.28125,1.75c1.02734,0.48047 2.27734,0.6875 3.75,0.6875c2.03125,0 3.77734,-0.41797 5.15625,-1.34375c1.32422,-0.89062 2.15625,-2.19922 2.15625,-3.65625c0,-1.10937 -0.43359,-2.14844 -1.21875,-2.875c-0.75781,-0.69922 -1.70312,-1.22266 -2.8125,-1.5625c-1.08984,-0.33594 -2.54687,-0.66406 -4.3125,-1.03125c-2.33203,-0.49219 -4.28906,-1.08203 -5.8125,-1.71875c-1.51953,-0.63672 -2.67969,-1.51172 -3.53125,-2.5625c-0.83203,-1.02734 -1.28125,-2.26953 -1.28125,-3.875c0,-1.50391 0.44141,-2.8125 1.34375,-3.96875c0.01172,0 0.01953,0 0.03125,0c0.88281,-1.14062 2.17969,-2.06641 3.96875,-2.71875c1.75781,-0.64453 3.91016,-0.96875 6.375,-0.96875z"></path></g></g>
                                    </svg>
                                    <a href="/">9999999999</a>
                                </div>
                                <div className="email mt-3">
                                    <img src="email.png" width="24px" height="24px" />
                                    <a href="/">9999999999</a>
                                </div>
                                <div className="location mt-3">
                                    <img src="location.png" width="24px" height="24px" />
                                    <a href="/">9999999999</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9  mt-4">
                        <div className="city">
                            <h6>Movies In Top City</h6>
                            <a href='/'>Movies In Ahmedabad | </a>
                            <a href='/'>Movies In Delhi | </a>
                            <a href='/'>Movies In Mumbai| </a>
                            <a href='/'>Movies In Hyderabad | </a>
                            <a href='/'>Movies In Pune | </a>
                            <a href='/'>Movies In Kolkata  </a>
                        </div>
                        <div className="line mt-4"></div>
                        <div className="type mt-4">
                            <h6>Movies By Genre</h6>
                            <a href='/'>Drama Movies | </a>
                            <a href='/'>Action Movies | </a>
                            <a href='/'>Comedy Movies | </a>
                            <a href='/'>Thriller Movies | </a>
                            <a href='/'>Adventure Movies | </a>
                            <a href='/'>Romantic Movies | </a>
                            <a href='/'>Sci-Fi Movies | </a>
                            <a href='/'>Anime Movies | </a>
                            <a href='/'>Historical Movies </a>
                        </div>
                        <div className="line mt-4"></div>
                        <div className="Movies mt-4">
                            <h6>Movies Now Showing In Ahmedabad</h6>
                            <a href='/'>Deva | </a>
                            <a href='/'>Sky Force | </a>
                            <a href='/'>Interstellar | </a>
                            <a href='/'>Umbarro | </a>
                            <a href='/'>Faati ne? | </a>
                            <a href='/'>pushpa2: The Rule | </a>
                            <a href='/'>Mom Tane Nai Samjay | </a>
                            <a href='/'>Mufasa:The Lion King  </a>
                            <a href='/'>Marco </a>
                        </div>
                        <div className="line mt-4"></div>
                        <div className="language mt-4">
                            <h6>Movies By Language</h6>
                            <a href='/'>Movies In Hindi | </a>
                            <a href='/'>Movies In English | </a>
                            <a href='/'>Movies In Gujarati  </a>
                        </div>
                        <div className="line mt-4"></div>
                        <div className="moviesnow mt-4">
                            <p>Movies Now Showing </p>
                            <a href='/'>Deva | </a>
                            <a href='/'>Sky Force | </a>
                            <a href='/'>Interstellar | </a>
                            <a href='/'>Umbarro | </a>
                            <a href='/'>Faati ne? | </a>
                            <a href='/'>Mufasa:The Lion King  </a>
                        </div>
                    </div>
                    <div className="lineend mt-4 "></div>
                </div>
                <div className="copyright mt-5 mb-5">
                    <p className='text-danger'>CinemaSwift<img src="copyright.png" /> 2025 All Rights Reserved</p>
                    <div className="svg">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0,0,256,256">
                            <g fill="#fdfcfc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h16.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h5.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h8.8418c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-8v-14h3.82031l1.40039,-7h-5.2207v-2c0,-0.55749 0.05305,-0.60107 0.24023,-0.72266c0.18718,-0.12159 0.76559,-0.27734 1.75977,-0.27734h3v-5.63086l-0.57031,-0.27149c0,0 -2.29704,-1.09766 -5.42969,-1.09766c-2.25,0 -4.09841,0.89645 -5.28125,2.375c-1.18284,1.47855 -1.71875,3.45833 -1.71875,5.625v2h-3v7h3v14h-16c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM32,15c2.07906,0 3.38736,0.45846 4,0.70117v2.29883h-1c-1.15082,0 -2.07304,0.0952 -2.84961,0.59961c-0.77656,0.50441 -1.15039,1.46188 -1.15039,2.40039v4h4.7793l-0.59961,3h-4.17969v16h-4v-16h-3v-3h3v-4c0,-1.83333 0.46409,-3.35355 1.28125,-4.375c0.81716,-1.02145 1.96875,-1.625 3.71875,-1.625z"></path></g></g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0,0,256,256">
                            <g fill="#fdfcfc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M11,4c-3.85433,0 -7,3.14567 -7,7v28c0,3.85433 3.14567,7 7,7h28c3.85433,0 7,-3.14567 7,-7v-28c0,-3.85433 -3.14567,-7 -7,-7zM11,6h28c2.77367,0 5,2.22633 5,5v28c0,2.77367 -2.22633,5 -5,5h-28c-2.77367,0 -5,-2.22633 -5,-5v-28c0,-2.77367 2.22633,-5 5,-5zM13.08594,13l9.22266,13.10352l-9.30859,10.89648h2.5l7.9375,-9.29297l6.53906,9.29297h7.9375l-10.125,-14.38672l8.21094,-9.61328h-2.5l-6.83984,8.00977l-5.63672,-8.00977zM16.91406,15h3.06445l14.10742,20h-3.06445z"></path></g></g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0,0,256,256">
                            <g fill="#fdfcfc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path></g></g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0,0,256,256">
                            <g fill="#fdfcfc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h32c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-32c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM14,11.01172c-1.09522,0 -2.08078,0.32736 -2.81055,0.94141c-0.72977,0.61405 -1.17773,1.53139 -1.17773,2.51367c0,1.86718 1.61957,3.32281 3.67969,3.4668c0.0013,0.00065 0.0026,0.0013 0.00391,0.00195c0.09817,0.03346 0.20099,0.05126 0.30469,0.05273c2.27301,0 3.98828,-1.5922 3.98828,-3.52148c-0.00018,-0.01759 -0.00083,-0.03518 -0.00195,-0.05274c-0.10175,-1.90023 -1.79589,-3.40234 -3.98633,-3.40234zM14,12.98828c1.39223,0 1.94197,0.62176 2.00195,1.50391c-0.01215,0.85625 -0.54186,1.51953 -2.00195,1.51953c-1.38541,0 -2.01172,-0.70949 -2.01172,-1.54492c0,-0.41771 0.15242,-0.7325 0.47266,-1.00195c0.32023,-0.26945 0.83428,-0.47656 1.53906,-0.47656zM11,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-5.86523v-13.13477c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM20,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10c0,-0.82967 0.22639,-1.65497 0.625,-2.19531c0.39861,-0.54035 0.90147,-0.86463 1.85742,-0.84766c0.98574,0.01695 1.50758,0.35464 1.90234,0.88477c0.39477,0.53013 0.61523,1.32487 0.61523,2.1582v10c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10.73828c0,-2.96154 -0.87721,-5.30739 -2.38086,-6.89453c-1.50365,-1.58714 -3.59497,-2.36719 -5.80664,-2.36719c-2.10202,0 -3.70165,0.70489 -4.8125,1.42383v-0.42383c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM12,21h4v12.13477v4.86523h-4zM21,21h4v1.56055c0.00013,0.43 0.27511,0.81179 0.68291,0.94817c0.40781,0.13638 0.85714,-0.00319 1.11591,-0.34661c0,0 1.57037,-2.16211 5.01367,-2.16211c1.75333,0 3.25687,0.58258 4.35547,1.74219c1.0986,1.15961 1.83203,2.94607 1.83203,5.51953v9.73828h-4v-9c0,-1.16667 -0.27953,-2.37289 -1.00977,-3.35352c-0.73023,-0.98062 -1.9584,-1.66341 -3.47266,-1.68945c-1.52204,-0.02703 -2.77006,0.66996 -3.50195,1.66211c-0.73189,0.99215 -1.01562,2.21053 -1.01562,3.38086v9h-4z"></path></g></g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;