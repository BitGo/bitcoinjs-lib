import { Buffer as NBuffer } from 'buffer';

export const typeforce = require('typeforce');

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

function weistrass(x: bigint): bigint {
  const x2 = (x * x) % EC_P;
  const x3 = (x2 * x) % EC_P;
  return (x3 /* + a=0 a*x */ + EC_B) % EC_P;
}

// For prime P, the Jacobi symbol is 1 iff a is a quadratic residue mod P
function jacobiSymbol(a: bigint): -1 | 0 | 1 {
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

export function isPoint(p: Buffer | number | undefined | null): boolean {
  if (!NBuffer.isBuffer(p)) return false;
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

export function isXOnlyPoint(p: Buffer | number | undefined | null): boolean {
  if (!NBuffer.isBuffer(p)) return false;
  if (p.length !== 32) return false;
  const x = BigInt(`0x${p.toString('hex')}`);
  if (x === _0n) return false;
  if (x >= EC_P) return false;
  const y2 = weistrass(x);
  return jacobiSymbol(y2) === 1;
}

const UINT31_MAX: number = Math.pow(2, 31) - 1;
export function UInt31(value: number): boolean {
  return typeforce.UInt32(value) && value <= UINT31_MAX;
}

export function BIP32Path(value: string): boolean {
  return typeforce.String(value) && !!value.match(/^(m\/)?(\d+'?\/)*\d+'?$/);
}
BIP32Path.toJSON = (): string => {
  return 'BIP32 derivation path';
};

export function Signer(obj: any): boolean {
  return (
    (typeforce.Buffer(obj.publicKey) ||
      typeof obj.getPublicKey === 'function') &&
    typeof obj.sign === 'function'
  );
}

const SATOSHI_MAX: number = 21 * 1e14;
export function Satoshi(value: number): boolean {
  return typeforce.UInt53(value) && value <= SATOSHI_MAX;
}

// external dependent types
export const ECPoint = typeforce.quacksLike('Point');

// exposed, external API
export const Network = typeforce.compile({
  messagePrefix: typeforce.oneOf(typeforce.Buffer, typeforce.String),
  bip32: {
    public: typeforce.UInt32,
    private: typeforce.UInt32,
  },
  pubKeyHash: typeforce.UInt8,
  scriptHash: typeforce.UInt8,
  wif: typeforce.UInt8,
});

export interface XOnlyPointAddTweakResult {
  parity: 1 | 0;
  xOnlyPubkey: Uint8Array;
}

export interface Tapleaf {
  output: Buffer;
  version?: number;
}

export type Taptree = Array<[Tapleaf, Tapleaf] | Tapleaf>;

export interface TinySecp256k1Interface {
  xOnlyPointAddTweak(
    p: Uint8Array,
    tweak: Uint8Array,
  ): XOnlyPointAddTweakResult | null;
  privateAdd(d: Uint8Array, tweak: Uint8Array): Uint8Array | null;
  privateNegate(d: Uint8Array): Uint8Array;
}

export const Buffer256bit = typeforce.BufferN(32);
export const Hash160bit = typeforce.BufferN(20);
export const Hash256bit = typeforce.BufferN(32);
export const Number = typeforce.Number; // tslint:disable-line variable-name
export const Array = typeforce.Array;
export const Boolean = typeforce.Boolean; // tslint:disable-line variable-name
export const String = typeforce.String; // tslint:disable-line variable-name
export const Buffer = typeforce.Buffer;
export const Hex = typeforce.Hex;
export const maybe = typeforce.maybe;
export const tuple = typeforce.tuple;
export const UInt8 = typeforce.UInt8;
export const UInt32 = typeforce.UInt32;
export const Function = typeforce.Function;
export const BufferN = typeforce.BufferN;
export const Null = typeforce.Null;
export const oneOf = typeforce.oneOf;
