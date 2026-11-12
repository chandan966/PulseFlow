/**
 * PulseFlow Landing Page — Interactive Behaviors
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Set current year in footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile menu when a navigation link is clicked
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Pricing Billing Toggle (Monthly <-> Annual)
  const billingToggle = document.getElementById('billingToggle');
  const monthlyLabel = document.getElementById('monthlyLabel');
  const annualLabel = document.getElementById('annualLabel');
  const priceAmounts = document.querySelectorAll('.plan-price .amount');

  if (billingToggle) {
    billingToggle.addEventListener('click', () => {
      const isAnnual = billingToggle.getAttribute('aria-pressed') === 'true';
      const nextState = !isAnnual;

      billingToggle.setAttribute('aria-pressed', String(nextState));
      monthlyLabel.classList.toggle('active', !nextState);
      annualLabel.classList.toggle('active', nextState);

      priceAmounts.forEach((el) => {
        const targetValue = nextState ? el.dataset.annual : el.dataset.monthly;
        if (targetValue) {
          el.textContent = targetValue;
        }
      });
    });
  }

  // 4. Plan Selection Buttons -> Pre-fill form & scroll to Contact section
  const planSelect = document.getElementById('planSelect');
  const contactSection = document.getElementById('contact');
  const fullNameInput = document.getElementById('fullName');

  document.querySelectorAll('.select-plan-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const chosenPlan = btn.dataset.plan;
      if (planSelect && chosenPlan) {
        planSelect.value = chosenPlan;
      }
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          if (fullNameInput) fullNameInput.focus({ preventScroll: true });
        }, 450);
      }
    });
  });

  // 5. Demo Request Form Validation & Submission
  const demoForm = document.getElementById('demoForm');
  const workEmailInput = document.getElementById('workEmail');
  const fullNameError = document.getElementById('fullNameError');
  const workEmailError = document.getElementById('workEmailError');
  const formSuccess = document.getElementById('formSuccess');
  const successDetails = document.getElementById('successDetails');
  const resetFormBtn = document.getElementById('resetFormBtn');

  const honeypotInput = document.getElementById('companyWebsite');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function sanitizeText(str) {
    return str.replace(/[<>]/g, '').trim();
  }

  function clearFieldError(input, errorEl) {
    input.classList.remove('invalid');
    errorEl.textContent = '';
  }

  function setFieldError(input, errorEl, message) {
    input.classList.add('invalid');
    errorEl.textContent = message;
  }

  if (fullNameInput && workEmailInput) {
    fullNameInput.addEventListener('input', () => clearFieldError(fullNameInput, fullNameError));
    workEmailInput.addEventListener('input', () => clearFieldError(workEmailInput, workEmailError));
  }

  if (demoForm) {
    demoForm.addEventListener('submit', (event) => {
      event.preventDefault();

      // Silently ignore automated bot submissions caught by honeypot
      if (honeypotInput && honeypotInput.value.trim() !== '') {
        return;
      }

      const nameVal = sanitizeText(fullNameInput.value);
      const emailVal = sanitizeText(workEmailInput.value);
      let isValid = true;

      if (nameVal.length < 2) {
        setFieldError(fullNameInput, fullNameError, 'Please enter your full name (at least 2 characters).');
        isValid = false;
      } else {
        clearFieldError(fullNameInput, fullNameError);
      }

      if (!emailRegex.test(emailVal)) {
        setFieldError(workEmailInput, workEmailError, 'Please enter a valid work email address.');
        isValid = false;
      } else {
        clearFieldError(workEmailInput, workEmailError);
      }

      if (!isValid) return;

      // Show success state (no backend required per assignment)
      const selectedPlan = planSelect ? planSelect.value : 'Pro';
      if (successDetails) {
        successDetails.textContent = `Thanks, ${nameVal}! We've sent your ${selectedPlan} plan demo details to ${emailVal}.`;
      }

      demoForm.hidden = true;
      formSuccess.hidden = false;
    });
  }

  if (resetFormBtn && demoForm && formSuccess) {
    resetFormBtn.addEventListener('click', () => {
      demoForm.reset();
      formSuccess.hidden = true;
      demoForm.hidden = false;
    });
  }
});
