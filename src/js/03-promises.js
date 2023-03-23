import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form')
}

refs.form.addEventListener('submit', onCreatePromises)

function onCreatePromises(event) {
  event.preventDefault();
  const amount = event.target.elements.amount.value
  let delay = Number(event.target.elements.delay.value)
  const step = Number(event.target.elements.step.value)
  
  let position = 1
  for (let i = 0; i < amount; i++) {
    
    createPromise(position, delay)
    delay += step
    position += 1
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`)
      }
    }, delay)
  })
    .then((message) => Notiflix.Notify.success(message))
    .catch((error) => Notiflix.Notify.failure(error))
}
