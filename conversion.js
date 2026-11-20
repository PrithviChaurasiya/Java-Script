let x = 5;
console.log(typeof x);
let y = "5";
console.log(typeof y);
console.log(Number(y));
let z = "55abs"
console.log(Number(z)); // NaN
z = Number(z)
console.log(typeof z);
a = null;
console.log(typeof a); // object
console.log(Number(a)); // null
b = undefined;
console.log(typeof b); // undefined
console.log(Number(b)); // NaN
c = true;
console.log(typeof c); // boolean
console.log(Number(c)); // 1
d = false;
console.log(typeof d); // boolean
console.log(Number(d)); // 0
e = "true";
console.log(typeof e); // string
console.log(Number(e)); // NaN
f = "false";
console.log(typeof f); // string
console.log(Number(f)); // NaN
g = "null";
console.log(typeof g); // string
console.log(Number(g)); // NaN
h = "undefined";
console.log(typeof h); // string
console.log(Number(h)); // NaN
i = "NaN";
console.log(typeof i); // string
console.log(Number(i)); // NaN
h = true;
console.log(typeof h); // boolean
console.log(Boolean(h)); // true
i = false;
console.log(typeof i); // boolean
console.log(Boolean(i)); // false
j = 0;
console.log(typeof j); // number
console.log(Boolean(j)); // false
k = 1;
console.log(typeof k); // number
console.log(Boolean(k)); // true
l = -1;
console.log(typeof l); // number
console.log(Boolean(l)); // true
m = "";
console.log(typeof m); // string
console.log(Boolean(m)); // false
n = " ";
console.log(typeof n); // string
console.log(Boolean(n)); // true
o = "false";
console.log(typeof o); // string
console.log(Boolean(o)); // true
p = "true";
console.log(typeof p); // string
console.log(Boolean(p)); // true    
let sum = 55
console.log(String(sum)); // "55"