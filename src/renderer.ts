const root = document.getElementById('root')
if(root) root.innerHTML = 'HelloWorld!'

const hot = (module as any).hot
if (hot) hot.accept()