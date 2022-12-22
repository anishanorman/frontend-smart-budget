let x =0;
export default function CheckPasswordStr(password: any) {
  var str = x;

  if (password.length > 6) {
    str++;
  }
  if (password.length > 8) {
    str++
  }
  if (/[A-Z]/.test(password)) {
    str++;
  }
  if (/[0-9]/.test(password)) {
    str++;
  }
  if (/[^A-Za-z0-9]/.test(password)) {
    str++;
  }
  return str;
}