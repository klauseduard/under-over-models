/**
 * SVG Interactivity Helper
 * This script enhances SVG interaction for GitHub Pages
 */

document.addEventListener('DOMContentLoaded', function() {
  // Find all SVG container objects
  const svgObjects = document.querySelectorAll('.svg-container object');
  
  // Add load event listener to each SVG object
  svgObjects.forEach(function(obj) {
    obj.addEventListener('load', function() {
      try {
        // Access the SVG document
        const svgDoc = obj.contentDocument;
        if (!svgDoc) return;
        
        // Find all clickable elements in the SVG
        const clickableElements = svgDoc.querySelectorAll('[data-link]');
        
        // Add click handlers to navigate to linked SVGs
        clickableElements.forEach(function(element) {
          element.style.cursor = 'pointer';
          
          // Add hover effect
          element.addEventListener('mouseover', function() {
            this.setAttribute('data-original-opacity', this.style.opacity || '1');
            this.style.opacity = '0.8';
          });
          
          element.addEventListener('mouseout', function() {
            this.style.opacity = this.getAttribute('data-original-opacity');
          });
          
          // Add click handler
          element.addEventListener('click', function() {
            const linkTarget = this.getAttribute('data-link');
            if (linkTarget) {
              // If it's a relative path, construct the full path
              if (linkTarget.startsWith('../')) {
                const currentPath = window.location.pathname;
                const basePath = currentPath.substring(0, currentPath.lastIndexOf('/'));
                const newPath = basePath + '/' + linkTarget.substring(3);
                window.location.href = newPath;
              } else {
                window.location.href = linkTarget;
              }
            }
          });
        });
        
        console.log('SVG interactivity initialized for', obj.getAttribute('data'));
      } catch (error) {
        console.error('Error setting up SVG interactivity:', error);
      }
    });
  });
}); 