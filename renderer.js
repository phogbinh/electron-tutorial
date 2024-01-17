const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
  const ipcMessage = document.getElementById('ipc-message')
  ipcMessage.innerText = await window.versions.ping()
}

func()
