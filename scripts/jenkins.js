function reverseString(str) {
    var splitString = str.split("")
    var reverseArray = splitString.reverse()
    var joinArray = reverseArray.join("")
    return joinArray
}

// change title
original = document.querySelector('title').textContent
newStr = reverseString(reverseString(original).replace(reverseString('Jenkins'), reverseString('Galaxy IT')))
document.querySelector('title').textContent = newStr

// add markdown support
var markdown = document.getElementById('markdown')
if (markdown)
    markdown.innerHtml = marked(markdown.textContent)
