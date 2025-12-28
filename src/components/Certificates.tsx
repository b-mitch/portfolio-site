import React, { useEffect, useRef } from 'react';
import certSa from '/images/cert-sa.png';
import certDev from '/images/cert-dev.png';
import certPy from '/images/cert-py.png';

const CERTS = [
  {
    id: 'cert-sa',
    embedHtml: "<div data-iframe-width=\"200\" data-iframe-height=\"250\" data-share-badge-id=\"4cf2ec2e-c790-4f3f-b569-137eb7d31858\" data-share-badge-host=\"https://www.credly.com\"></div>",
    scriptSrc: "//cdn.credly.com/assets/utilities/embed.js",
    imgSrc: certSa
  },
  {
    id: 'cert-dev',
    embedHtml: "<div data-iframe-width=\"200\" data-iframe-height=\"250\" data-share-badge-id=\"5056b57c-3566-4ef3-aa2c-a05e8c2d6ff7\" data-share-badge-host=\"https://www.credly.com\"></div>",
    scriptSrc: "//cdn.credly.com/assets/utilities/embed.js",
    imgSrc: certDev
  },
  {
    id: 'cert-py',
    embedHtml: "<div data-iframe-width=\"200\" data-iframe-height=\"250\" data-share-badge-id=\"f7dd5387-7045-4b53-9e6f-b1260bde9380\" data-share-badge-host=\"https://www.credly.com\"></div>",
    scriptSrc: "//cdn.credly.com/assets/utilities/embed.js",
    imgSrc: certPy
  }
];

export default function Certificates(): JSX.Element {
      
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing content first
    container.innerHTML = '';

    let addedScript: HTMLScriptElement | null = null;
    let didAddScript = false;

    // Loop through certificates and add them to the container
    CERTS.forEach(cert => {
      if (cert.embedHtml) {
        // Add the embed HTML
        const certHtml = cert.embedHtml;
        container.appendChild(document.createRange().createContextualFragment(certHtml));

        if (cert.scriptSrc) {
          const selector = `script[data-credly="${cert.scriptSrc}"]`;
          if (!document.querySelector(selector)) {
            addedScript = document.createElement('script');
            addedScript.async = true;
            addedScript.src = cert.scriptSrc;
            addedScript.setAttribute('data-credly', cert.scriptSrc);
            document.body.appendChild(addedScript);
            didAddScript = true;
          }
        }
      } else if (cert.imgSrc) {
        // Render a simple image fallback

        const img = document.createElement('img');
        img.src = cert.imgSrc;
        img.alt = 'Certificate Badge';
        img.style.maxWidth = '250px';
        img.style.height = 'auto';

        container.appendChild(img);
      } else {
        // No snippet provided — render a helpful placeholder
        const p = document.createElement('p');
        p.textContent = 'No certificate embed found. Paste your Credly HTML snippet or set CREDLY_IMG_SRC in this file to display a badge.';
        container.appendChild(p);
      }
    });

    // Cleanup: remove script we added and clear container
    return () => {
      if (didAddScript && addedScript && addedScript.parentNode) {
        addedScript.parentNode.removeChild(addedScript);
      }
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <div id="certificates" className="certificates">
      <h1>Certificates</h1>
      <div ref={containerRef} className="cert-badge"/>
    </div>
  );
}
