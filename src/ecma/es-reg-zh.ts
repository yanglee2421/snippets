#! deno run

const chinese = /\u4e00-\u9fa5/;
const regHan = /\p{sc=Han}/u;
const regGreek = /\p{Script=Greek}/u;
const regUI = /\p{Unified_Ideograph}/u;
