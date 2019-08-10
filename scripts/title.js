function replaceLast(x, y, z){
  var a = x.split("");
  a[x.lastIndexOf(y)] = z;
  return a.join("");
}

original = document.querySelector('title').textContent
// newStr = original.replace('Jenkins', 'Galaxy IT')
newStr = replaceLast(original, 'Jenkins', 'Galaxy IT')
document.querySelector('title').textContent = newStr
