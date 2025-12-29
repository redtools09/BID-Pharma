// Purchase status management
document.addEventListener('DOMContentLoaded', function() {
    checkPurchaseStatus();
});

function checkPurchaseStatus() {
    const purchased = localStorage.getItem('bidPharma_purchased');
    const buttonContainer = document.getElementById('pharmacognosy-button');
    
    if (purchased === 'true') {
        buttonContainer.innerHTML = `
            <a href="content.html" class="btn btn-success">
                <i class="fas fa-file-pdf"></i> Access Your Notes
            </a>
        `;
    }
}

function markAsPurchased() {
    localStorage.setItem('bidPharma_purchased', 'true');
    checkPurchaseStatus();
}

// PDF protection for content page
function protectPDF() {
    // Disable right-click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert('Right-click is disabled to protect the content.');
    });
    
    // Disable keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Disable Ctrl+S (Save)
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            alert('Saving is disabled.');
        }
        
        // Disable Ctrl+P (Print)
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            alert('Printing is disabled.');
        }
        
        // Disable F12 (Developer Tools)
        if (e.key === 'F12') {
            e.preventDefault();
            alert('Developer tools are disabled.');
        }
    });
    
    // Disable text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });
}

// Check if on content page and apply protection
if (window.location.pathname.includes('content.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        const purchased = localStorage.getItem('bidPharma_purchased');
        
        if (purchased !== 'true') {
            // Redirect to home if not purchased
            window.location.href = 'index.html';
        } else {
            // Apply protection
            protectPDF();
            
            // Show file size warning if needed
            const fileSize = 5; // MB - update with your actual file size
            if (fileSize > 10) {
                document.getElementById('size-warning').style.display = 'block';
            }
        }
    });
}

// Check if on success page and mark as purchased
if (window.location.pathname.includes('success.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        markAsPurchased();
    });
}
