function reverseString(str) {
    var splitString = str.split("")
    var reverseArray = splitString.reverse()
    var joinArray = reverseArray.join("")
    return joinArray
}

original = document.querySelector('title').textContent
newStr = reverseString(reverseString(original).replace(reverseString('Jenkins'), reverseString('Galaxy IT')))
document.querySelector('title').textContent = newStr
