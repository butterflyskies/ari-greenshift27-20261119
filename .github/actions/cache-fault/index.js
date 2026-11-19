const {spawnSync}=require('node:child_process');
const path=require('node:path');
const env={...process.env,ACTIONS_RESULTS_URL:'http://127.0.0.1:9/',ACTIONS_CACHE_URL:'http://127.0.0.1:9/',ACTIONS_CACHE_SERVICE_V2:'true',INPUT_PATH:'.greenshift/cache',INPUT_KEY:process.env.CACHE_KEY,HTTP_PROXY:'',HTTPS_PROXY:'',ALL_PROXY:'',http_proxy:'',https_proxy:'',all_proxy:'',NO_PROXY:'127.0.0.1',no_proxy:'127.0.0.1'};
const result=spawnSync(process.execPath,[path.resolve('stock-cache/dist/restore-only/index.js')],{env,stdio:'inherit',timeout:30000});
if(result.error){console.log('::warning::Controlled stock-cache subprocess did not complete');process.exit(1);}
process.exit(result.status===0?0:1);
