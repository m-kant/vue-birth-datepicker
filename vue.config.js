const vueTarget = getVueTarget();
console.log("target is", vueTarget); // eslint-disable-line

module.exports = {
  outputDir: vueTarget === 'lib' ? 'dist' : 'demo',
  baseUrl: '',
  configureWebpack: {
  }
}


// HELPERS ===
function getVueTarget(){
  const reg = /--target \w+/;
  const match = reg.exec(process.env.npm_lifecycle_script);
  if(!match) return;
  return match[0].split(/\s+/)[1];
}
