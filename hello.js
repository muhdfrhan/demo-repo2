#!/usr/bin/env node
// hello.js - simple greeting
const name = process.argv.slice(2).join(' ') || 'World';
console.log(`Hello my name is, ${name}!`);