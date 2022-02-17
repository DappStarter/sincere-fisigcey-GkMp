require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note often common harvest deposit sun venue'; 
let testAccounts = [
"0x7b4a5ae6da1310b99b5ed58515524d79b409487b267369a9b25cd12a02c13d6a",
"0xd9d46d0991515af234f8bbf8de9e1efd81a02ce6b23ad1af36958e4aee4b4b6f",
"0xb5e4170e95995b7342fb335edef9bb76ea974bce5bc9ba1a67552777b933dba2",
"0x23b93f1f4695e1b82dafd10a6e685c0ed75a9bcfc9f1dd58a128ea2beff15468",
"0x88b204b7a436482188c643555d1de4ac3e9cec9b808bf6c6ba0ce4b5dbd8b84e",
"0x89e5b11f3c3f4432a5ffcf04d133af01ff7c6628ac38fb3b90d3d8eb6f262991",
"0x34f3ee1fd9ad4b1bc67c8980be665e54bd1d9695a67469fa330f4dfc043d8651",
"0x8d079168afda6cb6410d54f16f45fba8e07d59c8b0956c9a81ad152937a7f3de",
"0x6adf8fc62afbab98947e4f3ce4854260b1b40588e48aa446a5e4aa9d45686e74",
"0x9a120c0a55aff9047733187802d9b8fa18b4a5e70cdbe08c783f4678bff77d2f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

