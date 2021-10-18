require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remember push hockey kitchen surge genuine'; 
let testAccounts = [
"0xfdb47d7d8033c8c57a5dfd814f5bb79bac24a8fc6adee9e16b08cc0eeacec63b",
"0xd703d43d38ea1541d0604f86e5fb6b2659cbbbec786a63d4e45283774541e97a",
"0x3b867c1d516cb0005c83b2fa4acf058c1fa0490779690f16638d7e8f4699af0f",
"0xeeeb39307108401b29f81acdb1f37418197114e655839426796e7b657e8208f3",
"0x04f1365c9cef46ee6e236a7822b62c28f2133ea6c1d9246053c3836626d395d1",
"0x6535ff77a7a483f81c80fdf3a4adc085bc7e15898b1679ae5346f868b612c194",
"0x95812e1eee6d090ae30b55af0faf7b21519e4e01dc876ff5858c158a1b7efc94",
"0xc5cffae1bf4de5ba35cf2ec4b9be5d828c8d458f48ba971d247fdc98091c1858",
"0xe07902861120c1346079a42c3ba02b124314483ca61d40fdee865d14297cbee2",
"0xb78264cdc009f70ed7ff9860c6886b22e751ee5ecd1c4c9d08590129ef3b34f0"
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

