/// <reference types="node" />
import { Signer } from './ecpair';
import { Network } from './networks';
import { Transaction } from './transaction';
interface TxbSignArg<TNumber extends number | bigint = number> {
    prevOutScriptType: string;
    vin: number;
    keyPair: Signer;
    redeemScript?: Buffer;
    hashType?: number;
    witnessValue?: TNumber;
    witnessScript?: Buffer;
    controlBlock?: Buffer;
    annex?: Buffer;
}
export declare class TransactionBuilder<TNumber extends number | bigint = number> {
    network: Network;
    maximumFeeRate: number;
    static fromTransaction<TNumber extends number | bigint = number>(transaction: Transaction<TNumber>, network?: Network): TransactionBuilder<TNumber>;
    private __PREV_TX_SET;
    private __INPUTS;
    private __TX;
    private __USE_LOW_R;
    constructor(network?: Network, maximumFeeRate?: number);
    setLowR(setting?: boolean): boolean;
    setLockTime(locktime: number): void;
    setVersion(version: number): void;
    addInput(txHash: Buffer | string | Transaction<TNumber>, vout: number, sequence?: number, prevOutScript?: Buffer, value?: TNumber): number;
    addOutput(scriptPubKey: string | Buffer, value: TNumber): number;
    build(): Transaction<TNumber>;
    buildIncomplete(): Transaction<TNumber>;
    sign(signParams: number | TxbSignArg<TNumber>, keyPair?: Signer, redeemScript?: Buffer, hashType?: number, witnessValue?: TNumber, witnessScript?: Buffer, controlBlock?: Buffer, annex?: Buffer): void;
    private __addInputUnsafe;
    private __build;
    private __canModifyInputs;
    private __needsOutputs;
    private __canModifyOutputs;
    private __overMaximumFees;
}
export {};
