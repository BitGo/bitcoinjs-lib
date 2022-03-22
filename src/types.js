'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.oneOf = exports.Null = exports.BufferN = exports.Function = exports.UInt32 = exports.UInt8 = exports.tuple = exports.maybe = exports.Hex = exports.Buffer = exports.String = exports.Boolean = exports.Array = exports.Number = exports.Hash256bit = exports.Hash160bit = exports.Buffer256bit = exports.Network = exports.ECPoint = exports.Satoshi = exports.Signer = exports.BIP32Path = exports.UInt31 = exports.isXOnlyPoint = exports.isPoint = exports.typeforce = void 0;
const buffer_1 = require('buffer');
exports.typeforce = require('typeforce');
const EC_P = BigInt(
  `0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f`,
);
const EC_B = BigInt(7);
// Idea from noble-secp256k1, to be nice to bad JS parsers
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const _3n = BigInt(3);
const _4n = BigInt(4);
const _5n = BigInt(5);
const _8n = BigInt(8);
function weistrass(x) {
  const x2 = (x * x) % EC_P;
  const x3 = (x2 * x) % EC_P;
  return (x3 /* + a=0 a*x */ + EC_B) % EC_P;
}
// For prime P, the Jacobi symbol is 1 iff a is a quadratic residue mod P
function jacobiSymbol(a) {
  let p = EC_P;
  let sign = 1;
  while (a > _1n) {
    if (_0n === a % _2n) {
      if (_3n === p % _8n || _5n === p % _8n) sign = -sign;
      a >>= _1n;
    } else {
      if (_3n === p % _4n && _3n === a % _4n) sign = -sign;
      [a, p] = [p % a, a];
    }
  }
  return a === _0n ? 0 : sign > 0 ? 1 : -1;
}
function isPoint(p) {
  if (!buffer_1.Buffer.isBuffer(p)) return false;
  if (p.length < 33) return false;
  const t = p[0];
  if (p.length === 33) {
    return (t === 0x02 || t === 0x03) && isXOnlyPoint(p.slice(1));
  }
  if (t !== 0x04 || p.length !== 65) return false;
  const x = BigInt(`0x${p.slice(1, 33).toString('hex')}`);
  if (x === _0n) return false;
  if (x >= EC_P) return false;
  const y = BigInt(`0x${p.slice(33).toString('hex')}`);
  if (y === _0n) return false;
  if (y >= EC_P) return false;
  const left = (y * y) % EC_P;
  const right = weistrass(x);
  return (left - right) % EC_P === _0n;
}
exports.isPoint = isPoint;
function isXOnlyPoint(p) {
  if (!buffer_1.Buffer.isBuffer(p)) return false;
  if (p.length !== 32) return false;
  const x = BigInt(`0x${p.toString('hex')}`);
  if (x === _0n) return false;
  if (x >= EC_P) return false;
  const y2 = weistrass(x);
  return jacobiSymbol(y2) === 1;
}
exports.isXOnlyPoint = isXOnlyPoint;
const UINT31_MAX = Math.pow(2, 31) - 1;
function UInt31(value) {
  return exports.typeforce.UInt32(value) && value <= UINT31_MAX;
}
exports.UInt31 = UInt31;
function BIP32Path(value) {
  return (
    exports.typeforce.String(value) && !!value.match(/^(m\/)?(\d+'?\/)*\d+'?$/)
  );
}
exports.BIP32Path = BIP32Path;
BIP32Path.toJSON = () => {
  return 'BIP32 derivation path';
};
function Signer(obj) {
  return (
    (exports.typeforce.Buffer(obj.publicKey) ||
      typeof obj.getPublicKey === 'function') &&
    typeof obj.sign === 'function'
  );
}
exports.Signer = Signer;
const SATOSHI_MAX = 21 * 1e14;
function Satoshi(value) {
  return exports.typeforce.UInt53(value) && value <= SATOSHI_MAX;
}
exports.Satoshi = Satoshi;
// external dependent types
exports.ECPoint = exports.typeforce.quacksLike('Point');
// exposed, external API
exports.Network = exports.typeforce.compile({
  messagePrefix: exports.typeforce.oneOf(
    exports.typeforce.Buffer,
    exports.typeforce.String,
  ),
  bip32: {
    public: exports.typeforce.UInt32,
    private: exports.typeforce.UInt32,
  },
  pubKeyHash: exports.typeforce.UInt8,
  scriptHash: exports.typeforce.UInt8,
  wif: exports.typeforce.UInt8,
});
exports.Buffer256bit = exports.typeforce.BufferN(32);
exports.Hash160bit = exports.typeforce.BufferN(20);
exports.Hash256bit = exports.typeforce.BufferN(32);
exports.Number = exports.typeforce.Number; // tslint:disable-line variable-name
exports.Array = exports.typeforce.Array;
exports.Boolean = exports.typeforce.Boolean; // tslint:disable-line variable-name
exports.String = exports.typeforce.String; // tslint:disable-line variable-name
exports.Buffer = exports.typeforce.Buffer;
exports.Hex = exports.typeforce.Hex;
exports.maybe = exports.typeforce.maybe;
exports.tuple = exports.typeforce.tuple;
exports.UInt8 = exports.typeforce.UInt8;
exports.UInt32 = exports.typeforce.UInt32;
exports.Function = exports.typeforce.Function;
exports.BufferN = exports.typeforce.BufferN;
exports.Null = exports.typeforce.Null;
exports.oneOf = exports.typeforce.oneOf;
