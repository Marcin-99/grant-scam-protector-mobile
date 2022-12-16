export const sendAudio = (audio: any) => {
  return fetch('http://0.0.0.0:8000/api/v0/open-ai-integration/whisper', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React Hooks POST Request Example' })
  })
}


export const getAlerts = () => {
  return fetch('http://192.168.0.122:8000/api/v0/open-ai-integration/alerts')
    .then(response => response.json())
}
