const enquiryModal = document.getElementById('enquiryModal');
const enquiryForm = document.getElementById('enquiryForm');
const productInput = document.getElementById('productInput');
const modalProductName = document.getElementById('modalProductName');

// OPEN MODAL - Call this from your product button
// Example: <button onclick="openEnquiry('Cotton Saree')">Enquire</button>
function openEnquiry(productName = 'Product enquiry') {
  modalProductName.textContent = productName;
  productInput.value = productName;
  enquiryModal.classList.add('active');
  document.body.classList.add('modal-open');
}

// CLOSE MODAL
function closeEnquiry() {
  enquiryModal.classList.remove('active');
  document.body.classList.remove('modal-open');
}

// Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && enquiryModal.classList.contains('active')) {
    closeEnquiry();
  }
});

// FORM SUBMIT
enquiryForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const product = productInput.value;

  // Phone validation - exactly 10 digits
  if (!/^[0-9]{10}$/.test(phone)) {
    alert('Please enter a valid 10-digit phone number');
    return;
  }

  // You can send this data to your backend / WhatsApp / API
  console.log({ product, name, phone, message });

  // Example: WhatsApp integration
  // const waText = `Enquiry for: ${product}%0AName: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
  // window.open(`https://wa.me/919999999999?text=${waText}`, '_blank');

  // Success
  alert('Thank you! We will contact you soon.');
  enquiryForm.reset();
  closeEnquiry();
});