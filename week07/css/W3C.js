const list = document.getElementById('container').children

const result = []
for (let li of list) {
    if (li.getAttribute('data-tag').match(/css/)) {
        result.push({
            name: li.children[1].innerText,
            url: li.children[1].children[0].href,
        })
    }
}