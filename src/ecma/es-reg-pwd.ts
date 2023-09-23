#! deno run

/**
 * At least one lowercase & one uppercase character
 * At least one number
 * At least one underline or dollar sign
 */
const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$_])[$_\dA-z]+$/;

console.log(reg.test("1231576aA$"));
