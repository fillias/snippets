
document.addEventListener('DOMContentLoaded', (event) => {
    const select = document.querySelector('#replacement')
    select.addEventListener('change',handleReplacementChanged)
    setReplaceStr(select.value)
})

const test = () => {
    const elmContent = document.querySelector('#contentPlain')
    const content = elmContent.value
    const replaced = replace(content,{
        replacement: document.querySelector('#replacement').value || document.querySelector('#replacementstr').value,
        multispace: document.querySelector('#multispace').checked,
        leadspace: document.querySelector('#leadspace').checked,
        trailspace: document.querySelector('#trailspace').checked,
        dash: document.querySelector('#dash').checked,
        ellipsis: document.querySelector('#ellipsis').checked,
        quotes: document.querySelector('#quotes').checked,
        onechars: document.querySelector('#onechars').checked,
        twochars: document.querySelector('#twochars').checked,
        digits: document.querySelector('#digits').checked,
        prgdigit: document.querySelector('#prgdigit').checked,
        digitperc: document.querySelector('#digitperc').checked,
        digitdegree: document.querySelector('#digitdegree').checked,
    })
    elmContent.value = replaced
}

const twochars = ["do", "ke", "ku", "na", "ob", "od", "po", "se", "ve", "za", "ze"]

const replace = (text,options) => {
    var newText = text
    const s = options.replacement
    if (options.multispace) newText = newText.replace(/[ \t]+/g,' ')
    if (options.leadspace) newText = newText.replace(/(^|\n)[ \t]+/g,'$1')
    if (options.trailspace) newText = newText.replace(/[ \t]+($|\n)/g,'$1')
    if (options.dash) newText = newText.replace(/ -+ /g,' – ')
    if (options.ellipsis) newText = newText.replace(/\.{2,}/g,'…')
    if (options.quotes) {
        newText = newText.replace(/“/g,'„')
        newText = newText.replace(/‘/g,'‚')
        newText = newText.replace(/”/g,'“')
        newText = newText.replace(/’/g,'‘')
    }
    if (options.onechars) newText = newText.replace(/((^|[^\p{L}°])\p{L}) (\p{L}+)/gu,'$1'+s+'$3')
    if (options.twochars) newText = newText.replace(/(\P{L}(do|ke|ku|na|ob|od|po|se|ve|za|ze)) (\p{L}+)/igu,'$1'+s+'$3')
    if (options.digits) newText = newText.replace(/(\d) (\d)/g,'$1'+s+'$2')
    if (options.prgdigit) newText = newText.replace(/§ (\d)/g,'§'+s+'$1')
    if (options.digitperc) newText = newText.replace(/(\d) %/g,'$1'+s+'%')
    if (options.digitdegree) newText = newText.replace(/(\d) °/g,'$1'+s+'°')
    return newText
}

// handlers

const handleReplacementChanged = (e) => {
    const val = e.target.value
    setReplaceStr(val)
}

const setReplaceStr = (str) => {
    const input = document.querySelector('#replacementstr')
    if (str==='') {
        input.value = str
        input.disabled = false
        input.focus()
    }
    else {
        input.disabled = true
        input.value = 'lorem'+str+'ipsum'
    }
}
