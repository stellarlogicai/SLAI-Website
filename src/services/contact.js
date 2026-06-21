const contactFormEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

function getContactFormEndpoint() {
  return window.__SLAI_CONTACT_FORM_ENDPOINT__ ?? contactFormEndpoint;
}

export async function submitContactRequest(payload) {
  const endpoint = getContactFormEndpoint();

  if (!endpoint) {
    throw new Error('Contact form endpoint is not configured.');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Contact form submission failed.');
  }
}
