const result = promiseFunction()
result.then(result => {
    console.log(`Промис ${typeof result === 'string' ? '' : 'НЕ'} работает ${typeof result === 'string' ? result : ''}`)
})
