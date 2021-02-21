import * as CryptoJS from 'crypto-js';

class Block {
  static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
  static validateBlockStructure = (block: Block): boolean =>
    typeof block.index === 'number' &&
    typeof block.hash === 'string' &&
    typeof block.previousHash === 'string' &&
    typeof block.timestamp === 'number' &&
    typeof block.data === 'string';

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, 'abcdefg', '', 'Zero of all', 0);

let blockchain: Block[] = [genesisBlock];
const getBlockchain = (): Block[] => blockchain;
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];
const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimestamp();
  const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
  const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
  addBlock(newBlock);

  return newBlock;
};
const getBlockHash = (block: Block): string =>
  Block.calculateBlockHash(block.index, block.previousHash, block.timestamp, block.data);

const checkIsBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateBlockStructure(candidateBlock)) return false;
  if (previousBlock.index + 1 !== candidateBlock.index) return false;
  if (previousBlock.hash !== candidateBlock.previousHash) return false;
  if (getBlockHash(candidateBlock) !== candidateBlock.hash) return false;
  return true;
};

const addBlock = (candidateBlock: Block): void => {
  if (!checkIsBlockValid(candidateBlock, getLatestBlock())) return;

  blockchain.push(candidateBlock);
};

createNewBlock('second block it is!');
createNewBlock('third block it is!');
createNewBlock('fourth block it is!');

console.log(blockchain);
