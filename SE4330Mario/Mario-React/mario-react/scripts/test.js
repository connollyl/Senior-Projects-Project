/* eslint-disable */
import jest from 'jest';

// Set BABEL_ENV and NODE_ENV
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.ORIGIN = '';
process.on('unhandledRejection', err => { throw err; });

const argv = process.argv.slice(2);
jest.run(argv);
