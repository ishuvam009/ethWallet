const fetch = require('node-fetch');

async function fetchBalance() {
    const url = 'https://eth-mainnet.g.alchemy.com/v2/O9DZkD9hfOZ3c3RjzKAu8BVEebd5Sy_Q';

    const data = {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "eth_getBalance",
        "params": ["0xab5801a7d398351b8be11c439e05c5b3259aec9b", "latest"]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchBalance();