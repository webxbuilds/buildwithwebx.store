/**
 * BuildWithWebX - WebX Creator Launch System 🚀
 * Direct Gumroad Checkout Integration
 */

// Clear any previous session checkout URLs from localStorage
try {
  localStorage.removeItem("buildwithwebx_checkout_url");
} catch (e) {}

document.addEventListener("DOMContentLoaded", () => {
  // Ensure main CTA button points directly to Gumroad checkout in the same tab
  const ctaBtn = document.getElementById("mainCtaBtn");
  if (ctaBtn) {
    ctaBtn.href = "https://webxbuilder.gumroad.com/l/webxCreator?wanted=true";
    ctaBtn.removeAttribute("target"); // Opens in same tab
  }

  // Handle Privacy & Terms clicks gracefully
  const privacyBtn = document.getElementById("privacyBtn");
  const termsBtn = document.getElementById("termsBtn");

  if (privacyBtn) {
    privacyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Privacy Policy: BuildWithWebX respects your privacy. Digital products are delivered electronically via Gumroad. Personal details are securely processed via encrypted checkout.");
    });
  }

  if (termsBtn) {
    termsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Terms of Service: Access to the WebX Creator Launch System includes personal and commercial use licenses for client website projects.");
    });
  }
});
