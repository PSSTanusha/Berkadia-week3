function func() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('async-await');
      }, 2000);
    });
  }
  
  async function msg() {
    const msg = await func();
    console.log('Message:', msg);
  }
  
  msg();




output:
C:\Users\tanus\.vscode\extensions>node async-await.js
Message: async-await
