/* JODEX site configuration */
const DONATION_GOAL = 100000000;
const DONATION_PAGE = 'https://paystack.shop/pay/gval0-m73r';

// Donation checkout is handled by the official Jodex Paystack Payment Page.
// No Paystack secret key or Vercel environment variable is required.
const donateButton = document.querySelector('#donateButton');
if (donateButton) donateButton.href = DONATION_PAGE;

const joinForm = document.querySelector('#joinForm');
if (joinForm) joinForm.onsubmit = e => {
  e.preventDefault();
  alert('Thanks! Your academy registration interest has been received. We will contact you.');
  e.target.reset();
};

const schoolForm = document.querySelector('#schoolForm');
if (schoolForm) schoolForm.onsubmit = e => {
  e.preventDefault();
  const d = new FormData(e.target);
  const msg = `Hello Jodex Football Academy, I would like to discuss a school/university partnership. Institution: ${d.get('institution')}. Contact: ${d.get('contact')}. Phone: ${d.get('phone')}. Email: ${d.get('email')}. Need: ${d.get('need')}. Message: ${d.get('message')}`;
  window.open(`https://wa.me/2348073114884?text=${encodeURIComponent(msg)}`, '_blank');
};
