export const config = {
    RPC_URL: 'https://rpc.cheqd.net',
    REST_URL: 'https://api.cheqd.net',
    EXPLORER_URL: 'https://explorer.cheqd.io',
    STAKING_URL: 'https://cheqd.omniflix.co/stake',
    NETWORK_NAME: 'cheqd',
    NETWORK_TYPE: 'mainnet',
    CHAIN_ID: 'cheqd-mainnet-1',
    CHAIN_NAME: 'cheqd',
    COIN_DENOM: 'CHEQ',
    COIN_MINIMAL_DENOM: 'ncheq',
    COIN_DECIMALS: 9,
    PREFIX: 'cheqd',
    COIN_TYPE: 118,
    COINGECKO_ID: 'cheqd-network',
    GAS_PRICE_STEP_LOW: 25,
    GAS_PRICE_STEP_AVERAGE: 50,
    GAS_PRICE_STEP_HIGH: 100,
    FEATURES: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
};
