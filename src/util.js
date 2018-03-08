const EdDSA = require('elliptic').eddsa,
    BN = require('bn.js'),
    crypto = require('crypto');

const RCD_TYPE_1 = Buffer.from('01', 'hex'),
    MSB = new BN('8000000000000000', 16);

const ec = new EdDSA('ed25519');

function sha256(data) {
    const hash = crypto.createHash('sha256');
    hash.update(data);
    return hash.digest();
}

function sha256d(data) {
    return sha256(sha256(data));
}

function sha512(data) {
    const hash = crypto.createHash('sha512');
    hash.update(data);
    return hash.digest();
}

function toHex(arg) {
    return Buffer.isBuffer(arg) ? arg.toString('hex') : arg;
}

function privateKeyToPublicKey(privateKey, enc) {
    const key = ec.keyFromSecret(Buffer.from(privateKey, enc));
    return Buffer.from(key.getPublic());
}

function keyToRCD1(key) {
    return sha256d(Buffer.concat([RCD_TYPE_1, key]));
}

// Reference implementation:
// https://github.com/FactomProject/factomd/blob/master/common/primitives/varint.go#L78-L105
function encodeVarInt(val) {
    const bytes = [];

    if (val === 0) {
        bytes.push(0);
    }

    const h = new BN(val);
    let start = false;

    if (!h.and(MSB).isZero()) {
        bytes.push(0x81);
        start = true;
    }

    for (let i = 0; i < 9; ++i) {
        let b = h.shrn(56).maskn(8).toNumber();

        if (b || start) {
            start = true;
            if (i !== 8) {
                b = b | 0x80;
            } else {
                b = b & 0x7F;
            }
            bytes.push(b);
        }
        h.ishln(7);
    }

    return Buffer.from(bytes);
}

module.exports = {
    sha256,
    sha512,
    sha256d,
    toHex,
    encodeVarInt,
    privateKeyToPublicKey,
    keyToRCD1
};